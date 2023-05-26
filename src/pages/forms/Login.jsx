import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BsEye,BsEyeSlash} from 'react-icons/bs';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  const showPasswordHandler = () =>{
    setShowPassword(!showPassword);
  }
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={!showPassword  ? 'password' : 'text'}
          placeholder="Password"
        />
   
         {showPassword ?  <BsEye className="show-password-icon" onClick={showPasswordHandler} /> : 
           <BsEyeSlash className="show-password-icon"  onClick={showPasswordHandler}/> }
       
        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
