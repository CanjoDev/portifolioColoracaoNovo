import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { fullLightTheme, fullDarkTheme } from '../styles/themes';



const ThemeToggleContext = createContext(() => {});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLigthMode, setisLigthMode] = useState(true);
  const toggleTheme = () => setisLigthMode((prev) => !prev);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={isLigthMode ? fullLightTheme : fullDarkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
