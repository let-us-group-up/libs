import { ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';

import Typography from './Typography';

export default {
  title: buildTitle('Typography'),
  component: Typography,
};

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'textPrimary',
  children: 'Typography',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'textSecondary',
  children: 'Typography',
};
