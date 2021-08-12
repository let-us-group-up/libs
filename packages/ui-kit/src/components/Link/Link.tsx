import MuiLink from '@material-ui/core/Link';
import { Variant } from '../../styles/typography';

enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Inherit = 'inherit',
}

enum TagVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  DIV = 'div',
  SPAN = 'span',
}

const variantMapper = {
  [Variant.H1]: TagVariant.H1,
  [Variant.H2]: TagVariant.H2,
  [Variant.H3]: TagVariant.H3,
  [Variant.H4]: TagVariant.H4,
  [Variant.H5]: TagVariant.H5,
  [Variant.H6]: TagVariant.H6,
  [Variant.Body1]: TagVariant.P,
  [Variant.Body2]: TagVariant.P,
  [Variant.Button]: TagVariant.P,
  [Variant.Caption]: TagVariant.P,
  [Variant.Overline]: TagVariant.P,
  [Variant.Subtitle1]: TagVariant.H6,
  [Variant.Subtitle2]: TagVariant.H6,
};

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
