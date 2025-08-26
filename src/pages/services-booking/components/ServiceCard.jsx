import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ServiceCard = ({ service, onBookService, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBookClick = () => {
    onBookService(service);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-card border rounded-lg shadow-soft transition-gentle hover:shadow-soft-md ${
      isSelected ? 'border-primary bg-primary/5' : 'border-border'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
              service?.iconBg || 'bg-primary/10'
            }`}>
              <Icon name={service?.icon} size={24} className={service?.iconColor || 'text-primary'} />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {service?.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {service?.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={toggleExpanded}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-gentle"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
          >
            <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={20} />
          </button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span className="font-body">{service?.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="DollarSign" size={16} />
            <span className="font-body">{service?.pricing}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span className="font-body">{service?.format}</span>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 border-t border-border pt-4">
            <div>
              <h4 className="text-sm font-heading font-medium text-foreground mb-2">
                Description
              </h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {service?.description}
              </p>
            </div>

            {/* Session Options */}
            <div>
              <h4 className="text-sm font-heading font-medium text-foreground mb-2">
                Session Options
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service?.sessionOptions?.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                    <div>
                      <div className="text-sm font-body font-medium text-foreground">
                        {option?.duration}
                      </div>
                      <div className="text-xs text-muted-foreground font-body">
                        {option?.description}
                      </div>
                    </div>
                    <div className="text-sm font-mono font-medium text-foreground">
                      ${option?.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Formats */}
            <div>
              <h4 className="text-sm font-heading font-medium text-foreground mb-2">
                Available Formats
              </h4>
              <div className="flex flex-wrap gap-2">
                {service?.availableFormats?.map((format, index) => (
                  <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-md">
                    <Icon name={format?.icon} size={14} className="text-primary" />
                    <span className="text-sm font-body text-foreground">{format?.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            {service?.specializations && (
              <div>
                <h4 className="text-sm font-heading font-medium text-foreground mb-2">
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service?.specializations?.map((spec, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-body rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Book Button */}
        <div className="mt-6">
          <Button
            variant={isSelected ? "default" : "outline"}
            fullWidth
            onClick={handleBookClick}
            iconName="Calendar"
            iconPosition="left"
            className={isSelected ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
          >
            {isSelected ? 'Selected Service' : 'Book This Service'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;