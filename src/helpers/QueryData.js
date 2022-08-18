import * as Assets from '../assets/asset-manifest';

export const Tokens = {
	Yes: "Yes",
	No: "No",
	And: "And",
	Or: "Or",
	Yields: "Yields",
	Question: "Question"
};

export const TokenToImage = {
	Yes: Assets.Yes,
	No: Assets.No,
	And: Assets.And,
	Or: Assets.Or,
	Yields: Assets.Yields,
	Question: Assets.Question
};

export function generateRandomQuery(includeQuestion) {
	let parameters = []; // Parameters used in the query
	let operators = []; // Operators used in the query
	let result = false; // Result of the query

	for (let i = 0; i < 3; i++) {
		// Pushes either Tokens.Yes or Tokens.No to parameters array
		parameters.push(Math.random() > 0.5 ? Tokens.Yes : Tokens.No);
	}

	for (let i = 0; i < 2; i++) {
		// Pushes either Tokens.And or Tokens.Or to operators array
		operators.push(Math.random() > 0.5 ? Tokens.And : Tokens.Or);
	}

	// If includeQuestion is true, set a random parameter to Tokens.Question and result in a question
	if (includeQuestion === true) {
		parameters[Math.floor(Math.random() * 3)] = Tokens.Question;
		result = undefined;
	} else {
		// If the first operator is Tokens.And, set result to true if the first parameter is Tokens.Yes and the second parameter is Tokens.Yes
		// If the first operator is Tokens.Or, set result to true if the first parameter is Tokens.Yes or the second parameter is Tokens.Yes
		if (operators[0] === Tokens.And) {
		result = parameters[0] === Tokens.Yes && parameters[1] === Tokens.Yes;
		} else {
		result = parameters[0] === Tokens.Yes || parameters[1] === Tokens.Yes;
		}

		// If the second operator is Tokens.And, set result to true if the result is true and the second parameter is Tokens.Yes
		// If the second operator is Tokens.Or, set result to true if the result is true or the second parameter is Tokens.Yes
		if (operators[1] === Tokens.And) {
		result = result && parameters[2] === Tokens.Yes;
		}
		else {
		result = result || parameters[2] === Tokens.Yes;
		}
	}

	// If the result is true, set it to Tokens.Yes. If it is false, set it to Tokens.No. If it is undefined, set it to Tokens.Question
	if (result === undefined) result = Tokens.Question;
	else result = result ? Tokens.Yes : Tokens.No;

	// Finally, return the query
	return [ parameters[0], operators[0], parameters[1], operators[1], parameters[2], Tokens.Yields, result ];
}