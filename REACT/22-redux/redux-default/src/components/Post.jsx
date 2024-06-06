/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Post = ({ post, summary = false }) => {
  console.log("🚀 ~ Post ~ post:", post);

  return (
    <article>
      {summary ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
      <hr />
      <p>{summary ? post.body.substring(0, 100) : post.body}</p>

      {summary && (
        <Link to={`/posts/${post.id}`} className='btn btn-primary'>
          View Post
        </Link>
      )}
      <hr />
    </article>
  );
};
