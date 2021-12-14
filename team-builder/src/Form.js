import React from 'react';

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
            <label className='form'>
                Name: <input name='name' value={values.name} placeholder='Type your username here' maxLength='30' onChange={onInputChange} type='text' />
            </label>
            <label className='form'>
                Email: <input name='email' value={values.email} placeholder='Type your email here' maxLength='30' onChange={onInputChange} type='text' />
            </label>
            <label className='form'>
                Role: <select name='role' onChange={onInputChange} >
                    <option value=''>--Select a Role--</option>
                    <option value='Fullstack Developer'>Fullstack Developer</option>
                    <option value='Frontend Developer'>Frontend Developer</option>
                    <option value='Backend Developer'>Backend Developer</option>
                    <option value='UI/UX Designer'>UI/UX Designer</option>
                    <option value='Project Manager'>Project Manager</option>
                </select>
            </label>
            <div className='form'>
                <button>submit</button>
            </div>
        </form>
    </div>
  );
};

export default Form;
