import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";
import Detail from "./views/Detail";


function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROUTE TO MAIN*/}
          <Route path="" element={<Create />} />
          {/* ROUTE TO CREATE AUTHOR*/}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ROUTE TO EDIT AUTHOR*/}
          <Route path="/:author_id" element={<Detail />} />
        </Routes>
      </fieldset>
      </BrowserRouter>
  );
}

export default App;
