import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import Icon from 'components/AppIcon';
import ServiceCard from './components/ServiceCard';
import BookingCalendar from './components/BookingCalendar';
import BookingForm from './components/BookingForm';
import BookingProgress from './components/BookingProgress';

const ServicesBooking = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Mock services data
  const services = [
    {
      id: 'individual-therapy',
      title: 'Individual Therapy',
      subtitle: 'One-on-one counseling sessions',
      icon: 'User',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      duration: '30-60 minutes',
      pricing: '$80-120 per session',
      format: 'In-person or Online',
      description: `Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and behaviors. Our licensed therapists use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and mindfulness techniques to help you develop coping strategies and achieve your mental health goals.`,
      sessionOptions: [
        { duration: '30 minutes', description: 'Brief consultation', price: 80 },
        { duration: '60 minutes', description: 'Standard session', price: 120 }
      ],
      availableFormats: [
        { name: 'In-Person', icon: 'MapPin' },
        { name: 'Zoom', icon: 'Video' },
        { name: 'Google Meet', icon: 'Monitor' }
      ],
      specializations: ['Anxiety', 'Depression', 'Trauma', 'Stress Management', 'Life Transitions']
    },
    {
      id: 'couples-counseling',
      title: 'Couples Counseling',
      subtitle: 'Relationship and marriage therapy',
      icon: 'Heart',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      duration: '60-90 minutes',
      pricing: '$140-180 per session',
      format: 'In-person or Online',
      description: `Couples counseling helps partners improve communication, resolve conflicts, and strengthen their relationship. Using approaches like Emotionally Focused Therapy (EFT) and the Gottman Method, we work with couples to rebuild trust, enhance intimacy, and develop healthy relationship patterns.`,
      sessionOptions: [
        { duration: '60 minutes', description: 'Standard couples session', price: 140 },
        { duration: '90 minutes', description: 'Extended intensive session', price: 180 }
      ],
      availableFormats: [
        { name: 'In-Person', icon: 'MapPin' },
        { name: 'Zoom', icon: 'Video' },
        { name: 'Google Meet', icon: 'Monitor' }
      ],
      specializations: ['Communication', 'Conflict Resolution', 'Intimacy', 'Trust Building', 'Pre-marital Counseling']
    },
    {
      id: 'family-therapy',
      title: 'Family Therapy',
      subtitle: 'Family systems and dynamics',
      icon: 'Users',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      duration: '60-90 minutes',
      pricing: '$120-160 per session',
      format: 'In-person or Online',
      description: `Family therapy addresses family dynamics, communication patterns, and relationship issues within the family system. We work with families to improve understanding, resolve conflicts, and create healthier family relationships using systemic and structural family therapy approaches.`,
      sessionOptions: [
        { duration: '60 minutes', description: 'Standard family session', price: 120 },
        { duration: '90 minutes', description: 'Extended family session', price: 160 }
      ],
      availableFormats: [
        { name: 'In-Person', icon: 'MapPin' },
        { name: 'Zoom', icon: 'Video' }
      ],
      specializations: ['Parent-Child Relationships', 'Sibling Conflicts', 'Blended Families', 'Teen Issues', 'Family Communication']
    },
    {
      id: 'group-therapy',
      title: 'Group Therapy',
      subtitle: 'Therapeutic group sessions',
      icon: 'Users2',
      iconBg: 'bg-success/10',
      iconColor: 'text-success',
      duration: '90 minutes',
      pricing: '$45-60 per session',
      format: 'In-person only',
      description: `Group therapy provides a supportive environment where individuals with similar challenges can share experiences, learn from each other, and develop coping strategies together. Our groups are led by licensed therapists and focus on specific topics or populations.`,
      sessionOptions: [
        { duration: '90 minutes', description: 'Weekly group session', price: 45 }
      ],
      availableFormats: [
        { name: 'In-Person', icon: 'MapPin' }
      ],
      specializations: ['Anxiety Support', 'Depression Support', 'Grief & Loss', 'Addiction Recovery', 'Social Skills']
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (selectedTime) {
      setCurrentStep(3);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      setCurrentStep(3);
    }
  };

  const handleBookingSubmit = (bookingData) => {
    // Navigate to payment confirmation with booking data
    navigate('/payment-confirmation', { 
      state: { 
        bookingData,
        fromBooking: true 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Progress Indicator */}
      <BookingProgress 
        currentStep={currentStep}
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
      <main className="pt-4">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm font-body">
            <Link 
              to="/homepage" 
              className="text-muted-foreground hover:text-foreground transition-gentle"
            >
              Home
            </Link>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">Services & Booking</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Professional Counseling Services
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              Choose from our comprehensive range of mental health services. 
              Our licensed therapists are here to support you on your journey to wellness.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Services Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Available Services
                </h2>
                <div className="space-y-6">
                  {services?.map((service) => (
                    <ServiceCard
                      key={service?.id}
                      service={service}
                      onBookService={handleServiceSelect}
                      isSelected={selectedService?.id === service?.id}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-6">
              <BookingCalendar
                selectedService={selectedService}
                onDateSelect={handleDateSelect}
                onTimeSelect={handleTimeSelect}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
              
              {currentStep >= 3 && (
                <BookingForm
                  selectedService={selectedService}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSubmit={handleBookingSubmit}
                />
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Step 1: Services */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Choose Your Service
                </h2>
                <div className="space-y-6">
                  {services?.map((service) => (
                    <ServiceCard
                      key={service?.id}
                      service={service}
                      onBookService={handleServiceSelect}
                      isSelected={selectedService?.id === service?.id}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Calendar */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Select Date & Time
                  </h2>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-sm text-primary hover:text-primary/80 font-body transition-gentle"
                  >
                    Change Service
                  </button>
                </div>
                <BookingCalendar
                  selectedService={selectedService}
                  onDateSelect={handleDateSelect}
                  onTimeSelect={handleTimeSelect}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              </div>
            )}

            {/* Step 3: Form */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Complete Booking
                  </h2>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-sm text-primary hover:text-primary/80 font-body transition-gentle"
                  >
                    Change Time
                  </button>
                </div>
                <BookingForm
                  selectedService={selectedService}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSubmit={handleBookingSubmit}
                />
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
                  <Icon name="Shield" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">
                    HIPAA Compliant
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    Your privacy is protected
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">
                    Licensed Therapists
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    Qualified professionals
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">
                    Flexible Scheduling
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    Evening & weekend slots
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesBooking;