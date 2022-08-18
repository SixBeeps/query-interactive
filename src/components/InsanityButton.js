import React from "react";
import { Question } from "../assets/asset-manifest";

export default function InsanityButton(props) {
	const [active, setActive] = React.useState(false);

	return active ? (<></>) : (
		<div className="insanity-button">
			<button onClick={() => {
				props.onClick();
				setActive(true);
			}}>
				<img src={Question} className="insanity-button-image" />
			</button>
		</div>
	)
}