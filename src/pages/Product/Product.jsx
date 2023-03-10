import React, { useContext, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { numToPrice } from "../../utils/numToPrice";
import AddToCart from "../../components/AddToCart/AddToCart";
import ProductGallery, { ProductModal } from "../../components/ProductGallery/ProductGallery";

import "./Product.css";
import products from "../../data/products.json";
import CartContext from "../../context/CartContext";

export default function Product() {
	const param = useParams(); //id

	const product = products.find((el) => el.id === Number(param.id));

	const [mainPicture, setMainPicture] = useState(0);
	const [showModal, setShowModal] = useState(false);

	return (
		<main>
			<section>
				<div className="container  product-container">
					<div className="product-wrapper">
						<ProductGallery
							product={product}
							setMainPicture={setMainPicture}
							mainPicture={mainPicture}
							setShowModal={setShowModal}
							showModal={showModal}
						/>

						<div className="product-info-column">
							<p className="company-name">Sneaker Company</p>
							<h1 className="product-name">{product.name}</h1>
							<p className="product-desc">{product.description}</p>
							<div className="product-price-wrapper">
								<p className="product-final-price">
									{product.discount
										? numToPrice(product.price * product.discount)
										: numToPrice(product.price)}
								</p>
								{product.discount && (
									<>
										<p className="product-discount">
											{product.discount * 100}%
										</p>
										<p className="product-original-price">
											{numToPrice(product.price)}
										</p>
									</>
								)}
							</div>
							<AddToCart productId={product.id} />
						</div>
					</div>
				</div>
			</section>
			{showModal && (
				<ProductModal
					product={product}
					setMainPicture={setMainPicture}
					mainPicture={mainPicture}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			)}
		</main>
	);
}
