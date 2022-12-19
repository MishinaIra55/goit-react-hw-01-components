import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList(props) {
  const { friends } = props;
  const friendList = friends.map(friend => {
    return (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    );
  });


  return (
    <ul className={styles.list}>
      {friendList}
    </ul>
  );

}

FriendList.propTypes = {
  friends: PropTypes.array,
};
