
import PropTypes from 'prop-types';

import classNames from 'classnames';
import  styles from './Profile.module.css';


export default function Profile (props) {
  const {avatar, username, tag,  location, followers, views, likes } = props;
  return (
    <div className={classNames(styles.profile)}>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className={classNames(styles.img)}

      />
      <p className={classNames(styles.username)}>{username}</p>
      <p className={classNames(styles.tag)}>{tag}</p>
      <p className={classNames(styles.location)}>{location}</p>
    </div>

    <ul className={classNames(styles.stats)}>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Followers</span>
        <span className={classNames(styles.quantity)}>{followers}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Views</span>
        <span className={classNames(styles.quantity)}>{views}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Likes</span>
        <span className={classNames(styles.quantity)}>{likes}</span>
      </li>
    </ul>
  </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
