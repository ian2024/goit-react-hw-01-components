import css from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.user}>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width="150px"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};