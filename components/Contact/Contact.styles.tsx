import styled from "styled-components";

export const Div = styled.div`
	height: 100vh;
	background-color: #eee4ab;
	border-bottom: 5px solid black;
`;
export const H1 = styled.h1`
	padding: 15vh 10% 10vh 10%;
	font-size: 3vw;
	font-weight: normal;
	color: #68a7ad;
	font-family: "Peralta", cursive;
	text-shadow: 0px 0px 15px #ecdbba;
	@media (max-width: 800px) {
		font-size: 4vw;
	}
	@media (max-width: 500px) {
		font-size: 6vw;
	}
`;
export const Form = styled.form`
	.errInput{
		border:2px solid red;
	}`;
export const Container = styled.div`
	margin: 0 auto;
	width: 60vw;
	display: flex;
	justify-content: space-between;

	@media (max-width: 800px) {
		width: 80vw;
	}

`;
export const Label = styled.label``;
export const Input = styled.input`
	padding: 2vh 5%;
	width: 20vw;

	border: none;
	border-bottom: 2px solid #68a7ad;

	background-color: #eee4ab;

	font-size: 1.5vw;
	color: #68a7ad;

	@media (max-width: 800px) {
		width: 30vw;
		font-size: 2vw;
	}
	@media (max-width: 500px) {
		width: 35vw;
		font-size: 3vw;
	}

	&:focus {
		outline: none;
	}
	&::placeholder {
		font-size: 1.5vw;
		color: #68a7ad;
		@media (max-width: 800px) {
			font-size: 2vw;
		}
		@media (max-width: 500px) {
			font-size: 3vw;
		}
	}
`;
export const Textarea = styled.textarea`
	background-color: #eee4ab;
	margin: 5vh 20%;
	min-width: 60%;
	max-width: 60%;
	min-height: 15vh;
	max-height: 30vh;
	border: 2px solid #68a7ad;

	font-size: 1.5vw;
	padding: 1vh 3%;
	color: #68a7ad;

	@media (max-width: 800px) {
		margin: 5vh 10%;
		min-width: 80%;
		max-width: 80%;
		font-size: 2vw;
	}
	@media (max-width: 500px) {
		font-size: 3vw;
	}

	&:focus {
		outline: none;
	}
	&::placeholder {
		font-size: 1.5vw;
		padding: 1vh 3%;
		color: #68a7ad;
		@media (max-width: 800px) {
			font-size: 2vw;
		}
		@media (max-width: 500px) {
			font-size: 3vw;
		}
	}
`;
export const Button = styled.button`
	background-color: #68a7ad;
	color: #eee4ab;
	margin: 0vh 20% 0 60%;
	width: 20%;
	font-size: 2vw;
	height: 5vh;
	border: 2px solid #68a7ad;
	transition: 0.3s;
	@media (max-width: 800px) {
		margin: 0vh 10% 0 60%;
		width: 30%;
		font-size: 3vw;
	}
	@media (max-width: 400px) {
		margin: 0vh 10% 0 50%;
		width: 40%;
		font-size: 4vw;
	}
	&:hover {
		border: 2px solid #68a7ad;
		background-color: #eee4ab;
		color: #68a7ad;
	}
`;
