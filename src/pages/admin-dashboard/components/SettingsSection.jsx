import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const SettingsSection = () => {
  const [activeTab, setActiveTab] = useState('practice');

  const tabs = [
    { id: 'practice', label: 'Practice Info', icon: 'Building' },
    { id: 'services', label: 'Services', icon: 'Calendar' },
    { id: 'payments', label: 'Payments', icon: 'CreditCard' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'compliance', label: 'Compliance', icon: 'FileCheck' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'practice':
        return <PracticeInfoTab />;
      case 'services':
        return <ServicesTab />;
      case 'payments':
        return <PaymentsTab />;
      case 'notifications':
        return <NotificationsTab />;
      case 'security':
        return <SecurityTab />;
      case 'compliance':
        return <ComplianceTab />;
      default:
        return <PracticeInfoTab />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">
          Settings & Configuration
        </h1>
        <p className="text-muted-foreground font-body mt-1">
          Manage your practice settings, services, payments, and compliance configurations.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border border-border p-4 shadow-soft">
            <nav className="space-y-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-md text-left transition-colors ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} className="flex-shrink-0" />
                  <span className="font-body font-medium">{tab?.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const PracticeInfoTab = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
        Practice Information
      </h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Practice Name
            </label>
            <Input
              type="text"
              defaultValue="CalmCare Counseling"
              placeholder="Enter practice name"
            />
          </div>
          
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Therapist Name
            </label>
            <Input
              type="text"
              defaultValue="Dr. Sarah Chen, LCSW"
              placeholder="Enter therapist name"
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-heading font-medium text-foreground mb-2 block">
            Practice Address
          </label>
          <Input
            type="text"
            defaultValue="123 Wellness Way, Suite 200, Peaceful City, PC 12345"
            placeholder="Enter practice address"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Phone Number
            </label>
            <Input
              type="tel"
              defaultValue="(555) 123-4567"
              placeholder="Enter phone number"
            />
          </div>
          
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Email Address
            </label>
            <Input
              type="email"
              defaultValue="info@calmcarecounseling.com"
              placeholder="Enter email address"
            />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-heading font-medium text-foreground mb-2 block">
            License Number
          </label>
          <Input
            type="text"
            defaultValue="LCSW-12345-CA"
            placeholder="Enter license number"
          />
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

const ServicesTab = () => {
  const services = [
    { id: 1, name: 'Individual Therapy', duration: 50, price: 150, type: 'individual' },
    { id: 2, name: 'Couples Therapy', duration: 50, price: 180, type: 'couples' },
    { id: 3, name: 'EMDR Therapy', duration: 50, price: 160, type: 'specialized' },
    { id: 4, name: 'Family Therapy', duration: 60, price: 200, type: 'family' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-semibold text-foreground">
          Services & Pricing
        </h2>
        <Button size="sm" iconName="Plus" iconPosition="left">
          Add Service
        </Button>
      </div>
      <div className="space-y-4">
        {services?.map((service) => (
          <div key={service?.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex-1">
              <h3 className="font-heading font-medium text-foreground">
                {service?.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {service?.duration} minutes • ${service?.price}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 text-xs font-body rounded-full bg-primary/10 text-primary">
                {service?.type}
              </span>
              <Button variant="ghost" size="sm" iconName="Edit" />
              <Button variant="ghost" size="sm" iconName="Trash2" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Business Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Monday - Friday
            </label>
            <div className="flex space-x-2">
              <Input type="time" defaultValue="08:00" />
              <span className="flex items-center text-muted-foreground">to</span>
              <Input type="time" defaultValue="18:00" />
            </div>
          </div>
          <div>
            <label className="text-sm font-heading font-medium text-foreground mb-2 block">
              Saturday
            </label>
            <div className="flex space-x-2">
              <Input type="time" defaultValue="09:00" />
              <span className="flex items-center text-muted-foreground">to</span>
              <Input type="time" defaultValue="15:00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentsTab = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
        Payment Configuration
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Accepted Payment Methods
          </h3>
          <div className="space-y-3">
            {[
              { method: 'Credit Card', enabled: true, icon: 'CreditCard' },
              { method: 'PayPal', enabled: true, icon: 'Wallet' },
              { method: 'Bank Transfer', enabled: false, icon: 'Banknote' },
              { method: 'Cash', enabled: true, icon: 'DollarSign' }
            ]?.map((payment) => (
              <div key={payment?.method} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name={payment?.icon} size={20} className="text-muted-foreground" />
                  <span className="font-body text-foreground">{payment?.method}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={payment?.enabled}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Payment Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Payment Due (Days)
              </label>
              <Input
                type="number"
                defaultValue="7"
                placeholder="Enter number of days"
              />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Late Fee (%)
              </label>
              <Input
                type="number"
                defaultValue="5"
                placeholder="Enter percentage"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

const NotificationsTab = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
        Notification Settings
      </h2>
      <div className="space-y-6">
        {[
          { title: 'Email Notifications', subtitle: 'Receive email alerts for important events' },
          { title: 'SMS Notifications', subtitle: 'Get text message alerts on your phone' },
          { title: 'Appointment Reminders', subtitle: 'Send reminders to clients before sessions' },
          { title: 'Payment Notifications', subtitle: 'Alerts for received and overdue payments' },
          { title: 'System Updates', subtitle: 'Notifications about system maintenance and updates' }
        ]?.map((notification) => (
          <div key={notification?.title} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-heading font-medium text-foreground">
                {notification?.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {notification?.subtitle}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

const SecurityTab = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
        Security Settings
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Two-Factor Authentication
          </h3>
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-medium text-foreground">2FA Status</p>
                <p className="text-sm text-muted-foreground font-body">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline" iconName="Shield">
                Enable 2FA
              </Button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Password Security
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Current Password
              </label>
              <Input type="password" placeholder="Enter current password" />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                New Password
              </label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Confirm New Password
              </label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Session Management
          </h3>
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-medium text-foreground">Active Sessions</p>
                <p className="text-sm text-muted-foreground font-body">
                  Manage your active login sessions across devices
                </p>
              </div>
              <Button variant="outline" iconName="LogOut">
                View Sessions
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Update Security</Button>
        </div>
      </div>
    </div>
  );
};

const ComplianceTab = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
      <h2 className="text-xl font-heading font-semibold text-foreground mb-6">
        HIPAA & Compliance
      </h2>
      <div className="space-y-6">
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-heading font-medium text-foreground">
                HIPAA Compliance Active
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Your system is configured to meet HIPAA requirements for patient data protection.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Data Retention Policy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Client Records (Years)
              </label>
              <Input
                type="number"
                defaultValue="7"
                placeholder="Enter retention period"
              />
            </div>
            <div>
              <label className="text-sm font-heading font-medium text-foreground mb-2 block">
                Session Notes (Years)
              </label>
              <Input
                type="number"
                defaultValue="7"
                placeholder="Enter retention period"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Consent Forms
          </h3>
          <div className="space-y-3">
            {[
              'Treatment Consent Form',
              'HIPAA Privacy Notice',
              'Telehealth Consent Form',
              'Payment Agreement Form'
            ]?.map((form) => (
              <div key={form} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <span className="font-body text-foreground">{form}</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" iconName="Edit" />
                  <Button variant="ghost" size="sm" iconName="Download" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
            Audit Logs
          </h3>
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-medium text-foreground">Access Logs</p>
                <p className="text-sm text-muted-foreground font-body">
                  View system access and activity logs for compliance auditing
                </p>
              </div>
              <Button variant="outline" iconName="FileText">
                View Logs
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Export Settings</Button>
          <Button>Save Compliance Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;