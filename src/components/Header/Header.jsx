import React, { useEffect, useState } from "react";
import "./Header.css";

import "../CartBtn/CartBtn";
import CartBtn from "../CartBtn/CartBtn";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import { NavLink } from "react-router-dom";
import MainNav from "../MainNav/MainNav";
import BurgerMainNav from "../BurgerMainNav/BurgerMainNav";

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			window.innerWidth < 780 ? setIsMobile(true) : setIsMobile(false);
		}

		window.addEventListener("resize", handleResize);
		handleResize(); //executa pelo menos uma vez para checar o window size inicial
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
