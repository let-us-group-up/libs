import MuiIconButton from '@mui/material/IconButton';

enum Color {
  Inherit = 'inherit',
}

enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

enum Edge {
  Start = 'start',
  End = 'end',
}

export interface IconButtonProps {
  className?: string;
  color?: `${Color}`;
  /**
   * For now the large size same is as the medium
   * @default 'medium'
   */
  size?: `${Size}`;
  edge?: `${Edge}`;
  ariaLabel?: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className,
  color = 'inherit',
  size = 'medium',
  edge,
  ariaLabel,
  onClick,
}) => (
  <MuiIconButton
    className={className}
    color={color}
    size={size}
    edge={edge}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </MuiIconButton>
);

export default IconButton;
