import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const PaymentsSection = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const payments = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      sessionDate: '2025-08-23',
      amount: 150.00,
      status: 'paid',
      method: 'Credit Card',
      invoiceNumber: 'INV-001',
      dueDate: '2025-08-30',
      notes: 'Individual therapy session'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      sessionDate: '2025-08-22',
      amount: 180.00,
      status: 'paid',
      method: 'Bank Transfer',
      invoiceNumber: 'INV-002',
      dueDate: '2025-08-29',
      notes: 'Couples therapy session'
    },
    {
      id: 3,
      clientName: 'Emily Rodriguez',
      sessionDate: '2025-08-21',
      amount: 160.00,
      status: 'pending',
      method: 'Credit Card',
      invoiceNumber: 'INV-003',
      dueDate: '2025-08-28',
      notes: 'EMDR therapy session'
    },
    {
      id: 4,
      clientName: 'David Thompson',
      sessionDate: '2025-08-20',
      amount: 150.00,
      status: 'overdue',
      method: 'PayPal',
      invoiceNumber: 'INV-004',
      dueDate: '2025-08-25',
      notes: 'Individual therapy session'
    },
    {
      id: 5,
      clientName: 'Lisa Wang',
      sessionDate: '2025-08-19',
      amount: 150.00,
      status: 'pending',
      method: 'Credit Card',
      invoiceNumber: 'INV-005',
      dueDate: '2025-08-26',
      notes: 'Anxiety treatment session'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'overdue':
        return 'bg-error/10 text-error border-error/20';
      case 'cancelled':
        return 'bg-muted/10 text-muted-foreground border-muted/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getMethodIcon = (method) => {
    switch (method) {
      case 'Credit Card':
        return 'CreditCard';
      case 'Bank Transfer':
        return 'Banknote';
      case 'PayPal':
        return 'Wallet';
      default:
        return 'DollarSign';
    }
  };

  const filteredPayments = payments?.filter(payment => {
    const matchesSearch = payment?.clientName?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         payment?.invoiceNumber?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesFilter = filterStatus === 'all' || payment?.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = payments?.reduce((sum, payment) => sum + payment?.amount, 0);
  const paidAmount = payments?.filter(p => p?.status === 'paid')?.reduce((sum, payment) => sum + payment?.amount, 0);
  const pendingAmount = payments?.filter(p => p?.status === 'pending')?.reduce((sum, payment) => sum + payment?.amount, 0);
  const overdueAmount = payments?.filter(p => p?.status === 'overdue')?.reduce((sum, payment) => sum + payment?.amount, 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Payment Management
          </h1>
          <p className="text-muted-foreground font-body mt-1">
            Track session fees, invoices, and payment status across all clients.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Report
          </Button>
          <Button
            size="sm"
            iconName="Plus"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            Record Payment
          </Button>
        </div>
      </div>
      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="DollarSign" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">
                ${totalRevenue?.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground font-body">Total Revenue</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Icon name="CheckCircle" size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">
                ${paidAmount?.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground font-body">Collected</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Icon name="Clock" size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">
                ${pendingAmount?.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground font-body">Pending</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-error/10 rounded-lg">
              <Icon name="AlertTriangle" size={24} className="text-error" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">
                ${overdueAmount?.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground font-body">Overdue</p>
            </div>
          </div>
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
                placeholder="Search by client name or invoice number..."
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
              <option value="all">All Payments</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
            
            <Button variant="outline" size="sm" iconName="Filter">
              More Filters
            </Button>
          </div>
        </div>
      </div>
      {/* Payments Table */}
      <div className="bg-card rounded-lg border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30 border-b border-border">
              <tr>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Invoice
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Client
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Session Date
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Method
                </th>
                <th className="text-left p-4 text-sm font-heading font-semibold text-foreground">
                  Due Date
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
              {filteredPayments?.map((payment) => (
                <tr key={payment?.id} className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <p className="font-mono text-sm text-foreground">
                      {payment?.invoiceNumber}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    <p className="font-heading font-medium text-foreground">
                      {payment?.clientName}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {payment?.notes}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm text-foreground font-body">
                      {new Date(payment?.sessionDate)?.toLocaleDateString()}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-lg font-heading font-bold text-foreground">
                      ${payment?.amount?.toFixed(2)}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name={getMethodIcon(payment?.method)}
                        size={16}
                        className="text-muted-foreground"
                      />
                      <span className="text-sm text-foreground font-body">
                        {payment?.method}
                      </span>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-sm text-foreground font-body">
                      {new Date(payment?.dueDate)?.toLocaleDateString()}
                    </p>
                  </td>
                  
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-body rounded-full border ${getStatusColor(payment?.status)}`}>
                      {payment?.status}
                    </span>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="Eye"
                        aria-label="View invoice"
                      />
                      <Button
                        variant="ghost"
                        size="xs"
                        iconName="Download"
                        aria-label="Download invoice"
                      />
                      {payment?.status !== 'paid' && (
                        <Button
                          variant="ghost"
                          size="xs"
                          iconName="DollarSign"
                          aria-label="Record payment"
                        />
                      )}
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
      {/* Payment Reminders */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Payment Reminders
          </h2>
          <Button
            variant="outline"
            size="sm"
            iconName="Send"
            iconPosition="left"
          >
            Send All Reminders
          </Button>
        </div>
        
        <div className="space-y-4">
          {payments?.filter(p => p?.status === 'overdue' || p?.status === 'pending')?.map((payment) => (
            <div
              key={payment?.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                payment?.status === 'overdue' ? 'bg-error/10 border-error/20' : 'bg-warning/10 border-warning/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  name={payment?.status === 'overdue' ? "AlertTriangle" : "Clock"}
                  size={20}
                  className={payment?.status === 'overdue' ? "text-error" : "text-warning"}
                />
                <div>
                  <p className="font-heading font-medium text-foreground">
                    {payment?.clientName} - ${payment?.amount?.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    Due: {new Date(payment?.dueDate)?.toLocaleDateString()}
                    {payment?.status === 'overdue' && (
                      <span className="text-error"> (Overdue)</span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                >
                  Send Reminder
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsSection;