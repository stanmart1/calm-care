import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const HeroSection = () => {
  const { t } = useTranslation();
  const handleBookSession = () => {
    window.location.href = '/services-booking';
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Icon name="Heart" size={16} className="mr-2" />
                Licensed Professional Counseling
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                {t('Find Peace and Healing')}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto lg:mx-0">
                {t('Professional counseling services to help you navigate life\'s challenges with compassion and expertise.')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleBookSession}
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft-lg"
              >
                {t('Book Now')}
              </Button>
              
              <Link to="/client-resources">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t('Learn More')}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="font-body">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Award" size={16} className="text-success" />
                <span className="font-body">Licensed Therapists</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="text-success" />
                <span className="font-body">Flexible Scheduling</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful counseling session environment with comfortable seating"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-sm border border-border rounded-lg p-6 shadow-soft">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-heading font-semibold text-white">
                      500+ Clients Helped
                    </div>
                    <div className="text-xs text-white font-body">
                      Building stronger mental health since 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;