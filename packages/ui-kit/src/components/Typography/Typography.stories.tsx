import { ComponentMeta, ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';

import Typography from './Typography';

export default {
  title: buildTitle('Typography'),
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Primary: ComponentStory<typeof Typography> = {
  args: {
    color: 'textPrimary',
    children: 'Typography',
  },
};

export const Secondary: ComponentStory<typeof Typography> = {
  args: {
    ...Primary.args,
    color: 'textSecondary',
  },
};
