import constants from "./CONSTANTS";

const actions = {
  getPosts: () => ({
    type: constants.POSTS_LOADING,
  }),
  setPosts: (data) => ({
    type: constants.POSTS_SUCCESS,
    payload: data,
  }),
  errPosts: (err) => ({
    type: constants.POSTS_ERROR,
    payload: err,
  }),
};

export default actions;
