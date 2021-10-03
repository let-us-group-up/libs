import MuiDrawer from '@mui/material/Drawer';

export interface DrawerProps {
  open?: boolean;
  role?: string;
  'aria-label'?: string;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  open,
  role,
  onClose,
  ...rest
}) => (
  <MuiDrawer
    anchor="left"
    open={open}
    role={role}
    aria-label={rest['aria-label']}
    onClose={onClose}
  >
    {children}
  </MuiDrawer>
);

export default Drawer;
