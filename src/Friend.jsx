export default function Friend({ friend }) {
  const { name, username, email, phone } = friend;
  // {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //         "street": "Kulas Light",
  //         "suite": "Apt. 556",
  //         "city": "Gwenborough",
  //         "zipcode": "92998-3874",
  //         "geo": {
  //             "lat": "-37.3159",
  //             "lng": "81.1496"
  //         }
  //     },
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {
  //         "name": "Romaguera-Crona",
  //         "catchPhrase": "Multi-layered client-server neural-net",
  //         "bs": "harness real-time e-markets"
  //     }
  // }
  return (
    <div className="friendCard">
      <h3>{name}</h3>
      <h5>{username}</h5>
      <h4>{email}</h4>
      <h4>{phone}</h4>
    </div>
  );
}
