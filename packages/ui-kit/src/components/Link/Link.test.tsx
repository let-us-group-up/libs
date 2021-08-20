import { render } from '@testing-library/react';

import Link from './Link';

describe('Link component', () => {
  it('has a href attribute', () => {
    const { getByRole } = render(
      <Link href="https://storybook.js.org/tutorials/">
        Link Text
      </Link>,
    );

    expect(getByRole('link')).toHaveAttribute('href', 'https://storybook.js.org/tutorials/');
    expect(getByRole('link')).toHaveTextContent('Link Text');
  });
});
