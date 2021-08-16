import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import Link from './Link';

export default {
  title: buildTitle('Link'),
  component: Link,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = {
  args: {
    href: 'https://storybook.js.org/tutorials/',
    color: 'primary',
    children: 'Link',
  },
};

export const Secondary: ComponentStory<typeof Link> = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
};
