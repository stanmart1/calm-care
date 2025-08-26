import React from 'react';
import Image from 'components/AppImage';
import Icon from 'components/AppIcon';

const CounselorBiography = () => {
  const credentials = [
    { title: "Licensed Professional Counselor", abbr: "LPC", year: "2018" },
    { title: "Master\'s in Clinical Psychology", abbr: "M.A.", year: "2016" },
    { title: "Certified Trauma Specialist", abbr: "CTS", year: "2020" },
    { title: "EMDR Therapy Certified", abbr: "EMDR", year: "2021" }
  ];

  const certifications = [
    { name: "American Counseling Association", icon: "Award" },
    { name: "National Board for Certified Counselors", icon: "Shield" },
    { name: "International Association of Marriage Counselors", icon: "Heart" },
    { name: "Trauma Recovery Network", icon: "Users" }
  ];

  const specialties = [
    "Anxiety & Depression Treatment",
    "Trauma & PTSD Recovery",
    "Relationship & Marriage Counseling",
    "Family Therapy & Dynamics",
    "Cognitive Behavioral Therapy (CBT)",
    "EMDR Therapy"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Professional Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dr. Sarah Mitchell, Licensed Professional Counselor"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay with Quick Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-soft">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">7+</div>
                    <div className="text-xs text-muted-foreground font-body">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-secondary">500+</div>
                    <div className="text-xs text-muted-foreground font-body">Clients Helped</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
          </div>

          {/* Biography Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Icon name="User" size={16} className="mr-2" />
                Meet Your Therapist
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Dr. Sarah Mitchell, LPC
              </h2>
              
              <p className="text-lg text-muted-foreground font-body">
                Licensed Professional Counselor specializing in trauma recovery, 
                anxiety treatment, and relationship counseling.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                My Mission
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                "I believe that everyone deserves a safe space to heal and grow. My approach combines 
                evidence-based therapeutic techniques with genuine compassion to help you navigate 
                life's challenges and discover your inner strength. Together, we'll work towards 
                lasting positive change in your mental health journey."
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Education & Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials?.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                      <Icon name="GraduationCap" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-heading font-medium text-foreground">
                        {credential?.abbr}
                      </div>
                      <div className="text-xs text-muted-foreground font-body">
                        {credential?.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specialties?.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="font-body">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Affiliations */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Professional Affiliations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
                    <Icon name={cert?.icon} size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground font-body">
                      {cert?.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselorBiography;