import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import Navigators from './components/navigators';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/myNavbar';

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar></MyNavbar>
        <Navigators />
      </header>
    </div>
  );
}

export default App;

