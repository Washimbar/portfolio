// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Layout from "./layout/Layout";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout children={<Home />} />} />
				<Route path="/about" element={<Layout children={<About />} />} />
				<Route
					path="/projects"
					element={<Layout children={<Projects />} />}
				/>
				<Route path="/contact" element={<Layout children={<Contact />} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
