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
				<Li 
					initial={{ y: -30 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.1 }}

					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					>
					<Link href='#Header'>Home</Link>
				</Li>

				<Li
					initial={{ y: -30 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.2}}

					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
					>
					<Link href='#About'>About</Link>
				</Li>
				<Li
					initial={{ y: -30 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.3 }}

					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
				>
					<Link href='#Projects'>Projects</Link>
				</Li>
				<Li
					initial={{ y: -30 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.4 }}

					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
				>
					<Link href='#Comment'>Notes</Link>
				</Li>
				<Li
					initial={{ y: -30 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.5 }}

					whileHover={{
						scale: 1.1,
						transition: { duration: 0.2 },
					}}
				>
					<Link href='#Contact'>Contact</Link>
				</Li>
			</Ul>
		</Div>
	);
}

export default Nav;
