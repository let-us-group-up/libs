import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { buildTitle } from '../utils';

import Drawer from './Drawer';
import List from '../List';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText';
import Button from '../Button';

export default {
  title: buildTitle('Drawer'),
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = ({
  open: defaultOpen,
  ...args
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer
        {...args}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export const Default: ComponentStory<typeof Drawer> = {
  render: Template,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    open: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <List>
        <ListItem>
          <ListItemText
            primary="Item1"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Item2"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Item3"
          />
        </ListItem>
      </List>
    ),
    open: false,
  },
};
