import React from 'react';
import ResourceCard from './ResourceCard';
import Icon from '../../../components/AppIcon';


const ResourceGrid = ({ resources, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-6 bg-muted rounded-full"></div>
              <div className="w-12 h-6 bg-muted rounded-full"></div>
            </div>
            <div className="w-3/4 h-6 bg-muted rounded mb-2"></div>
            <div className="w-full h-4 bg-muted rounded mb-2"></div>
            <div className="w-2/3 h-4 bg-muted rounded mb-4"></div>
            <div className="flex gap-2">
              <div className="flex-1 h-8 bg-muted rounded"></div>
              <div className="w-20 h-8 bg-muted rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!resources || resources?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
          <Icon name="Search" size={24} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          No Resources Found
        </h3>
        <p className="text-muted-foreground font-body">
          Try adjusting your search terms or browse different categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources?.map((resource) => (
        <ResourceCard
          key={resource?.id}
          resource={resource}
        />
      ))}
    </div>
  );
};

export default ResourceGrid;