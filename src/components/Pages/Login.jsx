import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../actions/userAction';

const Login = ({ history }) => {
	const [ userEmail, setEmail ] = useState('');
	const [ userPwd, setPwd ] = useState('');
	const [ userRole, setRole ] = useState(false);
	const dispatch = useDispatch();

	const appState = useSelector((state) => state);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		const role = userRole ? 'user' : 'admin';
		const updatedLoginData = Object.assign(
			{},
			{
				email: userEmail,
				password: userPwd,
				role
			}
		);
		dispatch(loginAction(updatedLoginData, history));
	};
	return (
		<div className="app-form">
			{appState.loader.appLoader ? (
				<div className="app-loader">
					<img
						src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583399948/flipad/loader_wfbk2j.gif"
						alt="loading"
					/>
				</div>
			) : (
				<form onSubmit={formSubmitHandler}>
					<div className="app-logo-container">
						<img
							src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583165307/flipad/logo2_vsotgn.jpg"
							alt="logo"
							className="app-logo"
						/>
					</div>
					<div className="error">{appState.auth.loginError}</div>

					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={userEmail}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							value={userPwd}
							onChange={(e) => setPwd(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Select Role</label>
						<br />
						<span className="toggle-roles">Admin &nbsp;&nbsp;</span>
						<label className="switch">
							<input type="checkbox" checked={userRole} onChange={() => setRole(!userRole)} />
							<span className="slider round" />
						</label>
						<span className="toggle-roles"> &nbsp; User</span>
					</div>
					<button type="submit" className="btn-primary submit-button">
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default Login;
