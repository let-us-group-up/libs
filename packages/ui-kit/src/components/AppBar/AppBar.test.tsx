import { render, screen } from '@testing-library/react';

import AppBar from './AppBar';
import ThemeProvider, { themes, defaultThemeName } from '../../styles/theme/ThemeProvider';

const theme = themes[defaultThemeName];

describe('AppBar component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <AppBar>
          AppBar
        </AppBar>
      </ThemeProvider>,
    );
  });

  it('has given text', () => {
    expect(screen.getByRole('banner')).toHaveTextContent('AppBar');
  });

  it('has primary background color by default', () => {
    expect(screen.getByRole('banner')).toHaveStyle({
      backgroundColor: theme.palette.primary.main,
    });
  });
});
