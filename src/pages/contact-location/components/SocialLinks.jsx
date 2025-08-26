import React from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/calmcarecounseling',
      description: 'Follow us for mental health tips and updates'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/calmcarecounseling',
      description: 'Daily wellness inspiration and resources'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/calmcarecounseling',
      description: 'Professional updates and industry insights'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/calmcarecounseling',
      description: 'Educational videos and wellness content'
    }
  ];

  const professionalAffiliations = [
    {
      name: 'American Psychological Association',
      abbreviation: 'APA',
      icon: 'Award',
      description: 'Licensed member in good standing'
    },
    {
      name: 'National Association of Social Workers',
      abbreviation: 'NASW',
      icon: 'Users',
      description: 'Certified clinical social worker'
    },
    {
      name: 'American Association for Marriage and Family Therapy',
      abbreviation: 'AAMFT',
      icon: 'Heart',
      description: 'Specialized in couples and family therapy'
    },
    {
      name: 'International Association of Trauma Counselors',
      abbreviation: 'IATC',
      icon: 'Shield',
      description: 'Trauma-informed care specialist'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNewsletterSignup = () => {
    // Newsletter signup logic
    console.log('Newsletter signup clicked');
  };

  return (
    <div className="space-y-8">
      {/* Social Media Links */}
      <div className="bg-card rounded-lg border border-border shadow-soft p-6">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
          Connect With Us
        </h2>
        <p className="text-muted-foreground font-body mb-6">
          Stay connected for mental health resources, wellness tips, and practice updates
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialPlatforms?.map((platform) => (
            <button
              key={platform?.name}
              onClick={() => handleSocialClick(platform?.url)}
              className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted transition-gentle text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Icon name={platform?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-medium text-foreground">
                  {platform?.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {platform?.description}
                </p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
      {/* Professional Affiliations */}
      <div className="bg-card rounded-lg border border-border shadow-soft p-6">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
          Professional Affiliations
        </h2>
        <p className="text-muted-foreground font-body mb-6">
          Our therapists maintain active memberships with leading professional organizations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {professionalAffiliations?.map((affiliation) => (
            <div
              key={affiliation?.abbreviation}
              className="flex items-center space-x-4 p-4 border border-border rounded-lg"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg">
                <Icon name={affiliation?.icon} size={20} className="text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-medium text-foreground">
                  {affiliation?.abbreviation}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {affiliation?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border shadow-soft p-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4">
            <Icon name="Mail" size={24} className="text-accent" />
          </div>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
            Mental Health Resources
          </h2>
          <p className="text-muted-foreground font-body mb-6 max-w-md mx-auto">
            Subscribe to receive helpful mental health resources, wellness tips, and practice updates. 
            We respect your privacy and never share your information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
            <Button
              onClick={handleNewsletterSignup}
              variant="default"
              iconName="Send"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground font-body mt-4">
            Unsubscribe at any time. Read our privacy policy for details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;