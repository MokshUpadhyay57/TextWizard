import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
			<div className="footer">
				<div className="about">
					<h2 className="name">TextWizard</h2>
					<hr className="line" />
					<div className="content">
						TextWizard is a simple Utility which help you change the appearance
						of the text as you want.
					</div>
				</div>
				<div className="links">
					<ul className="nav-links">
						<li>Google</li>
						<li>Youtube</li>
						<li>Instagram</li>
						<li>Gmail</li>
					</ul>
				</div>
			</div>
		);
};

export default Footer;
