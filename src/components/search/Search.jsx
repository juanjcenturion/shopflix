import { useState } from "react";
import { SearchResults } from "../../api/api";

function Search() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [charge, setCharge] = useState(false)

    const manageSearch = async () => {
        if (!query) return;
        setCharge(true);

        try {
            const results = await SearchResults(query);
            setSearchResults(results);
        } catch (error) {
            // Manejar el error si es necesario
        } finally {
            setCharge(false);
        }
    };
    const clearSearch = () => {
        setQuery('');
        setSearchResults([]);
    };

    return (
        <div className="relative text-center ml-44">
            <div className="flex justify-center items-center">
                <button onClick={clearSearch} className="bg-indigo-400 text-white rounded-md rounded-r-none w-12 h-12 hover:bg-yellow-400 hover:text-black ease-in-out transition duration-500">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                <input
                    value={query}
                    className="w-80 h-12 border text-center focus:outline-none"
                    type="text"
                    placeholder="Buscar"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={manageSearch} className="bg-yellow-400 text-black font-bold w-32 h-12 rounded-md rounded-l-none transition duration-500 ease-in-out hover:bg-indigo-500 hover:text-white">
                    Buscar
                </button>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 mt-3 pt-1 bg-white rounded-md  shadow-lg overflow-auto' style={{ maxHeight: '700px', width:'100%' }} hidden={searchResults.length === 0}>
                {charge ? (
                    <div className="flex justify-center items-center h-full">
                        <p>Cargando...</p>
                    </div>
                ) : (
                    searchResults.map(result => (
                        <div key={result.id} className="flex cursor-pointer justify-streched items-center p-5 my-3 mr-2 bg-gradient-to-r from-white to-gray-100 hover:shadow-md rounded-md transition duration-500">
                            <img className="max-w-16 " src={result.thumbnail} alt={result.title} />
                            <h3 className="text-s font-bold ml-6">{result.title}</h3>
                        </div>
                        
                    ))
                )}
            </div>
        </div>
    );
}
export default Search;