import React, {PropTypes} from 'react';
import Avatar from '../Avatar';
import Button from 'material-ui/Button';

const UserCard = ({
  user: {
    ui: { isCollapsed },
    data: { firstname, lastname, email, location, bio }
  },
  actions
}) => {
  if (isCollapsed) {
    return (
      <div>
        <Avatar email={email} size={500} />
        <h2>{lastname}, {firstname}</h2>
        <Button raised onClick={actions.expand}>More..</Button>
      </div>
    )
  }
  return (
    <div>
      <Avatar email={email} size={500} />
      <h2>{lastname}, {firstname}</h2><h3>{location}</h3>
      <p>{bio}</p>
      <Button raised onClick={actions.collapse}>Less..</Button>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default UserCard;
