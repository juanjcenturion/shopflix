import { useState, useEffect } from 'react';
import { GetAllCategories } from '../../api/api';

export default function SubMenuItems() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await GetAllCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };

        getCategories();
    }, []);

    return (
        <div className="py-4 px-3">
            <div className="flex justify-evenly">
                <ul className=" pr-4">
                    {categories.slice(0, Math.ceil(categories.length / 2)).map(category => (
                        <li className='py-2 font-medium text-left text-nowrap transition duration-300 ease-in-out hover:bg-indigo-400 cursor-pointer hover:text-white pl-2 pr-2 rounded-md' key={category.id}>{category.name}</li>
                    ))}
                </ul>
                <ul className=''>
                    {categories.slice(Math.ceil(categories.length / 2)).map(category => (
                        <li className=' text-right font-medium py-2 mr-4 ml-2 pl-2 pr-2 text-nowrap transition duration-300 cursor-pointer ease-in-out hover:bg-indigo-400 hover:text-white rounded-md' key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center align-middle ">
                <ul className=" py-4 transition duration-300 ease-in-out hover:bg-indigo-400 hover:text-white pr-40 pl-40 cursor-pointer rounded-md">
                    <li className="text-center font-medium">
                        Todas las categorias
                    </li>
                </ul>
            </div>
        </div>
    );
}
