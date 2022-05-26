import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './views/Create';
import Dashboard from './views/Dashboard';
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:pet_id" element={<Detail />} />
        <Route path="/edit/:pet_id/" element={<Edit />} />
      </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;
