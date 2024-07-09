import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import { Provider } from 'react-redux';
import Users from './components/users';
import HomePage from './components/homePage';
<<<<<<< HEAD
import Navigators from './components/navigators';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import DrivesPage from './components/drivesPage';

>>>>>>> 558ae21974e206fef189462365be3244d3d6ded5

// import Exe1 from './comps/exe1';

function App() {
  return (
<<<<<<< HEAD
    <>
=======
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
>>>>>>> 558ae21974e206fef189462365be3244d3d6ded5

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


