import React from 'react';
import { Checkbox } from 'components/ui/Checkbox';
import Icon from 'components/AppIcon';

const ConsentSection = ({ consents, onConsentChange, errors }) => {
  const consentItems = [
    {
      id: 'privacy',
      label: 'Privacy Policy Agreement',
      description: 'I have read and agree to the Privacy Policy and understand how my personal information will be used.',
      required: true,
      link: '/privacy'
    },
    {
      id: 'terms',
      label: 'Terms of Service',
      description: 'I agree to the Terms of Service and understand the conditions of using this counseling service.',
      required: true,
      link: '/terms'
    },
    {
      id: 'hipaa',
      label: 'HIPAA Authorization',
      description: 'I authorize the use and disclosure of my health information for treatment, payment, and healthcare operations.',
      required: true,
      link: '/hipaa'
    },
    {
      id: 'cancellation',
      label: 'Cancellation Policy',
      description: 'I understand the 24-hour cancellation policy and potential fees for late cancellations or no-shows.',
      required: true
    },
    {
      id: 'communication',
      label: 'Communication Preferences',
      description: 'I consent to receive appointment reminders and important updates via email and SMS.',
      required: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Icon name="FileText" size={20} className="text-primary" />
        <h3 className="text-base font-heading font-semibold text-foreground">
          Consent & Agreements
        </h3>
      </div>
      <div className="space-y-4">
        {consentItems?.map((item) => (
          <div
            key={item?.id}
            className={`p-4 border rounded-lg transition-gentle ${
              errors?.[item?.id] 
                ? 'border-error bg-error/5' :'border-border bg-card hover:border-primary/30'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="pt-1">
                <Checkbox
                  checked={consents?.[item?.id] || false}
                  onChange={(e) => onConsentChange(item?.id, e?.target?.checked)}
                  error={errors?.[item?.id]}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-body font-medium text-foreground cursor-pointer">
                    {item?.label}
                  </label>
                  {item?.required && (
                    <span className="text-xs text-error">*</span>
                  )}
                  {item?.link && (
                    <a
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 transition-gentle"
                    >
                      <Icon name="ExternalLink" size={12} />
                    </a>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground mt-1 font-body leading-relaxed">
                  {item?.description}
                </p>
                
                {errors?.[item?.id] && (
                  <div className="flex items-center space-x-1 mt-2">
                    <Icon name="AlertCircle" size={12} className="text-error" />
                    <span className="text-xs text-error font-body">
                      {errors?.[item?.id]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Important Notice */}
      <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-accent mt-0.5 flex-shrink-0" />
          <div className="text-xs text-accent-foreground font-body">
            <div className="font-medium mb-1">Important Information</div>
            <div className="space-y-1 text-accent-foreground/80">
              <p>• All sessions are confidential and protected under HIPAA regulations</p>
              <p>• Emergency situations may require disclosure as mandated by law</p>
              <p>• You have the right to revoke consent at any time in writing</p>
              <p>• Questions about these agreements can be discussed with your counselor</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact for Questions */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground font-body">
          Questions about these agreements? Contact us at{' '}
          <a 
            href="mailto:privacy@calmcarecounseling.com" 
            className="text-primary hover:text-primary/80 transition-gentle"
          >
            privacy@calmcarecounseling.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConsentSection;