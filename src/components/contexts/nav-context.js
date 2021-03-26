import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({children}) => {
	const [activeNavLink, setNavLink] = useState("gettingstarted");

	let stateData = {activeNavLink, setNavLink};

	return(
		<NavContext.Provider value={stateData}>
			{children}
		</NavContext.Provider>
	)
}