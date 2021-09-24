import { ComponentMeta, ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';

import Paper from './Paper';

export default {
  title: buildTitle('Paper'),
  component: Paper,
  parameters: {
    componentSubtitle: 'Container width takes half of the screen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '50vw' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Paper>;

export const Default: ComponentStory<typeof Paper> = {
  args: {
    children: `
      It is a long established fact that a reader 
      will be distracted by the readable content 
      of a page when looking at its layout. The 
      point of using Lorem Ipsum is that it has a 
      more-or-less normal distribution of letters, 
      as opposed to using "Content here, content 
      here", making it look like readable English.
    `,
  },
} as ComponentStory<typeof Paper>;
