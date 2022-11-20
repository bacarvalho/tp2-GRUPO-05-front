import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);


	
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  return (
    <div className="login">
		<h1>Login</h1>
      <form onSubmit={handleSubmit}>
	  	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
		<label for="username">
			<i class="fas fa-user"></i>
		</label>
		<input
			type="text"
			name="Username"
			value={username}
			placeholder="Username"
			onChange={(e) => setusername(e.target.value)}
		/>
		<label for="password">
			<i class="fas fa-lock"></i>
		</label>
		<input
			type="password"
			name="Password"
			placeholder="Password"
			onChange={(e) => setpassword(e.target.value)}
		/>
		<input type="submit" value="Submit" />
	  </form>
    </div>
  );
};

export default Login;