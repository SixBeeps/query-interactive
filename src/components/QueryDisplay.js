import React from 'react';
import QueryToken from './QueryToken';
import {Tokens} from '../helpers/QueryData';

export default class QueryDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.tokens = [];
	}

	animate() {
		this.tokens.forEach(token => {
			if (token === null || token === undefined) return;
			token.animate();
		});
	}

	render() {
		return (
			<div className="query-display">
				{this.props.query.map((token, index) => {
					return (
						<QueryToken key={index} token={token} idx={index} ref={me => this.tokens[index] = me} />
					)
				})}
			</div>

		)
	}
}