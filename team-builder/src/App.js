import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './Form';

function App() {

  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      {team}
      <Form />
    </div>
  );
}

export default App;
