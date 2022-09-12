import styled from "styled-components";

type PropsType = {
	color: string;
	x: number;
	y: number;
	rotate: string;
	position: string;
};

export const DivNote = styled.div.attrs<PropsType, PropsType>((props) => ({
	color: props.color,
	x: props.x || 0,
	y: props.y || 0,
	rotate: props.rotate || "0deg",
	position: props.position || "absolute",
}))`
	cursor: move;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 13vw;
	width: 13vw;

	position: ${(props) => props.position};
	top: ${(props) => props.y}%;
	left: ${(props) => props.x}%;

	background: ${(props) => props.color};
	transform: rotate(${(props) => props.rotate});
	border-radius: 0 0 2.5vw/3vw 0;
	box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.1),
		inset 0 15px 10px rgba(0, 0, 0, 0.05), 5px 5px 5px rgba(0, 0, 0, 0.2);

	&:before {
		content: "";
		display: block;
		position: absolute;
		width: 1.5vw;
		height: 2vw;
		background: ${(props) => props.color};
		box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.2),
			inset -10px -10px 10px rgba(0, 0, 0, 0.3);
		right: 0;
		bottom: 0;
		z-index: 2;
		transform: skewX(-25deg);
	}

	p {
		font-size: 1.8vw;
		padding: 1vw 0.5vw;
		font-family: "Caveat", cursive;
		user-select: none;
		@media (max-width: 1000px) {
			font-size: 2.2vw;
		}
		@media (max-width: 600px) {
			font-size: 2.8vw;
		}
		@media (max-width: 500px) {
			font-size: 4vw;
		}
		@media (max-width: 400px) {
			font-size: 5vw;
		}
	}
	p.date {
		position: absolute;
		top: 0;
		right: 0;

		padding: 0 0.4vw;

		font-size: 1.5vw;
		@media (max-width: 1000px) {
			font-size: 1.8vw;
		}
		@media (max-width: 600px) {
			font-size: 2.4vw;
		}
		@media (max-width: 500px) {
			font-size: 3vw;
		}
		@media (max-width: 400px) {
			font-size: 3.5vw;
		}
	}
	p.author {
		position: absolute;
		bottom: 0;
		right: 0;

		padding: 0 2vw;

		font-size: 1.5vw;
		@media (max-width: 1000px) {
			font-size: 1.8vw;
		}
		@media (max-width: 600px) {
			font-size: 2.4vw;
		}
		@media (max-width: 500px) {
			font-size: 3vw;
		}
		@media (max-width: 400px) {
			font-size: 3.5vw;
		}
	}
	@media (max-height: 600px) {
		height: 30vh;
		width: 30vh;
	}
	@media (max-width: 1200px) {
		height: 15vw;
		width: 15vw;
	}
	@media (max-width: 1000px) {
		height: 18vw;
		width: 18vw;
	}
	@media (max-width: 800px) {
		height: 20vw;
		width: 20vw;
	}
	@media (max-width: 600px) {
		height: 22vw;
		width: 22vw;
	}
	@media (max-width: 500px) {
		height: 30vw;
		width: 30vw;
	}
	@media (max-width: 400px) {
		height: 40vw;
		width: 40vw;
	}
`;

export const DrawingPin = styled.div<{ img: string }>`
	height: 2vw;
	width: 3vw;

	background: url(${(props) => props.img});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	position: absolute;
	top: 0;
	left: 20%;
`;
