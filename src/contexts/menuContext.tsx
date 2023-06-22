import { createContext, useState } from "react";

export const MenuContext = createContext({} as any);

export const MenuStore = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropVideo, setDropVideo] = useState(false);
    const [dropSearch, setDropSearch] = useState(false);
    
    return (
        <MenuContext.Provider value={{openMenu, setOpenMenu, dropdown, setDropdown, dropVideo, setDropVideo, showMenu, setShowMenu, dropSearch, setDropSearch}} >
            { children }
        </MenuContext.Provider>
    )
}