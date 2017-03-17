import React, {PropTypes} from 'react';
import { UserCard } from '../UserCard';

const UserList = ({users, actions}) => {
  return (
    <div>
      {users.map((user, index) => 
        <UserCard
          key={index}
          user={user}
          actions={{
            expand: () => actions.expandUser(index),
            collapse: () => actions.collapseUser(index),
          }}
        />
      )}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
