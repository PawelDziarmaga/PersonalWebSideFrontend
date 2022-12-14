import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { motion } = require("framer-motion");
export const Container = styled.div`
	background-color: #d9ceb5;
	
	height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	padding: 10vh 5%;
	box-shadow: 0 0px 3vh black;
	@media (max-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
		grid-gap: 1rem;
	}
	@media (max-width: 600px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
export const Element = styled.div`

	cursor: pointer;
	position: relative;
	height: 20vw;
	width: 20vw;

	@media (max-width: 1200px) {
		margin: 0 auto;
		height: 35vh;
		width: 35vh;
	}
	@media (max-width: 950px) {
		height: 30vw;
		width: 30vw;
	}
	@media (max-width: 500px) {
		height: 20vh;
		width: 20vh;
	}
	img {
		width: 100%;
		height: auto;
	}
	div {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #ffffffaa;
	}
	p {
		z-index: 2;
		text-align: center;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-size: 3rem;
		font-weight: bolder;
		color: var(--fontColor);

		text-transform: uppercase;
		@media (max-width: 1400px) {
			font-size: 2.5rem;
		}
		@media (max-width: 800px) {
			font-size: 2rem;
		}
		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}
	transition: 0.2s;
	&:hover {
		transform: scale(1.1);
		z-index: 2;
	}
`;
export const ProjectPage = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	background: #0000005e;
	z-index: 5;
	color: black;
	.container {
		background-color: #FEFBF3;
		
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: [first] 45vw [line2] 45vw [end];
		grid-template-rows: [row1-start] 8vh [row1-end row2-start] 24vh [row2-end row3-start] 23vh [row3-end row4-start] 27vh [row4-end];
		column-gap: 10vw;
		row-gap: 2vh;

		@media (max-width: 800px) {
			grid-template-rows: [row1-start] 5vh [row1-end row2-start] 20vh [row2-end row3-start] 15vh [row3-end row4-start] 22vh [row4-end row5-start] 23vh [row5-end];
			row-gap: 1vh;
		}
		@media (max-width: 650px) {
		
			grid-template-rows: [row1-start] 5vh [row1-end row2-start] 20vh [row2-end row3-start] 15vh [row3-end row4-start] 29vh [row4-end row5-start] 23vh [row5-end end];
			row-gap: 1vh;
		}
	}
	.item {
		justify-self: center;
		align-self: center;
	}
	.item-1 {
		grid-column: 1 / span 2;
		width: 100%;

		position: relative;
		span {
			cursor: pointer;
			position: absolute;
			top: -0.5rem;
			right: 1rem;
			
			font-size: 4rem;
			font-weight: bold;
			color: var(--fontColor);
			transition: 0.3s;
			&:hover {
				transform: scale(1.5);
			}
		}
		h1 {
			font-size: 4rem;
			text-align: center;
			
			color: var(--fontColor);

			background-color: #FEFBF3;
			box-shadow: 0 0 3px var(--fontColor);
    		
			
		}
		@media (max-width: 1000px) {
			span {
				font-size: 2rem;
			}
			h1 {
				font-size: 3rem;
			}
		}
		@media (max-width: 750px) {
			span {
				font-size: 2rem;
			}
			h1 {
				font-size: 2rem;
			}
		}
		@media (max-width: 500px) {
			span {
				font-size: 2rem;
			}
			h1 {
				font-size: 1.5rem;
			}
		}
	}
	.item-2 {
		justify-self: right;
		img {
			height: 24vh;
			box-shadow: 0 0 10px var(--fontColor);
			transition: 0.1s;
			cursor: pointer;
			&:hover {
				box-shadow: 0 0 5px var(--fontColor);
			}
		}
		@media (max-width: 1300px) {
			padding-left: 1vw;
			
		}
		@media (max-width: 800px) {
			padding-left: 0;
			justify-self: center;
			img {
				height: 20vh;
				width: auto;
			}
			grid-column: 1 / span 2;
		}
	}
	.item-3 {
		display: flex;
		flex-direction: column;

		svg {
			margin-right: 1vw;
			color: black;
		}
		a {
			margin: 0.7vh 0;
			font-size: 1.5rem;
			transition: 0.3s;
			&:link {
				text-decoration: underline;
			}
		
			&:hover {
				transform: scale(1.03);
			}
			&:visited {
				color: var(--fontColor);
			}
		
		}

		@media (max-width: 1000px) {
			a {
				font-size: 1.3rem;
			}
		}
		@media (max-width: 800px) {
			a {
				margin: 0.5vh 0;
			}
			grid-column: 1 / span 2;
		}
		@media (max-width: 550px) {
			a {
				margin: 0.3vh 0;
				font-size: 1.1rem;
			}
		}
		@media (max-width: 400px) {
			a {
				margin: 0.2vh 0;
				font-size: 1.5vh;
			}
		}
	}
	.item-4 {
		grid-column: 1 / span 2;
		box-shadow: 0 0 3px var(--fontColor);
    	border-radius: 2rem;
		margin: 5px;
		p {
			padding: 1vh 15vw;
			text-align: justify;
			font-size: 1.3rem;
			@media (max-width: 1800px) {
				padding: 0.5vh 10vw;
			}
			@media (max-width: 1500px) {
				font-size: 1.1rem;
				padding: 0.5vh 5vw;
			}
			@media (max-width: 1000px) {
				padding: 0.5vh 5vw;
			}
			@media (max-width: 800px) {
				font-size: 0.9rem;
			}

			@media (max-width: 550px) {
				font-size: 1.7vh;
			}
		}
	}
	.item-5 {
		grid-column: 1 / span 2;
		display: flex;
		justify-content: space-around;
		width: 100%;
		div{
			background-color: #FEFBF3;
			box-shadow: 0 0 3px var(--fontColor);
    		border-radius: 2rem;
			padding: 1rem;
		}
		h2 {
			color: var(--fontColor);
			font-size: 2rem;
		}
		ul {
			list-style: none;
			font-size: 1rem;

		}

		@media (max-width: 1000px) {
			h2 {
				font-size: 2rem;
			}
		}
		@media (max-width: 800px) {
			h2 {
				font-size: 1.8rem;
			}
		}
		@media (max-width: 550px) {
			h2 {
				font-size: 2vh;
			}
			ul {
				font-size: 1.7vh;
			}
		}
	}
`;
