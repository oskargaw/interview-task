import { all } from "redux-saga/effects";
import usersSaga from "./users/users";

export function* rootSaga() {
  yield all([usersSaga()]);
}
