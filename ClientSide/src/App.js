import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import { Provider } from 'react-redux';
import Users from './components/users';
import HomePage from './components/homePage';
import DrivesPage from './components/drivesPage';


// import Exe1 from './comps/exe1';

function App() {
  return (
    <div className="App">

{/* <Provider store={store}>

<BrowserRouter>
  <Routes>


    <Route exact path="/" element={<HomePage />}></Route>
    <Route exact path='/Payment' element={<DrivesPage />}></Route>

  </Routes>
</BrowserRouter>
</Provider> */}
      <header className="App-header">

      <HomePage></HomePage>
      
       
      </header>
    </div>
  );
}

export default App;


