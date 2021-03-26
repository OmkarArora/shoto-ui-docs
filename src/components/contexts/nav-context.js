import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({children}) => {
	const [activeNavLink, setNavLink] = useState("gettingstarted");
	const [mobileNavOpen, setMobileNav] = useState(false);

	let stateData = {activeNavLink, setNavLink, mobileNavOpen, setMobileNav};

	return(
		<NavContext.Provider value={stateData}>
			{children}
		</NavContext.Provider>
	)
}