import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Mock subscription process
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center w-12 h-12 bg-success/20 rounded-full mx-auto mb-4">
          <Icon name="Check" size={24} className="text-success" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-muted-foreground font-body">
          Thank you for subscribing to our mental health resources newsletter. 
          You'll receive weekly tips and articles to support your wellness journey.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-primary" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          Stay Connected with Mental Health Resources
        </h3>
        <p className="text-muted-foreground font-body">
          Get weekly mental health tips, new resources, and wellness articles 
          delivered to your inbox. Join our community of support.
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <Input
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="w-full"
        />
        
        <div className="flex items-start gap-3 text-xs text-muted-foreground">
          <Icon name="Shield" size={16} className="text-success mt-0.5 flex-shrink-0" />
          <p className="font-body">
            Your privacy is protected. We never share your information and you can 
            unsubscribe at any time. HIPAA compliant communications.
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          iconName="Send"
          iconPosition="left"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Users" size={12} />
            <span className="font-body">2,500+ subscribers</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={12} />
            <span className="font-body">Weekly delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Award" size={12} />
            <span className="font-body">Expert content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;