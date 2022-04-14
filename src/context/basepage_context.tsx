import { createContext, useCallback, useState } from "react";

interface IBasePageState {
    drawerOpen: boolean;
    setDrawerOpen: (ids: boolean) => void;
}

const initialState : IBasePageState = ({
    drawerOpen: false,
    setDrawerOpen: () => null,
});

interface IProviderProps {
    children: React.ReactNode;
} 

export const basepageContext = createContext<IBasePageState>(initialState);

const BasePageProvider = ({children}: IProviderProps) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const setDrawer = useCallback((status: boolean) => {
        setDrawerOpen(status);
    }, [setDrawerOpen, drawerOpen]);

    return (
        // this is the provider providing state
        <basepageContext.Provider value={{
            drawerOpen: drawerOpen, 
            setDrawerOpen: setDrawer , 
        }}>
            {children}
        </basepageContext.Provider>
    );
};

export default BasePageProvider;