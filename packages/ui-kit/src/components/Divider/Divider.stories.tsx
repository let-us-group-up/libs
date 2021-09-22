import { ComponentMeta, ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';

import Divider from './Divider';

export default {
  title: buildTitle('Divider'),
  component: Divider,
  decorators: [
    (Story) => (
      <div style={{ width: '100px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Divider>;

export const FullWidth: ComponentStory<typeof Divider> = {
  parameters: {
    docs: {
      storyDescription: 'Full width divider',
    },
  },
} as ComponentStory<typeof Divider>;

export const Inset: ComponentStory<typeof Divider> = {
  args: {
    variant: 'inset',
  },
  parameters: {
    docs: {
      storyDescription: 'Inset',
    },
  },
} as ComponentStory<typeof Divider>;

export const Middle: ComponentStory<typeof Divider> = {
  args: {
    variant: 'middle',
  },
  parameters: {
    docs: {
      storyDescription: 'Middle',
    },
  },
} as ComponentStory<typeof Divider>;
