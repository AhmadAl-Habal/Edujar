import React, { useState } from "react";

const Question = ({ key, title, desc, operator }) => {
  const [currentOperator, setOperator] = useState(operator);
  const toggleOperator = () => {
    setOperator((prevOperator) => (prevOperator === "+" ? "-" : "+"));
    console.log("test", operator);
  };
  return (
    <div className="question">
      <div className="first-row">
        <h1>{title}</h1>
        <h2 onClick={toggleOperator}>{currentOperator}</h2>
      </div>
      <h3>{currentOperator == "-" ? desc : ""}</h3>
      <hr />
    </div>
  );
};

export default Question;
