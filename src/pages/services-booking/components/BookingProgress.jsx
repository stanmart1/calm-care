import React from 'react';
import Icon from 'components/AppIcon';

const BookingProgress = ({ currentStep, selectedService, selectedDate, selectedTime }) => {
  const steps = [
    { 
      id: 1, 
      title: 'Select Service', 
      description: 'Choose therapy type',
      completed: !!selectedService,
      icon: 'Heart'
    },
    { 
      id: 2, 
      title: 'Pick Date & Time', 
      description: 'Schedule appointment',
      completed: !!selectedDate && !!selectedTime,
      icon: 'Calendar'
    },
    { 
      id: 3, 
      title: 'Complete Form', 
      description: 'Provide information',
      completed: false,
      icon: 'FileText'
    }
  ];

  const getStepStatus = (step) => {
    if (step?.completed) return 'completed';
    if (step?.id === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <div className="bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {steps?.map((step, index) => {
            const status = getStepStatus(step);
            const isLast = index === steps?.length - 1;

            return (
              <div key={step?.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-gentle ${
                      status === 'completed'
                        ? 'bg-success border-success text-success-foreground'
                        : status === 'current' ?'bg-primary border-primary text-primary-foreground' :'bg-background border-border text-muted-foreground'
                    }`}
                  >
                    {status === 'completed' ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <Icon name={step?.icon} size={16} />
                    )}
                  </div>

                  {/* Step Content - Hidden on mobile */}
                  <div className="hidden sm:block mt-3 text-center">
                    <div
                      className={`text-sm font-heading font-medium ${
                        status === 'current' ?'text-foreground'
                          : status === 'completed' ?'text-success' :'text-muted-foreground'
                      }`}
                    >
                      {step?.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-body">
                      {step?.description}
                    </div>
                  </div>
                </div>
                {/* Connector Line */}
                {!isLast && (
                  <div className="flex-1 mx-4">
                    <div
                      className={`h-0.5 transition-gentle ${
                        step?.completed
                          ? 'bg-success' :'bg-border'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Step Info */}
        <div className="sm:hidden mt-4 text-center">
          <div className="text-sm font-heading font-medium text-foreground">
            {steps?.find(step => step?.id === currentStep)?.title}
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-body">
            Step {currentStep} of {steps?.length}
          </div>
        </div>

        {/* Progress Bar - Mobile */}
        <div className="sm:hidden mt-3">
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-smooth"
              style={{ width: `${(currentStep / steps?.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Selection Summary */}
        {(selectedService || selectedDate || selectedTime) && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {selectedService && (
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-primary" />
                  <span className="font-body text-foreground">{selectedService?.title}</span>
                </div>
              )}
              {selectedDate && (
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="font-body text-foreground">
                    {selectedDate?.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              )}
              {selectedTime && (
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="font-body text-foreground">{selectedTime}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingProgress;