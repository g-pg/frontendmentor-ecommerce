import { useEffect, useRef } from "react";

export default function useHideElement(setShow) {
	const ref = useRef(null);
	function handleClickOutside(event) {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false);
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [ref]);

	return (newRef) => {
		ref.current = newRef;
	};
}
