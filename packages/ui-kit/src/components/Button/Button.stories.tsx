import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import Button from './Button';

export default {
  title: buildTitle('Button'),
  component: Button,
  parameters: {
    componentSubtitle: 'Displays a button',
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = {
  args: {
    color: 'primary',
    children: 'Button',
  },
  parameters: {
    docs: {
      storyDescription: 'Primary Button',
    },
  },
} as ComponentStory<typeof Button>;

export const Secondary: ComponentStory<typeof Button> = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
} as ComponentStory<typeof Button>;

export const Colors: ComponentStory<typeof Button> = {
  render: (args) => (
    <div>
      <Button {...args} color="primary" />
      {' '}
      <Button {...args} color="secondary" />
    </div>
  ),
  args: {
    ...Primary.args,
  },
  parameters: {
    docs: {
      storyDescription: 'Button colors',
    },
  },
};
