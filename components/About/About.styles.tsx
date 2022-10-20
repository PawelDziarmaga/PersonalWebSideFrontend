import styled from "styled-components";

export const Div = styled.div`
	height: 100vh;
	padding: 0 20%;
	background-color: #fefbf6;


	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: var(--fontColor);
	font-weight: 500;
	
	box-shadow: 0 0px 3vh black;
	
	@media (max-width: 1300px) {
		padding: 0 10%;
	}
	@media (max-width: 750px) {
		padding: 0 5%;
	}
`;
export const HeaderBox = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-around;

	img {
		height: 20vh;
	}
	h2 {
		text-align: center;
		font-size: 2.5rem;
	}
	@media (max-width: 1000px) {
		img {
			height: 15vh;
		}
	}
	@media (max-width: 600px) {
		align-items: center;
		display: block;
		h2 {
			font-size: 2rem;
			width: 80vw;
		}
	}
`;

export const ParagraphBoxOne = styled.div`
	display: flex;
	align-items: center;

	img {
		height: 20vh;
	}
	p {
		font-size: 2rem;
		}
	@media (max-width: 1000px) {
		img {
			height: 15vh;
		}
		p {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 600px) {
		img {
			height: 15vh;
		}
		p {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 400px) {
		p {
			font-size: 0.9rem;
		}
	}
`;
export const ParagraphBoxTwo = styled.div`
	display: flex;
	align-items: center;

	padding: 1rem;
	box-shadow: 0 0 3px var(--fontColor);
    border-radius: 2rem;

	margin-bottom: 5vh;
	img {
		height: 25vh;
	}
	p {
		color: #3d3c42;
		font-size: 2rem;
	}
	@media (max-width: 1000px) {
		img {
			height: 20vh;
		}
		p {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 600px) {
		img {
			height: 18vh;
		}
		p {
			font-size: 1.1rem;
		}
	}
	@media (max-width: 400px) {
		p {
			font-size: 0.9rem;
		}
	}
`;

export const ParagraphBoxIMG = styled.div`
	display: flex;
	align-items: center;
	img {
		height: 30vh;
	}
	p {
		color: #3d3c42;
		font-size: 2rem;
		font-weight: bold;
	}
	@media (max-width: 1000px) {
		img {
			height: 25vh;
		}
		p {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 750px) {
		img {
			height: 17vh;
		}
		p {
			font-size: 1.3rem;
		}
	}
	@media (max-width: 550px) {
		flex-direction: column;
		p {
			text-align: center;
		}
		img {
			text-align: center;
		}
	}
`;
