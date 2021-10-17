import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import TextField from './TextField';

export default {
  title: buildTitle('TextField'),
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = {
  args: {
    id: 'basic',
    name: 'name',
    label: 'name',
  },
};

export const WithPlaceholder: ComponentStory<typeof TextField> = {
  args: {
    ...Basic.args,
    id: 'with-placeholder',
    placeholder: 'placeholder',
  },
};

export const Disabled: ComponentStory<typeof TextField> = {
  args: {
    ...Basic.args,
    id: 'disabled',
    disabled: true,
  },
};

export const WithHelperText: ComponentStory<typeof TextField> = {
  args: {
    ...Basic.args,
    id: 'with-helper-text',
    helperText: 'Some helper text',
  },
};

export const Error: ComponentStory<typeof TextField> = {
  args: {
    ...WithHelperText.args,
    id: 'error',
    error: true,
  },
};

export const FullWidth: ComponentStory<typeof TextField> = {
  args: {
    ...Basic.args,
    id: 'full-width',
    fullWidth: true,
  },
};

export const Required: ComponentStory<typeof TextField> = {
  args: {
    ...Basic.args,
    id: 'required',
    required: true,
  },
};
