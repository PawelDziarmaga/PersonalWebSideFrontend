import axious from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// Import initaial state and type
import { noteList, initialStateType } from "./initialSTate";
//Api
//import { postData, getData } from "../api/index";

let initialState = noteList;

//update initial stat by data from localStorage
/*const ISSERVER = typeof window === "undefined";*/
let initialStateLocalStorage: string | any[] = [];
/*if (!ISSERVER) {
	initialStateLocalStorage = JSON.parse(
		localStorage.getItem("initialStateList") || "{}"
	);
}*/
//Assigning the value of initial state if not present in local storage
if (initialStateLocalStorage.length > 0) {
	initialState = initialStateLocalStorage;
}

export const asyncData = createAsyncThunk("users/fetchByIdStatus", async () => {
	const { data } = await axious.get("http://127.0.0.1:8888/notes", {});
	console.log(data.noteList);
	return data.noteList;
});

const listSLice = createSlice({
	name: "List",
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<initialStateType>) => {
			state.push(action.payload);
			localStorage.setItem("initialStateList", JSON.stringify(state));
			//postData(action.payload);
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
	extraReducers: (builder) => {
		builder.addCase(
			asyncData.fulfilled,
			(state, action: PayloadAction<initialStateType[]>) => {
				state = action.payload;
			}
		);
	},
});

export const { addNote, removeNote, movwNote } = listSLice.actions;
export default listSLice.reducer;
