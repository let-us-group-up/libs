import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import Select from './Select';
import Option from '../Option';

export default {
  title: buildTitle('Select'),
  component: Select,
  argTypes: {
    value: {
      options: ['value1', 'value2', 'value3'],
      type: 'select',
    },
    onChange: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <Option value="value1">Value1</Option>
    <Option value="value2">Value2</Option>
    <Option value="value3">Value3</Option>
  </Select>
);

export const Primary: ComponentStory<typeof Select> = {
  render: Template,
  args: {
    value: 'value1',
    onChange: (event) => event?.target && console.log(event.target.value),
  },
};
