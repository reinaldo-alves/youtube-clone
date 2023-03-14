import { createContext, useState } from "react";

export const OpenMenuContext = createContext({} as any);

export const MenuStore = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true);
    
    return (
        <OpenMenuContext.Provider value={{openMenu, setOpenMenu}} >
            { children }
        </OpenMenuContext.Provider>
    )
}