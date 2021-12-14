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
                id='Name' type='text' />
            </label>
        </form>
    </div>
  );
};

export default Form;
