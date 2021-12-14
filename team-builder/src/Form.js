import React, {useState} from 'react';

const Form = props => {
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      role: ''
  });

  const onInputChange = event =>{
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
        <form>
            <label>
                Name: <input name='name' onChange={onInputChange} type='text' />
            </label>
            <label>
                Email: <input name='email' onChange={onInputChange} type='text' />
            </label>
            <label>
                Role: <select name='role'onChange={onInputChange} >
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
