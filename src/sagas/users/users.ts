import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../../state/users/users.actionCreators";
import { FETCH_USERS_REQUEST } from "../../state/users/users.actionTypes";
import { User } from "../../types/users";

const fetchUsers = () =>
  axios.get<User[]>("https://jsonplaceholder.typicode.com/users");

function* fetchUsersSaga() {
  try {
    const response: AxiosResponse<User[]> = yield call(fetchUsers);

    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

function* usersSaga() {
  yield all([takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga)]);
}

export default usersSaga;
