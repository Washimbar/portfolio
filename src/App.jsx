// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
		</BrowserRouter>
	);
};

export default App;
