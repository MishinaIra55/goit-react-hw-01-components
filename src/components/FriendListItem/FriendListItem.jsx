
import PropTypes from 'prop-types';
import  styles from './FriendListItem.module.css';


export default function FriendListItem (props) {
  const { avatar, name, isOnline } = props;

  let colorClass = ''
  if (isOnline) {
    colorClass = styles.greenBackground;
  } else {
    colorClass = styles.redBackground;
  }



  return (
    <li className={styles.item}>
      <span className={colorClass + ' ' + styles.status}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}
