// import styles
import Link from "next/link";
import { ProjectPage } from "./Projects.styles";
//import react icons
import { BsGithub } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
// iport types
import { propsType } from "./Projects.type";
function ChoosenProject(props: { data: propsType; setActive: any }) {
	const {
		title,
		tekst1,
		tekst2,
		tekst3,
		img,
		Frontend,
		typescript,
		react,
		styledComponents,
		redux,
		emailJS,
		framerMotion,
		reactHotToast,
		Backend,
		node,
		strapi,
		cloudinary,
		graphql,
		auth0,
		stripe,
		urlGitFront,
		urlGitBack,
		urlWebFront,
		urlWebBack,
	} = props.data.attributes;
	const { name, url } = img.data.attributes.formats.small;
	return (
		<ProjectPage
			onClick={() => props.setActive(false)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				delay: 0,
				duration: 0.5,
			}}>
			<div
				className='container'
				onClick={(e: any) => e.stopPropagation()}>
				<div className='item item-1 header'>
					<h1>{title}</h1>
					<span onClick={() => props.setActive(false)}>x</span>
				</div>
				<div className='item item-2 image'>
					<Link href={urlWebFront ? urlWebFront : ""}>
						<img src={url} alt={name} />
					</Link>
				</div>
				<div className='item item-3 links'>
					{urlWebFront && (
						<Link href={urlWebFront}>
							<a>
								<IoMdGlobe />
								Link to the page
							</a>
						</Link>
					)}
					{urlGitFront && (
						<Link href={urlGitFront}>
							<a>
								<BsGithub />
								Link to Git respository - frontend
							</a>
						</Link>
					)}

					{urlWebBack && (
						<Link href={urlWebBack}>
							<a>
								<IoMdGlobe />
								Link to the server
							</a>
						</Link>
					)}
					{urlGitBack && (
						<Link href={urlGitBack}>
							<a>
								<BsGithub />
								Link to Git respository - backend
							</a>
						</Link>
					)}
				</div>
				<div className='item item-4 describe'>
					{tekst1 && <p>{tekst1}</p>}
					{tekst2 && <p>{tekst2}</p>}
					{tekst3 && <p>{tekst3}</p>}
				</div>
				<div className='item item-5 stack'>
					{Frontend && (
						<div>
							<h2>Frontend Stack</h2>
							<ul>
								{typescript && <li>TypeScript</li>}
								{react && <li>React</li>}
								{emailJS && <li>EmailJS</li>}
								{styledComponents && <li>Styled components</li>}
								{redux && <li>Redux</li>}
								{localStorage && <li>localStorage</li>}
								{framerMotion && <li>Framer Motion</li>}
								{reactHotToast && <li>React hot toast</li>}
							</ul>
						</div>
					)}
					{Backend && (
						<div>
							<h2>Backend Stack</h2>
							<ul>
								{node && <li>Node.js</li>}
								{strapi && <li>Strapi</li>}
								{cloudinary && <li>Cloudinary</li>}
								{graphql && <li>GraphQL</li>}
								{auth0 && <li>Auth0</li>}
								{stripe && <li>Stripe</li>}
							</ul>
						</div>
					)}
				</div>
			</div>
		</ProjectPage>
	);
}

export default ChoosenProject;
