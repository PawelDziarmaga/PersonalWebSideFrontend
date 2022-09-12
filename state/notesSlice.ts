import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Import initaial state and type
import { noteList, initialStateType } from "./initialSTate";

let initialState = noteList;

const listSLice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<initialStateType>) => {
			state.push(action.payload);
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
		removeNote(state, action: PayloadAction<number>) {
			const index = state.findIndex((x) => x.id === action.payload);
			state.splice(index, 1);
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
		movwNote(
			state,
			action: PayloadAction<{
				id: number;
				x: number;
				y: number;
			}>
		) {
			const element = state.filter((x) => x.id === action.payload.id);
			const index = state.findIndex((x) => x.id === action.payload.id);
			state.splice(index, 1);
			element[0].x = action.payload.x;
			element[0].y = action.payload.y;
			state.push(element[0]);
			localStorage.setItem("initialStateList", JSON.stringify(state));
		},
	},
});

export const { addNote, removeNote, movwNote } = listSLice.actions;
export default listSLice.reducer;
