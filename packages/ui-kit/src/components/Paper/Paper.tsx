import MuiPaper from '@mui/material/Paper';

export interface PaperProps {
  className?: string;
  component?: React.ElementType;
}

const Paper: React.FC<PaperProps> = ({
  children,
  className,
  component = 'div',
}) => (
  <MuiPaper className={className} component={component}>
    {children}
  </MuiPaper>
);

export default Paper;
