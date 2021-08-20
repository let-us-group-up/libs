import MuiListItemAvatar from '@material-ui/core/ListItemAvatar';

const ListItemAvatar: React.FC = ({
  children,
}) => (
  <MuiListItemAvatar>
    {children}
  </MuiListItemAvatar>
);

export default ListItemAvatar;
