import React from "react";
import "./Auth.css";
import Logo from "../../Img/favicon.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Spark</h1>
          <h6>Saturday is the best day for doing everything</h6>
        </div>
      </div>
      <Login />
      {/* <Signup /> */}
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3 style={{ color: "#0d0d4c" }}>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ color: "#0d0d4c" }}>
            Don't have an account? Sign up
          </span>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

function Signup() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3 style={{ color: "#0d0d4c" }}>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="cnfmpassword"
          />
        </div>
        <div>
          <span style={{ color: "#0d0d4c" }}>
            Already have an account? Login
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
