import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const UpcomingSessions = () => {
  const upcomingSessions = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      time: '9:00 AM',
      duration: '50 min',
      type: 'Individual Therapy',
      status: 'confirmed',
      isOnline: false,
      notes: 'Follow-up on anxiety management techniques'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      time: '10:30 AM',
      duration: '50 min',
      type: 'Couples Therapy',
      status: 'pending',
      isOnline: true,
      notes: 'First session - intake assessment'
    },
    {
      id: 3,
      clientName: 'Emily Rodriguez',
      time: '2:00 PM',
      duration: '50 min',
      type: 'EMDR Therapy',
      status: 'confirmed',
      isOnline: false,
      notes: 'Session 4 - trauma processing'
    },
    {
      id: 4,
      clientName: 'David Thompson',
      time: '3:30 PM',
      duration: '50 min',
      type: 'Individual Therapy',
      status: 'confirmed',
      isOnline: true,
      notes: 'Depression assessment and treatment planning'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'cancelled':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Today's Sessions
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" iconName="Calendar">
            View Calendar
          </Button>
          <Button variant="outline" size="sm" iconName="Plus">
            Add Session
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {upcomingSessions?.map((session) => (
          <div
            key={session?.id}
            className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
          >
            {/* Time */}
            <div className="flex-shrink-0 text-center">
              <p className="text-lg font-mono font-semibold text-foreground">
                {session?.time}
              </p>
              <p className="text-xs text-muted-foreground font-body">
                {session?.duration}
              </p>
            </div>

            {/* Session Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-sm font-heading font-medium text-foreground truncate">
                  {session?.clientName}
                </p>
                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-body rounded-full border ${getStatusColor(session?.status)}`}>
                  {session?.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-1">
                {session?.type}
              </p>
              <p className="text-xs text-muted-foreground font-body truncate">
                {session?.notes}
              </p>
            </div>

            {/* Session Type & Actions */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon
                  name={session?.isOnline ? "Video" : "MapPin"}
                  size={14}
                  className={session?.isOnline ? "text-primary" : "text-success"}
                />
                <span className="font-body">
                  {session?.isOnline ? "Online" : "In-Person"}
                </span>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="xs" aria-label="View client details">
                  <Icon name="User" size={14} />
                </Button>
                <Button variant="ghost" size="xs" aria-label="Add session notes">
                  <Icon name="FileText" size={14} />
                </Button>
                <Button variant="ghost" size="xs" aria-label="More options">
                  <Icon name="MoreHorizontal" size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-body">
            {upcomingSessions?.length} sessions scheduled today
          </span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-xs text-muted-foreground font-body">3 Confirmed</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span className="text-xs text-muted-foreground font-body">1 Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;