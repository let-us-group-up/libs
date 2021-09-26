import MuiList from '@mui/material/List';

const List: React.FC = ({
  children,
}) => (
  <MuiList>
    {children}
  </MuiList>
);

export default List;
