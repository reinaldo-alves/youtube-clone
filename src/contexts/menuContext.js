import { createContext, useState } from "react";

export const OpenMenuContext = createContext();

export const MenuStore = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(true);
    
    return (
        <OpenMenuContext.Provider value={{openMenu, setOpenMenu}} >
            { children }
        </OpenMenuContext.Provider>
    )
}