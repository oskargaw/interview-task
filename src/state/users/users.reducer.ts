import { UsersState } from "../../types/users";
import { UsersAction } from "./users.actionCreators";
import {
  ADD_NEW_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./users.actionTypes";

const initialState: UsersState = {
  pending: false,
  error: null,
  users: [],
};

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        users: [...state.users, ...action.payload],
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
        users: [],
      };
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
