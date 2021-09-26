import MuiLink from '@mui/material/Link';
import { Variant } from '../../styles/typography';

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Inherit = 'inherit',
}

export interface LinkProps {
  className?: string;
  href: string;
  /**
   * @default 'primary'
   */
  color?: `${Color}`;
  /**
   * @default 'body1'
   */
  variant?: `${Variant}`;
}

const Link: React.FC<LinkProps> = ({
  children,
  className,
  href,
  variant = Variant.Body1,
  color = Color.Primary,
}) => (
  <MuiLink
    className={className}
    href={href}
    variant={variant}
    color={color}
  >
    {children}
  </MuiLink>
);

export default Link;
