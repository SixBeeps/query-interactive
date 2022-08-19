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
			visible: this.props.idx === 0, // Skip setting first token as invisible to prevent 1ms "flash" from happening
			timeout: setTimeout(() => {
				this.setState({
					visible: true
				});
			}, this.props.idx * 323)
		});
	}
	
	render() {
		return (
			<img src={TokenToImage[this.props.token]} className="query-token" style={{opacity: this.state.visible ? 1 : 0}} alt="Token"></img>
		)
	}
}