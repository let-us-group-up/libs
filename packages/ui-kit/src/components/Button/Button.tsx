import MuiButton from '@material-ui/core/Button';

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

export interface ButtonProps {
  className?: string;
  color: `${Color}`;
  variant?: `${Variant}`;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = Color.Primary,
  variant = Variant.Contained,
}) => (
  <MuiButton
    className={className}
    variant={variant}
    color={color}
  >
    {children}
  </MuiButton>
);

export default Button;
