import { Suspense } from "react";
import "./App.css";
import Baller from "./Baller.jsx";
import Batsman from "./Batsman.jsx";
import Counter from "./Counter.jsx";
import Users from "./Users.jsx";
import Friends from "./friends.jsx";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

const fetchFriends = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
};

function App() {
  const friendsPromise = fetchFriends();

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

      <Suspense fallback={<h3>Finding friends...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<p>Fetching users...</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Baller></Baller>

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
