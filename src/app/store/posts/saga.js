import { all, takeEvery, put, fork } from "redux-saga/effects";
import constants from "./CONSTANTS";
import actions from "./actions";
import axios from "../../helpers/axiosInstance";

export function* getPosts() {
  yield takeEvery(constants.POSTS_LOADING, function* () {
    try {
      const response = yield axios().get("/posts");
      yield put(actions.setPosts(response.data));
    } catch (e) {
      yield put(actions.errPosts(e));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getPosts)]);
}
