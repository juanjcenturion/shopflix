import { useState, useEffect } from 'react';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error al obtener las categorías:', error);
            });
    }, []);

    return (
        <div className="py-4 px-3">
            <div className="flex justify-evenly">
                <ul className=" pr-4">
                    {categories.slice(0, Math.ceil(categories.length / 2)).map(category => (
                        <li className='py-2 text-left text-nowrap hover:bg-indigo-400 hover:text-white pl-2 rounded-md' key={category.id}>{category.name}</li>
                    ))}
                </ul>
                <ul className=''>
                    {categories.slice(Math.ceil(categories.length / 2)).map(category => (
                        <li className=' text-right py-2 mr-4 ml-2 pr-2 text-nowrap hover:bg-indigo-400 hover:text-white rounded-md' key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center align-middle ">
                <ul className=" py-4 hover:bg-indigo-400 hover:text-white pr-40 pl-40 rounded-md">
                    <li className="text-center">
                        Todas las categorias
                    </li>
                </ul>
            </div>
        </div>
    );
}
