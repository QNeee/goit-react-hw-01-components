import PropTypes from 'prop-types';
import css from './FriendList.module.css';
function friendOnline(status) {
    if (status) {
        return '#2ECC71';
    } else {
        return '#E74C3C';
    }
}
export const FriendList = ({ friends }) => {
    return (<ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => <li className={css.item} key={id}>
            <span
                className={css.status}
                style={{ color: friendOnline(isOnline) }}
            >●
            </span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>)}
    </ul>);
}
FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}
