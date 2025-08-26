import React from 'react';
import Button from 'components/ui/Button';

const CallToActionButton = ({ 
  variant = 'primary', 
  size = 'default', 
  fullWidth = false,
  className = '',
  onClick,
  children,
  ...props 
}) => {
  const handleBookingClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default booking action
      window.location.href = '/services-booking';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-soft-md';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft hover:shadow-soft-md';
      case 'accent':
        return 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft hover:shadow-soft-md';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground';
      case 'ghost':
        return 'text-primary hover:bg-primary/10';
      default:
        return 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-soft-md';
    }
  };

  return (
    <Button
      onClick={handleBookingClick}
      size={size}
      fullWidth={fullWidth}
      className={`${getVariantStyles()} transition-gentle font-body font-medium ${className}`}
      iconName="Calendar"
      iconPosition="left"
      {...props}
    >
      {children || 'Book Session'}
    </Button>
  );
};

export default CallToActionButton;