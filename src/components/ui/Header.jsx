import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: t('Home'), path: '/homepage', icon: 'Home' },
    { label: t('Services'), path: '/services-booking', icon: 'Calendar' },
    { label: t('Resources'), path: '/client-resources', icon: 'BookOpen' },
    { label: t('Contact'), path: '/contact-location', icon: 'MapPin' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleBookSession = () => {
    // Navigate to booking or open booking modal
    window.location.href = '/services-booking';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-2 transition-gentle hover:opacity-80"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
              <Icon name="Heart" size={20} color="white" />
            </div>
            <span className="text-xl font-heading font-semibold text-foreground">
              CalmCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-body font-medium transition-gentle ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Book Session Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              onClick={handleBookSession}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
            >
              {t('Book Now')}
            </Button>
          </div>

          {/* Mobile Menu Button and Book Session */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookSession}
              iconName="Calendar"
              iconPosition="left"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t('Book Now')}
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-gentle"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-body font-medium transition-gentle ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => {
                    handleBookSession();
                    setIsMobileMenuOpen(false);
                  }}
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                >
                  {t('Book Now')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;