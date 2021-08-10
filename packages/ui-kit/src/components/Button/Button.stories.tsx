import { ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';

import Button from './Button';

export default {
  title: buildTitle('Button'),
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
};
