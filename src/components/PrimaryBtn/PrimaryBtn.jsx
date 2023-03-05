import React from "react";
import "./PrimaryBtn.css";
export default function PrimaryBtn({ action, icon, content }) {
	return (
		<button className="primary-btn" onClick={action}>
			{icon && <img src={icon} alt="icon" />}
			{content}
		</button>
	);
}
