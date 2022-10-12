
import React from "react";
// import styles
import { Div, Circles,Shadows, Circle , Shadow} from "./Loader.styles";
//framermotion - animation
import {  AnimatePresence } from "framer-motion"
function Loader() {
	return (
		<AnimatePresence>
			<Div 	
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<Circles>
					<Circle/>
					<Circle/>
					<Circle/>
				</Circles>
				<Shadows>
					<Shadow/>
					<Shadow/>
					<Shadow/>
				</Shadows>
				<p>Loading...</p>
		
		</Div>
		</AnimatePresence>
	);
}

export default Loader;
