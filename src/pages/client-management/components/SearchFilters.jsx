import React from 'react';
import Select from 'components/ui/Select';
import Button from 'components/ui/Button';

const SearchFilters = ({ filters, onFiltersChange }) => {
  const filterOptions = {
    status: [
      { value: 'all', label: 'All Statuses' },
      { value: 'active', label: 'Active' },
      { value: 'paused', label: 'Paused' },
      { value: 'inactive', label: 'Inactive' }
    ],
    therapyType: [
      { value: 'all', label: 'All Types' },
      { value: 'individual', label: 'Individual' },
      { value: 'couples', label: 'Couples' },
      { value: 'family', label: 'Family' },
      { value: 'group', label: 'Group' }
    ],
    sessionFrequency: [
      { value: 'all', label: 'All Frequencies' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'bi-weekly', label: 'Bi-weekly' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'as-needed', label: 'As Needed' }
    ],
    paymentStatus: [
      { value: 'all', label: 'All Payment Status' },
      { value: 'current', label: 'Current' },
      { value: 'outstanding', label: 'Outstanding' },
      { value: 'overdue', label: 'Overdue' }
    ],
    engagementLevel: [
      { value: 'all', label: 'All Engagement' },
      { value: 'high', label: 'High' },
      { value: 'medium', label: 'Medium' },
      { value: 'low', label: 'Low' }
    ]
  };

  const handleFilterChange = (filterKey, value) => {
    onFiltersChange?.(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  const clearAllFilters = () => {
    onFiltersChange?.({
      status: 'all',
      therapyType: 'all',
      sessionFrequency: 'all',
      paymentStatus: 'all',
      engagementLevel: 'all'
    });
  };

  const hasActiveFilters = Object.values(filters || {})?.some(value => value !== 'all');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-heading font-medium text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground hover:text-foreground text-xs"
          >
            Clear All
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <Select
          value={filters?.status}
          onValueChange={(value) => handleFilterChange('status', value)}
          placeholder="Status"
          options={filterOptions?.status}
        />
        
        <Select
          value={filters?.therapyType}
          onValueChange={(value) => handleFilterChange('therapyType', value)}
          placeholder="Therapy Type"
          options={filterOptions?.therapyType}
        />
        
        <Select
          value={filters?.sessionFrequency}
          onValueChange={(value) => handleFilterChange('sessionFrequency', value)}
          placeholder="Frequency"
          options={filterOptions?.sessionFrequency}
        />
        
        <Select
          value={filters?.paymentStatus}
          onValueChange={(value) => handleFilterChange('paymentStatus', value)}
          placeholder="Payment"
          options={filterOptions?.paymentStatus}
        />
        
        <Select
          value={filters?.engagementLevel}
          onValueChange={(value) => handleFilterChange('engagementLevel', value)}
          placeholder="Engagement"
          options={filterOptions?.engagementLevel}
        />
      </div>
    </div>
  );
};

export default SearchFilters;