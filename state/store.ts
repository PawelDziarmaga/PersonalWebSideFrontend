import { configureStore } from "@reduxjs/toolkit";

import notesSlice from "./notesSlice";

import { combineReducers } from "redux";

const reducers = combineReducers({
	notesSlice,
});

export const store = configureStore({
	reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
