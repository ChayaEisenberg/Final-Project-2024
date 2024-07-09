import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import Users from './components/users';
import HomePage from './components/homePage';
import Navigators from './components/navigators';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Exe1 from './comps/exe1';

function App() {
  return (
    <>

      {/* <Navbarr></Navbarr> */}
      <div className="App">
      <header >
            <BrowserRouter>
            <Routes> 
            </Routes>
            <Navigators></Navigators>
            </BrowserRouter>
      </header>
      {/* <Footer></Footer> */}
    </div>
    </>
  );
}

export default App;


