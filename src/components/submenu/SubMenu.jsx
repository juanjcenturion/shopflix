import { useState } from "react";
import Categories from "../categories/Categories";

export default function SubMenu() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
        
    };

    return (
        <div className="relative">
            <button onClick={toggleSubMenu} className="text-sm align-middle text-gray-700 font-medium hover:text-indigo-500 md:mx-4 ">Categorias</button>
            { showSubMenu && (
                <div className="absolute mt-3 rounded-md overflow-hidden shadow-xl">
                    <div className="">
                        <Categories/>
                    </div>
                </div>
            )}
            
        </div>
    );
}