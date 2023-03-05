import React from "react";
import "./Nav.css";

import "../CartBtn/CartBtn";
import CartBtn from "../CartBtn/CartBtn";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import { NavLink } from "react-router-dom";
export default function Nav() {
	return (
		<header>
			<div className="container">
				<div className="header-wrapper">
					<NavLink className="logo-navlink" to="/">
						<h1 className="">sneakers</h1>
					</NavLink>
					<nav className="main-nav-wrapper">
						<ul className="main-nav-ul">
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
					<nav className="profile-nav-wrapper">
						<CartBtn />
						<ProfileBtn />
					</nav>
				</div>
			</div>
		</header>
	);
}
