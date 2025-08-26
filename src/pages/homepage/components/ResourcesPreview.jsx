import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const ResourcesPreview = () => {
  const { t } = useTranslation();
  const resources = [
    {
      id: 1,
      type: "Article",
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn to recognize anxiety symptoms and discover practical techniques to manage anxiety in your daily life.",
      readTime: "5 min read",
      category: "Mental Health",
      image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=400",
      publishDate: "Dec 15, 2024",
      featured: true
    },
    {
      id: 2,
      type: "Guide",
      title: "Building Healthy Relationships: Communication Tips for Couples",
      excerpt: "Essential communication skills and strategies to strengthen your relationship and resolve conflicts effectively.",
      readTime: "8 min read",
      category: "Relationships",
      image: "https://images.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg",
      publishDate: "Dec 10, 2024",
      featured: false
    },
    {
      id: 3,
      type: "Worksheet",
      title: "Daily Mindfulness Practice: A Self-Care Toolkit",
      excerpt: "Downloadable worksheets and exercises to help you develop a consistent mindfulness and self-care routine.",
      readTime: "Download",
      category: "Self-Care",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      publishDate: "Dec 8, 2024",
      featured: false
    }
  ];

  const quickTips = [
    {
      icon: "Brain",
      title: "Practice Deep Breathing",
      description: "Take 5 deep breaths when feeling overwhelmed"
    },
    {
      icon: "Heart",
      title: "Express Gratitude Daily",
      description: "Write down 3 things you're grateful for each day"
    },
    {
      icon: "Moon",
      title: "Prioritize Sleep",
      description: "Aim for 7-9 hours of quality sleep each night"
    },
    {
      icon: "Users",
      title: "Connect with Others",
      description: "Reach out to friends or family when you need support"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Article':
        return 'FileText';
      case 'Guide':
        return 'BookOpen';
      case 'Worksheet':
        return 'Download';
      default:
        return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Article':
        return 'bg-primary/10 text-primary';
      case 'Guide':
        return 'bg-secondary/10 text-secondary';
      case 'Worksheet':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} className="mr-2" />
            {t('Mental Health Resources')}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Tools for Your Wellness Journey
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Access helpful articles, guides, and worksheets designed to support your mental health 
            and personal growth between therapy sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Resources */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {t('Resources')}
              </h3>
              <Link to="/client-resources">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="text-primary hover:bg-primary/10"
                >
                  {t('View All')}
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {resources?.map((resource) => (
                <div
                  key={resource?.id}
                  className={`bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-soft-md transition-smooth group ${
                    resource?.featured ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={resource?.image}
                        alt={resource?.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      {resource?.featured && (
                        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                      <div className={`absolute top-3 right-3 ${getTypeColor(resource?.type)} px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
                        <Icon name={getTypeIcon(resource?.type)} size={12} />
                        <span>{resource?.type}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="font-body">{resource?.category}</span>
                          <span>•</span>
                          <span className="font-body">{resource?.publishDate}</span>
                          <span>•</span>
                          <span className="font-body">{resource?.readTime}</span>
                        </div>

                        <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-gentle">
                          {resource?.title}
                        </h4>

                        <p className="text-muted-foreground font-body">
                          {resource?.excerpt}
                        </p>

                        <Link to="/client-resources">
                          <Button
                            variant="ghost"
                            size="sm"
                            iconName="ArrowRight"
                            iconPosition="right"
                            className="text-primary hover:bg-primary/10 p-0"
                          >
                            {t('Read More')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                {t('Wellness Tips')}
              </h3>
              
              <div className="space-y-4">
                {quickTips?.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-4 shadow-soft hover:shadow-soft-md transition-smooth"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon name={tip?.icon} size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-heading font-semibold text-foreground mb-1">
                          {tip?.title}
                        </h4>
                        <p className="text-xs text-muted-foreground font-body">
                          {tip?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                
                <div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {t('Newsletter Subscription')}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body">
                    {t('Stay updated with our latest resources and tips')}
                  </p>
                </div>

                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body"
                  />
                  <Button
                    variant="default"
                    size="sm"
                    fullWidth
                    iconName="Send"
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {t('Subscribe')}
                  </Button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;