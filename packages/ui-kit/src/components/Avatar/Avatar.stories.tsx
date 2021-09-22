import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';
import avatar1 from '../../../../../assets/avatar1.png';

import Avatar from './Avatar';

export default {
  title: buildTitle('Avatar'),
  component: Avatar,
  parameters: {
    componentSubtitle: 'Displays an avatar',
  },
} as ComponentMeta<typeof Avatar>;

export const NoImage: ComponentStory<typeof Avatar> = {
  args: {
    children: 'AB',
  },
};

export const WithImage: ComponentStory<typeof Avatar> = {
  args: {
    src: avatar1,
    alt: 'Avatar image for AB',
  },
};
