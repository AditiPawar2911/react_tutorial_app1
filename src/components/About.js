import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroudColor: "white",
  // })
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 105)':'white',
  }
  let cStyle ={
    color: props.mode === 'dark'?'white':'#042743',
    paddingTop: '3px'
  }

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white"
  //     });
  //     setBtnText("Enable Light Mode")
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroudColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode")
  //   }
  // };

  return (
    <div className="container" style={cStyle}>
      <h2 className="my-4">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              CustomText is a text utility to analyze your text quickly and efficiently.
              Convert cases, check word count, preview text paragraphs, and many more.
              It proides a user-friendly interface and can be used by everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            CustomText is a free character counter tool providing instant 
            stats for character and word count in any text. 
            Simply paste or type your text to get clear, concise 
            results.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              CustomText utility works on any web browser such as Google Chrome,
              Firefox, Safari, Opera.
            </div>
          </div> 
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          Enable Dark Mode
        </button>
      </div> */}
    </div>
  );
}
