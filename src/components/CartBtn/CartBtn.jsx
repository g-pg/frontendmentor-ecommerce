import React, { useContext, useEffect, useState } from "react";
import { CartItemPop } from "../CartItem/CartItem";
import "./CartBtn.css";
import cartIcon from "../../assets/svg/icon-cart.svg";
import CartContext from "../../context/CartContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

export default function CartBtn() {
	const [showCart, setShowCart] = useState(false);
	const [itemsCounter, setItemsCounter] = useState(0);
	const { cartItems } = useContext(CartContext);

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

	useEffect(() => {
		setItemsCounter(sumItems());
	}, [cartItems]);

	return (
		<>
			<div className="cart-btn-container" onClick={toggleCart}>
				<img src={cartIcon} alt="Cart icon" className="cart-icon" />
				{itemsCounter > 0 && <div className="cart-btn-counter">{itemsCounter}</div>}
			</div>
			{showCart && (
				<div className="cart-btn--popup">
					<p className="cart-btn-popup--title">Cart</p>
					<div className="cart-popup-itens-container">
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
						{cartItems.length > 0 && <PrimaryBtn content={"Checkout"} />}
					</div>
				</div>
			)}
		</>
	);
}
