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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};
Primary.parameters = {
  docs: {
    storyDescription: 'Primary Button',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
};


export const Colors: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} color="primary" />
    {' '}
    <Button {...args} color="secondary" />
  </div>
);
Colors.args = {
  children: 'Button',
};
Colors.parameters = {
  docs: {
    storyDescription: 'Button colors',
  },
};