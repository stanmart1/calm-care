import React from 'react';
import Icon from 'components/AppIcon';

const MetricCard = ({ metric }) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    error: 'bg-error/10 text-error'
  };

  const trendIcons = {
    up: 'TrendingUp',
    down: 'TrendingDown',
    neutral: 'Minus'
  };

  const trendColors = {
    up: 'text-success',
    down: 'text-error',
    neutral: 'text-muted-foreground'
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-body text-muted-foreground mb-1">
            {metric?.title}
          </p>
          <p className="text-2xl font-heading font-bold text-foreground mb-2">
            {metric?.value}
          </p>
          <div className="flex items-center space-x-1">
            <Icon 
              name={trendIcons?.[metric?.trend]} 
              size={14} 
              className={trendColors?.[metric?.trend]} 
            />
            <span className={`text-xs font-body ${trendColors?.[metric?.trend]}`}>
              {metric?.change}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses?.[metric?.color]}`}>
          <Icon name={metric?.icon} size={24} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;