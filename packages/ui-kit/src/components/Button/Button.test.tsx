import { render, screen } from '@testing-library/react';

import Button from './Button';
import ThemeProvider, { themes, defaultThemeName } from '../../styles/theme/ThemeProvider';

const theme = themes[defaultThemeName];

describe('Button component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Button>
          Click
        </Button>
      </ThemeProvider>,
    );
  });

  it('has given text', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Click');
  });

  it('has primary color and contained variant by default', () => {
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.palette.primary.main,
    });
  });
});
