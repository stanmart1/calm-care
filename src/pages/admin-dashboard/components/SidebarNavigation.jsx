import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const SidebarNavigation = ({ activeSection, onSectionChange, collapsed, onToggleCollapse }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'BarChart3', badge: null },
    { id: 'clients', label: 'Clients', icon: 'Users', badge: '24' },
    { id: 'bookings', label: 'Bookings', icon: 'Calendar', badge: '12' },
    { id: 'payments', label: 'Payments', icon: 'CreditCard', badge: '$2,450' },
    { id: 'notes', label: 'Notes', icon: 'FileText', badge: null },
    { id: 'settings', label: 'Settings', icon: 'Settings', badge: null },
  ];

  const handleLogout = () => {
    // In a real app, handle logout logic here
    if (window.confirm('Are you sure you want to logout?')) {
      window.location.href = '/';
    }
  };

  return (
    <div className={`fixed left-0 top-0 bottom-0 bg-card border-r border-border shadow-lg transition-all duration-300 z-50 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
                <Icon name="Heart" size={20} color="white" />
              </div>
              <span className="text-lg font-heading font-semibold text-foreground">
                CalmCare Admin
              </span>
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle sidebar"
          >
            <Icon name={collapsed ? "ChevronRight" : "ChevronLeft"} size={20} />
          </button>
        </div>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="User" size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-heading font-medium text-foreground">
                Dr. Sarah Chen
              </p>
              <p className="text-xs text-muted-foreground font-body">
                Licensed Therapist
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems?.map((item) => (
            <li key={item?.id}>
              <button
                onClick={() => onSectionChange(item?.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-md text-left transition-colors ${
                  activeSection === item?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="font-body font-medium flex-1">{item?.label}</span>
                    {item?.badge && (
                      <span className={`text-xs px-2 py-1 rounded-full font-mono ${
                        activeSection === item?.id
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item?.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-border">
        {!collapsed ? (
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              onClick={() => window.location.href = '/homepage'}
              iconName="Home"
              iconPosition="left"
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              Back to Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              iconName="HelpCircle"
              iconPosition="left"
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              Support
            </Button>
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              onClick={handleLogout}
              iconName="LogOut"
              iconPosition="left"
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <button
              onClick={() => window.location.href = '/homepage'}
              className="w-full p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Back to Home"
            >
              <Icon name="Home" size={20} />
            </button>
            <button
              className="w-full p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Support"
            >
              <Icon name="HelpCircle" size={20} />
            </button>
            <button
              onClick={handleLogout}
              className="w-full p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Logout"
            >
              <Icon name="LogOut" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarNavigation;