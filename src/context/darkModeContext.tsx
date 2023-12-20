import React, { createContext, useState, useContext } from "react";


// ----- context -----
type IDarkModeContext = boolean;
type IDarkModeToggleContext = () => void;

export const DarkModeContext = createContext<IDarkModeContext | undefined>(undefined);
export const DarkModeToggleContext = createContext<IDarkModeToggleContext | undefined>(undefined);

// ----- context provider (wrapper) -----
interface IProps {
    children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<IProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((darkMode) => !darkMode);
    };

    return (
        <DarkModeContext.Provider value={isDarkMode}>
            <DarkModeToggleContext.Provider value={toggleDarkMode}>
                {children}
            </DarkModeToggleContext.Provider>
        </DarkModeContext.Provider>
    );
};

// ----- custom hook -----
export const useDarkModeContext = () => {
    const darkModeContext = useContext(DarkModeContext);

    if (darkModeContext === undefined) {
        throw new Error("useDarkModeContext must be used with the DarkModeContext");
    }

    return darkModeContext;
};

export const useDarkModeToggleContext = () => {
    const darkModeToggleContext = useContext(DarkModeToggleContext);

    if (darkModeToggleContext === undefined) {
        throw new Error("useDarkModeToggleContext must be used with the DarkModeToggleContext");
    }

    return darkModeToggleContext;
};
