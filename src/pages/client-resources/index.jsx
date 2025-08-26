import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import SearchBar from './components/SearchBar';
import FilterChips from './components/FilterChips';

import CrisisResources from './components/CrisisResources';
import FeaturedContent from './components/FeaturedContent';
import NewsletterSubscription from './components/NewsletterSubscription';
import ResourceGrid from './components/ResourceGrid';

const ClientResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredResources, setFilteredResources] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data for categories
  const categories = [
    { id: 'articles', name: 'Articles' },
    { id: 'worksheets', name: 'Worksheets' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'crisis', name: 'Crisis Support' },
    { id: 'reading', name: 'Reading Lists' }
  ];

  // Mock data for resources
  const allResources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Comprehensive Guide",
      description: `Anxiety is a natural response to stress, but when it becomes overwhelming, it can significantly impact daily life. This comprehensive guide explores the different types of anxiety disorders, their symptoms, and evidence-based treatment approaches.\n\nLearn about cognitive-behavioral techniques, mindfulness practices, and lifestyle changes that can help manage anxiety symptoms effectively.`,
      category: 'articles',
      categoryName: 'Articles',
      type: 'article',
      readingTime: '8 min read',
      author: 'Dr. Sarah Johnson',
      publishDate: 'Dec 15, 2024',
      isNew: true,
      downloads: null
    },
    {
      id: 2,
      title: "Daily Mood Tracking Worksheet",
      description: `A structured worksheet designed to help you track your daily mood patterns, identify triggers, and recognize positive coping strategies. This tool is essential for building self-awareness and supporting therapeutic progress.\n\nIncludes sections for mood rating, trigger identification, coping strategies used, and reflection notes.`,
      category: 'worksheets',
      categoryName: 'Worksheets',
      type: 'downloadable',
      readingTime: '5 min setup',
      author: 'CalmCare Team',
      publishDate: 'Dec 10, 2024',
      isNew: false,
      downloads: '1,247'
    },
    {
      id: 3,
      title: "5-Minute Breathing Meditation",
      description: `A guided breathing meditation designed to reduce stress and promote relaxation. Perfect for beginners or anyone needing a quick mindfulness break during their day.\n\nThis meditation focuses on deep breathing techniques and body awareness to help center your mind and reduce anxiety.`,
      category: 'meditation',
      categoryName: 'Meditation',
      type: 'audio',
      readingTime: '5 min audio',
      author: 'Michael Chen, LMFT',
      publishDate: 'Dec 8, 2024',
      isNew: false,
      downloads: '892'
    },
    {
      id: 4,
      title: "Cognitive Behavioral Therapy Techniques",
      description: `Learn practical CBT techniques that you can use between therapy sessions. This resource covers thought challenging, behavioral activation, and problem-solving strategies.\n\nIncludes step-by-step instructions and real-world examples to help you apply these techniques in your daily life.`,
      category: 'articles',
      categoryName: 'Articles',
      type: 'article',
      readingTime: '12 min read',
      author: 'Dr. Emily Rodriguez',
      publishDate: 'Dec 5, 2024',
      isNew: false,
      downloads: null
    },
    {
      id: 5,
      title: "Sleep Hygiene Checklist",
      description: `A comprehensive checklist to improve your sleep quality and establish healthy bedtime routines. Good sleep is fundamental to mental health and emotional regulation.\n\nCovers environmental factors, pre-sleep routines, and lifestyle habits that promote restful sleep.`,
      category: 'worksheets',
      categoryName: 'Worksheets',
      type: 'downloadable',
      readingTime: '3 min setup',
      author: 'CalmCare Team',
      publishDate: 'Dec 1, 2024',
      isNew: false,
      downloads: '2,156'
    },
    {
      id: 6,
      title: "Progressive Muscle Relaxation Guide",
      description: `A detailed guide to progressive muscle relaxation (PMR), a technique that helps reduce physical tension and promote mental relaxation. Includes audio guidance and written instructions.\n\nPMR is particularly effective for managing stress, anxiety, and improving sleep quality.`,
      category: 'meditation',
      categoryName: 'Meditation',
      type: 'downloadable',
      readingTime: '15 min practice',
      author: 'Lisa Thompson, LPC',
      publishDate: 'Nov 28, 2024',
      isNew: false,
      downloads: '743'
    },
    {
      id: 7,
      title: "Recommended Books for Mental Health",
      description: `A curated list of books recommended by our therapists for various mental health topics including anxiety, depression, relationships, and personal growth.\n\nEach recommendation includes a brief summary and explanation of why it's valuable for therapeutic work.`,
      category: 'reading',categoryName: 'Reading Lists',type: 'article',readingTime: '6 min read',author: 'CalmCare Clinical Team',publishDate: 'Nov 25, 2024',
      isNew: false,
      downloads: null
    },
    {
      id: 8,
      title: "Grounding Techniques for Panic Attacks",
      description: `Quick and effective grounding techniques to help manage panic attacks and overwhelming anxiety. These evidence-based strategies can be used anywhere, anytime.\n\nIncludes the 5-4-3-2-1 technique, breathing exercises, and physical grounding methods.`,
      category: 'crisis',categoryName: 'Crisis Support',type: 'article',readingTime: '4 min read',author: 'Dr. James Wilson',publishDate: 'Nov 20, 2024',
      isNew: true,
      downloads: null
    }
  ];

  // Featured resources (subset of all resources)
  const featuredResources = allResources?.filter(resource => 
    resource?.isNew || resource?.id === 2 || resource?.id === 3
  )?.slice(0, 3);

  // Filter resources based on search and category
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      let filtered = allResources;

      // Filter by category
      if (activeCategory !== 'all') {
        filtered = filtered?.filter(resource => resource?.category === activeCategory);
      }

      // Filter by search term
      if (searchTerm) {
        filtered = filtered?.filter(resource =>
          resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
          resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
          resource?.categoryName?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        );
      }

      setFilteredResources(filtered);
      setLoading(false);
    }, 300);
  }, [searchTerm, activeCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Helmet>
        <title>Client Resources - Mental Health Support Materials | CalmCare Counseling</title>
        <meta name="description" content="Access valuable mental health resources including articles, worksheets, meditation guides, and crisis support materials. Educational content to support your therapeutic journey." />
        <meta name="keywords" content="mental health resources, therapy worksheets, meditation guides, crisis support, anxiety help, depression resources" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Mental Health Resources
                </h1>
                <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                  Access valuable educational materials, worksheets, and tools to support 
                  your mental health journey between sessions. All resources are created 
                  by licensed mental health professionals.
                </p>
              </div>
              
              <SearchBar 
                onSearch={handleSearch}
                placeholder="Search articles, worksheets, meditation guides..."
              />
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
            {/* Crisis Resources - Always Visible */}
            <CrisisResources />

            {/* Filter Chips */}
            <div className="mb-8">
              <FilterChips
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* Featured Content */}
            {activeCategory === 'all' && !searchTerm && (
              <FeaturedContent featuredResources={featuredResources} />
            )}

            {/* Resources Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  {activeCategory === 'all' ? 'All Resources' : 
                   categories?.find(cat => cat?.id === activeCategory)?.name || 'Resources'}
                </h2>
                <div className="text-sm text-muted-foreground font-body">
                  {loading ? 'Loading...' : `${filteredResources?.length} resources found`}
                </div>
              </div>
              
              <ResourceGrid 
                resources={filteredResources}
                loading={loading}
              />
            </div>

            {/* Newsletter Subscription */}
            {activeCategory === 'all' && !searchTerm && (
              <div className="mb-12">
                <NewsletterSubscription />
              </div>
            )}

            {/* Additional Support Section */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Need Personalized Support?
              </h3>
              <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
                While these resources are helpful, nothing replaces personalized therapy. 
                Our licensed therapists are here to provide individualized support for your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/services-booking'}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-medium hover:bg-primary/90 transition-gentle"
                >
                  Schedule a Session
                </button>
                <button
                  onClick={() => window.location.href = '/contact-location'}
                  className="px-6 py-3 border border-border text-foreground rounded-md font-body font-medium hover:bg-muted transition-gentle"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ClientResources;