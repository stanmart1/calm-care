import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import Icon from 'components/AppIcon';
import { cn } from 'utils/cn';

const AddClientModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    insurance: {
      provider: '',
      policyNumber: '',
      copay: ''
    },
    therapyType: 'individual',
    sessionFrequency: 'weekly',
    status: 'active',
    engagementLevel: 'medium',
    paymentStatus: 'current',
    balance: 0,
    notes: '',
    consentStatus: {
      intake: false,
      privacy: false,
      treatment: false,
      photography: false
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'Personal Info', icon: 'User' },
    { id: 2, title: 'Emergency Contact', icon: 'Phone' },
    { id: 3, title: 'Insurance', icon: 'Shield' },
    { id: 4, title: 'Treatment', icon: 'Heart' },
    { id: 5, title: 'Consent', icon: 'FileCheck' }
  ];

  const therapyTypeOptions = [
    { value: 'individual', label: 'Individual Therapy' },
    { value: 'couples', label: 'Couples Counseling' },
    { value: 'family', label: 'Family Therapy' },
    { value: 'group', label: 'Group Therapy' }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'as-needed', label: 'As Needed' }
  ];

  const relationshipOptions = [
    { value: 'spouse', label: 'Spouse' },
    { value: 'partner', label: 'Partner' },
    { value: 'parent', label: 'Parent' },
    { value: 'child', label: 'Child' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'friend', label: 'Friend' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    if (field?.includes('.')) {
      const [parent, child] = field?.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev?.[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }

    // Clear error for this field
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleConsentChange = (consentType, checked) => {
    setFormData(prev => ({
      ...prev,
      consentStatus: {
        ...prev?.consentStatus,
        [consentType]: checked
      }
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData?.name?.trim()) newErrors.name = 'Name is required';
        if (!formData?.email?.trim()) newErrors.email = 'Email is required';
        if (!formData?.phone?.trim()) newErrors.phone = 'Phone is required';
        if (!formData?.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        break;
      case 2:
        if (!formData?.emergencyContact?.name?.trim()) newErrors['emergencyContact.name'] = 'Emergency contact name is required';
        if (!formData?.emergencyContact?.phone?.trim()) newErrors['emergencyContact.phone'] = 'Emergency contact phone is required';
        if (!formData?.emergencyContact?.relationship) newErrors['emergencyContact.relationship'] = 'Relationship is required';
        break;
      case 3:
        if (!formData?.insurance?.provider?.trim()) newErrors['insurance.provider'] = 'Insurance provider is required';
        if (!formData?.insurance?.policyNumber?.trim()) newErrors['insurance.policyNumber'] = 'Policy number is required';
        if (!formData?.insurance?.copay) newErrors['insurance.copay'] = 'Copay amount is required';
        break;
      case 4:
        if (!formData?.therapyType) newErrors.therapyType = 'Therapy type is required';
        if (!formData?.sessionFrequency) newErrors.sessionFrequency = 'Session frequency is required';
        break;
      case 5:
        if (!formData?.consentStatus?.intake) newErrors.intake = 'Intake consent is required';
        if (!formData?.consentStatus?.privacy) newErrors.privacy = 'Privacy consent is required';
        if (!formData?.consentStatus?.treatment) newErrors.treatment = 'Treatment consent is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps?.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      onAdd?.(formData);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      emergencyContact: {
        name: '',
        phone: '',
        relationship: ''
      },
      insurance: {
        provider: '',
        policyNumber: '',
        copay: ''
      },
      therapyType: 'individual',
      sessionFrequency: 'weekly',
      status: 'active',
      engagementLevel: 'medium',
      paymentStatus: 'current',
      balance: 0,
      notes: '',
      consentStatus: {
        intake: false,
        privacy: false,
        treatment: false,
        photography: false
      }
    });
    setCurrentStep(1);
    setErrors({});
  };

  const handleClose = () => {
    handleReset();
    onClose?.();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                required
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                placeholder="Enter full name"
              />
              
              <Input
                label="Email Address"
                type="email"
                required
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                placeholder="Enter email address"
              />
              
              <Input
                label="Phone Number"
                required
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                placeholder="(555) 123-4567"
              />
              
              <Input
                label="Date of Birth"
                type="date"
                required
                value={formData?.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e?.target?.value)}
                error={errors?.dateOfBirth}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Emergency Contact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Contact Name"
                required
                value={formData?.emergencyContact?.name}
                onChange={(e) => handleInputChange('emergencyContact.name', e?.target?.value)}
                error={errors?.['emergencyContact.name']}
                placeholder="Enter contact name"
              />
              
              <Input
                label="Contact Phone"
                required
                value={formData?.emergencyContact?.phone}
                onChange={(e) => handleInputChange('emergencyContact.phone', e?.target?.value)}
                error={errors?.['emergencyContact.phone']}
                placeholder="(555) 123-4567"
              />
              
              <div className="md:col-span-2">
                <Select
                  label="Relationship"
                  required
                  value={formData?.emergencyContact?.relationship}
                  onValueChange={(value) => handleInputChange('emergencyContact.relationship', value)}
                  error={errors?.['emergencyContact.relationship']}
                  options={relationshipOptions}
                  placeholder="Select relationship"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Insurance Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Insurance Provider"
                required
                value={formData?.insurance?.provider}
                onChange={(e) => handleInputChange('insurance.provider', e?.target?.value)}
                error={errors?.['insurance.provider']}
                placeholder="e.g., Blue Cross Blue Shield"
              />
              
              <Input
                label="Policy Number"
                required
                value={formData?.insurance?.policyNumber}
                onChange={(e) => handleInputChange('insurance.policyNumber', e?.target?.value)}
                error={errors?.['insurance.policyNumber']}
                placeholder="Enter policy number"
              />
              
              <Input
                label="Copay Amount ($)"
                type="number"
                required
                value={formData?.insurance?.copay}
                onChange={(e) => handleInputChange('insurance.copay', e?.target?.value)}
                error={errors?.['insurance.copay']}
                placeholder="25"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">Treatment Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Therapy Type"
                required
                value={formData?.therapyType}
                onValueChange={(value) => handleInputChange('therapyType', value)}
                error={errors?.therapyType}
                options={therapyTypeOptions}
              />
              
              <Select
                label="Session Frequency"
                required
                value={formData?.sessionFrequency}
                onValueChange={(value) => handleInputChange('sessionFrequency', value)}
                error={errors?.sessionFrequency}
                options={frequencyOptions}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Initial Notes</label>
              <textarea
                className="w-full h-24 px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm resize-none"
                value={formData?.notes}
                onChange={(e) => handleInputChange('notes', e?.target?.value)}
                placeholder="Enter any initial notes about the client..."
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-foreground">Consent Forms</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <input
                  type="checkbox"
                  id="intake-consent"
                  checked={formData?.consentStatus?.intake}
                  onChange={(e) => handleConsentChange('intake', e?.target?.checked)}
                  className="h-4 w-4 rounded border border-input mt-1"
                />
                <div className="flex-1">
                  <label htmlFor="intake-consent" className="font-heading font-medium text-foreground cursor-pointer">
                    Initial Intake Form *
                  </label>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Client has completed and submitted the initial intake assessment form.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  checked={formData?.consentStatus?.privacy}
                  onChange={(e) => handleConsentChange('privacy', e?.target?.checked)}
                  className="h-4 w-4 rounded border border-input mt-1"
                />
                <div className="flex-1">
                  <label htmlFor="privacy-consent" className="font-heading font-medium text-foreground cursor-pointer">
                    HIPAA Privacy Notice *
                  </label>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Client has received and acknowledged the HIPAA privacy notice and consent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <input
                  type="checkbox"
                  id="treatment-consent"
                  checked={formData?.consentStatus?.treatment}
                  onChange={(e) => handleConsentChange('treatment', e?.target?.checked)}
                  className="h-4 w-4 rounded border border-input mt-1"
                />
                <div className="flex-1">
                  <label htmlFor="treatment-consent" className="font-heading font-medium text-foreground cursor-pointer">
                    Treatment Consent *
                  </label>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Client has provided informed consent for treatment and therapy services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <input
                  type="checkbox"
                  id="photography-consent"
                  checked={formData?.consentStatus?.photography}
                  onChange={(e) => handleConsentChange('photography', e?.target?.checked)}
                  className="h-4 w-4 rounded border border-input mt-1"
                />
                <div className="flex-1">
                  <label htmlFor="photography-consent" className="font-heading font-medium text-foreground cursor-pointer">
                    Photography/Recording Consent
                  </label>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Client consents to photography or recording for therapeutic purposes (optional).
                  </p>
                </div>
              </div>
            </div>

            {(errors?.intake || errors?.privacy || errors?.treatment) && (
              <div className="p-3 bg-error/10 border border-error rounded-lg">
                <p className="text-sm text-error font-body">
                  Please complete all required consent forms before proceeding.
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg border border-border w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading font-semibold text-foreground">
              Add New Client
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              iconName="X"
              className="text-muted-foreground hover:text-foreground"
            />
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mt-6">
            {steps?.map((step) => (
              <div key={step?.id} className="flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-gentle",
                  currentStep >= step?.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-muted bg-background text-muted-foreground"
                )}>
                  {currentStep > step?.id ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    <Icon name={step?.icon} size={16} />
                  )}
                </div>
                <span className={cn(
                  "ml-2 text-xs font-body",
                  currentStep >= step?.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {step?.title}
                </span>
                {step?.id < steps?.length && (
                  <div className={cn(
                    "w-8 h-px mx-4 transition-gentle",
                    currentStep > step?.id ? "bg-primary" : "bg-border"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Previous
            </Button>
            
            <span className="text-sm text-muted-foreground font-body">
              Step {currentStep} of {steps?.length}
            </span>
            
            {currentStep < steps?.length ? (
              <Button
                variant="default"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Next
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={handleSubmit}
                iconName="Plus"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
              >
                Add Client
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;