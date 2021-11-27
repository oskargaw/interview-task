import { User } from "../../types/users";
import {
  ADD_NEW_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./users.actionTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
  payload: null,
});

export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: any) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const addNewUser = (user: object) => ({
  type: ADD_NEW_USER,
  payload: user,
});

export type UsersAction = ReturnType<
  | typeof fetchUsersRequest
  | typeof fetchUsersSuccess
  | typeof fetchUsersFailure
  | typeof addNewUser
>;
