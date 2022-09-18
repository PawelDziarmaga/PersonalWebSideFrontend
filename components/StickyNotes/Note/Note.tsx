import React from "react";
// import hooks
import { useState } from "react";
//Import Redux and store and action
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import { movwNote } from "../../../state/notesSlice";
//import data from strapi
import { useQuery } from "urql";
import { NOTE_PAGE } from "../../../lib/query";
// import styles
import { DivNote, DrawingPin } from "./Note.styles";

type PropsType = {
	data: {
		id: number;
		text: string;
		author: string;
		date: string;
		color: string;
		x: number;
		y: number;
		rotate: string;
	};
};
type DragType = {
	touches: { clientX: number; clientY: number }[];
	changedTouches: { clientX: number; clientY: number }[];
	pageX: number;
	pageY: number;
};

function Note(props: PropsType) {
	//REDUX
	const dispatch = useDispatch<AppDispatch>();
	//state
	const [positionX, setPositionX] = useState<number>(props.data.x);
	const [positionY, setPositionY] = useState<number>(props.data.y);
	//Fetch result from strapi
	const [result] = useQuery({ query: NOTE_PAGE });
	const { data, fetching, error } = result;
	if (fetching) return <DivNote> Loading...</DivNote>;
	if (error) return <DivNote>Oh no... </DivNote>;
	const pinURL =
		data.notePage.data.attributes.Pin.data.attributes.formats.small.url;

	let dragStartX = props.data.x;
	let dragStartY = props.data.y;

	const dragStart = (e: any) => {
		//find drag start coordinates for touch and click
		if (e.pageX !== undefined) {
			dragStartX = e.pageX;
			dragStartY = e.pageY;
		} else if (e.touches !== undefined) {
			dragStartX = e.touches[0].clientX;
			dragStartY = e.touches[0].clientY;
		}
	};

	const dragEnd = (e: any) => {
		//find drag end coordinates for touch and click
		let dragEndX = 0;
		let dragEndY = 0;
		if (e.pageX !== undefined) {
			dragEndX = e.pageX;
			dragEndY = e.pageY;
		} else if (e.touches !== undefined) {
			dragEndX = e.changedTouches[0].clientX;
			dragEndY = e.changedTouches[0].clientY;
		}

		//Calculation of the horizontal movement
		const width = window.innerWidth;
		const moveWidth = ((dragStartX - dragEndX) * 100) / (width * 0.8);

		//Defining the extreme points for horizontal movement
		let newPossitionX = positionX - moveWidth;
		if (newPossitionX < 0) {
			newPossitionX = 0;
		}
		if (newPossitionX > 85) {
			newPossitionX = 85;
		}
		setPositionX(newPossitionX);

		//Calculation of the vertical movement
		const height = window.innerHeight;
		const moveHeight = ((dragStartY - dragEndY) * 100) / height;

		//Defining the extreme points for vertical movement
		let newPossitionY = positionY - moveHeight;
		if (newPossitionY < 10) {
			newPossitionY = 10;
		}
		if (newPossitionY > 85) {
			newPossitionY = 85;
		}

		setPositionY(newPossitionY);

		//Updating data in redux
		const newElement = {
			id: props.data.id,
			y: newPossitionY,
			x: newPossitionX,
		};

		dispatch(movwNote(newElement));
	};

	return (
		<DivNote
			draggable='true'
			onDragStart={(e) => dragStart(e)}
			onDragEnd={(e) => dragEnd(e)}
			onTouchStart={(e) => dragStart(e)}
			onTouchEnd={(e) => dragEnd(e)}
			color={props.data.color}
			x={positionX}
			y={positionY}
			rotate={props.data.rotate}>
			<DrawingPin img={pinURL}></DrawingPin>
			<p className='date'>{props.data.date}</p>
			<p className='text'>{props.data.text}</p>
			<p className='author'>{props.data.author}</p>
		</DivNote>
	);
}

export default Note;
