import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import Navigators from './components/navigators';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navigators />
      </header>
    </div>
  );
}

export default App;

