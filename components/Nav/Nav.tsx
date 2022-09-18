import React from "react";
// import hooks
import Link from "next/link";
import { useState } from "react";
// import styles
import { Div, Ul, Li } from "./Nav.styles";

function Nav() {
	const [opa, useOpa] = useState(false);

	const opaHendler = () => {
		useOpa((prev) => !prev);
	};
	return (
		<Div onScroll={() => opaHendler()} opa={opa}>
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
