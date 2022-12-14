import React from "react";
//import data from strapi
import { useQuery } from "urql";
import { ABOUT } from "../../lib/query";
// import styles
import {
	Div,
	HeaderBox,
	ParagraphBoxOne,
	ParagraphBoxTwo,
	ParagraphBoxIMG,
} from "./About.styles";

function About() {
	//Fetch result from strapi
	const [result] = useQuery({ query: ABOUT });
	const { data, fetching } = result;
	if (fetching) return <p>Loading...</p>;
	const elements = data.about.data.attributes;

	return (
		<Div id='About'>
			<HeaderBox>
			<h2>My name is Paweł!</h2>
				<img
					src={elements.Hi.data.attributes.formats.small.url}
					alt=''
				/>
				
			</HeaderBox>
			<ParagraphBoxOne>
				<p>
					I&apos;m a road traffic engineer by education and I&apos;m working
					as a road safety specialist.
				</p>
				<img
					src={elements.IR.data.attributes.formats.small.url}
					alt=''
				/>
			</ParagraphBoxOne>
			<ParagraphBoxTwo>
				<img
					src={elements.Idea.data.attributes.formats.small.url}
					alt=''
				/>
				<p>
				But traffic engineering isn&apos;t the only thing I like to do. I&apos;m passionate about the world of information technology. I love to design and build, which is why I create websites.
				</p>
			</ParagraphBoxTwo>

			<ParagraphBoxIMG>
				<p>Are you curious?</p>
				<img
					src={
						elements.MoreProjects.data.attributes.formats.small.url
					}
					alt=''
				/>
				<p>Check out my projects!</p>
			</ParagraphBoxIMG>
		</Div>
	);
}

export default About;
