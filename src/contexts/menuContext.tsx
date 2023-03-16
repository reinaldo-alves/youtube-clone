import { createContext, useState } from "react";

export const MenuContext = createContext({} as any);

export const MenuStore = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <MenuContext.Provider value={{openMenu, setOpenMenu, dropdown, setDropdown}} >
            { children }
        </MenuContext.Provider>
    )
}