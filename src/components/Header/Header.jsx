import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import "../CartBtn/CartBtn";

import Logo from "../../assets/svg/logo.svg";
import CartBtn from "../CartBtn/CartBtn";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
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
						<img src={Logo} alt="Sneakers logo" />
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
