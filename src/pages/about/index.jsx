import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
import CounselorPhoto from './components/CounselorPhoto';
import CredentialsBadge from './components/CredentialsBadge';
import ApproachCard from './components/ApproachCard';

const AboutPage = () => {
  const handleBookSession = () => {
    window.location.href = '/services-booking';
  };

  const credentials = [
    {
      title: "Licensed Clinical Social Worker (LCSW)",
      issuer: "State Board of Clinical Social Work",
      year: "2018",
      verified: true
    },
    {
      title: "Master\'s in Clinical Psychology",
      issuer: "University of Mental Health Sciences",
      year: "2016",
      verified: true
    },
    {
      title: "Certified Trauma Specialist",
      issuer: "International Association of Trauma Professionals",
      year: "2020",
      verified: true
    },
    {
      title: "EMDR Therapy Certification",
      issuer: "EMDR International Association",
      year: "2019",
      verified: true
    }
  ];

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach focusing on identifying and changing negative thought patterns and behaviors that contribute to emotional distress.",
      icon: "Brain"
    },
    {
      title: "Trauma-Informed Care",
      description: "Specialized treatment recognizing the impact of trauma on mental health, using EMDR and other proven techniques for healing.",
      icon: "Heart"
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Integration of mindfulness practices to help clients develop present-moment awareness and emotional regulation skills.",
      icon: "Flower"
    },
    {
      title: "Solution-Focused Brief Therapy",
      description: "Goal-oriented approach that focuses on solutions and strengths rather than problems, promoting faster positive change.",
      icon: "Target"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Dr. Sarah Chen | Licensed Therapist | CalmCare Counseling</title>
        <meta name="description" content="Meet Dr. Sarah Chen, LCSW - experienced mental health professional specializing in trauma therapy, anxiety treatment, and relationship counseling. Licensed and trusted." />
        <meta name="keywords" content="therapist, counselor, LCSW, trauma specialist, anxiety treatment, licensed mental health" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 pt-16">
          {/* Hero Section with Professional Headshot */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-success/5 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                    Meet Dr. Sarah Chen
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body leading-relaxed">
                    Licensed Clinical Social Worker specializing in trauma therapy, anxiety treatment, and relationship counseling
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                    <Button
                      onClick={handleBookSession}
                      iconName="Calendar"
                      iconPosition="left"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                    >
                      Schedule Consultation
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Phone"
                      iconPosition="left"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Call (555) 123-4567
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <Icon name="Shield" size={16} />
                      <span className="font-body font-medium">HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <Icon name="Award" size={16} />
                      <span className="font-body font-medium">8+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <Icon name="Users" size={16} />
                      <span className="font-body font-medium">500+ Clients Helped</span>
                    </div>
                  </div>
                </div>
                <div className="order-first lg:order-last">
                  <CounselorPhoto />
                </div>
              </div>
            </div>
          </section>

          {/* Professional Biography */}
          <section className="py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="bg-card rounded-lg border border-border p-8 md:p-12 shadow-soft">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
                  My Journey in Mental Health
                </h2>
                
                <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                  <p className="text-lg">
                    My path to becoming a mental health professional began with a personal understanding of life's challenges 
                    and the transformative power of therapy. After completing my Master's in Clinical Psychology at the 
                    University of Mental Health Sciences, I've dedicated the past eight years to helping individuals, 
                    couples, and families navigate their mental health journeys.
                  </p>
                  
                  <p className="text-lg">
                    I specialize in trauma-informed care, having witnessed firsthand how past experiences shape our present 
                    relationships and emotional well-being. My training in EMDR therapy and cognitive behavioral techniques 
                    allows me to offer evidence-based treatment that creates lasting change.
                  </p>
                  
                  <p className="text-lg">
                    What drives me every day is the privilege of witnessing resilience and growth in my clients. I believe 
                    that everyone has the capacity for healing, and my role is to provide a safe, non-judgmental space 
                    where that healing can unfold naturally.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <Button
                    onClick={handleBookSession}
                    iconName="Calendar"
                    iconPosition="left"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                  >
                    Book Your Session
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  My Mission & Values
                </h2>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 md:p-12">
                  <blockquote className="text-xl md:text-2xl font-body text-foreground italic leading-relaxed mb-6">
                    "To create a compassionate, culturally sensitive environment where individuals feel empowered 
                    to explore their inner world, heal from past wounds, and develop the tools necessary for 
                    lasting emotional well-being."
                  </blockquote>
                  <div className="flex justify-center">
                    <Icon name="Heart" size={32} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Credentials */}
          <section className="py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
                Professional Credentials & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {credentials?.map((credential, index) => (
                  <CredentialsBadge key={index} credential={credential} />
                ))}
              </div>
            </div>
          </section>

          {/* Therapeutic Approaches */}
          <section className="py-16 lg:py-20 bg-muted/20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
                My Therapeutic Approach
              </h2>
              <p className="text-lg text-muted-foreground font-body text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                I believe in using evidence-based practices tailored to each client's unique needs. 
                My integrative approach combines multiple therapeutic modalities to provide comprehensive care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {approaches?.map((approach, index) => (
                  <ApproachCard key={index} approach={approach} />
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-card rounded-lg border border-border p-8 shadow-soft">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    What to Expect in Our First Session
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    Your first appointment is a safe space to share your story and concerns. We'll discuss your goals, 
                    review my therapeutic approach, and create a personalized treatment plan together. No judgment, 
                    just compassionate listening and professional guidance.
                  </p>
                  <Button
                    onClick={handleBookSession}
                    iconName="Calendar"
                    iconPosition="left"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
                  >
                    Schedule Your First Visit
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Commitment */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  My Commitment to You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                    <Icon name="Shield" size={32} className="text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      Confidentiality
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Your privacy is paramount. All sessions are conducted with strict HIPAA compliance and confidentiality.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                    <Icon name="Heart" size={32} className="text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      Compassionate Care
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      I provide a warm, non-judgmental environment where you can explore and heal at your own pace.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                    <Icon name="Star" size={32} className="text-primary mb-4 mx-auto" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      Excellence
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Ongoing training and professional development ensure you receive the highest quality of care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;