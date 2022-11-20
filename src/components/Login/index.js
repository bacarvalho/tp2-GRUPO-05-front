import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { LoginUser} from "../../services/OauthServices";
import Cookies from "universal-cookie";


const Login = ({islogged}) => {

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [myCookie, setMyCookie] = useState("");

  useEffect(() => {
	if (islogged){
		navigate("/");
	}
  })
  
  async function handleSubmit(e) {
    e.preventDefault();
	const response = await LoginUser(username, password);
	if(response.status) {
		const cookie = new Cookies();
		cookie.set('login', response.data);
		setMyCookie(response.data); //Agregar cookie.
		navigate("/");
	} else {
		setIsDisabled(false);
		setErrorMessage(response.error.message);
	}
  };

  return (
    <div className="login">
		<h1>Login</h1>
      <form onSubmit={handleSubmit}>
	  	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
		<label>
			<i className="fas fa-user"></i>
		</label>
		<input
			type="text"
			name="Username"
			value={username}
			placeholder="Username"
			onChange={(e) => setusername(e.target.value)}
			required
		/>
		<label>
			<i className="fas fa-lock"></i>
		</label>
		<input
			type="password"
			name="Password"
			placeholder="Password"
			onChange={(e) => setpassword(e.target.value)}
			required
		/>
		{
			isDisabled ? <></> : <div className="login-error">{errorMessage}</div>
		}
		<input type="submit" value="Submit" />
	  </form>
    </div>
  );
};

export default Login;