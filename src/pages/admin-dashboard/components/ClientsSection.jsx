import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const ClientsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterStatus, setFilterStatus] = useState('all');

  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      lastSession: '2025-08-23',
      nextAppointment: '2025-08-26 09:00',
      status: 'active',
      sessionCount: 12,
      notes: 'Making excellent progress with anxiety management'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '(555) 234-5678',
      lastSession: '2025-08-22',
      nextAppointment: '2025-08-25 14:30',
      status: 'active',
      sessionCount: 8,
      notes: 'Couples therapy - communication improvements noted'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '(555) 345-6789',
      lastSession: '2025-08-21',
      nextAppointment: '2025-08-28 11:00',
      status: 'active',
      sessionCount: 15,
      notes: 'EMDR therapy for trauma processing - session 4 of 8'
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'david.thompson@email.com',
      phone: '(555) 456-7890',
      lastSession: '2025-08-20',
      nextAppointment: null,
      status: 'inactive',
      sessionCount: 6,
      notes: 'Completed initial depression treatment plan'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa.wang@email.com',
      phone: '(555) 567-8901',
      lastSession: '2025-08-19',
      nextAppointment: '2025-08-27 16:00',
      status: 'active',
      sessionCount: 10,
      notes: 'Anxiety and panic disorder treatment - good progress'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success border-success/20';
      case 'inactive':
        return 'bg-muted/10 text-muted-foreground border-muted/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const filteredClients = clients?.filter(client => {
    const matchesSearch = client?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         client?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesFilter = filterStatus === 'all' || client?.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Client Management
          </h1>
          <p className="text-muted-foreground font-body mt-1">
            Manage your client information, appointments, and treatment history.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export
          </Button>
          <Button
            size="sm"
            iconName="UserPlus"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            Add Client
          </Button>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search clients by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e?.target?.value)}
              className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground"
            >
              <option value="name">Sort by Name</option>
              <option value="lastSession">Last Session</option>
              <option value="nextAppointment">Next Appointment</option>
              <option value="sessionCount">Session Count</option>
            </select>
          </div>
        </div>
      </div>
      {/* Clients Table */}
      <div className="bg-card rounded-lg border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30 border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Client
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Contact
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Last Session
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Next Appointment
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClients?.map((client) => (
                <tr key={client?.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <div>
                      <p className="font-heading font-medium text-foreground">
                        {client?.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        {client?.sessionCount} sessions
                      </p>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <div className="text-sm">
                      <p className="text-foreground font-body">
                        {client?.email}
                      </p>
                      <p className="text-muted-foreground font-mono">
                        {client?.phone}
                      </p>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm text-foreground font-body">
                      {new Date(client?.lastSession)?.toLocaleDateString()}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    {client?.nextAppointment ? (
                      <div className="text-sm">
                        <p className="text-foreground font-body">
                          {new Date(client?.nextAppointment)?.toLocaleDateString()}
                        </p>
                        <p className="text-muted-foreground font-mono">
                          {new Date(client?.nextAppointment)?.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground font-body">
                        No upcoming appointments
                      </span>
                    )}
                  </td>
                  
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-body rounded-full border ${getStatusColor(client?.status)}`}>
                      {client?.status}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="User"
                        aria-label="View profile"
                      />
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="Calendar"
                        aria-label="Schedule appointment"
                      />
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="FileText"
                        aria-label="View notes"
                      />
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="MoreHorizontal"
                        aria-label="More options"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Client Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Icon name="Users" size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground font-body">Total Clients</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="UserCheck" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">21</p>
              <p className="text-sm text-muted-foreground font-body">Active Clients</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Icon name="Calendar" size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">18</p>
              <p className="text-sm text-muted-foreground font-body">Scheduled This Week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;