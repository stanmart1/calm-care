import React, { useState } from 'react';
import Input from 'components/ui/Input';
import Icon from 'components/AppIcon';

const CreditCardForm = ({ formData, onFormChange, errors }) => {
  const [cardType, setCardType] = useState('');

  const detectCardType = (number) => {
    const cleaned = number?.replace(/\s/g, '');
    if (cleaned?.match(/^4/)) return 'visa';
    if (cleaned?.match(/^5[1-5]/)) return 'mastercard';
    if (cleaned?.match(/^3[47]/)) return 'amex';
    if (cleaned?.match(/^6/)) return 'discover';
    return '';
  };

  const formatCardNumber = (value) => {
    const cleaned = value?.replace(/\s/g, '');
    const type = detectCardType(cleaned);
    setCardType(type);
    
    // Format with spaces every 4 digits
    const formatted = cleaned?.replace(/(.{4})/g, '$1 ')?.trim();
    return formatted?.substring(0, 19); // Max 16 digits + 3 spaces
  };

  const formatExpiry = (value) => {
    const cleaned = value?.replace(/\D/g, '');
    if (cleaned?.length >= 2) {
      return cleaned?.substring(0, 2) + '/' + cleaned?.substring(2, 4);
    }
    return cleaned;
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;
    
    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (field === 'cvv') {
      formattedValue = value?.replace(/\D/g, '')?.substring(0, 4);
    }
    
    onFormChange(field, formattedValue);
  };

  const getCardIcon = () => {
    switch (cardType) {
      case 'visa': return 'CreditCard';
      case 'mastercard': return 'CreditCard';
      case 'amex': return 'CreditCard';
      case 'discover': return 'CreditCard';
      default: return 'CreditCard';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="CreditCard" size={20} className="text-primary" />
        <h3 className="text-base font-heading font-semibold text-foreground">
          Credit Card Information
        </h3>
        {cardType && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-body capitalize">
            {cardType}
          </span>
        )}
      </div>
      {/* Card Number */}
      <div className="relative">
        <Input
          label="Card Number"
          type="text"
          placeholder="1234 5678 9012 3456"
          value={formData?.cardNumber || ''}
          onChange={(e) => handleInputChange('cardNumber', e?.target?.value)}
          error={errors?.cardNumber}
          required
          className="pr-10"
        />
        <div className="absolute right-3 top-9">
          <Icon name={getCardIcon()} size={20} className="text-muted-foreground" />
        </div>
      </div>
      {/* Expiry and CVV */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          type="text"
          placeholder="MM/YY"
          value={formData?.expiry || ''}
          onChange={(e) => handleInputChange('expiry', e?.target?.value)}
          error={errors?.expiry}
          required
          maxLength={5}
        />
        <div className="relative">
          <Input
            label="CVV"
            type="text"
            placeholder="123"
            value={formData?.cvv || ''}
            onChange={(e) => handleInputChange('cvv', e?.target?.value)}
            error={errors?.cvv}
            required
            maxLength={4}
            className="pr-8"
          />
          <div className="absolute right-3 top-9">
            <Icon name="HelpCircle" size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>
      {/* Cardholder Name */}
      <Input
        label="Cardholder Name"
        type="text"
        placeholder="John Doe"
        value={formData?.cardholderName || ''}
        onChange={(e) => onFormChange('cardholderName', e?.target?.value)}
        error={errors?.cardholderName}
        required
      />
      {/* Billing Address */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-sm font-heading font-medium text-foreground mb-3">
          Billing Address
        </h4>
        
        <div className="space-y-4">
          <Input
            label="Street Address"
            type="text"
            placeholder="123 Main Street"
            value={formData?.billingAddress || ''}
            onChange={(e) => onFormChange('billingAddress', e?.target?.value)}
            error={errors?.billingAddress}
            required
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="City"
              type="text"
              placeholder="New York"
              value={formData?.billingCity || ''}
              onChange={(e) => onFormChange('billingCity', e?.target?.value)}
              error={errors?.billingCity}
              required
            />
            <Input
              label="State"
              type="text"
              placeholder="NY"
              value={formData?.billingState || ''}
              onChange={(e) => onFormChange('billingState', e?.target?.value)}
              error={errors?.billingState}
              required
            />
          </div>
          
          <Input
            label="ZIP Code"
            type="text"
            placeholder="10001"
            value={formData?.billingZip || ''}
            onChange={(e) => onFormChange('billingZip', e?.target?.value?.replace(/\D/g, '')?.substring(0, 5))}
            error={errors?.billingZip}
            required
            maxLength={5}
          />
        </div>
      </div>
      {/* Security Notice */}
      <div className="mt-4 p-3 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Lock" size={16} className="text-success mt-0.5 flex-shrink-0" />
          <div className="text-xs text-success font-body">
            <div className="font-medium mb-1">Your payment is secure</div>
            <div className="text-success/80">
              We use 256-bit SSL encryption and never store your card details. 
              All transactions are processed through our PCI-compliant payment gateway.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;