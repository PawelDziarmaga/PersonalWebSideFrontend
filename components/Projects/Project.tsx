// import styles

import { Element } from "./Projects.styles";

import { propsType } from "./Projects.type";
function Project(props: { data: propsType }) {
	const { title } = props.data.attributes;
	const { url, name } =
		props.data.attributes.img.data.attributes.formats.small;
	return (
		<Element>
			<img src={url} alt={name} />
			<div></div>
			<p>{title}</p>
		</Element>
	);
}

export default Project;
