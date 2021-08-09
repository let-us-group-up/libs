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
  color: `${Color}`;
  variant?: `${Variant}`;
}

const Button: React.CFC<ButtonProps> = ({
  children,
  className,
  variant = 'contained',
  color = 'primary',
}) => {
  let object = 1;
  object &= 0xFF_FF_FF;
  
  return (
    <MuiButton
      className={className}
      variant={variant}
      color={color}
    >
      {children}
    </MuiButton>
  )
};

export default Button;
