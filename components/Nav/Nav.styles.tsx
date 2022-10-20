import styled from "styled-components";
import { motion } from "framer-motion";
export const Div = styled.div`
	z-index: 5;

	position: fixed;
	top: 0;
	right: 0;

	width: 100%;
	height: 8vh;

	padding-right: 2%;

	display: flex;
	justify-content: right;
	align-items: center;

	transition: background-color 0.5s, box-shadow 0.8s;

	@media (max-height: 600px) {
		height: 12vh;
	}
	@media (max-height: 400px) {
		height: 20vh;
	}
	@media (max-height: 250px) {
		height: 30vh;
	}
`;
export const Ul = styled.ul`
	display: flex;
	justify-content: space-around;
	align-content: center;
	width: 50%;
	
	@media (max-width: 1000px) {
		width: 70%;
	}
	@media (max-width: 650px) {
		width: 90%;
	}
	@media (max-width: 450px) {
		width: 100%;
	}
`;
export const Li = styled(motion.li)`
	list-style: none;
	a {	
		text-align: center;
		font-size: 2vw;
		color: var(--fontColor);

		text-transform: lowercase;
		font-weight: bold;

		border-bottom: 1px solid var(--fontColor);
		transition: .2s;
		&:hover{
			color: #575757;
			border-bottom: 4px solid #575757;
		}
		@media (max-width: 1000px) {
			font-size: 3vw;
		}
		@media (max-width: 600px) {
			font-size: 3.5vw;
		}
		@media (max-width: 400px) {
			font-size: 4vw;
			padding: 2vw;
		}
	}
`;
