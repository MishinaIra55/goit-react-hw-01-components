import PropTypes from 'prop-types';
import classNames from 'classnames';
import  styles from './FriendList.module.css';

export default function FriendList(props) {
  const { friends, children } = props;
  // console.log(friends);
  const friendList = friends.map(friend => {
    return (
      <ul className='friend-list' key={friend.id}>
        {children}
      </ul>
    )
  })


  return (
    friendList
  )

}

FriendList.propTypes = {
  friends: PropTypes.array,
}
