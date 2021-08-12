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

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppBar',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'AppBar',
};
