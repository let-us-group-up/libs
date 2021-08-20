import MuiList from '@material-ui/core/List';

const List: React.FC = ({
  children,
}) => (
  <MuiList>
    {children}
  </MuiList>
);

export default List;
