import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import CounselorBiography from './components/CounselorBiography';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ResourcesPreview from './components/ResourcesPreview';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>CalmCare Counseling - Professional Mental Health Services | Licensed Therapist</title>
        <meta 
          name="description" 
          content="Professional counseling services with Dr. Sarah Mitchell, LPC. Individual, couples, and family therapy available in-person and online. HIPAA compliant, licensed mental health care." 
        />
        <meta name="keywords" content="counseling, therapy, mental health, anxiety, depression, couples therapy, family therapy, EMDR, trauma recovery, licensed therapist" />
        <meta property="og:title" content="CalmCare Counseling - Professional Mental Health Services" />
        <meta property="og:description" content="Find peace in your mental health journey with compassionate, professional counseling services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-0">
          <HeroSection />
          <ServicesOverview />
          <CounselorBiography />
          <TestimonialsCarousel />
          <ResourcesPreview />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;