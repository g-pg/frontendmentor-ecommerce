import React, { useContext } from "react";
import "./Header.css";

import "../CartBtn/CartBtn";
import CartBtn from "../CartBtn/CartBtn";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import { NavLink } from "react-router-dom";
import MainNav from "../MainNav/MainNav";
import BurgerMainNav from "../BurgerMainNav/BurgerMainNav";
import MobileContext from "../../context/MobileContext";

export default function Header() {
	const { isMobile } = useContext(MobileContext);

	return (
		<header>
			<div className="container">
				<div className="header-wrapper">
					{isMobile && <BurgerMainNav />}
					<NavLink className="logo-navlink" to="/">
						<h1 className="header-logo">sneakers</h1>
					</NavLink>
					{!isMobile && (
						<nav className="main-nav-wrapper">
							<MainNav />
						</nav>
					)}
					<nav className="profile-nav-wrapper">
						<CartBtn />
						<ProfileBtn />
					</nav>
				</div>
			</div>
		</header>
	);
}
