import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROUTE ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />
          
          {/* product_id ROUTE FOR DETAILS */}
          <Route path="/:product_id" element={<Detail />} />
        </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;