import MuiPaper from '@material-ui/core/Paper';

export interface PaperProps {
  className?: string;
}

const Paper: React.FC<PaperProps> = ({
  children,
  className,
}) => (
  <MuiPaper className={className}>
    {children}
  </MuiPaper>
);

export default Paper;
