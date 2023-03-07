import React, { useRef, useState, useEffect, useContext } from "react";
import useHideElement from "../../utils/useHideElement";
import MobileContext from "../../context/MobileContext";
import "./ProductGallery.css";
import prevIcon from "../../assets/svg/icon-previous.svg";
import nextIcon from "../../assets/svg/icon-next.svg";
import closeIcon from "../../assets/svg/icon-close.svg";

// botões de navegação usados no modal e na galeria mobile

function ProductNavBtn({ setMainPicture, type, product }) {
	if (type === "prev") {
		return (
			<button
				className="modal-prev-btn"
				onClick={() =>
					setMainPicture((prevPicture) =>
						prevPicture >= 1 ? prevPicture - 1 : product.pics.length - 1
					)
				}
			>
				<img src={prevIcon} alt="Previous picture" className="black-svg-hover" />
			</button>
		);
	} else if (type === "next") {
		return (
			<button
				className="modal-next-btn"
				onClick={() =>
					setMainPicture((prevPicture) => (prevPicture <= 2 ? prevPicture + 1 : 0))
				}
			>
				<img src={nextIcon} alt="Next picture" className="black-svg-hover" />
			</button>
		);
	}
}

export default function ProductGallery({
	product,
	mainPicture,
	setMainPicture,
	setShowModal,
	showModal,
}) {
	const { isMobile } = useContext(MobileContext);
	const thumbStyles = {
		outline: "3px solid var(--primary)",
	};

	function handleShowModal() {
		if (!isMobile) {
			setShowModal(true);
		}
		return;
	}

	useEffect(() => {
		if (isMobile) {
			setShowModal(false);
		}
	}, [isMobile]);
	return (
		<div className="product-images-column">
			<div className="product-main-img-container">
				{isMobile && (
					<ProductNavBtn
						setMainPicture={setMainPicture}
						type={"prev"}
						product={product}
					/>
				)}
				<img
					src={product.pics[mainPicture]}
					alt="Product picture"
					className="product-main-img"
					onClick={handleShowModal}
				/>
				{isMobile && (
					<ProductNavBtn
						setMainPicture={setMainPicture}
						type={"next"}
						product={product}
					/>
				)}
			</div>
			<div className="product-thumbnails">
				{product.pics.map((picture, index) => {
					return (
						<div
							className="thumb-container"
							onClick={() => setMainPicture(index)}
							key={`thumb_${index}`}
						>
							<img
								src={picture}
								alt="Product picture"
								style={index === mainPicture ? thumbStyles : {}}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function ProductModal({ product, setShowModal }) {
	const [mainPicture, setMainPicture] = useState(0);

	const modalRef = useHideElement(setShowModal);

	return (
		<>
			<div className="modal-wrapper" ref={modalRef}>
				<button
					className="modal-close-btn black-svg-hover"
					onClick={() => setShowModal(false)}
				>
					<img src={closeIcon} alt="Close icon" className="black-svg-hover" />
				</button>
				<ProductNavBtn
					setMainPicture={setMainPicture}
					type={"prev"}
					product={product}
				/>
				<ProductGallery
					product={product}
					setMainPicture={setMainPicture}
					mainPicture={mainPicture}
					setShowModal={setShowModal}
				/>

				<ProductNavBtn setMainPicture={setMainPicture} type={"next"} />
			</div>
		</>
	);
}
