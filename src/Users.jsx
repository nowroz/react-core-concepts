import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  console.log(users);

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}

function User({ user }) {
  return <li>{user.name}</li>;
}
