//import hooks
import { useState } from "react";
//Import Redux and store and action
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
// import styles
import { Div, NotesArea, Button } from "./StickyNotes.styles";
// import components
import Note from "./Note/Note";
import AddNote from "./AddNote/AddNote";

function StickyNotes() {
	//state
	const [hide, setHide] = useState(false);
	const hideAddNotePanel = () => {
		setHide((prev) => !prev);
	};
	//Redux
	let notesSlice = useSelector((state: RootState) => state.notesSlice);
	//Create elements
	if (notesSlice.length > 20) {
		notesSlice = notesSlice.slice(
			notesSlice.length - 20,
			notesSlice.length
		);
	}
	let elements;
	if (notesSlice.length === 0) {
		elements = <div>Brak elementó</div>;
	} else if (notesSlice.length === 1) {
		elements = <Note key={notesSlice[0].id} data={notesSlice[0]} />;
	} else {
		elements = notesSlice.map((note) => <Note key={note.id} data={note} />);
	}

	return (
		<Div hide={hide} id='Comment'>
			<AddNote />
			<NotesArea img={"brak"}>{elements}</NotesArea>
			<Button onClick={hideAddNotePanel}>
				{hide ? "<--- Hide" : "New note!"}
			</Button>
		</Div>
	);
}

export default StickyNotes;
