export default function Post({ post }) {
  const { title, body } = post;

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
