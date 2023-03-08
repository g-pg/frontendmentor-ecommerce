import React, { useState, useEffect } from "react";
import useHideElement from "../../utils/useHideElement";
import "./BurgerMainNav.css";
import MainNav from "../MainNav/MainNav";
import menuIcon from "../../assets/svg/icon-menu.svg";
import closeBtn from "../../assets/svg/icon-close.svg";
export default function BurgerMainNav() {
	const [showBurger, setShowBurger] = useState(false);

	const burgerRef = useHideElement(setShowBurger);

	useEffect(() => {
		if (showBurger) {
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [showBurger]);

	return (
		<>
			<nav className="burger-nav" ref={burgerRef}>
				<button
					className="burger-btn black-svg-hover"
					onClick={() => setShowBurger(true)}
				>
					<img src={menuIcon} alt="Buger menu" />
				</button>
				<div
					className="burger-nav-container"
					style={showBurger ? { transform: "translateX(0)" } : {}}
				>
					<button
						className="burger-close-btn black-svg-hover"
						onClick={() => setShowBurger(false)}
					>
						<img src={closeBtn} alt="" />
					</button>
					<MainNav type="burger" />
				</div>
			</nav>
			{showBurger && <div className="overlay"></div>}
		</>
	);
}
