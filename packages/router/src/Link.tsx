import { Link as ReactRouterLink } from 'react-router-dom';
import { To, NavigateOptions } from './IRouter';

export interface LinkProps extends NavigateOptions {
  to: To;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  children,
  to,
  replace,
  onClick,
}) => (
  <ReactRouterLink
    to={to as string}
    replace={replace}
    onClick={onClick}
  >
    {children}
  </ReactRouterLink>
);

export default Link;
