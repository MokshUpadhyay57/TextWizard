import React, { useState } from 'react';
import '../css/TextUtils.css';


const TextUtil = () => {

    const [text, setText] = useState('');

    const upperCaseHandler = () => {
        console.log("UpperCase Button was clicked")
        const newText = text.toUpperCase();
        setText(newText)
    }


    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    const lowerCaseHandler = () => {
        console.log("LowerCase Button was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }


    const trimSpaceHandler = () => {
        console.log("TrimSpace Button was clicked")

    }


    const countHandler = () => {
        console.log("Count Button was clicked")
        let newText = text.toString().split(" ").length - 1;
        setText(newText)
    }


    const clearTextHandler = () => {
        console.log("Clear Text Button was clicked")
        setText('')
    }



    return (
        <div className="container">
            <div className="heading">
                TextUtils - For every word you type
            </div>
            <div className="mainContainer">
                <textarea rows="20" cols="150" value={text} onChange={onChangeHandler}>Please enter some text</textarea>
            </div>
            <div className="functionContainer">
                <button onClick={upperCaseHandler}>UpperCase</button>
                <button onClick={lowerCaseHandler}>LowerCase</button>
                <button onClick={trimSpaceHandler}>Trim Space</button>
                <button onClick={countHandler}>Count</button>
                <button onClick={clearTextHandler}>Clear Text</button>

            </div>

        </div >
    );
};

export default TextUtil;