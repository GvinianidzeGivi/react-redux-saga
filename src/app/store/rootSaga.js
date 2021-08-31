import { all } from "redux-saga/effects";
import posts from "../store/posts/saga";

export default function* rootSaga() {
  yield all([posts()]);
}
