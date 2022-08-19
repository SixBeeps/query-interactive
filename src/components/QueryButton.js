import React from "react";
import { Logo } from "../assets/asset-manifest";

export default class QueryButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="query-button">
				<button onClick={() => this.props.onClick()}>
					<img src={Logo} className="query-button-image" alt="QUERY" />
				</button>
			</div>
		)
	}
}