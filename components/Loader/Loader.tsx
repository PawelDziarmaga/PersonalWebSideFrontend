import React from "react";
// import styles
import { Div} from "./Loader.styles";

function Loader() {



	return (
		<Div>
			<div className="wrapper">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="shadow"></div>
				<div className="shadow"></div>
				<div className="shadow"></div>
				<span>Loading</span>
			</div>
		</Div>
	);
}

export default Loader;
