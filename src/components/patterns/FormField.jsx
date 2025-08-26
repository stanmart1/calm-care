import React from 'react';
import { cn } from '../../utils/cn';
import Typography from '../ui/Typography';

const FormField = ({ 
  label, 
  error, 
  hint, 
  required, 
  children, 
  className,
  ...props 
}) => {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label && (
        <label className="block">
          <Typography variant="bodySmall" className="font-medium text-foreground">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </Typography>
        </label>
      )}
      {children}
      {hint && !error && (
        <Typography variant="caption" className="text-muted-foreground">
          {hint}
        </Typography>
      )}
      {error && (
        <Typography variant="caption" className="text-error">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default FormField;