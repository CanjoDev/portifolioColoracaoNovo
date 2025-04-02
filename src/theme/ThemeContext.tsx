
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/darkTheme';
import { lightTheme } from '../styles/lightTheme';
import { GlobalStyle } from '../styles/global';

const ThemeToggleContext = createContext(() => {});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLigthMode, setisLigthMode] = useState(true);
  const toggleTheme = () => setisLigthMode((prev) => !prev);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={isLigthMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
