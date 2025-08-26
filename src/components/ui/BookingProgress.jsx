import React from 'react';
import Icon from 'components/AppIcon';

const BookingProgress = ({ currentStep = 1, totalSteps = 3, steps = [] }) => {
  const defaultSteps = [
    { id: 1, title: 'Select Service', description: 'Choose your therapy type' },
    { id: 2, title: 'Schedule', description: 'Pick date and time' },
    { id: 3, title: 'Payment', description: 'Complete booking' }
  ];

  const progressSteps = steps?.length > 0 ? steps : defaultSteps;

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepIcon = (stepId, status) => {
    if (status === 'completed') return 'Check';
    if (status === 'current') return 'Circle';
    return 'Circle';
  };

  return (
    <div className="w-full bg-card border-b border-border shadow-soft">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {progressSteps?.map((step, index) => {
            const status = getStepStatus(step?.id);
            const isLast = index === progressSteps?.length - 1;

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
                      <span className="text-sm font-heading font-medium">{step?.id}</span>
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
                        step?.id < currentStep
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
            {progressSteps?.find(step => step?.id === currentStep)?.title}
          </div>
          <div className="text-xs text-muted-foreground mt-1 font-body">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Progress Bar - Mobile */}
        <div className="sm:hidden mt-3">
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-smooth"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;