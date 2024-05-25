import React from "react";
import LogoKFC from "../images/LogoKFC.svg";

const Login = () => {
  return (
    <div className="log">
      <img src={LogoKFC} alt="" />
      <br />
      <br />
      <p>Lets login to your Account!</p>
      <form>
        <label>E-mail ID</label>
        <input type="email" placeholder="Enter email" />
        <br />
        <br />
        <label>Passward</label>
        <input type="passward" placeholder="Enter passward" />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Login;
