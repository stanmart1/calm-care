import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import { cn } from 'utils/cn';

const ClientTable = ({
  clients = [],
  sortConfig,
  onSort,
  onClientSelect,
  onBulkSelection,
  onSelectAll,
  selectedClients = [],
  viewMode = 'table'
}) => {

  const formatDate = (dateString) => {
    if (!dateString) return 'Not scheduled';
    try {
      return new Date(dateString)?.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'Not scheduled';
    try {
      return new Date(dateTimeString)?.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
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
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'current': return 'text-success bg-success/10';
      case 'outstanding': return 'text-error bg-error/10';
      case 'overdue': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getEngagementColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'high': return 'text-success bg-success/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getSortIcon = (key) => {
    if (sortConfig?.key !== key) return 'ArrowUpDown';
    return sortConfig?.direction === 'asc' ? 'ArrowUp' : 'ArrowDown';
  };

  const handleSelectAll = (e) => {
    onSelectAll?.(e?.target?.checked);
  };

  const handleBulkSelect = (clientId, e) => {
    onBulkSelection?.(clientId, e?.target?.checked);
  };

  if (viewMode === 'cards') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {clients?.map((client) => (
          <div
            key={client?.id}
            className={cn(
              "bg-card rounded-lg border border-border p-4 hover:shadow-soft-md transition-gentle cursor-pointer",
              selectedClients?.includes(client?.id) && "ring-2 ring-primary"
            )}
            onClick={() => onClientSelect?.(client)}
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedClients?.includes(client?.id)}
                  onChange={(e) => {
                    e?.stopPropagation();
                    handleBulkSelect(client?.id, e);
                  }}
                  className="h-4 w-4 rounded border border-input"
                />
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                  <Icon name="User" size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{client?.name}</h3>
                  <p className="text-sm text-muted-foreground font-body">{client?.id}</p>
                </div>
              </div>
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getStatusColor(client?.status)
              )}>
                {client?.status}
              </span>
            </div>

            {/* Card Content */}
            <div className="space-y-2 text-sm font-body">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground truncate">{client?.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">{client?.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">
                  Last: {formatDate(client?.lastSession)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground">
                  Next: {formatDateTime(client?.nextAppointment)}
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <span className={cn(
                  "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                  getPaymentStatusColor(client?.paymentStatus)
                )}>
                  {client?.paymentStatus}
                </span>
                <span className={cn(
                  "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                  getEngagementColor(client?.engagementLevel)
                )}>
                  {client?.engagementLevel}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-body">
                {client?.totalSessions} sessions
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedClients?.length === clients?.length && clients?.length > 0}
                  onChange={handleSelectAll}
                  className="h-4 w-4 rounded border border-input"
                />
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort?.('name')}
                  className="flex items-center space-x-2 font-heading font-medium text-foreground hover:text-primary transition-gentle"
                >
                  <span>Client</span>
                  <Icon name={getSortIcon('name')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="font-heading font-medium text-foreground">Contact</span>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort?.('lastSession')}
                  className="flex items-center space-x-2 font-heading font-medium text-foreground hover:text-primary transition-gentle"
                >
                  <span>Last Session</span>
                  <Icon name={getSortIcon('lastSession')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort?.('nextAppointment')}
                  className="flex items-center space-x-2 font-heading font-medium text-foreground hover:text-primary transition-gentle"
                >
                  <span>Next Appointment</span>
                  <Icon name={getSortIcon('nextAppointment')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort?.('status')}
                  className="flex items-center space-x-2 font-heading font-medium text-foreground hover:text-primary transition-gentle"
                >
                  <span>Status</span>
                  <Icon name={getSortIcon('status')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="font-heading font-medium text-foreground">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {clients?.map((client) => (
              <tr
                key={client?.id}
                className={cn(
                  "hover:bg-muted/50 transition-gentle",
                  selectedClients?.includes(client?.id) && "bg-primary/5"
                )}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedClients?.includes(client?.id)}
                    onChange={(e) => handleBulkSelect(client?.id, e)}
                    className="h-4 w-4 rounded border border-input"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-medium text-foreground">{client?.name}</div>
                      <div className="text-sm text-muted-foreground font-body">{client?.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-body">
                    <div className="text-foreground">{client?.email}</div>
                    <div className="text-muted-foreground">{client?.phone}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-body text-foreground">
                  {formatDate(client?.lastSession)}
                </td>
                <td className="px-4 py-3 text-sm font-body text-foreground">
                  {formatDateTime(client?.nextAppointment)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col space-y-1">
                    <span className={cn(
                      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium w-fit",
                      getStatusColor(client?.status)
                    )}>
                      {client?.status}
                    </span>
                    <span className={cn(
                      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium w-fit",
                      getPaymentStatusColor(client?.paymentStatus)
                    )}>
                      {client?.paymentStatus}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onClientSelect?.(client)}
                      iconName="Eye"
                      className="text-primary hover:text-primary/80"
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Calendar"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Schedule
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="MessageSquare"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Message
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {clients?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            No clients found
          </h3>
          <p className="text-muted-foreground font-body">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientTable;