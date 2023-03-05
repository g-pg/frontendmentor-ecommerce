import React, { createContext, useState, useEffect } from "react";

const MobileContext = createContext();

export function MobileProvider({ children }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			window.innerWidth < 780 ? setIsMobile(true) : setIsMobile(false);
		}

		window.addEventListener("resize", handleResize);
		handleResize(); //executa pelo menos uma vez para checar o window size inicial
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>;
}

export default MobileContext;
