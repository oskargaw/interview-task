import { useDispatch, useSelector } from "react-redux";
import { UsersList } from "./components/UsersList";
import { fetchUsersRequest } from "./state/users/users.actionCreators";
import { getUsers } from "./state/users/users.selectors";
import "./App.css";
import { AddNewUserInput } from "./components/AddNewUserInput";

function App() {
  const dispatch = useDispatch();
  const { pending, error, users } = useSelector(getUsers);

  return (
    <div className="container">
      <button
        className="container__button"
        onClick={() => dispatch(fetchUsersRequest())}
      >
        Get users
      </button>

      <AddNewUserInput />

      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
}

export default App;
