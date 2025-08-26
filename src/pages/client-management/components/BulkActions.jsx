import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Select from 'components/ui/Select';
import Icon from 'components/AppIcon';

const BulkActions = ({ selectedClients = [], onClearSelection }) => {
  const [selectedAction, setSelectedAction] = useState('');

  const bulkActionOptions = [
    { value: '', label: 'Choose an action...' },
    { value: 'send-reminder', label: 'Send Appointment Reminder' },
    { value: 'update-status', label: 'Update Status' },
    { value: 'schedule-session', label: 'Bulk Schedule Sessions' },
    { value: 'send-message', label: 'Send Message' },
    { value: 'export-data', label: 'Export Client Data' },
    { value: 'generate-report', label: 'Generate Report' }
  ];

  const handleExecuteAction = () => {
    if (!selectedAction) return;

    // Here you would implement the actual bulk action logic
    switch (selectedAction) {
      case 'send-reminder': console.log('Sending appointment reminders to:', selectedClients);
        break;
      case 'update-status': console.log('Updating status for:', selectedClients);
        break;
      case 'schedule-session': console.log('Bulk scheduling sessions for:', selectedClients);
        break;
      case 'send-message': console.log('Sending message to:', selectedClients);
        break;
      case 'export-data':
        console.log('Exporting data for:', selectedClients);
        break;
      case 'generate-report': console.log('Generating report for:', selectedClients);
        break;
      default:
        break;
    }

    // Reset action after execution
    setSelectedAction('');
    
    // Show success message (you could implement a toast notification here)
    alert(`Action "${bulkActionOptions?.find(opt => opt?.value === selectedAction)?.label}" executed for ${selectedClients?.length} clients`);
  };

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md">
            <Icon name="CheckSquare" size={16} className="text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-semibold text-foreground">
              {selectedClients?.length} client{selectedClients?.length !== 1 ? 's' : ''} selected
            </h3>
            <p className="text-xs text-muted-foreground font-body">
              Choose an action to perform on selected clients
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="flex-1 md:w-64">
            <Select
              value={selectedAction}
              onValueChange={setSelectedAction}
              placeholder="Choose action..."
              options={bulkActionOptions}
            />
          </div>
          
          <Button
            variant="default"
            size="sm"
            onClick={handleExecuteAction}
            disabled={!selectedAction}
            iconName="Play"
            className="bg-primary hover:bg-primary/90"
          >
            Execute
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearSelection}
            iconName="X"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground font-body">Quick actions:</span>
        
        <Button
          variant="outline"
          size="xs"
          onClick={() => setSelectedAction('send-reminder')}
          iconName="Bell"
          className="text-xs"
        >
          Send Reminders
        </Button>
        
        <Button
          variant="outline"
          size="xs"
          onClick={() => setSelectedAction('send-message')}
          iconName="MessageSquare"
          className="text-xs"
        >
          Send Message
        </Button>
        
        <Button
          variant="outline"
          size="xs"
          onClick={() => setSelectedAction('export-data')}
          iconName="Download"
          className="text-xs"
        >
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default BulkActions;