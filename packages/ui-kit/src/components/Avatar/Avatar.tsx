import MuiAvatar from '@mui/material/Avatar';

export interface AvatarProps {
  className?: string;
  alt?: string;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  children,
  className,
  alt,
  src,
}) => (
  <MuiAvatar
    className={className}
    src={src}
    alt={alt}
  >
    {children}
  </MuiAvatar>
);

export default Avatar;
