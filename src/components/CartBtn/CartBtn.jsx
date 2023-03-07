import React, { useContext, useEffect, useState, useRef } from "react";
import useHideElement from "../../utils/useHideElement";

import { CartItemPop } from "../CartItem/CartItem";
import "./CartBtn.css";
import cartIcon from "../../assets/svg/icon-cart.svg";
import CartContext from "../../context/CartContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

export default function CartBtn() {
	const [showCart, setShowCart] = useState(false);
	const [itemsCounter, setItemsCounter] = useState(0);
	// const cartRef = useRef(null);
	const { cartItems } = useContext(CartContext);
	const cartRef = useHideElement(setShowCart);

	function toggleCart() {
		setShowCart((prevShowCart) => !prevShowCart);
	}

	function sumItems() {
		let sum = 0;
		cartItems.forEach((el) => {
			sum += el.qnt;
		});
		return sum;
	}

	// function handleClickOutside(event) {
	// 	if (cartRef.current && !cartRef.current.contains(event.target)) {
	// 		setShowCart(false);
	// 	}
	// }

	// useEffect(() => {
	// 	document.addEventListener("click", handleClickOutside, true);

	// 	return () => {
	// 		document.removeEventListener("click", handleClickOutside, true);
	// 	};
	// }, [cartRef]);

	useEffect(() => {
		setItemsCounter(sumItems());
	}, [cartItems]);

	return (
		<>
			<button className="cart-btn-container" onClick={toggleCart}>
				<img src={cartIcon} alt="Cart icon" className="cart-icon black-svg-hover" />
				{itemsCounter > 0 && <div className="cart-btn-counter">{itemsCounter}</div>}
			</button>
			{showCart && (
				<div className="cart-btn--popup" ref={cartRef}>
					<p className="cart-btn-popup--title">Cart</p>
					<div className="cart-popup-items-container">
						{cartItems.length > 0 ? (
							cartItems.map((el) => {
								return (
									<CartItemPop
										id={el.id}
										qnt={el.qnt}
										key={`cartItem_${el.id}`}
									/>
								);
							})
						) : (
							<p className="cart-popup-empty">Your cart is empty.</p>
						)}
					</div>
					{cartItems.length > 0 && <PrimaryBtn content={"Checkout"} />}
				</div>
			)}
		</>
	);
}
