import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, error, loading, setUrl, setOptions } = useFetch();

  const loadPosts = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
    setOptions({ method: "GET" });
  };

  const createPost = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts");
    setOptions({
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: "New Post",
        body: "This is a new post.",
        userId: 1,
      }),
    });
  };

  const updatePost = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts/1");
    setOptions({
      method: "PUT",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        id: 1,
        title: "Updated Post",
        body: "Updated body.",
        userId: 1,
      }),
    });
  };

  const deletePost = () => {
    setUrl("https://jsonplaceholder.typicode.com/posts/1");
    setOptions({ method: "DELETE" });
  };

  return (
    <div>
      <h1>CRUD Operations with React</h1>
      <button onClick={loadPosts}>Load Posts</button>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
