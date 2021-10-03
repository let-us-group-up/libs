import { render, screen } from '@testing-library/react';

import Drawer from './Drawer';

describe('Drawer component', () => {
  it('is opened when open prop is passed', () => {
    render(<Drawer open>Content</Drawer>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('is not opened when open prop is false', () => {
    render(<Drawer>Content</Drawer>);

    expect(screen.queryByText('Content')).toBeFalsy();
  });
});
