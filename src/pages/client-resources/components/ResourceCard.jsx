import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ResourceCard = ({ resource, featured = false }) => {
  const handleDownload = () => {
    // Mock download functionality
    console.log(`Downloading ${resource?.title}`);
  };

  const handleView = () => {
    // Mock view functionality
    console.log(`Viewing ${resource?.title}`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'articles': 'bg-blue-100 text-blue-800',
      'worksheets': 'bg-green-100 text-green-800',
      'meditation': 'bg-purple-100 text-purple-800',
      'crisis': 'bg-red-100 text-red-800',
      'reading': 'bg-orange-100 text-orange-800'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-soft-md transition-gentle ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(resource?.category)}`}>
              {resource?.categoryName}
            </span>
            {resource?.isNew && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                New
              </span>
            )}
          </div>
          <h3 className={`font-heading font-semibold text-foreground mb-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {resource?.title}
          </h3>
          <p className="text-muted-foreground text-sm font-body mb-4 line-clamp-3">
            {resource?.description}
          </p>
        </div>
        {resource?.type === 'downloadable' && (
          <Icon name="Download" size={20} className="text-muted-foreground ml-4 flex-shrink-0" />
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-4">
          {resource?.readingTime && (
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span className="font-body">{resource?.readingTime}</span>
            </div>
          )}
          {resource?.author && (
            <div className="flex items-center gap-1">
              <Icon name="User" size={14} />
              <span className="font-body">{resource?.author}</span>
            </div>
          )}
          {resource?.publishDate && (
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span className="font-body">{resource?.publishDate}</span>
            </div>
          )}
        </div>
        {resource?.downloads && (
          <div className="flex items-center gap-1">
            <Icon name="Download" size={14} />
            <span className="font-body">{resource?.downloads}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={handleView}
          iconName={resource?.type === 'article' ? 'ExternalLink' : 'Eye'}
          iconPosition="left"
          className="flex-1"
        >
          {resource?.type === 'article' ? 'Read Article' : 'View Resource'}
        </Button>
        {resource?.type === 'downloadable' && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            iconName="Download"
            iconPosition="left"
          >
            Download
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;