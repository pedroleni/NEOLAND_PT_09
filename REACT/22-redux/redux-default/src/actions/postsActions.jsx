export const GET_POSTS_OK = "GET_POSTS_OK";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const GET_POSTS = "GET_POSTS";

export const actionGetPosts = () => {
  return { type: GET_POSTS };
};

export const actionGetPostsOk = (posts) => {
  return { type: GET_POSTS_OK, payload: posts };
};

export const actionGetPostsError = () => {
  return { type: GET_POSTS_ERROR };
};

export function getPosts() {
  return async (dispatch) => {
    dispatch(actionGetPosts()); // lanzamos la acción de inicio de petición
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      dispatch(actionGetPostsOk(posts)); // lanzamos la acción de éxito
    } catch (error) {
      dispatch(actionGetPostsError()); // lanzamos la acción de error
    }
  };
}
