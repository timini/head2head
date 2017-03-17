import React, {PropTypes} from 'react';
import gravatarUrl from 'gravatar-url';
import { Avatar as MUIAvatar } from 'material-ui/Avatar';

const Avatar = ({email, size = 200}) =>
  <MUIAvatar src={gravatarUrl(email, size)} />

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Avatar;
