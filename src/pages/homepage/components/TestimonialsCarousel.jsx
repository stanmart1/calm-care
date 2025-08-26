import React, { useState, useEffect } from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer M.",
      location: "Austin, TX",
      rating: 5,
      text: `Dr. Mitchell helped me through one of the darkest periods of my life. Her compassionate approach and evidence-based techniques gave me the tools I needed to overcome anxiety and depression. I'm forever grateful for her support.`,
      therapy: "Individual Therapy",
      duration: "8 months"
    },
    {
      id: 2,
      name: "Michael & Lisa R.",
      location: "Dallas, TX",
      rating: 5,
      text: `Our marriage was on the brink of divorce when we started couples therapy. Dr. Mitchell's guidance helped us rebuild communication and trust. We're stronger than ever now and couldn't be happier with our progress.`,
      therapy: "Couples Therapy",
      duration: "6 months"
    },
    {
      id: 3,
      name: "David K.",
      location: "Houston, TX",
      rating: 5,
      text: `After struggling with PTSD for years, I finally found the right therapist. The EMDR sessions were life-changing. I can now manage my symptoms and enjoy life again. Highly recommend Dr. Mitchell's expertise.`,
      therapy: "Trauma Recovery",
      duration: "12 months"
    },
    {
      id: 4,
      name: "The Johnson Family",
      location: "San Antonio, TX",
      rating: 5,
      text: `Family therapy helped us navigate our teenager's behavioral issues and improved our family dynamics significantly. Dr. Mitchell provided practical strategies that we still use today. Our family is closer than ever.`,
      therapy: "Family Therapy",
      duration: "4 months"
    },
    {
      id: 5,
      name: "Amanda T.",
      location: "Fort Worth, TX",
      rating: 5,
      text: `The online therapy sessions were incredibly convenient and just as effective as in-person meetings. Dr. Mitchell made me feel comfortable and supported throughout my healing journey from trauma.`,
      therapy: "Online Therapy",
      duration: "10 months"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials?.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-border"}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Stories of Healing & Growth
          </h2>
          
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Read what our clients have to say about their transformative experiences 
            and the positive impact therapy has had on their lives.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-soft-lg mb-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials?.[currentIndex]?.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-8">
                "{testimonials?.[currentIndex]?.text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-4">
                <div>
                  <div className="text-lg font-heading font-semibold text-foreground">
                    {testimonials?.[currentIndex]?.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {testimonials?.[currentIndex]?.location}
                  </div>
                </div>

                {/* Therapy Details */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    <Icon name="Heart" size={14} />
                    <span className="font-body">{testimonials?.[currentIndex]?.therapy}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    <Icon name="Clock" size={14} />
                    <span className="font-body">{testimonials?.[currentIndex]?.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`w-3 h-3 rounded-full transition-gentle ${
                    index === currentIndex
                      ? 'bg-primary' :'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-gentle"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
              <span className="font-body">
                {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
              </span>
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-6">
            Ready to start your own success story?
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => window.location.href = '/services-booking'}
            iconName="Calendar"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
          >
            Book Your First Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;