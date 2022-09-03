import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;

	align-items: center;
	width: 100%;
	label {
		width: 46%;
		justify-content: center;
	}
`;
export const LabelColor = styled.label`
	margin: 2px;
	width: 90%;
	padding: 10px;

	display: flex;
	justify-content: space-around;

	flex-wrap: no-wrap;
`;
export const MiniNote = styled.div<{ color: string }>`
	margin-left: 0.5vw;
	height: 15px;
	width: 15px;
	background: ${(props) => props.color};

	transform: rotate(6deg);

	border-radius: 0 0 2px/3px 0;

	box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.1),
		inset 0 1.5px 1px rgba(0, 0, 0, 0.05),
		0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
`;

type PropsType = {
	color: string;
	setColor: (e: string) => void;
};

const data = [
	{ name: "yellow", color: "#fbffc1" },
	{ name: "red", color: "#ecb3b3" },
	{ name: "green", color: "#bbe2b0" },
	{ name: "pink", color: "#e4c5dd" },
];

function FormColor(props: PropsType) {
	const handleChange = (e: string) => {
		props.setColor(e);
	};
	return (
		<Container>
			{data.map((element: { name: string; color: string }) => (
				<LabelColor key={element.name} className={element.name}>
					<input
						type='checkbox'
						name={element.name}
						value={element.color}
						checked={element.color === props.color}
						onChange={(e) => {
							handleChange(e.target.value);
						}}></input>
					<MiniNote color={element.color}></MiniNote>
				</LabelColor>
			))}
		</Container>
	);
}

export default FormColor;
