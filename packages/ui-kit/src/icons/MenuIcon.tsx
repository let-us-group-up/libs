import MuiMenuIcon from '@mui/icons-material/Menu';

export interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.VFC<MenuIconProps> = ({ className }) => (
  <MuiMenuIcon className={className} />
);

export default MenuIcon;
