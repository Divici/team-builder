import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './Form';
import Member from './Member';

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
        <h1>Our Team</h1>
      <div className='form'>
        <h3>Add a Member</h3>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
      </div>
      <div className='container'>
        <h3>Our Current Team</h3>
      {
        team.map(member=>{
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
