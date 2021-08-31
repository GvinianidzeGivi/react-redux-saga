import constants from "./CONSTANTS";

const actions = {
  getPosts: () => ({
    type: constants.GET_POSTS,
  }),
  setPosts: (data) => ({
    type: constants.SET_POSTS,
    payload: data,
  }),
  errPosts: (err) => ({
    type: constants.ERROR_POSTS,
    payload: err,
  }),
  getPost: (id) => ({
    type: constants.GET_POST,
    id,
  }),
  setPost: (data) => ({
    type: constants.SET_POST,
    payload: data,
  }),
  updatePost: (data) => ({
    type: constants.UPDATE_POST,
    payload: data,
  }),
  clearPost: () => ({
    type: constants.CLEAR_POST,
  }),
  errPost: (err) => ({
    type: constants.ERROR_POST,
    payload: err,
  }),
};

export default actions;
