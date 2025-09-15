import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixCount, setSixCount] = useState(0);
  const [fourCount, setFourCount] = useState(0);
  const [singleCount, setSingleCount] = useState(0);

  const containerStyle = {
    border: "1px solid gray",
    borderRadius: "20px",
    padding: "1rem",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  };

  const handleClickSingleButton = () => {
    setSingleCount(singleCount + 1);
    setRuns(runs + 1);
  };

  const handleClickFourButton = () => {
    setFourCount(fourCount + 1);
    setRuns(runs + 4);
  };

  const handleClickSixButton = () => {
    setSixCount(sixCount + 1);
    setRuns(runs + 6);
  };

  return (
    <div style={containerStyle}>
      <h3>Player: Bangu Sheikh</h3>
      <h3>Score: {runs}</h3>

      {runs >= 50 && <p>Half Century!</p>}

      <div style={buttonContainerStyle}>
        <button onClick={handleClickSingleButton}>Single</button>
        <button onClick={handleClickFourButton}>Four</button>
        <button onClick={handleClickSixButton}>Six</button>
      </div>

      <div style={buttonContainerStyle}>
        <h6>Singles: {singleCount}</h6>
        <h6>Fours: {fourCount}</h6>
        <h6>Sixes: {sixCount}</h6>
      </div>
    </div>
  );
}
