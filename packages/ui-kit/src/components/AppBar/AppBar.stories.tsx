import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import AppBar from './AppBar';

export default {
  title: buildTitle('AppBar'),
  component: AppBar,
  parameters:{
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppBar>;

export const Primary: ComponentStory<typeof AppBar> = {
  args: {
    children: 'AppBar',
  },
};
