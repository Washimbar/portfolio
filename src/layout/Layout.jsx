import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			<main className="content">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
