import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem("cart_items")) || []
	);

	function addItem(id, qnt) {
		const item = cartItems.find((el) => el.id === id);
		setCartItems((prevCartItems) => {
			if (!item) {
				return [...prevCartItems, { id: id, qnt: qnt }];
			} else {
				return prevCartItems.map((el) =>
					el.id === id ? { ...el, qnt: el.qnt + qnt } : el
				);
			}
		});
	}

	function removeItem(id) {
		const index = cartItems.findIndex((el) => el.id === id);
		const newList = [...cartItems];
		newList.splice(index, 1);
		setCartItems(newList);
	}

	useEffect(() => {
		localStorage.setItem("cart_items", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider value={{ cartItems, addItem, removeItem }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
