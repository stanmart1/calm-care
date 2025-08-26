import React from 'react';
import Icon from 'components/AppIcon';
import { formatDistanceToNow } from 'date-fns';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'session_completed',
      title: 'Session completed with Sarah Johnson',
      description: 'Individual therapy session - anxiety management',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      icon: 'CheckCircle',
      iconColor: 'text-success'
    },
    {
      id: 2,
      type: 'payment_received',
      title: 'Payment received from Michael Chen',
      description: '$150.00 for couples therapy session',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      icon: 'DollarSign',
      iconColor: 'text-success'
    },
    {
      id: 3,
      type: 'appointment_scheduled',
      title: 'New appointment scheduled',
      description: 'Emily Rodriguez - EMDR therapy for next Tuesday',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      icon: 'Calendar',
      iconColor: 'text-primary'
    },
    {
      id: 4,
      type: 'client_added',
      title: 'New client registered',
      description: 'David Thompson completed intake forms',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
      icon: 'UserPlus',
      iconColor: 'text-primary'
    },
    {
      id: 5,
      type: 'notes_added',
      title: 'Session notes added',
      description: 'Progress notes for Lisa Wang - trauma therapy',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      icon: 'FileText',
      iconColor: 'text-muted-foreground'
    },
    {
      id: 6,
      type: 'payment_overdue',
      title: 'Payment reminder sent',
      description: 'Reminder sent to client for overdue payment',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      icon: 'AlertCircle',
      iconColor: 'text-warning'
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Recent Activity
        </h2>
        <div className="text-sm text-muted-foreground font-body">
          Last 7 days
        </div>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div
            key={activity?.id}
            className={`flex items-start space-x-3 pb-4 ${
              index < activities?.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            {/* Activity Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 bg-muted/30 rounded-full flex items-center justify-center">
                <Icon
                  name={activity?.icon}
                  size={16}
                  className={activity?.iconColor}
                />
              </div>
            </div>

            {/* Activity Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-heading font-medium text-foreground mb-1">
                {activity?.title}
              </p>
              <p className="text-sm text-muted-foreground font-body mb-2">
                {activity?.description}
              </p>
              <p className="text-xs text-muted-foreground font-body">
                {formatDistanceToNow(activity?.timestamp, { addSuffix: true })}
              </p>
            </div>

            {/* Activity Actions */}
            <div className="flex-shrink-0">
              <button className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                <Icon name="MoreHorizontal" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* View All Activity Link */}
      <div className="mt-6 pt-4 border-t border-border text-center">
        <button className="text-sm text-primary hover:text-primary/80 font-body transition-colors">
          View all activity →
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;