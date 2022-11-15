import React from 'react';

function Login() {

	function loginSeller(){
		window.location.href = '/profile';
	}


    return(
		<div class="login">
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"/>
			<h1>Login</h1>
			<form action={loginSeller}>
				<label for="username">
					<i class="fas fa-user"></i>
				</label>
				<input type="text" name="username" placeholder="Username" id="username" required />
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input type="password" name="password" placeholder="Password" id="password" required/>
				<input type="submit" value="Login"/>
			</form>
		</div>
    )


}

export default Login;