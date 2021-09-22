import { render, screen } from '@testing-library/react';

import Divider from './Divider';
import ThemeProvider from '../../styles/theme/ThemeProvider';

describe('Divider component', () => {
  it('should render full width divider', () => {
    render(
      <ThemeProvider>
        <Divider />
      </ThemeProvider>,
    );
    expect(screen.getByRole('separator')).toBeTruthy();
  });
});
