import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setPlayers(result));
  }, []);

  return (
    <div className="card">
      <h3>Players: {players.length}</h3>
      <ol>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ol>
    </div>
  );
}
