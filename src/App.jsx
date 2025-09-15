import "./App.css";
import Batsman from "./Batsman.jsx";
import Counter from "./Counter.jsx";

function App() {
  function handleClickMeButton() {
    alert("I've been clicked");
  }

  const handleClickMeBoiButton = () => {
    alert("Don't call me boi.");
  };

  const handleAdd5Button = (num) => {
    alert(`${num + 5}`);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClickMeButton}>Click Me</button>
      <button
        onClick={function handleClickMeTooButton() {
          alert("I've been clicked as well.");
        }}
      >
        Click Me Too
      </button>
      <button onClick={handleClickMeBoiButton}>Click Me Boi</button>
      <button onClick={() => alert("Hehe")}>Click Me Hehe</button>
      <button onClick={() => handleAdd5Button(10)}>Add 5</button>
    </>
  );
}

export default App;
