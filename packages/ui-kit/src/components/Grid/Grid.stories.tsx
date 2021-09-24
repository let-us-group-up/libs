import { ComponentMeta, ComponentStory } from '@storybook/react';
import { buildTitle } from '../utils';
import { styled } from '../../styles';

import Grid from './Grid';
import Paper from '../Paper';

export default {
  title: buildTitle('Grid'),
  component: Grid,
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    xs: {
      control: {
        type: 'select',
      },
    },
    wrap: {
      control: {
        type: 'select',
      },
    },
    direction: {
      control: {
        type: 'select',
      },
    },
    justifyContent: {
      control: {
        type: 'select',
      },
    },
    alignItems: {
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Grid>;

const Item = styled(Paper)(({ theme }) => `
  padding: ${theme.spacing(2, 4)}
`);

export const BasicGrid: ComponentStory<typeof Grid> = {
  argTypes: {
    item: {
      type: 'boolean',
    },
  },
  args: {
    spacing: 2,
    wrap: 'wrap',
    direction: 'row',
    container: true,
    item: false,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid item xs={8}>
        <Item>
          xs=8
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          xs=4
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          xs=4
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>
          xs=8
        </Item>
      </Grid>
    </Grid>
  ),
};

const InteractiveWrapper = styled('div')(() => `
  width: 50vw;
  border: 1px solid black;
`);

const Cell1 = styled(Paper)(({ theme }) => `
  padding: ${theme.spacing(2, 2)}
`);

const Cell2 = styled(Paper)(({ theme }) => `
  padding: ${theme.spacing(4, 2)}
`);

const Cell3 = styled(Paper)(({ theme }) => `
  padding: ${theme.spacing(6, 2)}
`);

export const Interactive: ComponentStory<typeof Grid> = {
  ...BasicGrid,
  args: {
    ...BasicGrid.args,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorators: [
    (Story) => (
      <InteractiveWrapper>
        <Story />
      </InteractiveWrapper>
    ),
  ],
  render: (args) => (
    <Grid {...args}>
      <Grid item>
        <Cell1>
          Cell 1
        </Cell1>
      </Grid>
      <Grid item>
        <Cell2>
          Cell 2
        </Cell2>
      </Grid>
      <Grid item>
        <Cell3>
          Cell 3
        </Cell3>
      </Grid>
    </Grid>
  ),
} as ComponentStory<typeof Grid>;
