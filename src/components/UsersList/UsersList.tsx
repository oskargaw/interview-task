import { useState } from "react";
import { User } from "../../types/users";
import { UsersListItem } from "../UsersListItem";
import "./users-list.css";

interface UsersListProps {
  users: User[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const toggleShowDetails = (userId: number) => {
    selectedUser === userId && setSelectedUser(null);

    setSelectedUser(userId);
  };

  return (
    <div className="users-list">
      {users.map((user: User) => (
        <UsersListItem
          key={`${user.id}`}
          user={user}
          selectedUser={selectedUser}
          onToggle={toggleShowDetails}
        />
      ))}
    </div>
  );
};
