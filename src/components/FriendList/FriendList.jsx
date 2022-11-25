import PropTypes from 'prop-types';
import { FriendListUl, FriendListItem, Status, Avatar, FriendName } from './FriendList.styled';

function friendOnline(status) {
    if (status) {
        return '#2ECC71';
    } else {
        return '#E74C3C';
    }
}
export const FriendList = ({ friends }) => {
    return (<FriendListUl>
        {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id}>
            <Status
                style={{ color: friendOnline(isOnline) }}
            >●
            </Status>
            <Avatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendListItem>)}
    </FriendListUl>);
}
FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}
