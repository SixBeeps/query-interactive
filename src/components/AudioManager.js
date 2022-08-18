import React from "react";
import { Howl, Howler } from 'howler';
import { GoodSound, BadSound, QuestionSound, InsaneSound } from "../assets/asset-manifest";

export default class AudioManager extends React.Component {
	constructor(props) {
		super(props);
		this.sounds = {
			"good": new Howl({
				src: [GoodSound]
			}),
			"bad": new Howl({
				src: [BadSound]
			}),
			"question": new Howl({
				src: [QuestionSound]
			}),
			"insane": new Howl({
				src: [InsaneSound]
			})
		};
	}

	play(sound) {
		this.sounds[sound].stop();
		this.sounds[sound].play();
	}

	render() {
		return (
			<div className="audio-manager">
				{this.props.children}
			</div>
		)
	}
}