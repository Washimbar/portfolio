import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./Layout.css";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			<div className="container">
        <aside className="sidebar">
          <Sidebar />					
				</aside>
				<main className="content">{children}</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
