import {createContext, useEffect, useState} from 'react';
import {useColorMode} from "@chakra-ui/react";

const ThemeContext = createContext('dark');

const ThemeProvider = ({ children }) => {
    const { colorMode } = useColorMode();

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(colorMode === 'dark');
    }, [colorMode]);

    const toggleTheme = () => {
        setIsDark(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
