import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './Form';

function App() {

  const [team, setTeam] = useState([]);

  const addTeamMember = (props)=>{
    const newTeam = team.map(member=> member);
    newTeam.push({});
  }

  return (
    <div className="App">
      {team}
      <Form />
    </div>
  );
}

export default App;
