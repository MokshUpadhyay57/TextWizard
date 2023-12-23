import React, { useState } from "react";
import "../css/TextWizard.css";

const TextWizard = () => {
	const [text, setText] = useState("");

	const onChangeHandler = (event) => {
		setText(event.target.value);
	};

	const upperCaseHandler = () => {
		console.log("UpperCase Button was clicked");
		const newText = text.toUpperCase();
		setText(newText);
	};

	const lowerCaseHandler = () => {
		console.log("LowerCase Button was clicked");
		let newText = text.toLowerCase();
		setText(newText);
	};

	const trimSpaceHandler = () => {
		const newText = text.replace(/\s+/g, ' ').trim();
		console.log(newText);
		setText(newText);
	};

	const clearTextHandler = () => {
		console.log("Clear Text Button was clicked");
		setText("");
	};

	const randomTextHandler = () => {
		console.log("Clear Text Button was clicked");
		const charArray = text.split('');
		for (let i = charArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}
		setText(charArray.join(""));
	};


	return (
		<div className="container">
			<div className="heading">TextWizard - For every word you type</div>
			<div className="mainContainer">
				<textarea
					value={text}
					onChange={onChangeHandler}>
					Please enter some text
				</textarea>
			</div>

			<div className="functionContainer">
				<button onClick={upperCaseHandler}>UpperCase</button>
				<button onClick={lowerCaseHandler}>LowerCase</button>
				<button onClick={trimSpaceHandler}>Trim Space</button>
				<button onClick={clearTextHandler}>Clear Text</button>
				<button onClick={randomTextHandler}>Randomize Text</button>
			</div>

			<div className="summary">
				<h3>Your Text Summary</h3>
				<p>
					You have typed {text.split(/\s+/).filter(Boolean).length} Words and {text.length} Characters and{" "}
					{text.toString().split(/\n+/).filter(Boolean).length} paragraph
				</p>
			</div>
		</div>
	);
};

export default TextWizard;
