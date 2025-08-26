import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import { Checkbox } from 'components/ui/Checkbox';

const BookingForm = ({ selectedService, selectedDate, selectedTime, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    preferredCounselor: '',
    sessionFormat: '',
    counselingReason: '',
    specialRequests: '',
    consentGiven: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const counselors = [
    { value: 'dr-sarah-johnson', label: 'Dr. Sarah Johnson - Individual & Couples Therapy' },
    { value: 'dr-michael-chen', label: 'Dr. Michael Chen - Family & Trauma Therapy' },
    { value: 'dr-emily-rodriguez', label: 'Dr. Emily Rodriguez - Anxiety & Depression' },
    { value: 'any', label: 'Any Available Counselor' }
  ];

  const sessionFormats = [
    { value: 'in-person', label: 'In-Person Session' },
    { value: 'zoom', label: 'Online via Zoom' },
    { value: 'google-meet', label: 'Online via Google Meet' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.emergencyContact?.trim()) {
      newErrors.emergencyContact = 'Emergency contact name is required';
    }

    if (!formData?.emergencyPhone?.trim()) {
      newErrors.emergencyPhone = 'Emergency contact phone is required';
    }

    if (!formData?.sessionFormat) {
      newErrors.sessionFormat = 'Please select a session format';
    }

    if (!formData?.counselingReason?.trim()) {
      newErrors.counselingReason = 'Please briefly describe your counseling needs';
    }

    if (!formData?.consentGiven) {
      newErrors.consentGiven = 'You must provide consent to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const bookingData = {
        ...formData,
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        bookingId: `BK-${Date.now()}`,
        createdAt: new Date()?.toISOString()
      };
      
      onSubmit(bookingData);
    } catch (error) {
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedService || !selectedDate || !selectedTime) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center text-muted-foreground">
          <Icon name="FileText" size={48} className="mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-heading font-medium mb-2">Complete Previous Steps</h3>
          <p className="text-sm font-body">
            Please select a service, date, and time before filling out the booking form.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="FileText" size={24} className="text-primary" />
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Booking Information
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="text-md font-heading font-medium text-foreground mb-4">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="text-md font-heading font-medium text-foreground mb-4">
              Emergency Contact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Emergency Contact Name"
                type="text"
                placeholder="Full name of emergency contact"
                value={formData?.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e?.target?.value)}
                error={errors?.emergencyContact}
                required
              />
              <Input
                label="Emergency Contact Phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData?.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e?.target?.value)}
                error={errors?.emergencyPhone}
                required
              />
            </div>
          </div>

          {/* Session Preferences */}
          <div>
            <h4 className="text-md font-heading font-medium text-foreground mb-4">
              Session Preferences
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Preferred Counselor"
                placeholder="Select a counselor"
                options={counselors}
                value={formData?.preferredCounselor}
                onChange={(value) => handleInputChange('preferredCounselor', value)}
                description="You can request a specific counselor or choose any available"
              />
              <Select
                label="Session Format"
                placeholder="Select session format"
                options={sessionFormats}
                value={formData?.sessionFormat}
                onChange={(value) => handleInputChange('sessionFormat', value)}
                error={errors?.sessionFormat}
                required
              />
            </div>
          </div>

          {/* Counseling Information */}
          <div>
            <h4 className="text-md font-heading font-medium text-foreground mb-4">
              Counseling Information
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">
                  Reason for Counseling <span className="text-error">*</span>
                </label>
                <textarea
                  placeholder="Please briefly describe what you'd like to work on in counseling..."
                  value={formData?.counselingReason}
                  onChange={(e) => handleInputChange('counselingReason', e?.target?.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body ${
                    errors?.counselingReason ? 'border-error' : 'border-border'
                  }`}
                />
                {errors?.counselingReason && (
                  <p className="text-sm text-error mt-1 font-body">{errors?.counselingReason}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-2">
                  Special Requests or Accommodations
                </label>
                <textarea
                  placeholder="Any specific needs, accommodations, or requests for your session..."
                  value={formData?.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e?.target?.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body"
                />
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="border-t border-border pt-6">
            <Checkbox
              label="I consent to counseling services and understand the privacy policies"
              description="By checking this box, you acknowledge that you have read and agree to our privacy policy, consent to treatment, and understand that counseling sessions may be recorded for quality assurance purposes."
              checked={formData?.consentGiven}
              onChange={(e) => handleInputChange('consentGiven', e?.target?.checked)}
              error={errors?.consentGiven}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="border-t border-border pt-6">
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              loading={isSubmitting}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
            >
              {isSubmitting ? 'Processing Booking...' : 'Complete Booking'}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3 font-body">
              You will receive a confirmation email with payment instructions after submitting.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;