import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const containerVariants = cva("mx-auto px-4", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl", 
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4",
      md: "px-6 lg:px-8",
      lg: "px-8 lg:px-12",
    },
  },
  defaultVariants: {
    size: "lg",
    padding: "md",
  },
});

const Container = React.forwardRef(({ 
  className, 
  size, 
  padding, 
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cn(containerVariants({ size, padding }), className)}
    {...props}
  />
));

Container.displayName = "Container";

export default Container;