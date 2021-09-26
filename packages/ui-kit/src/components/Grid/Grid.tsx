import MuiGrid from '@mui/material/Grid';

type GridJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type GridAlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

type GridWrap =
  | 'wrap'
  | 'nowrap'
  | 'wrap-reverse';

type GridDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

type GridSpacing = number;

type GridSize =
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export interface GridProps {
  className?: string;
  container?: boolean;
  spacing?: GridSpacing;
  item?: boolean;
  xs?: GridSize;
  wrap?: GridWrap;
  direction?: GridDirection;
  justifyContent?: GridJustifyContent;
  alignItems?: GridAlignItems;
}

const Grid: React.FC<GridProps> = ({
  children,
  className,
  container,
  spacing,
  item,
  xs,
  wrap,
  direction,
  justifyContent,
  alignItems,
}) => (
  <MuiGrid
    className={className}
    container={container}
    spacing={spacing}
    item={item}
    xs={xs}
    wrap={wrap}
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </MuiGrid>
);

export default Grid;
