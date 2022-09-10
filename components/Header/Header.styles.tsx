import styled, { keyframes } from "styled-components";

export const Div = styled.div`
	overflow: hidden;

	position: relative;

	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
export const H1 = styled.h1`
	text-align: center;
	font-size: 3vw;
	color: #252525;
	font-family: "Peralta", cursive;
	text-shadow: 0px 0px 15px #ecdbba;
	@media (max-width: 1000px) {
		font-size: 4vw;
	}
	@media (max-width: 600px) {
		font-size: 5vw;
	}
	@media (max-width: 400px) {
		font-size: 8vw;
	}
`;
export const H2 = styled.h2`
	text-align: right;
	font-size: 1.5vw;
	color: #252525;

	text-shadow: 0px 0px 15px #ecdbba;
	@media (max-width: 1000px) {
		font-size: 2vw;
	}
	@media (max-width: 600px) {
		font-size: 2.5vw;
	}
	@media (max-width: 400px) {
		font-size: 4vw;
	}
`;
export const Line = styled.div`
	margin: 15px;
	height: 2px;
	background-color: #252525;
`;
export const Layout = styled.div`
	z-index: 0;
`;
const sunTravel = keyframes`
	0% {
		left: 0%;
		top: 45vh;
	}
	5% {
		left: 5%;
		top: 40vh;
	}
	15% {
		left: 15%;
		top: 25vh;
	}
	48% {
		left: 40%;
		top: 3vh;
	}
	60% {
		left: 50%;
		top: 1vh;
	}
	70% {
		left: 60%;
		top: 5vh;
	}
	80% {
		left: 70%;
		top: 10vh;
	}
	85% {
		left: 75%;
		top: 20vh;
	}
	90% {
		left: 80%;
		top: 35vh;
	}
	93% {
		left: 84%;
		top: 42.5vh;
	}
	95% {
		visibility: hidden;
	}
	96% {
		left: 84%;
		top: 50vh;
		visibility: hidden;
	}
	97% {
		left: 84%;
		top: 80vh;
		visibility: hidden;
	}
	98% {
		left: 0%;
		top: 80vh;
	}
	100% {
		left: 0%;
		top: 45vh;
	}
`;
const night = keyframes`
	0% {
		background-color: rgba(10, 10, 10, 0.3);
	}
	5% {
		background-color: rgba(10, 10, 10, 0.1);
	}
	10% {
		background-color: rgba(10, 10, 10, 0);
	}

	80% {
		background-color: rgba(10, 10, 10, 0);
	}
	85% {
		background-color: rgba(10, 10, 10, 0.1);
	}
	90% {
		background-color: rgba(10, 10, 10, 0.3);
	}
	95% {
		background-color: rgba(5, 5, 5, 0.5);
	}
	100% {
		background-color: rgba(10, 10, 10, 0.3);
	}
`;

interface PropsType {
	readonly zIndex: number;
	readonly top: string;
	readonly right: string;
	readonly bottom: string;
	readonly left: string;
	readonly width: string;
	readonly height: string;
	readonly imgUrl: string;
	readonly animation: string;
}

export const BackgroundIMG = styled.div.attrs<PropsType, PropsType>(
	(props) => ({
		zIndex: props.zIndex || 0,
		top: props.top || "auto",
		right: props.right || "auto",
		bottom: props.bottom || "0",
		left: props.left || "auto",
		width: props.width || "100%",
		height: props.height || "100%",
		imgUrl: props.imgUrl || "none",
		animation: props.animation || "none",
	})
)`
	position: absolute;
	z-index: ${(props) => props.zIndex};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};

	width: ${(props) => props.width};
	height: ${(props) => props.height};

	background: url(${(props) => props.imgUrl});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	transition: height 0.1s;

	animation: ${(props) => {
			if (props.animation === "sunTravel") {
				return sunTravel;
			} else if (props.animation === "night") return night;
		}}
		100s linear infinite normal;
`;
