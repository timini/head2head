import React, {PropTypes} from 'react';
import { UserCard } from '../UserCard';
import { map } from 'ramda';

const UserList = ({users, actions}) => {
  return (
    <div>
      {users.map((user, index) => {
        return <UserCard
          key={index}
          user={user}
          actions={map(action => action.addMeta({userId: user.email}), actions)}
        />
      }
      )}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
