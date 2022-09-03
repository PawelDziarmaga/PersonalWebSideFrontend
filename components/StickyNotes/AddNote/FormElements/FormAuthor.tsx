// import styles
import { Tooltip, Input, TooltipText, Img, LabelText } from "../AddNote.styles";
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
				<Img src='brak' alt='Information sign' />
				<TooltipText>
					Sign must consist between 3 and 10 signs.
				</TooltipText>
			</Tooltip>
		</LabelText>
	);
}

export default FormAuthor;
