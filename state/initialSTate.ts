//define initail state
export type initialStateType = {
	id: number;
	text: string;
	author: string;
	date: string;
	color: string;
	x: number;
	y: number;
	rotate: string;
};

export const noteList = [
	{
		id: 1,
		text: "You can add your own note!",
		author: "Paweł",
		date: "11 sep 22r.",
		color: "#fbffc1",
		x: 10,
		y: 10,
		rotate: "6deg",
	},
	{
		id: 2,
		text: "It will only be visible to you!",
		author: "Paweł",
		date: "11 sep 22r.",
		color: "#ecb3b3",
		x: 45,
		y: 50,
		rotate: "0deg",
	},
	{
		id: 3,
		text: "You can move it!",
		author: "Paweł",
		date: "11 sep 22r.",
		color: "#bbe2b0",
		x: 70,
		y: 60,
		rotate: "-6deg",
	},
] as initialStateType[];
