import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfoAction, logOutAction } from '../../actions/userAction';

const NavBar = ({ fullName, role, userId, history }) => {
	const userInfo = {
		role,
		id: userId,
		fullName
	};

	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(updateUserInfoAction(userInfo));
		},
		[ dispatch, userInfo ]
	);

	const logOutHandler = (e) => {
		e.preventDefault();
		dispatch(logOutAction(history));
	};

	return (
		<nav className="navbar navbar-default app-nav">
			<div className="container-fluid">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
						aria-expanded="false"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<a className="navbar-brand" href="?#">
						<font className="nav-link">Taskify</font>
					</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						{role === 'admin' ? (
							''
						) : (
							<li className="nav-link">
								<a href="/create" className="nav-link">
									<font className="nav-link">Create A Story</font>
								</a>
							</li>
						)}

						<li className="nav-link">
							<a href="/dashboard" className="nav-link">
								<font className="nav-link">View Stories</font>
							</a>
						</li>
						<li className="nav-link">
							<a href="!#" className="nav-link" onClick={logOutHandler}>
								<font className="nav-link">{fullName} ( LogOut )</font>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
