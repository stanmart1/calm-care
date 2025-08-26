import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SidebarNavigation from './components/SidebarNavigation';
import DashboardOverview from './components/DashboardOverview';
import ClientsSection from './components/ClientsSection';
import BookingsSection from './components/BookingsSection';
import PaymentsSection from './components/PaymentsSection';
import NotesSection from './components/NotesSection';
import SettingsSection from './components/SettingsSection';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock authentication check
  useEffect(() => {
    // In a real app, check authentication status here
    const isAuthenticated = true; // Replace with actual auth check
    if (!isAuthenticated) {
      window.location.href = '/login';
    }
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'clients':
        return <ClientsSection />;
      case 'bookings':
        return <BookingsSection />;
      case 'payments':
        return <PaymentsSection />;
      case 'notes':
        return <NotesSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | CalmCare Counseling Practice Management</title>
        <meta name="description" content="Secure admin dashboard for managing counseling practice operations, client appointments, payments, and session notes." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-muted/30 flex">
        {/* Sidebar Navigation */}
        <SidebarNavigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <div className="p-6 md:p-8">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;