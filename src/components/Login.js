import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [state, setState] = useState({
    credentials:{
      username: "Lambda",
      password: "School"
    }
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory()

  const handleChange=(e)=>{
    setState({
      credentials:{
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const onSubmit =(e)=> {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', state.credentials)
      .then(res=>{
        localStorage.setItem("token", res.data.payload)
        history.push('/protected')
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const [error, setError] = useState("");
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        id="username"
                        onChange={handleChange}
                    />
                    <p id='error'></p>
                    <input
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        id="password"
                        onChange={handleChange}
                    />
                    <p id='error'></p>
                    <button>Log in</button>
                </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"