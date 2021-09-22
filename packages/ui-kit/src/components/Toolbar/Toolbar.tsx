import MuiToolbar from '@material-ui/core/Toolbar';

export interface ToolbarProps {
  className?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  children, className,
}) => (
  <MuiToolbar className={className} role="toolbar">
    {children}
  </MuiToolbar>
);

export default Toolbar;
