import React from 'react';
import Icon from 'components/AppIcon';

const CredentialsBadge = ({ credential }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft hover:shadow-md transition-all duration-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full">
            {credential?.verified ? (
              <Icon name="CheckCircle" size={24} className="text-success" />
            ) : (
              <Icon name="Clock" size={24} className="text-warning" />
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            {credential?.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body mb-2">
            {credential?.issuer}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
              {credential?.year}
            </span>
            {credential?.verified && (
              <div className="flex items-center space-x-1 text-success">
                <Icon name="Shield" size={14} />
                <span className="text-xs font-body font-medium">Verified</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialsBadge;