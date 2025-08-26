import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PaymentOptions = ({ selectedMethod, onMethodChange }) => {
  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      description: 'Visa, Mastercard, American Express',
      icon: 'CreditCard',
      badges: ['PCI Compliant', 'Secure']
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: 'Wallet',
      badges: ['Buyer Protection', 'Instant']
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      description: 'Direct bank account transfer',
      icon: 'Building2',
      badges: ['ACH Secure', '1-2 days']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-heading font-semibold text-foreground">
          Payment Method
        </h3>
        <div className="flex items-center space-x-2 text-xs text-success">
          <Icon name="Lock" size={14} />
          <span className="font-body">256-bit SSL Encrypted</span>
        </div>
      </div>
      <div className="grid gap-3">
        {paymentMethods?.map((method) => (
          <div
            key={method?.id}
            onClick={() => onMethodChange(method?.id)}
            className={`relative p-4 border rounded-lg cursor-pointer transition-gentle ${
              selectedMethod === method?.id
                ? 'border-primary bg-primary/5 shadow-soft'
                : 'border-border bg-card hover:border-primary/50 hover:bg-primary/2'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`flex items-center justify-center w-10 h-10 rounded-md ${
                selectedMethod === method?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={method?.icon} size={20} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-body font-medium text-foreground">
                    {method?.name}
                  </span>
                  {selectedMethod === method?.id && (
                    <Icon name="Check" size={16} className="text-primary" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-body">
                  {method?.description}
                </div>
                
                {/* Security Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {method?.badges?.map((badge, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 text-xs bg-success/10 text-success rounded-md font-body"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Radio Button Indicator */}
            <div className={`absolute top-4 right-4 w-4 h-4 rounded-full border-2 transition-gentle ${
              selectedMethod === method?.id
                ? 'border-primary bg-primary' :'border-border bg-background'
            }`}>
              {selectedMethod === method?.id && (
                <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Security Notice */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Shield" size={16} className="text-success mt-0.5 flex-shrink-0" />
          <div className="text-xs text-muted-foreground font-body">
            Your payment information is encrypted and secure. We never store your payment details 
            and comply with PCI DSS standards for maximum security.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;