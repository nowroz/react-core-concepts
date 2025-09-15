import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    border: "2px solid yellow",
    borderRadius: "10px",
    padding: "1rem",
    margin: "2rem auto",
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
