// import hooks
import { useState } from "react";
//Import Redux and store and action
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { addNote } from "../../../state/notesSlice";
// import components
import FormText from "./FormElements/FormText";
import FormAuthor from "./FormElements/FormAuthor";
import FormColor from "./FormElements/FormColor";

// import styles
import { Div, H1, Form, Button } from "./AddNote.styles";
import { DivNote, DrawingPin } from "../Note/Note.styles";
//import data from strapi
import { useQuery } from "urql";
import { NOTE_PAGE } from "../../../lib/query";
function AddNote() {
	//Redux
	const dispatch = useDispatch<AppDispatch>();
	const notesSlice = useSelector((state: RootState) => state.notesSlice);
	//State
	const [text, setText] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [color, setColor] = useState<string>("#F9FFA4");
	//Fetch result from strapi
	const [result] = useQuery({ query: NOTE_PAGE });
	const { data, fetching, error } = result;
	if (fetching) return <Div img={"brak"}> Loading...</Div>;
	if (error) return <Div img={"brak"}>Oh no... </Div>;
	const deskURL =
		data.notePage.data.attributes.Desk.data.attributes.formats.small.url;
	const pinURL =
		data.notePage.data.attributes.Pin.data.attributes.formats.small.url;
	//Generate unique ID
	let id = 0;
	const generateId = () => {
		let ids: number[] = [];
		notesSlice.forEach((element: { id: number }) => {
			ids.push(element.id);
		});
		ids.sort((a, b) => b - a);
		id = ids[0] ? ids[0] + 1 : id + 1;
	};
	//Generate date
	const months = [
		"jan",
		"frb",
		"mar",
		"apr",
		"may",
		"jun",
		"jul",
		"aug",
		"sep",
		"oct",
		"nov",
		"dec",
	];
	const now = new Date();
	const day = now.getDate();
	const month = months[now.getMonth()];
	const year =
		now.getFullYear().toString()[2] + now.getFullYear().toString()[3];
	const date = day + " " + month + " " + year + "r.";

	const addNewNote = (e: any) => {
		e.preventDefault();
		generateId();
		const newElement = {
			id: id,
			text: text,
			author: author,
			date: date,
			color: color,
			x: 45,
			y: 45,
			rotate: Math.floor(Math.random() * 60) - 30 + "deg",
		};
		//clear Form
		setText("");
		setAuthor("");
		setColor("#F9FFA4");
		dispatch(addNote(newElement));
	};

	return (
		<Div className='addNote' img={deskURL}>
			<H1>Add new note</H1>
			<Form>
				<FormText text={text} setText={setText} />
				<FormAuthor author={author} setAuthor={setAuthor} />
				<FormColor color={color} setColor={setColor} />
				<Button
					onClick={(e) => {
						addNewNote(e);
					}}>
					Add note
				</Button>
			</Form>
			<DivNote color={color} position='auto'>
				<DrawingPin img={pinURL}></DrawingPin>
				<p className='date'>{date}</p>
				<p className='text'>{text}</p>
				<p className='author'>{author}</p>
			</DivNote>
		</Div>
	);
}

export default AddNote;
