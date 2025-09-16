import { useState } from "react";

export default function Baller() {
  const ballers = ["Abu Musa", "Shafiq Jamil", "Riyad Ali", "Arif Haque"];

  const [ballerIndex, setBallerIndex] = useState(0);

  const [ballNumber, setBallNumber] = useState(0);

  const containerStyle = {
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "1rem",
    margin: "4rem auto",
  };

  const ball = () => {
    if (ballNumber < 6) {
      setBallNumber(ballNumber + 1);
      return;
    }

    setBallNumber(1);

    const highestPossibleIndex = ballers.length - 1;

    ballerIndex < highestPossibleIndex && setBallerIndex(ballerIndex + 1);
    ballerIndex < highestPossibleIndex || setBallerIndex(0);
  };

  return (
    <div style={containerStyle}>
      <h3>Baller: {ballers[ballerIndex]}</h3>
      <h3>Ball: {ballNumber}</h3>

      {ballNumber == 6 && <p>Over Finished!</p>}

      <button onClick={ball}>Ball</button>
    </div>
  );
}
