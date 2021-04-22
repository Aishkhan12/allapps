import React, { useState } from "react";
import "../assets/css/login.css";
import background from "../assets/img/wave.png";
import bg from "../assets/img/bg.svg";
import avtar from "../assets/img/avatar.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const handleClick = () => {
    setLoad(true)
    history.push("/admin");
  };
  return (
    <div className="container-fluid">
      <img className="wave" src={background} alt=".." />
      <div className="container">
        <div className="img">
          <img src={bg} alt=".." />
        </div>
        <div className="login-content">
          <form>
            <img src={avtar} alt=".." />
            <h1>Login</h1>
            <div className="input-div one">
              <div className="i">
                <FaUserAlt color="#888" />
              </div>
              <div className="div">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input"
                  value={email}
                  onChange={(text)=> setEmail(text)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock color="#888" />
              </div>
              <div className="div">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  value={password}
                  onChange={(text)=> setPassword(text)}
                />
              </div>
            </div>
            {load ? 
                <Button variant="primary">
                    <Spinner
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Login
                </Button>
                    :
                <Button variant="primary" onClick={handleClick}>
                    Login
                </Button>  
            }
                
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
