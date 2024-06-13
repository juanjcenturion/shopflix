import { useState, useEffect } from 'react';

function CategoryForU() {
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        const fixedCategoryIds = ['MLA5725', 'MLA1403', 'MLA1499', 'MLA1055'];
        Promise.all(
            fixedCategoryIds.map(id => 
                fetch(`https://api.mercadolibre.com/categories/${id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
            )
        )
        .then(fullCategories => {
            setCategories(fullCategories);
        })
        .catch(error => {
            console.error('Error al obtener las categorías:', error);
        });
    }, []);

    return (
        <div className="container grid grid-cols-1 pt-2 mx-auto">
            <div className="grid grid-cols-1 from-white to-yellow-100 bg-gradient-to-b pb-8 border-t rounded-lg shadow-md">
                <div className="grid grid-cols-1">
                    <h4 className='pb-5 pt-4 mx-4 text-xl uppercase font-bold'>Categorías para vos</h4>
                </div>
                <div className="grid grid-cols-4 ml-4 mr-4 gap-12">
                    {categories.map(category => (
                        <div key={category.id} className="bg-indigo-400 shadow-md rounded-lg px-4 uppercase text-center font-bold text-xl cursor-pointer transition-transform ease-linear duration-500">
                            <h3 className="align-top text-white pt-6 text-nowrap  pb-8">{category.name}</h3>
                            <div className=" flex mb-4 justify-center items-center bg-gradient-to-b from-yellow-400 to-indigo-400 hover:from-indigo-500 transition-all hover:scale-105 duration-500 rounded-full">
                            <img 
                                    className="w-64 h-64 mb-12" 
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 60%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent)'
                                    }} 
                                    src={category.picture} 
                                    alt={category.name} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryForU;
