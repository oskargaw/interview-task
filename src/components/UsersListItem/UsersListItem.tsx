import { User } from "../../types/users";
import "./users-list-item.css";

interface UsersListItemProps {
  user: User;
  selectedUser: number | null;
  onToggle: (id: number) => void;
}

export const UsersListItem: React.FC<UsersListItemProps> = ({
  user,
  selectedUser,
  onToggle,
}) => {
  return (
    <div className="users-list-item" onClick={() => onToggle(user.id)}>
      {selectedUser === user.id ? (
        <div className="users-list-item__details">
          <div>{`id: ${user.id}`}</div>
          <div>{`name: ${user.name}`}</div>
        </div>
      ) : (
        <>
          <div className="users-list-item__name">{user.name}</div>
          <div className="users-list-item__hint">Click to show the details</div>
        </>
      )}
    </div>
  );
};
