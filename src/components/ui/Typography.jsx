import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight",
      h2: "text-3xl md:text-4xl font-heading font-bold tracking-tight",
      h3: "text-2xl md:text-3xl font-heading font-semibold tracking-tight",
      h4: "text-xl md:text-2xl font-heading font-semibold tracking-tight",
      h5: "text-lg md:text-xl font-heading font-semibold",
      h6: "text-base md:text-lg font-heading font-semibold",
      body: "text-base font-body leading-relaxed",
      bodyLarge: "text-lg font-body leading-relaxed",
      bodySmall: "text-sm font-body leading-normal",
      caption: "text-xs font-caption text-muted-foreground",
      lead: "text-xl font-body text-muted-foreground leading-relaxed",
      muted: "text-sm text-muted-foreground font-body",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
  },
});

const Typography = React.forwardRef(({ 
  className, 
  variant, 
  color, 
  as: Component = "p",
  ...props 
}, ref) => {
  // Map variants to semantic HTML elements
  const elementMap = {
    h1: "h1",
    h2: "h2", 
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    bodyLarge: "p",
    bodySmall: "p",
    caption: "span",
    lead: "p",
    muted: "p",
  };

  const Element = Component || elementMap[variant] || "p";

  return (
    <Element
      ref={ref}
      className={cn(typographyVariants({ variant, color }), className)}
      {...props}
    />
  );
});

Typography.displayName = "Typography";

export default Typography;