import MuiListItemText from '@mui/material/ListItemText';

export interface ListItemTextProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

const ListItemText: React.VFC<ListItemTextProps> = ({
  primary,
  secondary,
}) => (
  <MuiListItemText
    primary={primary}
    secondary={secondary}
  />
);

export default ListItemText;
