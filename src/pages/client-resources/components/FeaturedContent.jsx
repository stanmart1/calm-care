import React from 'react';
import ResourceCard from './ResourceCard';

const FeaturedContent = ({ featuredResources }) => {
  if (!featuredResources || featuredResources?.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          Featured Resources
        </h2>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
          Popular
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredResources?.map((resource) => (
          <ResourceCard
            key={resource?.id}
            resource={resource}
            featured={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;