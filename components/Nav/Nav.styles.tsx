import styled from "styled-components";

export const Div = styled.div<{ opa: boolean }>`
	z-index: 5;
	background-color: ${(props) => (props.opa ? "#eeec" : "#eee1")};
	box-shadow: 0 0 ${(props) => (props.opa ? "15px" : "0")} grey;
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
	padding: 0;
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
export const Li = styled.li`
	list-style: none;
	a {
		background-color: #ffffff66;
		text-decoration: none;
		text-align: center;
		font-size: 1vw;
		color: #252525;

		text-shadow: 0px 0px 15px #ecdbba;

		border: 1px solid #252525;
		padding: 10px;
		box-shadow: 2px 2px 5px #252525;

		transition: 0.3s;
		@media (max-width: 1000px) {
			font-size: 2vw;
		}
		@media (max-width: 600px) {
			font-size: 2.5vw;
		}
		@media (max-width: 400px) {
			font-size: 3vw;
			padding: 2vw;
		}
	}
`;
