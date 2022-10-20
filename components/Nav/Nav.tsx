import React from "react";
// import hooks
import Link from "next/link";
// import styles
import { Div, Ul, Li } from "./Nav.styles";

function Nav() {

	const navList= [
		{name:"home", href: "#Header"}, 
		{name:"About", href: "#About"},
		{name:"Projects", href: "#Projects"}, 
		{name:"Notes", href: "#Comment"},
		{name:"Contact", href: "#Contact"}]

	const elements = navList.map(el =>{
		return(
			<Li 
				key={el.name}
				initial={{ y: -30 }}
				animate={{ y: 0 }}
				transition={{ type: "spring", stiffness: 100, delay: 0.1 }}

				>
				<Link href={el.href}>{el.name}</Link>
			</Li>
		)
	})


	return (
		<Div>
			<Ul>
				{elements}
			</Ul>
		</Div>
	);
}

export default Nav;
