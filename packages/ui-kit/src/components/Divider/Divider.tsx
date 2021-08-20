import MuiDivider from '@material-ui/core/Divider';

type DividerVariant =
  | 'fullWidth'
  | 'inset'
  | 'middle';

export interface DividerProps {
  variant?: DividerVariant;
}

const Divider: React.VFC<DividerProps> = ({
  variant,
}) => (
  <MuiDivider
    variant={variant}
  />
);

export default Divider;
