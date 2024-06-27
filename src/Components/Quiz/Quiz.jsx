import React from "react";

import Quiz from "./Quiz/Quiz.css";

function Quiz() {
  return 
  <div className="container">
    <h1>QUiz App</h1>
    <hr />
    <h2>Which Device is required for the Internet connection?</h2>
    <ul>
        <li>Modern</li>
        <li>Router</li>
        <li>Lan Cable</li>
        <li>Pen Drive</li>
    </ul>
    <button>Next</button>
    <div className="index">1 of 5 questions</div>
  </div>
}

export default Quiz;
