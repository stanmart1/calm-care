import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const CrisisResources = () => {
  const crisisContacts = [
    {
      id: 1,
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support and suicide prevention",
      type: "call"
    },
    {
      id: 2,
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 crisis support via text message",
      type: "text"
    },
    {
      id: 3,
      name: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "24/7 support for domestic violence situations",
      type: "call"
    },
    {
      id: 4,
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      type: "call"
    }
  ];

  const handleEmergencyCall = (number) => {
    if (number === "988" || number?.includes("1-800")) {
      window.open(`tel:${number?.replace(/\D/g, '')}`, '_self');
    } else {
      // For text-based services, show instructions
      alert(`To use this service: ${number}`);
    }
  };

  return (
    <div className="bg-error/5 border border-error/20 rounded-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-error/10 rounded-full">
          <Icon name="AlertTriangle" size={20} className="text-error" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Crisis Support Resources
          </h2>
          <p className="text-sm text-muted-foreground font-body">
            Immediate help is available 24/7. You are not alone.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {crisisContacts?.map((contact) => (
          <div key={contact?.id} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-heading font-medium text-foreground mb-1">
                  {contact?.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-2">
                  {contact?.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <Icon 
                    name={contact?.type === 'call' ? 'Phone' : 'MessageSquare'} 
                    size={16} 
                    className="text-error" 
                  />
                  <span className="font-semibold">{contact?.number}</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEmergencyCall(contact?.number)}
              iconName={contact?.type === 'call' ? 'Phone' : 'MessageSquare'}
              iconPosition="left"
              className="w-full border-error text-error hover:bg-error hover:text-error-foreground"
            >
              {contact?.type === 'call' ? 'Call Now' : 'Get Instructions'}
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-card border border-border rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-heading font-medium text-foreground mb-2">
              When to Seek Immediate Help
            </h4>
            <ul className="text-sm text-muted-foreground font-body space-y-1">
              <li>• Thoughts of suicide or self-harm</li>
              <li>• Feeling unsafe or in immediate danger</li>
              <li>• Severe panic attacks or overwhelming anxiety</li>
              <li>• Substance abuse emergency</li>
              <li>• Domestic violence situation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisResources;