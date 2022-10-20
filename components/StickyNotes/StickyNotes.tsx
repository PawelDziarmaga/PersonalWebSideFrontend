import React from "react";
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
//import data from strapi
import { useQuery } from "urql";
import { NOTE_PAGE } from "../../lib/query";

function StickyNotes() {
	//state
	const [hide, setHide] = useState(false);
	//Redux
	let notesSlice = useSelector((state: RootState) => state.notesSlice);
	//Fetch result from strapi
	const [result] = useQuery({ query: NOTE_PAGE });
	const { data, fetching} = result;
	if (fetching) return <Div hide={hide} id='Comment'></Div>;
	console.log(data.notePage.data.attributes.Board.data.attributes.formats)
	const boardURL =
		data.notePage.data.attributes.Board.data.attributes.formats.medium.url;
	//Create elements
	const notesLenght = notesSlice.length;
	if (notesLenght > 20) {
		notesSlice = notesSlice.slice(notesLenght - 20, notesLenght);
	}
	const notes = notesSlice.length
		? notesSlice.map((note) => <Note key={note.id} data={note} />)
		: null;

	return (
		<Div hide={hide} id='Comment'>
			<AddNote />
			<NotesArea img={boardURL}>{notes}</NotesArea>
			<Button onClick={() => setHide((prev) => !prev)}>
				{hide ? "<--- Hide" : "New note!"}
			</Button>
		</Div>
	);
}

export default StickyNotes;
