import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
         | 
        <Link to="/about">About</Link>   
      </p>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;
