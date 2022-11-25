
import { ProfileDiv, Description, Stats, StatsItem, UserAvatar, UserName, UserTag, UserLocation, Label, Quantity } from './Profile.styled';
import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <ProfileDiv>
    <Description>
      <UserAvatar
        src={avatar}
        alt={username}
      />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Description>

    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </Stats>
  </ProfileDiv>
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};