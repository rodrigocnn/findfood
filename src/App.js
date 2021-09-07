import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import theme from './theme';
import Home from './components/Home';
import GlobalStyle from './globalStyles';

export const AppContext = createContext();

function App() {
  const [restaurants, setEstaurants] = useState([]);
  return (
    <AppContext.Provider value={{ restaurants, setEstaurants }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Reset />
        <Home />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
