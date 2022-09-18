import React from "react"; // import styles
import { Tooltip, Input, TooltipText, LabelText } from "../AddNote.styles";
//import react icons
import { FaQuestionCircle } from "react-icons/fa";
// import types
type PropsType = {
	author: string;
	setAuthor: (e: string) => void;
};

function FormAuthor(props: PropsType) {
	return (
		<LabelText className='FormAuthor'>
			<Input
				type='text'
				placeholder='Sign...'
				value={props.author}
				onChange={(event) => {
					props.setAuthor(event.target.value);
				}}></Input>
			<Tooltip>
				<FaQuestionCircle />
				<TooltipText>
					Sign must consist between 3 and 10 signs.
				</TooltipText>
			</Tooltip>
		</LabelText>
	);
}

export default FormAuthor;
