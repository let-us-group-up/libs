import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';
import ThemeProvider from '../../styles/theme/ThemeProvider';

describe('Avatar component', () => {
  const defaultAvatar = (
    <ThemeProvider>
      <Avatar>
        AB
      </Avatar>
    </ThemeProvider>
  );

  it('should not be an image', () => {
    render(defaultAvatar);
    expect(screen.queryByRole('img')).toBeFalsy();
  });

  it('has given text', () => {
    render(defaultAvatar);
    expect(screen.getByText('AB')).toBeTruthy();
  });

  const avatarWithSrc = (
    <ThemeProvider>
      <Avatar src="#" alt="AB" />
    </ThemeProvider>
  );

  it('has given src', () => {
    render(avatarWithSrc);
    expect(screen.getByRole('img')).toHaveAttribute('src', '#');
  });

  it('has given alt', () => {
    render(avatarWithSrc);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'AB');
  });
});
