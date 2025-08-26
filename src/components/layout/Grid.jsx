import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-12",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    cols: 1,
    gap: "md",
  },
});

const Grid = React.forwardRef(({ 
  className, 
  cols, 
  gap, 
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cn(gridVariants({ cols, gap }), className)}
    {...props}
  />
));

Grid.displayName = "Grid";

export default Grid;