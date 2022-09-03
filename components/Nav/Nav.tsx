// import hooks
import { useState } from "react";
// import styles
import { Div, Ul, Li, A } from "./Nav.styles";

function Nav() {
	const [opa, useOpa] = useState(false);

	const opaHendler = (e: any) => {
		console.log("xyz");
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useOpa((prev) => !prev);
	};
	/*const ISSERVER = typeof window === "undefined";
	if (!ISSERVER) {
		window.onscroll = opaHendler;
	}*/
	return (
		<Div onScroll={(e) => opaHendler(e)} opa={opa}>
			<Ul>
				<Li>
					<A href='#Header'>Home</A>
				</Li>

				<Li>
					<A href='#About'>About</A>
				</Li>
				<Li>
					<A href='#Projects'>Projects</A>
				</Li>
				<Li>
					<A href='#Comment'>Notes</A>
				</Li>
				<Li>
					<A href='#Contact'>Contact</A>
				</Li>
			</Ul>
		</Div>
	);
}

export default Nav;
