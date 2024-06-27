import React, { useRef, useState } from "react";
import "./Quiz/Quiz.css";
import { data } from "../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);

  const optionRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const question = data[index];

  const checkAns = (e, ans) => {
    if (!lock) {
      const correct = question.ans === ans;
      e.target.classList.add(correct ? "correct" : "wrong");
      if (!correct) {
        optionRefs.current[question.ans - 1].current.classList.add("correct");
      }
      setScore((prev) => prev + (correct ? 1 : 0));
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
      } else {
        setIndex((prev) => prev + 1);
        setLock(false);
        optionRefs.current.forEach((ref) => ref.current.classList.remove("wrong", "correct"));
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    optionRefs.current.forEach((ref) => ref.current.classList.remove("wrong", "correct"));
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>You Scored {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            {[question.option1, question.option2, question.option3, question.option4].map((option, idx) => (
              <li
                key={idx}
                ref={optionRefs.current[idx]}
                onClick={(e) => checkAns(e, idx + 1)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index + 1} of {data.length} questions</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
