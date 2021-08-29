import Typography from '@libs/ui-kit/components/Typography';

const Description: React.FC = ({ children }) => (
  <Typography variant="body1" textAlign="justify">
    {children}
  </Typography>
);

export default Description;
