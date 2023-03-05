import React from "react";
import "./MainNav.css";

export default function MainNav({ type }) {
	return (
		<ul className={`${type === "burger" ? "main-nav-ul-burger" : "main-nav-ul"}`}>
			<li>Collections</li>
			<li>Men</li>
			<li>Women</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	);
}
