import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { LoginUser} from "../../services/OauthServices";


const Login = () => {

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [myCookie, setMyCookie] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
	const response = await LoginUser(username, password);
	if(response.status) {
		setMyCookie(response.data); //Agregar cookie.
		navigate("/dashboard");
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
		/>
		<label>
			<i className="fas fa-lock"></i>
		</label>
		<input
			type="password"
			name="Password"
			placeholder="Password"
			onChange={(e) => setpassword(e.target.value)}
		/>
		{
			isDisabled ? <></> : <div>{errorMessage}</div>
		}
		<input type="submit" value="Submit" />
	  </form>
    </div>
  );
};

export default Login;