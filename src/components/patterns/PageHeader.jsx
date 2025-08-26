import React from 'react';
import { cn } from '../../utils/cn';
import Typography from '../ui/Typography';
import Container from '../layout/Container';

const PageHeader = ({ 
  title, 
  description, 
  children, 
  className,
  background = "default",
  ...props 
}) => {
  const backgroundClasses = {
    default: "bg-background",
    gradient: "bg-gradient-to-br from-primary/5 to-secondary/5",
    muted: "bg-muted/30",
  };

  return (
    <section 
      className={cn(
        "py-16 lg:py-20",
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      <Container>
        <div className="text-center space-y-4">
          {title && (
            <Typography variant="h1" className="mb-4">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="lead" className="max-w-3xl mx-auto">
              {description}
            </Typography>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;