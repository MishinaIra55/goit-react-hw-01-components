
import PropTypes from 'prop-types';

import classNames from 'classnames';
import  styles from './Profile.module.css';


export default function Profile ( {avatar, username, tag,  location, stats } ) {

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
        <span className={classNames(styles.quantity)}>{stats.followers}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Views</span>
        <span className={classNames(styles.quantity)}>{stats.views}</span>
      </li>
      <li className={classNames(styles.item)}>
        <span className={classNames(styles.label)}>Likes</span>
        <span className={classNames(styles.quantity)}>{stats.likes}</span>
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
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
}
