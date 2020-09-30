import React, { useState, createContext } from 'react';
import themes from '../constants/Theme';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const isLightOrDark = theme.text === 'light' ? themes.dark : themes.light;
    setTheme(isLightOrDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
