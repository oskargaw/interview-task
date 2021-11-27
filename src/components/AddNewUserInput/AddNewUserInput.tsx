import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../state/users/users.actionCreators";
import "./add-new-user-input.css";

export const AddNewUserInput: React.FC = () => {
  const [userName, setNewUserName] = useState("");

  const dispatch = useDispatch();

  const updateUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value);
  };

  const handleAddNewUser = () => {
    dispatch(addNewUser(user));

    setNewUserName("");
  };

  const user = {
    id: new Date().getMilliseconds(),
    name: userName,
  };

  return (
    <div className="add-new-user-input">
      <label className="add-new-user-input__label" htmlFor="userName">
        Add user
      </label>
      <input
        value={userName}
        onChange={updateUserName}
        name="userName"
        placeholder="Enter user name"
      />
      <button className="add-new-user-input__button" onClick={handleAddNewUser}>
        Add new user
      </button>
    </div>
  );
};
