import React, { Component, Fragment } from 'react';
import jwtDecode from 'jwt-decode';
import NavBar from '../components/Layouts/NavBar';

const checkAuthentication = (WrappedComponent) => {
	class Authentication extends Component {
		componentDidMount() {
			const token = localStorage.getItem('token') || '';
			const { history } = this.props;
			const isAuthenticated = localStorage.getItem('isAuthenticated');

			if (!token || isAuthenticated === 'false') {
				history.push('/login');
			} else {
				const decode = jwtDecode(token);
				const role = jwtDecode(token).role.toLowerCase();

				if (!decode) {
					history.push('/login');
				}
				const checkTokenExpiryDate = decode.exp - Math.floor(Date.now() / 1000);
				if (checkTokenExpiryDate <= 0) {
					history.push('/login');
				}
				if (role !== process.env.REACT_APP_ADMIN && role !== process.env.REACT_APP_USER) {
					history.push('/login');
				}
			}
		}

		render() {
			const token = localStorage.getItem('token');
			let fullName, myRole, userId;
			if (token) {
				fullName = jwtDecode(token).firstName + ' ' + jwtDecode(token).lastName;
				myRole = jwtDecode(token).role.toLowerCase();
				userId = jwtDecode(token).id;
			}

			return (
				<Fragment>
					<NavBar fullName={fullName} role={myRole} userId={userId} {...this.props} />
					<WrappedComponent {...this.props} />
				</Fragment>
			);
		}
	}

	return Authentication;
};

export default checkAuthentication;
