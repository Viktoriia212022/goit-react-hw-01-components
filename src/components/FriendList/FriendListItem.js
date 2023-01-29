import PropTypes from 'prop-types';
import { Item, Img, Name, IsOnline } from '../FriendList/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <IsOnline>{isOnline}</IsOnline>
      <Img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};