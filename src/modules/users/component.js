import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { UserList } from './components/UserList';
import { bindActions } from './actions';
import * as selectors from './selectors';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import Button from 'material-ui/Button';
import * as faker from 'faker';

const getRandomUserData = () => ({
  firstname:  faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraph(),
  age: faker.random.number(),
});

const Users = ({users, followers, friends, actions}) => {
  return (
    <div>
      <h1>Users</h1>
      <Button onClick={() => actions.addUserToList(getRandomUserData())} raised>+ Random User</Button>
      <Button onClick={() => actions.expandList('users')} raised>Expand all</Button>
      <Button onClick={() => actions.collapseList('users')} raised>Collapse all</Button>
      <UserList users={users} actions={actions.userList}/>
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

const mapDispatchToProps = (dispatch) => ({ actions: bindActions(dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
