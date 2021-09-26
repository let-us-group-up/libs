import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '../Toolbar';

export interface AppBarProps {
  className?: string;
}

const AppBar: React.FC<AppBarProps> = ({
  children,
  className,
}) => (
  <MuiAppBar
    className={className}
    position="static"
  >
    <Toolbar>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
