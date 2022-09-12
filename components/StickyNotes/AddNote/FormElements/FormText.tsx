// import styles
import {
	Tooltip,
	Textarea,
	TooltipText,
	Img,
	LabelText,
} from "../AddNote.styles";
//import react icons
import { FaQuestionCircle } from "react-icons/fa";
// import types
type PropsType = {
	text: string;
	setText: (e: string) => void;
};

function FormText(props: PropsType) {
	return (
		<LabelText className='FormText'>
			<Textarea
				rows={3}
				placeholder='Your note...'
				value={props.text}
				onChange={(event) => {
					props.setText(event.target.value);
				}}></Textarea>
			<Tooltip>
				<FaQuestionCircle />
				<TooltipText>
					Note must consist between 5 and 50 signs.
				</TooltipText>
			</Tooltip>
		</LabelText>
	);
}

export default FormText;
