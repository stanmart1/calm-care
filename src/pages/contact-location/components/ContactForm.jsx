import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import Button from 'components/ui/Button';
import { Checkbox } from 'components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    subject: '',
    message: '',
    consentToContact: false,
    privacyAgreement: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' },
    { value: 'any', label: 'Any Method' }
  ];

  const subjectOptions = [
    { value: 'appointment', label: 'Schedule Appointment' },
    { value: 'services', label: 'Questions About Services' },
    { value: 'insurance', label: 'Insurance & Billing' },
    { value: 'emergency', label: 'Urgent/Crisis Support' },
    { value: 'other', label: 'Other Inquiry' }
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

    if (!formData?.name?.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.preferredContact) {
      newErrors.preferredContact = 'Please select your preferred contact method';
    }

    if (!formData?.subject) {
      newErrors.subject = 'Please select a subject for your inquiry';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Please provide details about your inquiry';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!formData?.consentToContact) {
      newErrors.consentToContact = 'Consent to contact is required';
    }

    if (!formData?.privacyAgreement) {
      newErrors.privacyAgreement = 'Privacy agreement acknowledgment is required';
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: '',
        subject: '',
        message: '',
        consentToContact: false,
        privacyAgreement: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg border border-border shadow-soft p-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
            Message Sent Successfully
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            Thank you for contacting CalmCare Counseling. We've received your message and will respond within 24 hours during business days.
          </p>
          <div className="space-y-2 text-sm font-body text-muted-foreground mb-6">
            <p>• For urgent matters, please call (555) 123-4567</p>
            <p>• For crisis support, call 988 immediately</p>
            <p>• Check your email for a confirmation message</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border shadow-soft p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Get In Touch
        </h2>
        <p className="text-muted-foreground font-body">
          Send us a message and we'll respond within 24 hours during business days
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />
          
          <Select
            label="Preferred Contact Method"
            placeholder="How should we contact you?"
            options={contactMethods}
            value={formData?.preferredContact}
            onChange={(value) => handleInputChange('preferredContact', value)}
            error={errors?.preferredContact}
            required
          />
        </div>

        {/* Inquiry Details */}
        <Select
          label="Subject of Inquiry"
          placeholder="What can we help you with?"
          options={subjectOptions}
          value={formData?.subject}
          onChange={(value) => handleInputChange('subject', value)}
          error={errors?.subject}
          required
        />

        <div>
          <label className="block text-sm font-body font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Please provide details about your inquiry, preferred appointment times, or any questions you have..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            rows={5}
            className={`w-full px-3 py-2 border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body ${
              errors?.message ? 'border-error' : 'border-border'
            }`}
            required
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error font-body">{errors?.message}</p>
          )}
        </div>

        {/* Consent and Privacy */}
        <div className="space-y-4">
          <Checkbox
            label="I consent to be contacted by CalmCare Counseling regarding my inquiry"
            description="We will only use your information to respond to your message and provide requested services"
            checked={formData?.consentToContact}
            onChange={(e) => handleInputChange('consentToContact', e?.target?.checked)}
            error={errors?.consentToContact}
            required
          />

          <Checkbox
            label="I acknowledge that email and phone communications are not completely secure"
            description="For sensitive information, please discuss during your appointment or call our office directly"
            checked={formData?.privacyAgreement}
            onChange={(e) => handleInputChange('privacyAgreement', e?.target?.checked)}
            error={errors?.privacyAgreement}
            required
          />
        </div>

        {/* HIPAA Notice */}
        <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={20} className="text-warning mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">
                Privacy Notice
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                This form is HIPAA compliant, but please avoid sharing sensitive medical information. 
                Detailed health information should be discussed during your confidential appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="left"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;