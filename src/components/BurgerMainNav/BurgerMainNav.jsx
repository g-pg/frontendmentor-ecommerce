import React, { useState } from "react";
import useHideElement from "../../utils/useHideElement";
import "./BurgerMainNav.css";
import MainNav from "../MainNav/MainNav";
import menuIcon from "../../assets/svg/icon-menu.svg";
import closeBtn from "../../assets/svg/icon-close.svg";
export default function BurgerMainNav() {
	const [showBurger, setShowBurger] = useState(false);

	const burgerRef = useHideElement(setShowBurger);

	const burgerOpenStyles = showBurger
		? {
				transform: "translateX(0)",
				boxShadow: "0 0 0 50vmax rgba(0, 0, 0, .7)",
		  }
		: {};

	return (
		<nav className="burger-nav" ref={burgerRef}>
			<button className="burger-btn black-svg-hover" onClick={() => setShowBurger(true)}>
				<img src={menuIcon} alt="Buger menu" />
			</button>
			<div className="burger-nav-container" style={burgerOpenStyles}>
				<button
					className="burger-close-btn black-svg-hover"
					onClick={() => setShowBurger(false)}
				>
					<img src={closeBtn} alt="" />
				</button>
				<MainNav type="burger" />
			</div>
		</nav>
	);
}
