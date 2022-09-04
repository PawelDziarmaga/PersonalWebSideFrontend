// import hooks
import Link from "next/link";
import { useState } from "react";
// import styles
import { Div, Ul, Li } from "./Nav.styles";

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
					<Link href='#Header'>Home</Link>
				</Li>

				<Li>
					<Link href='#About'>About</Link>
				</Li>
				<Li>
					<Link href='#Projects'>Projects</Link>
				</Li>
				<Li>
					<Link href='#Comment'>Notes</Link>
				</Li>
				<Li>
					<Link href='#Contact'>Contact</Link>
				</Li>
			</Ul>
		</Div>
	);
}

export default Nav;
