// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<ul className="sidebar-menu">
				<li className="sidebar-item">
					<Link to="/" className="sidebar-link">
						Home
					</Link>
				</li>
				<li className="sidebar-item">
					<Link to="/about" className="sidebar-link">
						About
					</Link>
				</li>
				<li className="sidebar-item">
					<Link to="/projects" className="sidebar-link">
						Projects
					</Link>
				</li>
				<li className="sidebar-item">
					<Link to="/contact" className="sidebar-link">
						Contact
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
