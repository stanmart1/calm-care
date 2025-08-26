import React from 'react';
import Button from 'components/ui/Button';

const FilterChips = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange('all')}
        className="whitespace-nowrap"
      >
        All Resources
      </Button>
      {categories?.map((category) => (
        <Button
          key={category?.id}
          variant={activeCategory === category?.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category?.id)}
          className="whitespace-nowrap"
        >
          {category?.name}
        </Button>
      ))}
    </div>
  );
};

export default FilterChips;