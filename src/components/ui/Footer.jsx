import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: t('Home'), path: '/homepage' },
    { label: t('Services'), path: '/services-booking' },
    { label: t('Resources'), path: '/client-resources' },
    { label: t('Contact'), path: '/contact-location' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'HIPAA Notice', path: '/hipaa' }
  ];



  const handleNewsletterSignup = (e) => {
    e?.preventDefault();
    // Newsletter signup logic
    console.log('Newsletter signup');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
                <Icon name="Heart" size={20} color="white" />
              </div>
              <span className="text-xl font-heading font-semibold text-foreground">
                CalmCare Counseling
              </span>
            </div>
            <p className="text-muted-foreground mb-6 font-body max-w-md">
              Professional mental health services providing compassionate care in a safe, 
              supportive environment. Licensed therapists specializing in individual, 
              couples, and family therapy.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-heading font-semibold text-foreground mb-3">
                {t('Newsletter Subscription')}
              </h4>
              <form onSubmit={handleNewsletterSignup} className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  variant="outline"
                  iconName="Send"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t('Subscribe')}
                </Button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="font-body">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Award" size={16} className="text-success" />
                <span className="font-body">Licensed Therapists</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Lock" size={16} className="text-success" />
                <span className="font-body">Secure Platform</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground mb-4">
              {t('Quick Links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-gentle font-body"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground mb-4">
              {t('Contact Information')}
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={14} />
                <span className="font-mono">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={14} />
                <span className="font-body">info@calmcarecounseling.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                <span className="font-body">123 Wellness Way<br />Suite 200<br />Peaceful City, PC 12345</span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {legalLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-xs text-muted-foreground hover:text-foreground transition-gentle font-body"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground font-body">
              {t('© 2024 CalmCare Counseling. All rights reserved.')}
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Clock" size={12} />
                <span className="font-body">Mon-Fri 8AM-8PM, Sat 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;