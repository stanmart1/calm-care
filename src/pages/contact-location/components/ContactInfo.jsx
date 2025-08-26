import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ContactInfo = () => {
  const handlePhoneCall = () => {
    window.open('tel:+15551234567', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@calmcarecounseling.com', '_self');
  };

  const handleEmergencyCall = () => {
    window.open('tel:988', '_self');
  };

  const officeHours = [
    { day: "Monday", hours: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-soft p-6">
      <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
        Contact Information
      </h2>
      {/* Primary Contact */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
            <Icon name="Phone" size={20} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-body text-muted-foreground">Phone</p>
            <Button
              variant="ghost"
              onClick={handlePhoneCall}
              className="text-lg font-heading font-medium text-foreground hover:text-primary p-0 h-auto"
            >
              (555) 123-4567
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
            <Icon name="Mail" size={20} className="text-secondary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-body text-muted-foreground">Email</p>
            <Button
              variant="ghost"
              onClick={handleEmailClick}
              className="text-lg font-body text-foreground hover:text-secondary p-0 h-auto"
            >
              info@calmcarecounseling.com
            </Button>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
            <Icon name="MapPin" size={20} className="text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-body text-muted-foreground">Address</p>
            <div className="text-lg font-body text-foreground">
              <p>123 Wellness Way</p>
              <p>Suite 200</p>
              <p>Peaceful City, PC 12345</p>
            </div>
          </div>
        </div>
      </div>
      {/* Office Hours */}
      <div className="mb-8">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Office Hours
        </h3>
        <div className="space-y-2">
          {officeHours?.map((schedule) => (
            <div key={schedule?.day} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-body text-foreground">{schedule?.day}</span>
              <span className={`font-mono text-sm ${schedule?.hours === 'Closed' ? 'text-muted-foreground' : 'text-foreground'}`}>
                {schedule?.hours}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
          <p className="text-sm font-body text-warning-foreground">
            <Icon name="Info" size={16} className="inline mr-2" />
            Holiday hours may vary. Please call ahead during holiday periods.
          </p>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
        <h3 className="text-lg font-heading font-semibold text-error mb-3">
          Crisis Support - Available 24/7
        </h3>
        <p className="text-sm font-body text-muted-foreground mb-4">
          If you're experiencing a mental health emergency, please contact the crisis hotline immediately.
        </p>
        <div className="space-y-2">
          <Button
            variant="outline"
            onClick={handleEmergencyCall}
            iconName="Phone"
            iconPosition="left"
            className="border-error text-error hover:bg-error hover:text-error-foreground w-full sm:w-auto"
          >
            988 - Crisis Lifeline
          </Button>
          <p className="text-xs font-body text-muted-foreground">
            For immediate danger, call 911
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;