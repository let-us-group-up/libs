import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import Select from './Select';
import Option from '../Option';

export default {
  title: buildTitle('Select'),
  component: Select,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value);
  
  return (
    <Select 
      {...args} 
      value={value} 
      onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => setValue(target.value)}
    >
      <Option value="value1">Value1</Option>
      <Option value="value2">Value2</Option>
      <Option value="value3">Value3</Option>
    </Select>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'value1',
};
