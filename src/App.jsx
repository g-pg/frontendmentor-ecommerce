import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Attribution from "./components/Attribution/Attribution";
import { CartProvider } from "./context/CartContext";
import { MobileProvider } from "./context/MobileContext";
function App() {
	return (
		<>
			<MobileProvider>
				<CartProvider>
					<Header />
					<Routes>
						<Route
							path="/frontendmentor-ecommerce"
							element={
								<Navigate replace to="/frontendmentor-ecommerce/product" />
							}
						></Route>
						<Route
							path="/frontendmentor-ecommerce/product/:id"
							element={<Product />}
						></Route>
						<Route path="/cart" element={<Cart />}></Route>
						<Route
							path="*"
							element={
								<Navigate
									replace
									to="/frontendmentor-ecommerce/product/1"
								/>
							}
						></Route>
					</Routes>
					<Attribution />
				</CartProvider>
			</MobileProvider>
		</>
	);
}

export default App;
