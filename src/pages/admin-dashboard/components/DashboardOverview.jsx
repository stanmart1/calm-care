import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import MetricCard from './MetricCard';
import RecentActivity from './RecentActivity';
import UpcomingSessions from './UpcomingSessions';
import RevenueChart from './RevenueChart';

const DashboardOverview = () => {
  const metrics = [
    {
      title: 'Today\'s Sessions',
      value: '6',
      change: '+2 from yesterday',
      trend: 'up',
      icon: 'Calendar',
      color: 'primary'
    },
    {
      title: 'Active Clients',
      value: '24',
      change: '+3 this month',
      trend: 'up',
      icon: 'Users',
      color: 'success'
    },
    {
      title: 'Pending Payments',
      value: '$2,450',
      change: '5 outstanding',
      trend: 'neutral',
      icon: 'CreditCard',
      color: 'warning'
    },
    {
      title: 'This Month Revenue',
      value: '$18,240',
      change: '+12% from last month',
      trend: 'up',
      icon: 'DollarSign',
      color: 'success'
    }
  ];

  const quickActions = [
    { label: 'Add New Client', icon: 'UserPlus', action: () => console.log('Add client') },
    { label: 'Schedule Session', icon: 'CalendarPlus', action: () => console.log('Schedule session') },
    { label: 'Record Payment', icon: 'CreditCard', action: () => console.log('Record payment') },
    { label: 'Write Notes', icon: 'FileText', action: () => console.log('Write notes') }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground font-body mt-1">
            Welcome back, Dr. Chen. Here's what's happening with your practice today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Data
          </Button>
          <Button
            size="sm"
            iconName="RefreshCw"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            Refresh
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics?.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions?.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={action?.action}
              iconName={action?.icon}
              iconPosition="left"
              className="h-auto p-4 flex-col space-y-2 hover:bg-muted"
            >
              <Icon name={action?.icon} size={24} />
              <span className="text-sm font-body">{action?.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Upcoming Sessions & Activity */}
        <div className="lg:col-span-2 space-y-8">
          <UpcomingSessions />
          <RecentActivity />
        </div>

        {/* Right Column - Revenue Chart */}
        <div>
          <RevenueChart />
        </div>
      </div>

      {/* Notifications & Alerts */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Important Notifications
          </h2>
          <Button variant="ghost" size="sm">
            <Icon name="Settings" size={16} />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-heading font-medium text-foreground">
                Payment Reminder
              </p>
              <p className="text-sm text-muted-foreground font-body">
                3 clients have outstanding payments totaling $750. Send reminders?
              </p>
            </div>
            <Button variant="outline" size="xs" className="ml-auto">
              Send
            </Button>
          </div>
          
          <div className="flex items-start space-x-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <Icon name="Calendar" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-heading font-medium text-foreground">
                Session Confirmation
              </p>
              <p className="text-sm text-muted-foreground font-body">
                2 clients haven't confirmed their appointments for tomorrow.
              </p>
            </div>
            <Button variant="outline" size="xs" className="ml-auto">
              Follow Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;