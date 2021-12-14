import React, {useState} from 'react';

const Form = props => {
    const { values, update, submit } = props
  
    const onInputChange = event =>{
        const name = event.target.name;
        const {value} = event.target;

        update(name, value);
    };

  const onSubmit = evt =>{
    evt.preventDefault();
    submit();
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>
                Name: <input name='name' value={values.name} placeholder='Type your username here' maxLength='30' onChange={onInputChange} type='text' />
            </label>
            <label>
                Email: <input name='email' value={values.email} placeholder='Type your email here' maxLength='30' onChange={onInputChange} type='text' />
            </label>
            <label>
                Role: <select name='role' onChange={onInputChange} >
                    <option value=''>--Select a Role--</option>
                    <option value='fullstack'>Fullstack Developer</option>
                    <option value='frontend'>Frontend Developer</option>
                    <option value='backend'>Backend Developer</option>
                    <option value='uiux'>UI/UX Designer</option>
                    <option value='projectManager'>Project Manager</option>
                </select>
            </label>
            <div>
                <button>submit</button>
            </div>
        </form>
    </div>
  );
};

export default Form;
