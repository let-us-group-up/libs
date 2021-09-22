import MuiDivider from '@material-ui/core/Divider';

type DividerVariant =
  | 'fullWidth'
  | 'inset'
  | 'middle';

export interface DividerProps {
  /**
   * @default 'fullWidth'
   */
  variant?: DividerVariant;
}

const Divider: React.VFC<DividerProps> = ({
  variant = 'fullWidth',
}) => (
  <MuiDivider
    variant={variant}
  />
);

export default Divider;
