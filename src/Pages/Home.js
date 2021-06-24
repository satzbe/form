import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  let history = useHistory();

  return (
    <div className='home'>
      <h1>Hello there!</h1>
      <button onClick={() => history.push('/register')}>Login</button>
    </div>
  );
}
