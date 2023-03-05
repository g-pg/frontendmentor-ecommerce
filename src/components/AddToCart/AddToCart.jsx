import React, { memo, useContext, useState } from "react";
import "./AddToCart.css";
import minusIcon from "../../assets/svg/icon-minus.svg";
import plusIcon from "../../assets/svg/icon-plus.svg";
import cartIcon from "../../assets/svg/icon-cart.svg";
import CartContext from "../../context/CartContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
function AddToCart({ productId }) {
	const { addItem } = useContext(CartContext);

	const [productQuantity, setProductQuantity] = useState(0);

	function handleAddToCart() {
		if (productQuantity > 0) {
			addItem(productId, productQuantity);
		}
		setProductQuantity(0);
	}
	return (
		<div className="product-add-wrapper">
			<div className="product-add-counter-wrapper">
				<button
					className="product-set-quantity-btn"
					onClick={() => setProductQuantity((prev) => (prev > 0 ? prev - 1 : prev))}
				>
					<img src={minusIcon} alt="Minus icon" />
				</button>
				<p className="product-quantity">{productQuantity}</p>
				<button
					className="product-set-quantity-btn"
					onClick={() => setProductQuantity((prev) => prev + 1)}
				>
					<img src={plusIcon} alt="Plus icon" />
				</button>
			</div>
			<PrimaryBtn action={handleAddToCart} icon={cartIcon} content={"Add to cart"} />
		</div>
	);
}

export default memo(AddToCart);
