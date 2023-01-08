import React, { useState } from 'react';
import '../css/TextUtils.css';


const TextUtil = () => {

    const [text, setText] = useState('');

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    const upperCaseHandler = () => {
        console.log("UpperCase Button was clicked")
        const newText = text.toUpperCase();
        setText(newText)
    }



    const lowerCaseHandler = () => {
        console.log("LowerCase Button was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }


    const trimSpaceHandler = () => {
        console.log("TrimSpace Button was clicked")
        let newText = text.split(" ")
        console.log(newText)
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
                <textarea
                    rows="20"
                    cols="120"
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
            </div>

            <div className="summary">
                <h3>Your Text Summary</h3>
                <p>You have typed {text.toString().split(" ").length} Words and {text.length} Characters.</p>
            </div>

        </div >
    );
};

export default TextUtil;