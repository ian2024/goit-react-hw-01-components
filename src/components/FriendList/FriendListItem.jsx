import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
            <>
            <span
              className={css.status}
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p>{name}</p>
          </>
        );
      }

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};