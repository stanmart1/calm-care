import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';

const ContactLocationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact & Location - CalmCare Counseling</title>
        <meta 
          name="description" 
          content="Contact CalmCare Counseling for professional mental health services. Find our office location, hours, and get in touch with our licensed therapists." 
        />
        <meta name="keywords" content="contact counseling, therapy office location, mental health contact, counseling appointment" />
      </Helmet>

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Contact & Location
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body mb-8">
                We're here to help you on your mental health journey. Reach out to schedule an appointment, 
                ask questions, or learn more about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="font-body">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="font-body">Licensed Therapists</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="font-body">24/7 Crisis Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Contact Information and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ContactInfo />
              <LocationMap />
            </div>

            {/* Contact Form */}
            <div className="mb-12">
              <ContactForm />
            </div>

            {/* Social Links and Professional Affiliations */}
            <SocialLinks />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactLocationPage;