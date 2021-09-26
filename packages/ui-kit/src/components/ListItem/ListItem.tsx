import MuiListItem from '@mui/material/ListItem';

type ListItemAlignItems =
  | 'center'
  | 'flex-start';

export interface ListItemProps {
  alignItems?: ListItemAlignItems;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  alignItems,
}) => (
  <MuiListItem
    alignItems={alignItems}
  >
    {children}
  </MuiListItem>
);

export default ListItem;
