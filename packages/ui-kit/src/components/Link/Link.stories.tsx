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

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: 'https://storybook.js.org/tutorials/',
  color: 'primary',
  children: 'Link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: 'https://storybook.js.org/tutorials/',
  color: 'secondary',
  children: 'Link',
};
