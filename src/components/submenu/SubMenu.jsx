import { useState } from "react";
import SubMenuItems from "../submenuitems/SubMenuItems";

export default function SubMenu() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
        
    };

    return (
        <div className="relative">
            <button onClick={toggleSubMenu} className="text-sm pb-1 pt-1 align-middle text-gray-700 font-medium hover:text-indigo-500 md:mx-4 ">Categorias</button>
            { showSubMenu && (
                <div className="absolute mt-4 z-10 from-white to-yellow-100 bg-gradient-to-b rounded-md overflow-hidden shadow-xl">
                    <div className="">
                        <SubMenuItems/>
                    </div>
                </div>
            )}
            
        </div>
    );
}