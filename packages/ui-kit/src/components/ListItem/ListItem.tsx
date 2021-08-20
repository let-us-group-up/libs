import MuiListItem from '@material-ui/core/ListItem';

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
