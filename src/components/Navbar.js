/** @format */

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const handleClick = () => setActive(!active);
	return (
		<div className="header">
			<div className="container">
				<h1>
					<span className="secondary">Ran</span>
					<span className="primary">chO</span>
				</h1>
				<ul className={`nav-menu ${active && "active"}`}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/featured">Featured</a>
					</li>
					<li>
						<a href="/earn">Earn</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/signup">Signup</a>
					</li>
				</ul>
				<div className="btn-group">
					<button className="btn">Connect Wallet</button>
				</div>
				<div className="hamburger" onClick={handleClick}>
					{active ? (
						<FaTimes size={20} style={{ color: "#333" }} />
					) : (
						<FaBars size={20} style={{ color: "#333" }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
