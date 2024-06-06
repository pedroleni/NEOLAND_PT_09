import * as actions from "../actions/postsActions";

export const initialState = {
  posts: [],
  errors: false,
  loading: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_OK:
      return { posts: action.payload, loading: false, errors: false };
    case actions.GET_POSTS_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}