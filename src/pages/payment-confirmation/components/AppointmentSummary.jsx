import React from 'react';
import Icon from 'components/AppIcon';

const AppointmentSummary = ({ bookingData }) => {
  const {
    service = "Individual Therapy Session",
    date = "2025-08-28",
    time = "2:00 PM",
    counselor = "Dr. Sarah Johnson",
    format = "In-Person",
    duration = "60 minutes",
    cost = 150
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

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-semibold text-foreground">
          Appointment Summary
        </h2>
        <div className="flex items-center space-x-2 text-sm text-success">
          <Icon name="Shield" size={16} />
          <span className="font-body">HIPAA Secure</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Service Details */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md flex-shrink-0">
            <Icon name="Heart" size={16} className="text-primary" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-body font-medium text-foreground">
              {service}
            </div>
            <div className="text-xs text-muted-foreground">
              {duration} session
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-heading font-semibold text-foreground">
              ${cost}
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-md flex-shrink-0">
            <Icon name="Calendar" size={16} className="text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-body font-medium text-foreground">
              {formatDate(date)}
            </div>
            <div className="text-xs text-muted-foreground">
              {time}
            </div>
          </div>
        </div>

        {/* Counselor */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-md flex-shrink-0">
            <Icon name="User" size={16} className="text-secondary" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-body font-medium text-foreground">
              {counselor}
            </div>
            <div className="text-xs text-muted-foreground">
              Licensed Clinical Therapist
            </div>
          </div>
        </div>

        {/* Session Format */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-md flex-shrink-0">
            <Icon name={format === 'Online' ? 'Video' : 'MapPin'} size={16} className="text-primary" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-body font-medium text-foreground">
              {format} Session
            </div>
            <div className="text-xs text-muted-foreground">
              {format === 'Online' ?'Secure video call via our platform' :'123 Wellness Way, Suite 200'
              }
            </div>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-base font-heading font-semibold text-foreground">
            Total Amount
          </span>
          <span className="text-lg font-heading font-bold text-primary">
            ${cost}.00
          </span>
        </div>
        <div className="text-xs text-muted-foreground mt-1 font-body">
          No hidden fees • Secure payment processing
        </div>
      </div>
    </div>
  );
};

export default AppointmentSummary;