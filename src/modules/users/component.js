import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { UserList } from './components/UserList';
import actions from './actions';
import * as selectors from './selectors';
import { createStructuredSelector } from 'reselect';
import { actionWithMeta } from 'utils/actions';
import { map } from 'ramda';


import Button from 'material-ui/Button';
import * as faker from 'faker';

const getRandomUserData = () => ({
  firstname:  faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph(),
  age: faker.random.number(),
  userId: faker.random.uuid(),
});

const Users = ({users, followers, friends, actions}) => {
  const user = getRandomUserData();
  
  const createListActions = (list) => {
    return map(action => action.addMeta({list}), actions.userList)
  }
  const userListActions = createListActions('users')
  return (
    <div>
      <h1>Users</h1>
      <Button onClick={() => userListActions.addUser(user)} raised>+ Random User</Button>
      <Button onClick={userListActions.expandAll} raised>Expand all</Button>
      <Button onClick={userListActions.collapseAll} raised>Collapse all</Button>
      <UserList users={users} actions={userListActions}/>
      <h1>Followers</h1>
      <UserList users={followers} actions={actions.UserList}/>
      <h1>Followers</h1>
      <UserList users={friends} actions={actions.UserList}/>
    </div>
  );
};


Users.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectors.getUsers,
  followers: selectors.getFollowers,
  friends: selectors.getFriends,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      userList: map(action => actionWithMeta(action, dispatch), actions.userList),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
