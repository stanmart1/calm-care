import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

import ClientTable from './components/ClientTable';
import ClientProfile from './components/ClientProfile';
import SearchFilters from './components/SearchFilters';
import BulkActions from './components/BulkActions';
import AddClientModal from './components/AddClientModal';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedClients, setSelectedClients] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    therapyType: 'all',
    sessionFrequency: 'all',
    paymentStatus: 'all',
    engagementLevel: 'all'
  });
  const [sortConfig, setSortConfig] = useState({ key: 'lastSession', direction: 'desc' });
  const [viewMode, setViewMode] = useState('table'); // table or cards

  // Mock client data
  const mockClients = [
    {
      id: 'CL001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '(555) 123-4567',
      dateOfBirth: '1985-03-15',
      emergencyContact: {
        name: 'Mike Johnson',
        phone: '(555) 987-6543',
        relationship: 'Spouse'
      },
      insurance: {
        provider: 'Blue Cross Blue Shield',
        policyNumber: 'BC123456789',
        copay: 25
      },
      therapyType: 'Individual',
      status: 'Active',
      engagementLevel: 'High',
      sessionFrequency: 'Weekly',
      lastSession: '2024-08-20',
      nextAppointment: '2024-08-27 14:00',
      totalSessions: 12,
      paymentStatus: 'Current',
      balance: 0,
      notes: 'Making excellent progress with anxiety management techniques.',
      consentStatus: {
        intake: true,
        privacy: true,
        treatment: true,
        photography: false
      },
      joinDate: '2024-03-15',
      avatar: null
    },
    {
      id: 'CL002', 
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      phone: '(555) 234-5678',
      dateOfBirth: '1992-07-22',
      emergencyContact: {
        name: 'Lisa Chen',
        phone: '(555) 876-5432',
        relationship: 'Sister'
      },
      insurance: {
        provider: 'Aetna',
        policyNumber: 'AE987654321',
        copay: 30
      },
      therapyType: 'Couples',
      status: 'Active',
      engagementLevel: 'Medium',
      sessionFrequency: 'Bi-weekly',
      lastSession: '2024-08-15',
      nextAppointment: '2024-08-29 16:00',
      totalSessions: 8,
      paymentStatus: 'Outstanding',
      balance: 120,
      notes: 'Working on communication skills with partner.',
      consentStatus: {
        intake: true,
        privacy: true,
        treatment: true,
        photography: true
      },
      joinDate: '2024-05-01',
      avatar: null
    },
    {
      id: 'CL003',
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com', 
      phone: '(555) 345-6789',
      dateOfBirth: '1978-11-08',
      emergencyContact: {
        name: 'Carlos Rodriguez',
        phone: '(555) 765-4321',
        relationship: 'Husband'
      },
      insurance: {
        provider: 'Kaiser Permanente',
        policyNumber: 'KP456789123',
        copay: 20
      },
      therapyType: 'Family',
      status: 'Paused',
      engagementLevel: 'Low',
      sessionFrequency: 'Monthly',
      lastSession: '2024-07-28',
      nextAppointment: null,
      totalSessions: 15,
      paymentStatus: 'Current',
      balance: 0,
      notes: 'Taking a break due to scheduling conflicts. Will resume in October.',
      consentStatus: {
        intake: true,
        privacy: true,
        treatment: true,
        photography: false
      },
      joinDate: '2023-12-10',
      avatar: null
    }
  ];

  // Initialize clients on component mount
  React.useEffect(() => {
    setClients(mockClients);
  }, []);

  // Filter and search clients
  const filteredClients = useMemo(() => {
    let filtered = clients?.filter(client => {
      // Search term filter
      const matchesSearch = !searchTerm || 
        client?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        client?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        client?.phone?.includes(searchTerm) ||
        client?.id?.toLowerCase()?.includes(searchTerm?.toLowerCase());

      // Status filter
      const matchesStatus = filters?.status === 'all' || client?.status?.toLowerCase() === filters?.status;
      
      // Therapy type filter
      const matchesTherapyType = filters?.therapyType === 'all' || client?.therapyType?.toLowerCase() === filters?.therapyType;
      
      // Session frequency filter
      const matchesFrequency = filters?.sessionFrequency === 'all' || client?.sessionFrequency?.toLowerCase() === filters?.sessionFrequency;
      
      // Payment status filter
      const matchesPayment = filters?.paymentStatus === 'all' || client?.paymentStatus?.toLowerCase() === filters?.paymentStatus;
      
      // Engagement level filter
      const matchesEngagement = filters?.engagementLevel === 'all' || client?.engagementLevel?.toLowerCase() === filters?.engagementLevel;

      return matchesSearch && matchesStatus && matchesTherapyType && matchesFrequency && matchesPayment && matchesEngagement;
    });

    // Sort clients
    if (sortConfig?.key) {
      filtered?.sort((a, b) => {
        let aValue = a?.[sortConfig?.key];
        let bValue = b?.[sortConfig?.key];

        // Handle different data types
        if (sortConfig?.key === 'lastSession' || sortConfig?.key === 'nextAppointment') {
          aValue = new Date(aValue || 0);
          bValue = new Date(bValue || 0);
        } else if (typeof aValue === 'string') {
          aValue = aValue?.toLowerCase();
          bValue = bValue?.toLowerCase();
        }

        if (aValue < bValue) {
          return sortConfig?.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig?.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [clients, searchTerm, filters, sortConfig]);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
    setSelectedClient(null);
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev?.key === key && prev?.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleBulkSelection = (clientId, isSelected) => {
    if (isSelected) {
      setSelectedClients(prev => [...prev, clientId]);
    } else {
      setSelectedClients(prev => prev?.filter(id => id !== clientId));
    }
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelectedClients(filteredClients?.map(client => client?.id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleAddClient = (clientData) => {
    const newClient = {
      ...clientData,
      id: `CL${String(clients?.length + 1)?.padStart(3, '0')}`,
      totalSessions: 0,
      joinDate: new Date()?.toISOString()?.split('T')?.[0]
    };
    setClients(prev => [newClient, ...prev]);
    setIsAddModalOpen(false);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients(prev => prev?.map(client => 
      client?.id === updatedClient?.id ? updatedClient : client
    ));
    setSelectedClient(updatedClient);
  };

  const handleDeleteClient = (clientId) => {
    setClients(prev => prev?.filter(client => client?.id !== clientId));
    if (selectedClient?.id === clientId) {
      handleCloseProfile();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm font-body mb-4">
              <Link 
                to="/admin-dashboard" 
                className="text-muted-foreground hover:text-foreground transition-gentle"
              >
                Dashboard
              </Link>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">Client Management</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Client Management
                </h1>
                <p className="text-muted-foreground font-body">
                  Manage client relationships, sessions, and documentation
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode(viewMode === 'table' ? 'cards' : 'table')}
                  iconName={viewMode === 'table' ? 'Grid3X3' : 'List'}
                >
                  {viewMode === 'table' ? 'Card View' : 'Table View'}
                </Button>
                
                <Button
                  variant="default"
                  onClick={() => setIsAddModalOpen(true)}
                  iconName="Plus"
                  className="bg-primary hover:bg-primary/90"
                >
                  Add Client
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md">
                    <Icon name="Users" size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Total Clients</p>
                    <p className="text-xl font-heading font-semibold text-foreground">{clients?.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-md">
                    <Icon name="Calendar" size={16} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Active Clients</p>
                    <p className="text-xl font-heading font-semibold text-foreground">
                      {clients?.filter(c => c?.status === 'Active')?.length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-warning/10 rounded-md">
                    <Icon name="Clock" size={16} className="text-warning" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Upcoming Sessions</p>
                    <p className="text-xl font-heading font-semibold text-foreground">
                      {clients?.filter(c => c?.nextAppointment)?.length}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-error/10 rounded-md">
                    <Icon name="AlertCircle" size={16} className="text-error" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Outstanding Balance</p>
                    <p className="text-xl font-heading font-semibold text-foreground">
                      {clients?.filter(c => c?.balance > 0)?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content Area */}
            <div className={`${isProfileOpen ? 'lg:w-2/3' : 'w-full'} space-y-6`}>
              
              {/* Search and Filters */}
              <div className="bg-card rounded-lg border border-border p-4 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Search by name, email, phone, or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e?.target?.value)}
                      className="w-full"
                    />
                  </div>
                </div>
                
                <SearchFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                />
              </div>

              {/* Bulk Actions */}
              {selectedClients?.length > 0 && (
                <BulkActions
                  selectedClients={selectedClients}
                  onClearSelection={() => setSelectedClients([])}
                />
              )}

              {/* Results Summary */}
              <div className="flex items-center justify-between text-sm font-body text-muted-foreground">
                <span>
                  Showing {filteredClients?.length} of {clients?.length} clients
                  {selectedClients?.length > 0 && ` (${selectedClients?.length} selected)`}
                </span>
                <span>
                  Last updated: {new Date()?.toLocaleDateString()}
                </span>
              </div>

              {/* Client Table */}
              <ClientTable
                clients={filteredClients}
                sortConfig={sortConfig}
                onSort={handleSort}
                onClientSelect={handleClientSelect}
                onBulkSelection={handleBulkSelection}
                onSelectAll={handleSelectAll}
                selectedClients={selectedClients}
                viewMode={viewMode}
              />
            </div>

            {/* Client Profile Panel */}
            {isProfileOpen && selectedClient && (
              <div className="lg:w-1/3">
                <ClientProfile
                  client={selectedClient}
                  onClose={handleCloseProfile}
                  onUpdate={handleUpdateClient}
                  onDelete={handleDeleteClient}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add Client Modal */}
      <AddClientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddClient}
      />

      <Footer />
    </div>
  );
};

export default ClientManagement;