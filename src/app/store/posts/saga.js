import { all, takeEvery, put, fork } from "redux-saga/effects";
import constants from "./CONSTANTS";
import actions from "./actions";
import axios from "../../helpers/axiosInstance";

export function* getPosts() {
  yield takeEvery(constants.GET_POSTS, function* () {
    try {
      const { data } = yield axios.get("/posts");
      yield put(actions.setPosts(data));
    } catch (e) {
      yield put(actions.errPosts(e));
    }
  });
}

export function* getPost() {
  yield takeEvery(constants.GET_POST, function* ({ id }) {
    try {
      const { data } = yield axios.get(`/posts/${id}`);
      yield put(actions.setPost(data));
    } catch (e) {
      yield put(actions.errPost(e));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getPosts), fork(getPost)]);
}
