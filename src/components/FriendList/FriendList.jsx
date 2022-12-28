import PropTypes from 'prop-types';

import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList( { friends } ) {

  const friendList = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
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


