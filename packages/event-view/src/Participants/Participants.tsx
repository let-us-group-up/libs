import { Children } from 'react';
import List from '@libs/ui-kit/components/List';
import Divider from './Divider';

const Participants: React.FC = ({ children }) => (
  <List>
    {Children.map(children, (child, index) => {
      if (index !== 0) {
        return (
          <>
            <Divider />
            {child}
          </>
        );
      }

      return child;
    })}
  </List>
);

export default Participants;
