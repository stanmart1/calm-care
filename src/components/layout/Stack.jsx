import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    spacing: {
      sm: "gap-2",
      md: "gap-4", 
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
  },
  defaultVariants: {
    direction: "col",
    spacing: "md",
    align: "stretch",
    justify: "start",
  },
});

const Stack = React.forwardRef(({ 
  className, 
  direction, 
  spacing, 
  align, 
  justify, 
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cn(stackVariants({ direction, spacing, align, justify }), className)}
    {...props}
  />
));

Stack.displayName = "Stack";

export default Stack;