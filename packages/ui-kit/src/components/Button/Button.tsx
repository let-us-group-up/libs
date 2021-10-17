import MuiButton from '@mui/material/Button';

enum Type {
  Submit = 'submit',
}

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Inherit = 'inherit',
}

enum Variant {
  Contained = 'contained',
  Outlined = 'outlined',
  Text = 'text',
}

enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps {
  className?: string;
  type?: `${Type}`;
  /**
   * @default 'primary'
   */
  color?: `${Color}`;
  /**
   * @default 'contained'
   */
  variant?: `${Variant}`;
  size?: `${Size}`;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  color = Color.Primary,
  variant = Variant.Contained,
  size = Size.Medium,
  fullWidth,
  onClick,
}) => (
  <MuiButton
    className={className}
    type={type}
    variant={variant}
    color={color}
    size={size}
    fullWidth={fullWidth}
    onClick={onClick}
  >
    {children}
  </MuiButton>
);

export default Button;
