import styled from "styled-components";

export const Div = styled.div<{ hide: boolean }>`
	position: relative;
	height: 100vh;
	display: grid;
	grid-template-columns: ${(props) => (props.hide ? "20% 80%" : "0% 100%")};
	justify-content: center;
	align-items: center;

	overflow: hidden;

	box-shadow: 0 0px 3vh black;

	@media (max-width: 800px) {
		grid-template-columns: ${(props) =>
			props.hide ? "25% 75%" : "0% 100%"};
	}
	@media (max-width: 500px) {
		grid-template-columns: ${(props) =>
			props.hide ? "35% 65%" : "0% 100%"};
	}
	@media (max-width: 400px) {
		grid-template-columns: ${(props) =>
			props.hide ? "45% 55%" : "0% 100%"};
	}
	.addNote {
		visibility: ${(props) => (props.hide ? "auto" : "hidden")};
	}
`;
export const NotesArea = styled.div<{ img: string }>`
	z-index: 0;
	position: relative;
	height: 100vh;

	background: url(${(props) => props.img});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
`;
export const Button = styled.button`
	position: absolute;
	bottom: 0;
	left: 0;

	z-index: 5;
	margin: 2vh;

	color: #252525;
	font-size: 2vw;
	font-weight: bold;
	font-family: "Baloo 2", cursive;
	text-shadow: 0px 0px 15px #ecdbba;

	font-size: 2vw;

	background-color: #eeeb;
	border: 1px solid #252525;
	border-radius: 4px;
	padding: 10px;
	box-shadow: 4px 4px 10px #252525;
	transition: box-shadow 0.1s;

	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 10px #252525;
	}
	@media (max-width: 1200px) {
		font-size: 1.5vw;
	}
	@media (max-width: 800px) {
		font-size: 2vw;
	}
	@media (max-width: 500px) {
		font-size: 4vw;
	}
`;
