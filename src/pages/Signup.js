/** @format */

import React from "react";
import "./Signup.css";

const Signup = () => {
	return (
		<div className="signup">
			<div className="container">
				{/* Left */}
				<div className="left">
					<img src={require("../assets/images/crypto3.png")} alt="" />
				</div>

				{/* Right */}
				<div className="right">
					<h2>Earn passive income with crypto.</h2>
					<p>
						Earn up to 12% annual rewards on 30+ digital assets. Simply hold
						your assets int the automatically earn rewards at the end of each
						month with no lockups ans no limits
					</p>
					<div className="input-container">
						<input type="email" placeholder="Enter your email" />
						<button className="btn">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
