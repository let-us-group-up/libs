import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import MultilineTextField from './MultilineTextField';

export default {
  title: buildTitle('MultilineTextField'),
  component: MultilineTextField,
} as ComponentMeta<typeof MultilineTextField>;

export const Basic: ComponentStory<typeof MultilineTextField> = {
  args: {
    id: 'basic',
    name: 'name',
    label: 'name',
  },
};

export const WithPlaceholder: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...Basic.args,
    id: 'with-placeholder',
    placeholder: 'placeholder',
  },
};

export const Disabled: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...Basic.args,
    id: 'disabled',
    disabled: true,
  },
};

export const WithHelperText: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...Basic.args,
    id: 'with-helper-text',
    helperText: 'Some helper text',
  },
};

export const Error: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...WithHelperText.args,
    id: 'error',
    error: true,
  },
};

export const FullWidth: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...Basic.args,
    id: 'full-width',
    fullWidth: true,
  },
};

export const Required: ComponentStory<typeof MultilineTextField> = {
  args: {
    ...Basic.args,
    id: 'required',
    required: true,
  },
};
