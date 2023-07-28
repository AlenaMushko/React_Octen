import  { createContext, useState } from 'react';

const ThemeContext = createContext('dark');

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

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
