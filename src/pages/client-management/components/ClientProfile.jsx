import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { cn } from 'utils/cn';

const ClientProfile = ({ client, onClose, onUpdate, onDelete }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'User' },
    { id: 'sessions', label: 'Sessions', icon: 'Calendar' },
    { id: 'documents', label: 'Documents', icon: 'FileText' },
    { id: 'communications', label: 'Communications', icon: 'MessageSquare' },
    { id: 'billing', label: 'Billing', icon: 'CreditCard' }
  ];

  const mockSessions = [
    {
      id: 'S001',
      date: '2024-08-20',
      type: 'Individual Therapy',
      duration: '60 minutes',
      status: 'Completed',
      notes: 'Discussed anxiety management techniques. Client showed improvement in coping strategies.',
      therapist: 'Dr. Smith'
    },
    {
      id: 'S002', 
      date: '2024-08-13',
      type: 'Individual Therapy',
      duration: '60 minutes',
      status: 'Completed',
      notes: 'Continued work on mindfulness practices. Client reported better sleep patterns.',
      therapist: 'Dr. Smith'
    },
    {
      id: 'S003',
      date: '2024-08-27',
      type: 'Individual Therapy',
      duration: '60 minutes',
      status: 'Scheduled',
      notes: '',
      therapist: 'Dr. Smith'
    }
  ];

  const mockDocuments = [
    {
      id: 'D001',
      name: 'Initial Intake Form',
      type: 'Intake',
      date: '2024-03-15',
      status: 'Complete',
      size: '2.4 MB'
    },
    {
      id: 'D002',
      name: 'HIPAA Privacy Notice',
      type: 'Consent',
      date: '2024-03-15', 
      status: 'Signed',
      size: '1.2 MB'
    },
    {
      id: 'D003',
      name: 'Treatment Plan',
      type: 'Treatment',
      date: '2024-03-20',
      status: 'Current',
      size: '3.1 MB'
    }
  ];

  const mockCommunications = [
    {
      id: 'C001',
      type: 'Email',
      subject: 'Appointment Confirmation',
      date: '2024-08-25',
      direction: 'Outbound',
      status: 'Sent'
    },
    {
      id: 'C002',
      type: 'Phone',
      subject: 'Schedule Change Request',
      date: '2024-08-22',
      direction: 'Inbound',
      status: 'Completed'
    },
    {
      id: 'C003',
      type: 'SMS',
      subject: 'Appointment Reminder',
      date: '2024-08-19',
      direction: 'Outbound',
      status: 'Delivered'
    }
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    try {
      return new Date(dateString)?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'text-success bg-success/10';
      case 'paused': return 'text-warning bg-warning/10';
      case 'inactive': return 'text-muted-foreground bg-muted';
      case 'completed': return 'text-success bg-success/10';
      case 'scheduled': return 'text-primary bg-primary/10';
      case 'cancelled': return 'text-error bg-error/10';
      case 'current': return 'text-success bg-success/10';
      case 'outstanding': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const handleEdit = () => {
    setEditData(client);
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate?.(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({});
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isEditing ? (
            <>
              <Input
                label="Full Name"
                value={editData?.name || ''}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
              />
              <Input
                label="Email"
                type="email"
                value={editData?.email || ''}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
              />
              <Input
                label="Phone"
                value={editData?.phone || ''}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
              <Input
                label="Date of Birth"
                type="date"
                value={editData?.dateOfBirth || ''}
                onChange={(e) => handleInputChange('dateOfBirth', e?.target?.value)}
              />
            </>
          ) : (
            <>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <p className="text-foreground font-body">{client?.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-foreground font-body">{client?.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-foreground font-body">{client?.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                <p className="text-foreground font-body">{formatDate(client?.dateOfBirth)}</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Emergency Contact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <p className="text-foreground font-body">{client?.emergencyContact?.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Phone</label>
            <p className="text-foreground font-body">{client?.emergencyContact?.phone}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Relationship</label>
            <p className="text-foreground font-body">{client?.emergencyContact?.relationship}</p>
          </div>
        </div>
      </div>

      {/* Insurance Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Insurance Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Provider</label>
            <p className="text-foreground font-body">{client?.insurance?.provider}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Policy Number</label>
            <p className="text-foreground font-body">{client?.insurance?.policyNumber}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Copay</label>
            <p className="text-foreground font-body">${client?.insurance?.copay}</p>
          </div>
        </div>
      </div>

      {/* Treatment Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Treatment Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Therapy Type</label>
            <p className="text-foreground font-body">{client?.therapyType}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Session Frequency</label>
            <p className="text-foreground font-body">{client?.sessionFrequency}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Status</label>
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              getStatusColor(client?.status)
            )}>
              {client?.status}
            </span>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Engagement Level</label>
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              getStatusColor(client?.engagementLevel)
            )}>
              {client?.engagementLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Clinical Notes</h3>
        {isEditing ? (
          <textarea
            className="w-full h-24 px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
            value={editData?.notes || ''}
            onChange={(e) => handleInputChange('notes', e?.target?.value)}
            placeholder="Enter clinical notes..."
          />
        ) : (
          <p className="text-foreground font-body text-sm bg-muted p-3 rounded-md">
            {client?.notes || 'No notes available'}
          </p>
        )}
      </div>
    </div>
  );

  const renderSessions = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-foreground">Session History</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Schedule Session
        </Button>
      </div>
      
      <div className="space-y-3">
        {mockSessions?.map((session) => (
          <div key={session?.id} className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-heading font-medium text-foreground">{session?.type}</h4>
                <p className="text-sm text-muted-foreground font-body">
                  {formatDate(session?.date)} • {session?.duration} • {session?.therapist}
                </p>
              </div>
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getStatusColor(session?.status)
              )}>
                {session?.status}
              </span>
            </div>
            {session?.notes && (
              <p className="text-sm text-foreground font-body bg-background p-3 rounded-md">
                {session?.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-foreground">Documents</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="Upload"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Upload Document
        </Button>
      </div>
      
      <div className="space-y-2">
        {mockDocuments?.map((document) => (
          <div key={document?.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="FileText" size={20} className="text-muted-foreground" />
              <div>
                <h4 className="font-heading font-medium text-foreground text-sm">{document?.name}</h4>
                <p className="text-xs text-muted-foreground font-body">
                  {document?.type} • {document?.size} • {formatDate(document?.date)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getStatusColor(document?.status)
              )}>
                {document?.status}
              </span>
              <Button
                variant="ghost"
                size="sm"
                iconName="Download"
                className="text-muted-foreground hover:text-foreground"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommunications = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-foreground">Communication Log</h3>
        <Button
          variant="outline"
          size="sm"
          iconName="MessageSquare"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
        >
          New Message
        </Button>
      </div>
      
      <div className="space-y-2">
        {mockCommunications?.map((comm) => (
          <div key={comm?.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon 
                name={comm?.type === 'Email' ? 'Mail' : comm?.type === 'Phone' ? 'Phone' : 'MessageSquare'} 
                size={16} 
                className="text-muted-foreground" 
              />
              <div>
                <h4 className="font-heading font-medium text-foreground text-sm">{comm?.subject}</h4>
                <p className="text-xs text-muted-foreground font-body">
                  {comm?.type} • {comm?.direction} • {formatDate(comm?.date)}
                </p>
              </div>
            </div>
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              getStatusColor(comm?.status)
            )}>
              {comm?.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="space-y-6">
      {/* Account Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Account Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="DollarSign" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground font-body">Current Balance</span>
            </div>
            <p className="text-xl font-heading font-semibold text-foreground">
              ${client?.balance || 0}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Calendar" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground font-body">Total Sessions</span>
            </div>
            <p className="text-xl font-heading font-semibold text-foreground">
              {client?.totalSessions}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="CreditCard" size={16} className="text-secondary" />
              <span className="text-sm text-muted-foreground font-body">Payment Status</span>
            </div>
            <span className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
              getStatusColor(client?.paymentStatus)
            )}>
              {client?.paymentStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="space-y-4">
        <h3 className="text-lg font-heading font-semibold text-foreground">Payment History</h3>
        
        <div className="text-center py-8">
          <Icon name="CreditCard" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground font-body">
            Payment history will be displayed here
          </p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'sessions': return renderSessions();
      case 'documents': return renderDocuments();
      case 'communications': return renderCommunications();
      case 'billing': return renderBilling();
      default: return renderOverview();
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden h-fit sticky top-20">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="User" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">{client?.name}</h2>
              <p className="text-sm text-muted-foreground font-body">{client?.id}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="text-muted-foreground hover:text-foreground"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button
                variant="default"
                size="sm"
                onClick={handleSave}
                iconName="Check"
                className="bg-success hover:bg-success/90"
              >
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                iconName="Edit"
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Calendar"
                className="text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                Schedule
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={cn(
                "flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-gentle",
                activeTab === tab?.id
                  ? "text-primary border-primary" :"text-muted-foreground border-transparent hover:text-foreground hover:border-muted"
              )}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ClientProfile;