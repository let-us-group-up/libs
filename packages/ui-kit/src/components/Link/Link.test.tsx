import { render, screen } from '@testing-library/react';

import Link from './Link';
import ThemeProvider, { themes, defaultThemeName } from '../../styles/theme/ThemeProvider';

const theme = themes[defaultThemeName];

describe('Link component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Link href="https://storybook.js.org/tutorials/">
          Link Text
        </Link>
      </ThemeProvider>,
    );
  });

  it('has a href attribute', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://storybook.js.org/tutorials/');
  });

  it('has given text', () => {
    expect(screen.getByRole('link')).toHaveTextContent('Link Text');
  });

  it('has primary color and body1 variant by default', () => {
    expect(screen.getByRole('link')).toHaveStyle({
      color: theme.palette.primary.main,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
    });
  });
});
