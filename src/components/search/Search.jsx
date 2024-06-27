import { useState } from "react";
import { SearchResults } from "../../api/api";
import './search.css'
import { useNavigate } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [charge, setCharge] = useState(false);
    const navigate = useNavigate()

    const manageSearch = async () => {
        if (!query) return;
        setCharge(true);

        try {
            setTimeout(async () => {
                const results = await SearchResults(query);
                setSearchResults(results);
                setCharge(false);
            }, 500); 
        } catch (error) {
            setCharge(false);
        }
    };

    const EnterSearch = (event) => {
        if (event.key === 'Enter') {
            manageSearch();
        } else if (event.key === 'Escape') {
            clearSearch();
        }
    }
    const clearSearch = () => {
        setQuery('');
        setSearchResults([]);
    };

    const manageViewMore = () => {
        navigate(`/products?search=${encodeURIComponent(query)}`);
        clearSearch()
    }

    console.log(searchResults)
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
                    onKeyDown={EnterSearch}
                />
                <button onClick={manageSearch} className="bg-yellow-400 text-black font-bold w-32 h-12 rounded-md rounded-l-none transition duration-500 ease-in-out hover:bg-indigo-500 hover:text-white">
                    Buscar
                </button>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 mt-3 pt-1 bg-white rounded-md shadow-lg overflow-auto' style={{ maxHeight: '700px', width: '100%' }} hidden={searchResults.length === 0 && !charge}>
                {charge ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="loader mb-12 mt-12"></div>
                    </div>
                ) : (
                    <>
                        {searchResults.slice(0, 6).map(result => (
                            <a key={result.id} href={`/details_product/${result.id}`} className="flex cursor-pointer justify-stretched items-center p-5 my-3 ml-2 mr-2 bg-gradient-to-r from-white to-gray-50 hover:shadow-md rounded-md transition duration-500">
                                <img className="max-w-16" src={result.thumbnail} alt={result.title} />
                                <h3 className="text-s ml-6">{result.title}</h3>
                            </a>
                        ))}
                        {searchResults.length > 6 && (
                            
                            <div className="text-center text-indigo-500 ml-2 mr-2 rounded mb-2 hover:bg-indigo-400 hover:text-white transition duration-500 p-5">
                                <button onClick={manageViewMore} className="font-bold">
                                    Ver más productos similares
                                </button>
                                
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Search;
