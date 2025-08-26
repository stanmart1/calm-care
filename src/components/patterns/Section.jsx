import React from 'react';
import { cn } from '../../utils/cn';
import Container from '../layout/Container';
import Typography from '../ui/Typography';

const Section = ({ 
  title, 
  description, 
  children, 
  className,
  containerSize = "lg",
  spacing = "default",
  background = "default",
  ...props 
}) => {
  const spacingClasses = {
    sm: "py-8",
    default: "py-12 lg:py-16",
    lg: "py-16 lg:py-20",
    xl: "py-20 lg:py-24",
  };

  const backgroundClasses = {
    default: "",
    muted: "bg-muted/20",
    card: "bg-card",
  };

  return (
    <section 
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <Typography variant="h2" className="mb-4">
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="lead" className="max-w-3xl mx-auto">
                {description}
              </Typography>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;