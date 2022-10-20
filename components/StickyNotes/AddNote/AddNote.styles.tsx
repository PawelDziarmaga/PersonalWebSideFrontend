import styled from "styled-components";

export const Div = styled.div<{ img: string }>`
	height: 100vh;
	padding: 5%;

	box-shadow: 2px 2px 5px #252525;

	background: url(${(props) => props.img});
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	border-right: 2px solid var(--fontColor);
`;

export const H1 = styled.h1`
	background-color: #eeeb;
	border: 1px solid #252525;
	padding: 10px;
	box-shadow: 2px 2px 5px #252525;

	color: #252525;
	font-size: 2vw;
	font-weight: normal;
	font-family: 'Baloo 2', cursive;
	text-shadow: 0px 0px 15px #ecdbba;

	text-align: center;
	margin-top: 8vh;

	@media (max-width: 500px) {
		font-size: 4vw;
	}
	@media (max-height: 600px) {
		margin-top: 12vh;
	}
	@media (max-height: 400px) {
		margin-top: 20vh;
	}
	@media (max-height: 250px) {
		margin-top: 30vh;
	}
`;
export const Form = styled.form`
	background-color: #eeeb;
	box-shadow: 0 0 5px grey;
	border-radius: 5px;
	color: grey;

	display: flex;
	justify-content: space-around;

	flex-wrap: wrap;

	margin: 5vh auto;
`;
export const LabelText = styled.label`
	margin: 2px;
	width: 90%;
	padding: 10px;

	display: flex;
	justify-content: space-between;

	flex-wrap: no-wrap;
	@media (max-width: 1000px) {
		margin: 2px 0;
		width: 100%;
		padding: 5px;
	}
`;
export const Button = styled.button`
	margin: 2vh;
	background-color: white;
	color: grey;
	font-size: 1vw;
	padding: 1vh 2vw;
	border-radius: 5px;
	box-shadow: none;
	border: 1px solid lightgrey;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 4px grey;
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
export const Input = styled.input`
	height: 30px;
	border: 1px solid grey;
	border-radius: 4px;
	padding-left: 10%;
	width: 85%;
`;
export const Textarea = styled.textarea`
	min-height: 50px;
	max-height: 40vh;
	border: 1px solid grey;
	border-radius: 4px;
	padding-left: 10%;
	min-width: 65%;
	max-width: 85%;
`;
export const Tooltip = styled.div`
	position: relative;

	&:hover span {
		visibility: visible;
		opacity: 1;
	}
	svg {
		color: grey;
	}
`;

export const TooltipText = styled.span`
	visibility: hidden;

	width: 15vw;
	padding: 5px;
	border-radius: 4px;
	background-color: #555;

	color: #fff;
	text-align: center;

	position: absolute;
	z-index: 1;
	top: -7.5px;
	left: 30px;

	opacity: 0;
	transition: opacity 0.3s;
	@media (max-width: 800px) {
		width: 30vw;
	}
	@media (max-width: 500px) {
		width: 50vw;
	}
	@media (max-width: 350px) {
		width: 60vw;
	}
	&:after {
		content: "";
		position: absolute;
		top: calc(50% - 5px);
		left: -10px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent #555 transparent transparent;
	}
`;
export const Img = styled.img`
	height: 20px;
	margin-top: 5px;
	@media (max-width: 600px) {
		height: 14px;
		margin-top: 8px;
	}
`;
