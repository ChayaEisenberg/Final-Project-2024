import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './pic.css';
import Pic1 from './Navigate/pic1';
import Pic2 from './Navigate/pic2';
import Pictures from './Navigate/pictures';
import Pic3 from './Navigate/pic3';
import Pic4 from './Navigate/pic4';
import Pic5 from './Navigate/pic5';
import Pic6 from './Navigate/pic6';
// import Exe1 from './comps/exe1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pictures><Pic1></Pic1><Pic2></Pic2><Pic3></Pic3><Pic4></Pic4><Pic5></Pic5><Pic6></Pic6></Pictures>
        {/* <BrowserRouter>
          <Routes>
            <Route exact path='/' element = {<Pic1/>}></Route>
            <Route exact path='/pic1' element = {<Pic1/>}></Route>
            <Route exact path='/pic2' element = {<Pic2/>}></Route>
          </Routes>
        </BrowserRouter> */}

       
      </header>
    </div>
  );
}

export default App;


