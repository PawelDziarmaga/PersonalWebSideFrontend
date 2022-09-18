import React from "react";
//import data from strapi
import { useQuery } from "urql";
import { HEADER } from "../../lib/query";
// import styles
import { Div, H1, H2, Line, Layout, BackgroundIMG } from "./Header.styles";

function Header() {
	//Fetch result from strapi
	const [result] = useQuery({ query: HEADER });
	const { data, fetching, error } = result;
	if (fetching) return <Div>Loading...</Div>;
	if (error) return <Div>Oh no... </Div>;
	const elements = data.header.data.attributes;

	return (
		<Div id='Header'>
			<BackgroundIMG
				imgUrl={elements.bg.data.attributes.formats.medium.url}
				zIndex={-7}
			/>
			<BackgroundIMG zIndex={-1} imgUrl={"none"} animation={"night"} />
			<BackgroundIMG
				imgUrl={elements.sun.data.attributes.formats.thumbnail.url}
				zIndex={-5}
				top={"10vh"}
				left={"10%"}
				height={"15.3vw"}
				width={"15vw"}
				animation={"sunTravel"}
			/>
			<BackgroundIMG
				imgUrl={elements.mn3.data.attributes.formats.large.url}
				zIndex={-2}
				height={"160%"}
			/>
			<BackgroundIMG
				imgUrl={elements.mn2.data.attributes.formats.large.url}
				zIndex={-3}
				height={"140%"}
			/>
			<BackgroundIMG
				imgUrl={elements.mn1.data.attributes.formats.large.url}
				zIndex={-4}
				height={"140%"}
			/>

			<Layout>
				<H1>Paweł Dziarmaga</H1>
				<Line></Line>
				<H2>Frontend developer</H2>
			</Layout>
		</Div>
	);
}

export default Header;
