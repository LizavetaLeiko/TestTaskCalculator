import { CalculatorFC } from "@components/calculator/CalculatorFC";
import { CalculatorCC } from "@components/calculator/CalculatorCC";
import { Header } from "@components/header/Header";
import { SettingsFC } from "@pages/settings/SettingsFC";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Context } from "@utils/Context";
import { themes } from "@constants/themeContextValues";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [historyIsOpen, setHistotyIsOpen] = useState(true);

  const toggleTheme = (event) => {
    setTheme(event.target.value === "light" ? themes.light : themes.dark);
  };

  const toggleHistory = () => {
    setHistotyIsOpen(historyIsOpen === true ? false : true);
  };

  return (
    <Context.Provider
      value={{ theme: theme, toggleTheme, historyIsOpen, toggleHistory }}
    >
      <ThemeProvider theme={() => theme} historyIsOpen={() => historyIsOpen}>
        <ErrorBoundary>
          <Header />
          <Routes>
            <Route path={"/"} element={<CalculatorCC />} />
            <Route path={"/fc"} element={<CalculatorFC />} />
            <Route path={"/settings"} element={<SettingsFC />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
