import React from 'react';
import Icon from 'components/AppIcon';

const ApproachCard = ({ approach }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-8 shadow-soft hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
            <Icon name={approach?.icon} size={32} className="text-primary" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            {approach?.title}
          </h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            {approach?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard;