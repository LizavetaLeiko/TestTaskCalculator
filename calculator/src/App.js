import { CalculatorFC } from './components/calculator/CalculatorFC';
import { CalculatorCC } from './components/calculator/CalculatorCC';
import { Header } from './components/header/Header';
import { SettingsFC } from './pages/settings/SettingsFC';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
