import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import BookingProgress from 'components/ui/BookingProgress';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
import AppointmentSummary from './components/AppointmentSummary';
import PaymentOptions from './components/PaymentOptions';
import CreditCardForm from './components/CreditCardForm';
import ConsentSection from './components/ConsentSection';
import ConfirmationView from './components/ConfirmationView';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mock booking data - in real app would come from previous step or API
  const [bookingData] = useState({
    service: "Individual Therapy Session",
    date: "2025-08-28",
    time: "2:00 PM",
    counselor: "Dr. Sarah Johnson",
    format: "In-Person",
    duration: "60 minutes",
    cost: 150,
    confirmationNumber: "CC-2025-0828-001"
  });

  const [currentView, setCurrentView] = useState('payment'); // 'payment' or 'confirmation'
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form states
  const [paymentFormData, setPaymentFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: ''
  });
  
  const [consents, setConsents] = useState({
    privacy: false,
    terms: false,
    hipaa: false,
    cancellation: false,
    communication: false
  });
  
  const [errors, setErrors] = useState({});

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePaymentFormChange = (field, value) => {
    setPaymentFormData(prev => ({
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

  const handleConsentChange = (consentId, checked) => {
    setConsents(prev => ({
      ...prev,
      [consentId]: checked
    }));
    
    // Clear error when user checks
    if (errors?.[consentId]) {
      setErrors(prev => ({
        ...prev,
        [consentId]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate payment method specific fields
    if (selectedPaymentMethod === 'credit-card') {
      if (!paymentFormData?.cardNumber || paymentFormData?.cardNumber?.replace(/\s/g, '')?.length < 13) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }
      if (!paymentFormData?.expiry || paymentFormData?.expiry?.length < 5) {
        newErrors.expiry = 'Please enter a valid expiry date';
      }
      if (!paymentFormData?.cvv || paymentFormData?.cvv?.length < 3) {
        newErrors.cvv = 'Please enter a valid CVV';
      }
      if (!paymentFormData?.cardholderName?.trim()) {
        newErrors.cardholderName = 'Please enter the cardholder name';
      }
      if (!paymentFormData?.billingAddress?.trim()) {
        newErrors.billingAddress = 'Please enter your billing address';
      }
      if (!paymentFormData?.billingCity?.trim()) {
        newErrors.billingCity = 'Please enter your city';
      }
      if (!paymentFormData?.billingState?.trim()) {
        newErrors.billingState = 'Please enter your state';
      }
      if (!paymentFormData?.billingZip || paymentFormData?.billingZip?.length < 5) {
        newErrors.billingZip = 'Please enter a valid ZIP code';
      }
    }
    
    // Validate required consents
    const requiredConsents = ['privacy', 'terms', 'hipaa', 'cancellation'];
    requiredConsents?.forEach(consent => {
      if (!consents?.[consent]) {
        newErrors[consent] = 'This agreement is required to proceed';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleCompleteBooking = async () => {
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorElement = document.querySelector('.border-error');
      if (firstErrorElement) {
        firstErrorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Show confirmation view
      setCurrentView('confirmation');
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Payment processing failed:', error);
      setErrors({ general: 'Payment processing failed. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToServices = () => {
    navigate('/services-booking');
  };

  const isFormValid = () => {
    if (selectedPaymentMethod === 'credit-card') {
      const requiredFields = ['cardNumber', 'expiry', 'cvv', 'cardholderName', 'billingAddress', 'billingCity', 'billingState', 'billingZip'];
      const hasAllFields = requiredFields?.every(field => paymentFormData?.[field]?.trim());
      const hasRequiredConsents = ['privacy', 'terms', 'hipaa', 'cancellation']?.every(consent => consents?.[consent]);
      return hasAllFields && hasRequiredConsents;
    }
    return ['privacy', 'terms', 'hipaa', 'cancellation']?.every(consent => consents?.[consent]);
  };

  if (currentView === 'confirmation') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
            <ConfirmationView 
              bookingData={bookingData}
              paymentData={paymentFormData}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Progress Indicator */}
      <div className="pt-16">
        <BookingProgress currentStep={3} totalSteps={3} />
      </div>
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Complete Your Booking
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Review your appointment details, select your payment method, and complete the required agreements to finalize your counseling session.
          </p>
        </div>

        {/* Error Message */}
        {errors?.general && (
          <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={20} className="text-error" />
              <span className="text-sm text-error font-body">{errors?.general}</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Appointment Summary */}
          <div className="space-y-6">
            <AppointmentSummary bookingData={bookingData} />
            
            {/* Security Badges */}
            <div className="bg-card border border-border rounded-lg shadow-soft p-4">
              <h3 className="text-sm font-heading font-semibold text-foreground mb-3">
                Your Security & Privacy
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-xs text-muted-foreground font-body">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lock" size={16} className="text-success" />
                  <span className="text-xs text-muted-foreground font-body">SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CreditCard" size={16} className="text-success" />
                  <span className="text-xs text-muted-foreground font-body">PCI Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-xs text-muted-foreground font-body">Licensed Therapists</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment & Consent */}
          <div className="space-y-6">
            {/* Payment Options */}
            <div className="bg-card border border-border rounded-lg shadow-soft p-6">
              <PaymentOptions
                selectedMethod={selectedPaymentMethod}
                onMethodChange={setSelectedPaymentMethod}
              />
            </div>

            {/* Payment Form */}
            {selectedPaymentMethod === 'credit-card' && (
              <div className="bg-card border border-border rounded-lg shadow-soft p-6">
                <CreditCardForm
                  formData={paymentFormData}
                  onFormChange={handlePaymentFormChange}
                  errors={errors}
                />
              </div>
            )}

            {/* Other Payment Methods Info */}
            {selectedPaymentMethod === 'paypal' && (
              <div className="bg-card border border-border rounded-lg shadow-soft p-6">
                <div className="text-center py-8">
                  <Icon name="Wallet" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    PayPal Payment
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    You will be redirected to PayPal to complete your payment securely.
                  </p>
                </div>
              </div>
            )}

            {selectedPaymentMethod === 'bank-transfer' && (
              <div className="bg-card border border-border rounded-lg shadow-soft p-6">
                <div className="text-center py-8">
                  <Icon name="Building2" size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    Bank Transfer
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    You will receive bank transfer instructions via email after confirming your booking.
                  </p>
                  <div className="text-xs text-warning bg-warning/10 border border-warning/20 rounded-lg p-3">
                    <Icon name="Clock" size={14} className="inline mr-1" />
                    Processing time: 1-2 business days
                  </div>
                </div>
              </div>
            )}

            {/* Consent Section */}
            <div className="bg-card border border-border rounded-lg shadow-soft p-6">
              <ConsentSection
                consents={consents}
                onConsentChange={handleConsentChange}
                errors={errors}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            variant="outline"
            onClick={handleBackToServices}
            iconName="ArrowLeft"
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back to Services
          </Button>
          
          <Button
            variant="default"
            onClick={handleCompleteBooking}
            loading={isProcessing}
            disabled={!isFormValid() || isProcessing}
            iconName={isProcessing ? undefined : "CreditCard"}
            iconPosition="left"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
          >
            {isProcessing ? 'Processing Payment...' : `Complete Booking - $${bookingData?.cost}`}
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-4">
              Our support team is available to assist you with your booking.
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
      </main>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;