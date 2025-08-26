import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      description: "One-on-one sessions focused on your personal mental health goals and challenges.",
      icon: "User",
      duration: "50 minutes",
      formats: ["In-Person", "Online"],
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Self-Esteem"],
      color: "primary"
    },
    {
      id: 2,
      title: "Couples Therapy",
      description: "Relationship counseling to strengthen communication and resolve conflicts together.",
      icon: "Heart",
      duration: "60 minutes",
      formats: ["In-Person", "Online"],
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Pre-marital"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Family Therapy",
      description: "Family-focused sessions to improve relationships and address family dynamics.",
      icon: "Users",
      duration: "75 minutes",
      formats: ["In-Person", "Online"],
      features: ["Teen Issues", "Parenting Support", "Family Dynamics", "Behavioral Issues"],
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          button: 'bg-primary hover:bg-primary/90 text-primary-foreground'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          border: 'border-secondary/20',
          button: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          button: 'bg-accent hover:bg-accent/90 text-accent-foreground'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          button: 'bg-primary hover:bg-primary/90 text-primary-foreground'
        };
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="Stethoscope" size={16} className="mr-2" />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Mental Health Care
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            We offer personalized therapy services tailored to your unique needs, 
            available both in-person and online for your convenience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service) => {
            const colors = getColorClasses(service?.color);
            
            return (
              <div
                key={service?.id}
                className={`bg-card border ${colors?.border} rounded-2xl p-8 shadow-soft hover:shadow-soft-md transition-smooth group`}
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors?.bg} rounded-2xl mb-6 group-hover:scale-110 transition-smooth`}>
                  <Icon name={service?.icon} size={24} className={colors?.text} />
                </div>
                {/* Service Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {service?.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body">
                    {service?.description}
                  </p>

                  {/* Duration & Formats */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded-full">
                      <Icon name="Clock" size={12} />
                      <span className="font-body">{service?.duration}</span>
                    </div>
                    {service?.formats?.map((format) => (
                      <div key={format} className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded-full">
                        <Icon name={format === 'Online' ? 'Video' : 'MapPin'} size={12} />
                        <span className="font-body">{format}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-sm font-heading font-medium text-foreground">
                      Specializations:
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {service?.features?.map((feature) => (
                        <div key={feature} className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Icon name="Check" size={12} className="text-success" />
                          <span className="font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* CTA Button */}
                <Link to="/services-booking">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                    className={`${colors?.button} border-2`}
                  >
                    Book Session
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/services-booking">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
            >
              View All Services & Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;