import SubMenu from "../submenu/SubMenu"

export default function NavBar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <img src="src/assets/img/logotype.png" className="w-12 mr-2" />
                        <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Shopflix</a>
                    </div>
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                        <input className=" w-80 h-12 border rounded-md rounded-r-none text-center focus:outline-none" type="text" placeholder="Buscar" />
                        <button className="bg-gray-800 text-white w-32 h-12 rounded-md rounded-l-none hover:bg-indigo-500">Buscar</button>
                    </div>
                <div className="md:flex items-center">
                    <div className="flex flex-col md:flex-row md:mx-6 md:mr-8">    
                        <SubMenu />
                        <a className="text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-1" href="#">Contacto</a>
                    </div>

                    <div className="flex justify-center md:block">
                        <div className=" inline-flex px-2">
                            <a className="relative text-gray-700 hover:text-gray-600" href="#">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                            </a>
                        </div>
                        <div className=" inline-flex px-2">
                            <a className="relative text-gray-700 hover:text-gray-600" href="#"></a>
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}