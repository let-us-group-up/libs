import { useMatch as useReactRouterMatch } from 'react-router-dom';
import { PathnameBase, PathMatch } from './IRouter';

const useMatch = (pattern: PathnameBase): PathMatch | null => {
  const match = useReactRouterMatch(pattern);

  return match && {
    pathnameBase: match.pathnameBase,
    pathname: match.pathname,
    params: match.params,
  };
};

export default useMatch;
