import React, { useContext } from "react";
import products from "../../data/products.json";
import { numToPrice } from "../../utils/numToPrice";
import removeIcon from "../../assets/svg/icon-delete.svg";
import "./CartItem.css";
import CartContext from "../../context/CartContext";

export function CartItemPop({ id, qnt }) {
	const product = products.find((el) => el.id === id);
	const finalPrice = product.price * product.discount;

	const { removeItem } = useContext(CartContext);

	return (
		<div className="cart-popup-item-container">
			<img
				className="cart-popup-item-picture"
				src={product.pics[0]}
				alt="Product picture"
			/>

			<div>
				<p className="cart-popup-item-text">{product.name}</p>
				<p className="cart-popup-item-text price">
					{`
                ${numToPrice(finalPrice)} x ${qnt}`}{" "}
					<span>{numToPrice(finalPrice * qnt)}</span>{" "}
				</p>
			</div>
			<button
				className="cart-popup-item-remove-btn"
				onClick={() => removeItem(product.id)}
			>
				<img src={removeIcon} alt="" />
			</button>
		</div>
	);
}
