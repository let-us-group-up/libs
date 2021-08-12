import MuiMenuIcon from '@material-ui/icons/Menu';

export interface MenuIconProps {
  className?: string;
}

const MenuIcon: React.VFC<MenuIconProps> = ({ className }) => (
  <MuiMenuIcon className={className} />
);

export default MenuIcon;
