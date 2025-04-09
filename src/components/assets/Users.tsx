import User from "./User";
import React from "react";

type UserType = {
  id: number;
  username: string;
  email: string;
  password: string;
};

interface UsersProps {
  prop: UserType[];
}

const Users: React.FC<UserProps> = ({ prop }) => {
  return (
    <div>
      {prop.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
