/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { connect } from "react-redux";

import { getPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const Posts = ({ dispatch, posts, loading, errors }) => {
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const showPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (errors) return <p>There has been an error.</p>;

    console.log("🚀 ~ showPosts ~ posts:", posts);
    return posts.map((post) => (
      <Post key={post.id} post={post} summary={true} />
    ));
  };

  return (
    <div className='container'>
      <h1 className='mb-4'>Posts</h1>
      <hr />
      {showPosts()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  errores: state.posts.errors,
  cargando: state.posts.loading,
});

export default connect(mapStateToProps)(Posts);
