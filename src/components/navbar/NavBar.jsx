import SubMenu from "../submenu/SubMenu";
import Search from "../search/Search";
import { useCart } from "../../context/cartContext";
import logotype from "../../assets/img/logotype.png"



export default function NavBar() {
    const { cartCount } = useCart();

    return (
        <nav className="bg-white shadow fixed top-0 w-full z-50">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <div className="flex justify-around items-center">
                        <img src={logotype} className="w-12 mr-2" />
                        <a className="flex text-gray-800 text-xl font-bold md:text-2xluppercase" href="/">
                            <p className="text-indigo-500 transition ease-in-out duration-300 hover:text-yellow-500" >Shop</p>
                            <p className="text-gray-800" >flix</p>
                        </a>
                    </div>
                </div>
                <Search/>
                <div className="md:flex items-center">
                    <div className="flex flex-col md:flex-row md:mx-6 md:mr-8">    
                        <SubMenu />
                        <a className="text-sm text-gray-700 font-medium transition duration-300 ease-in-out hover:text-indigo-500 md:mx-4 md:my-1" href="#">Contacto</a>
                    </div>

                    <div className="flex justify-center md:block">
                        <div className=" inline-flex px-2">
                            <a className="relative text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500" href="/cart">
                                <svg className="h-6 w-6 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="absolute -top-4 -left-5 rounded-full bg-indigo-500 text-white p-1 px-2 text-xs">{cartCount}</span>
                            </a>
                        </div>
                        <div className=" inline-flex px-2">
                            <a className="relative text-gray-700 transition duration-300 ease-in-out hover:text-indigo-500" href="/favorites">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}