import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const ConfirmationView = ({ bookingData, paymentData }) => {
  const {
    service = "Individual Therapy Session",
    date = "2025-08-28",
    time = "2:00 PM",
    counselor = "Dr. Sarah Johnson",
    format = "In-Person",
    cost = 150,
    confirmationNumber = "CC-2025-0828-001"
  } = bookingData || {};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleAddToCalendar = () => {
    const startDate = new Date(`${date} ${time}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add 1 hour
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(service)}&dates=${startDate?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z/${endDate?.toISOString()?.replace(/[-:]/g, '')?.split('.')?.[0]}Z&details=${encodeURIComponent(`Counseling session with ${counselor}`)}&location=${encodeURIComponent(format === 'Online' ? 'Online Session' : '123 Wellness Way, Suite 200')}`;
    
    window.open(calendarUrl, '_blank');
  };

  const handleDownloadReceipt = () => {
    // Generate and download receipt
    console.log('Downloading receipt...');
  };

  const handleContactCounselor = () => {
    window.location.href = 'mailto:sarah.johnson@calmcarecounseling.com';
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Success Header */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-muted-foreground font-body">
          Your counseling session has been successfully scheduled and payment processed.
        </p>
      </div>

      {/* Confirmation Details */}
      <div className="bg-card border border-border rounded-lg shadow-soft p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-semibold text-foreground">
            Appointment Details
          </h2>
          <div className="text-sm text-muted-foreground font-mono">
            #{confirmationNumber}
          </div>
        </div>

        <div className="space-y-4">
          {/* Service */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Heart" size={20} className="text-primary" />
              <div>
                <div className="text-sm font-body font-medium text-foreground">
                  {service}
                </div>
                <div className="text-xs text-muted-foreground">
                  60-minute session
                </div>
              </div>
            </div>
            <div className="text-sm font-heading font-semibold text-foreground">
              ${cost}.00
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Calendar" size={20} className="text-accent" />
              <div>
                <div className="text-sm font-body font-medium text-foreground">
                  {formatDate(date)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {time}
                </div>
              </div>
            </div>
          </div>

          {/* Counselor */}
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="User" size={20} className="text-secondary" />
              <div>
                <div className="text-sm font-body font-medium text-foreground">
                  {counselor}
                </div>
                <div className="text-xs text-muted-foreground">
                  Licensed Clinical Therapist
                </div>
              </div>
            </div>
          </div>

          {/* Format */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <Icon name={format === 'Online' ? 'Video' : 'MapPin'} size={20} className="text-primary" />
              <div>
                <div className="text-sm font-body font-medium text-foreground">
                  {format} Session
                </div>
                <div className="text-xs text-muted-foreground">
                  {format === 'Online' ?'Link will be sent 15 minutes before session' :'123 Wellness Way, Suite 200, Peaceful City'
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-base font-heading font-semibold text-foreground mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Icon name="Mail" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-foreground font-body">
              <span className="font-medium">Confirmation Email:</span> Check your inbox for detailed appointment information and preparation guidelines.
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Bell" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-foreground font-body">
              <span className="font-medium">Reminders:</span> You'll receive appointment reminders 24 hours and 1 hour before your session.
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="FileText" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-foreground font-body">
              <span className="font-medium">Intake Form:</span> Complete your intake form at least 24 hours before your first session.
            </div>
          </div>
          {format === 'Online' && (
            <div className="flex items-start space-x-3">
              <Icon name="Video" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-foreground font-body">
                <span className="font-medium">Online Session:</span> Test your camera and microphone before the session. Join link will be sent 15 minutes prior.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Button
          variant="outline"
          onClick={handleAddToCalendar}
          iconName="Calendar"
          iconPosition="left"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Add to Calendar
        </Button>
        <Button
          variant="outline"
          onClick={handleDownloadReceipt}
          iconName="Download"
          iconPosition="left"
        >
          Download Receipt
        </Button>
        <Button
          variant="default"
          onClick={handleContactCounselor}
          iconName="Mail"
          iconPosition="left"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Contact Counselor
        </Button>
      </div>

      {/* Support Information */}
      <div className="text-center pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground font-body mb-2">
          Need to reschedule or have questions?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a
            href="tel:555-123-4567"
            className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-gentle"
          >
            <Icon name="Phone" size={16} />
            <span className="font-body">(555) 123-4567</span>
          </a>
          <a
            href="mailto:support@calmcarecounseling.com"
            className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-gentle"
          >
            <Icon name="Mail" size={16} />
            <span className="font-body">support@calmcarecounseling.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationView;