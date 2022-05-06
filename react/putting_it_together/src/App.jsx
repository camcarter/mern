import './App.css';
import PersonCard from './components/PersonCard';


function App(){
  return(
    <div className="App">
      <PersonCard person={ {'firstName': 'Jane', 'lastName': 'Doe', 'age': 45, 'hairColor': 'Black'} }/>
      <PersonCard person={ {'firstName': 'John', 'lastName': 'Smith', 'age': 88, 'hairColor': 'Brown'} }/>
    </div>
  );
}

export default App;