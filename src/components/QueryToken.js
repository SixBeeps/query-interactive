import React from "react";
import { TokenToImage } from "../helpers/QueryData";

export default class QueryToken extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			timeout: null
		}
	}

	animate() {
		clearTimeout(this.state.timeout);
		this.setState({
			visible: false,
			timeout: setTimeout(() => {
				this.setState({
					visible: true
				});
			}, this.props.idx * 323)
		});
	}
	
	render() {
		return (
			<img src={TokenToImage[this.props.token]} className="query-token" style={{opacity: this.state.visible ? 1 : 0}}></img>
		)
	}
}