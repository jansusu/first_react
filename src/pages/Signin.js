import React from 'react';
import LogoKFC from '../images/LogoKFC.svg';

const Signin = () => {
  return (
    <div className='log'>
        <img src={LogoKFC} alt=''/><br/><br/>
    <p>Lets Signin or create your Account using Email ID!</p> 
    <form>
        <label>E-mail ID</label>
        <input type='email' placeholder='Enter email'/><br/><br/>
        <label>Passward</label>
        <input type='passward' placeholder='Enter passward'/>
        <button>Enter</button>
    </form></div>
  )
}

export default Signin