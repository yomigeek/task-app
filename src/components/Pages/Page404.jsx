import React from 'react';

const Page404 = () => {
	return (
		<div className="app-form">
			<img
				src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583829569/flipad/404_eqtddi.png"
				height="150px"
				width="150px"
				alt="404"
			/>
			<div>
				<br />
				Sorry the page you're looking for doesn't exist!
			</div>
			<a href="/dashboard">Back Home</a>
		</div>
	);
};

export default Page404;
