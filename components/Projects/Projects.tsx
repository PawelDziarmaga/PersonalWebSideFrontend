import { useState } from "react";
//import data from strapi
import { useQuery } from "urql";
import { PROJECTS } from "../../lib/query";
// import styles
import { Container } from "./Projects.styles";
//import components
import Project from "./Project";
import ChoosenProject from "./ChoosenProject";
// iport types
import { propsType } from "./Projects.type";
//framermotion - animation
const { AnimatePresence } = require("framer-motion");
function Projects() {
	const [acive, setActive] = useState(false);
	const [activeElement, setActiveElement] = useState("");
	//Fetch result from strapi
	const [result] = useQuery({ query: PROJECTS });
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... </p>;
	const elements = data.projects.data;

	const projectsComponents = elements.map((element: propsType) => (
		<div
			key={element.attributes.title}
			onClick={() => {
				setActive(true);
				setActiveElement(element.attributes.title);
			}}>
			<Project data={element}></Project>
		</div>
	));
	return (
		<Container id='Projects'>
			{projectsComponents}
			<AnimatePresence>
				{acive ? (
					<ChoosenProject
						setActive={setActive}
						data={
							elements.filter(
								(x: { attributes: { title: string } }) =>
									x.attributes.title === activeElement
							)[0]
						}
					/>
				) : null}
			</AnimatePresence>
		</Container>
	);
}

export default Projects;
