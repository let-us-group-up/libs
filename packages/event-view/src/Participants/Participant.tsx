import ListItem from '@libs/ui-kit/components/ListItem';
import ListItemAvatar from '@libs/ui-kit/components/ListItemAvatar';
import ListItemText from '@libs/ui-kit/components/ListItemText';
import Avatar from '@libs/ui-kit/components/Avatar';

const stringAvatar = (
  firstName: string,
  lastName: string,
) => `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;

interface ParticipantProps {
  firstName: string;
  lastName: string;
}

const Participant: React.VFC<ParticipantProps> = ({
  firstName,
  lastName,
}) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>{stringAvatar(firstName, lastName)}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={`${firstName} ${lastName}`}
    />
  </ListItem>
);

export default Participant;
