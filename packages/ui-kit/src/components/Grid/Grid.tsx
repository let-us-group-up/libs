import MuiGrid, {
  GridSpacing,
  GridSize,
  GridDirection,
  GridWrap,
} from '@material-ui/core/Grid';

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

export interface GridProps {
  className?: string;
  container?: boolean;
  spacing?: GridSpacing;
  item?: boolean;
  xs?: boolean | GridSize;
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
