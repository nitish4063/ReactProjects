import React, { useState } from "react";
import Square from "./Square";

function Box() {
  const [isX, setIsX] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (state[index] !== null) {
      console.log("Already filled. Click on another box");
      return;
    }
    const copyState = [...state];
    copyState[index] = isX ? "X" : "0";
    setIsX(!isX);
    setState(copyState);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    return false;
  };

  const isWinner = checkWinner();

  return (
    <>
      {isWinner ? (
        <> {isWinner} Won
            <button onClick={()=>{
                setState(Array(9).fill(null))
                setIsX(true)
            }}>Play Again</button>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <Square
              clicked={() => {
                handleClick(0);
              }}
              value={state[0]}
            />
            <Square
              clicked={() => {
                handleClick(1);
              }}
              value={state[1]}
            />
            <Square
              clicked={() => {
                handleClick(2);
              }}
              value={state[2]}
            />
          </div>
          <div className="flex justify-center">
            <Square
              clicked={() => {
                handleClick(3);
              }}
              value={state[3]}
            />
            <Square
              clicked={() => {
                handleClick(4);
              }}
              value={state[4]}
            />
            <Square
              clicked={() => {
                handleClick(5);
              }}
              value={state[5]}
            />
          </div>
          <div className="flex justify-center">
            <Square
              clicked={() => {
                handleClick(6);
              }}
              value={state[6]}
            />
            <Square
              clicked={() => {
                handleClick(7);
              }}
              value={state[7]}
            />
            <Square
              clicked={() => {
                handleClick(8);
              }}
              value={state[8]}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Box;
