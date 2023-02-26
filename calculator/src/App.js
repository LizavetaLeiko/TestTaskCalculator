import { CalculatorFC } from './components/calculator/CalculatorFC';
import { CalculatorCC } from './components/calculator/CalculatorCC';
import { Header } from './components/header/Header';
import { SettingsFC } from './pages/settings/SettingsFC';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { ThemeContext, themes } from './utils/themeContext';
import { ThemeProvider } from 'styled-components'


function App() {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = ( event ) => {
    setTheme(event.target.value === "light" ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <ThemeProvider theme={() => theme}>
      <Header/>
      <Routes>
            <Route
              path={'/'}
              element={<CalculatorCC/>}
            />
            <Route
              path={'/fc'}
              element={<CalculatorFC/>}
            />
            <Route
              path={'/settings'}
              element={<SettingsFC/>}
            />
          </Routes>
          </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
