import './App.css';
import { CalculatorFC } from './components/calculator/CalculatorFC';
import { Header } from './components/header/Header';
import { KeypadFC } from './components/keypad/KeypadFC';

function App() {
  return (
    <div className="App">
      <Header/>
      <CalculatorFC/>
    </div>
  );
}

export default App;
