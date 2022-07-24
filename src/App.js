/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import Featured from "./pages/Featured";
import Hero from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/featured" element={<Featured />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
