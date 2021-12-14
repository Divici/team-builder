import React, {useState} from 'react';

const Form = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  return (
    <div>
        <form>
            <label>
                Name: <input onChange={event => {
                    setName(event.target.value);
                }} 
                id='name' type='text' />
            </label>
            <label>
                Email: <input onChange={event => {
                    setEmail(event.target.value);
                }} 
                id='email' type='text' />
            </label>
            <label>
                Role: <select onChange={event => {
                    setRole(event.target.value);
                }} id='role' >
                    <option />
                    <option>Fullstack Developer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Project Manager</option>
                </select>
            </label>
        </form>
    </div>
  );
};

export default Form;
