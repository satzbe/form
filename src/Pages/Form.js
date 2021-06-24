import React, { useState } from 'react';
import Validation from './Validation';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const nameHandler = e => {
    setName(e.target.value);
  };
  const emailHandler = e => {
    setEmail(e.target.value);
  };
  const genderHandler = e => {
    setGender(e.target.value);
  };
  const statusHandler = e => {
    setStatus(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(Validation(gender, status, isChecked, name, email));
    console.log(name, email, gender, error, status, isSubmit);
    if (Object.keys(error).length === 0) {
      setIsSubmit(true);
    }
  };
  const resetValues = () => {
    setName('');
    setEmail('');
    setGender('');
    setStatus('');
    setIsSubmit(false);
    setIsChecked(false);
  };

  return isSubmit === true ? (
    <div className='register'>
      <h1>Login Successfull</h1>
      <h4>Name: {name}</h4>
      <br />
      <h4>Email: {email}</h4>
      <br />
      <h4> Gender: {gender}</h4>
      <br />
      <h4> Status: {status}</h4>
      <br />
      <button onClick={resetValues}>Logout</button>
    </div>
  ) : (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' value={name} onChange={nameHandler} />
        {error.name && <p>{error.name}</p>}
        <br />
        <label>Email</label>
        <input type='mail' value={email} onChange={emailHandler} />
        {error.email && <p>{error.email}</p>}
        <br />
        <label>Gender</label>
        <select onChange={genderHandler}>
          <option value='Select gender'>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        {error.gender && <p>{error.gender}</p>}
        <br />
        <label>
          Single
          <input
            type='radio'
            checked={status === 'Single'}
            value='Single'
            onChange={statusHandler}
          />
        </label>
        <label>
          Married
          <input
            type='radio'
            checked={status === 'Married'}
            value='Married'
            onChange={statusHandler}
          />
        </label>
        {error.status && <p>{error.status}</p>}
        <br />
        <input
          type='checkbox'
          checked={isChecked}
          onChange={e => {
            setIsChecked(e.target.checked);
          }}
        />
        <span>Agree terms and conditions</span>
        {error.isChecked && <p>{error.isChecked}</p>}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
