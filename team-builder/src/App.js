import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './Form';

const initialFormValues =  {
  name: '',
  email: '',
  role: ''
  };

function App() {

  const [team, setTeam] = useState([]);
  const [formValues, setFormValues ] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeam(team.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <div>
        <h1>Our Team</h1>
      </div>
      {team}
      <div>
        <h2>Add a Member</h2>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
      </div>
    </div>
  );
}

export default App;
