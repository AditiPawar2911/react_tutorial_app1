import React, { useState } from "react";

export default function TextForm(props) {
  const countWords = (str) => {
    let words;
    if (text === "") {
      words = 0;
    } else {
      words = str.trim().split(/\s+/).length;
    }
    return words;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join("  "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
          disabled={text === ""}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
          disabled={text === ""}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClear}
          disabled={text === ""}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          disabled={text === ""}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
          disabled={text === ""}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {countWords(text)} words, {text.length} characters
        </p>
        <p>{0.008 * countWords(text)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
