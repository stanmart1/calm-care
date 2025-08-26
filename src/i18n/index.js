import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "Home": "Home",
      "About": "About",
      "Services": "Services",
      "Resources": "Resources",
      "Contact": "Contact",
      "Admin": "Admin",
      "Client Management": "Client Management",
      
      // Common
      "Learn More": "Learn More",
      "Get Started": "Get Started",
      "Book Now": "Book Now",
      "Contact Us": "Contact Us",
      "Save": "Save",
      "Cancel": "Cancel",
      "Submit": "Submit",
      "Close": "Close",
      "Edit": "Edit",
      "Delete": "Delete",
      "View": "View",
      "Add": "Add",
      "Search": "Search",
      "Filter": "Filter",
      "Export": "Export",
      "Import": "Import",
      "Settings": "Settings",
      "Profile": "Profile",
      "Logout": "Logout",
      "Login": "Login",
      "Sign Up": "Sign Up",
      "Back": "Back",
      "Next": "Next",
      "Previous": "Previous",
      "Continue": "Continue",
      "Confirm": "Confirm",
      "Yes": "Yes",
      "No": "No",
      "OK": "OK",
      "Loading": "Loading",
      "Error": "Error",
      "Success": "Success",
      "Warning": "Warning",
      "Info": "Info",
      
      // Hero Section
      "Find Peace and Healing": "Find Peace and Healing",
      "Professional counseling services to help you navigate life's challenges with compassion and expertise.": "Professional counseling services to help you navigate life's challenges with compassion and expertise.",
      
      // Footer
      "Quick Links": "Quick Links",
      "Contact Information": "Contact Information",
      "Follow Us": "Follow Us",
      "© 2024 CalmCare Counseling. All rights reserved.": "© 2024 CalmCare Counseling. All rights reserved.",
      
      // Dashboard
      "Dashboard Overview": "Dashboard Overview",
      "Total Clients": "Total Clients",
      "Upcoming Sessions": "Upcoming Sessions",
      "Monthly Revenue": "Monthly Revenue",
      "Active Bookings": "Active Bookings",
      "Recent Activity": "Recent Activity",
      "View All": "View All",
      "No upcoming sessions": "No upcoming sessions",
      
      // Client Management
      "Add New Client": "Add New Client",
      "Client Profile": "Client Profile",
      "Personal Information": "Personal Information",
      "Contact Details": "Contact Details",
      "Emergency Contact": "Emergency Contact",
      "Session History": "Session History",
      "Notes": "Notes",
      "Appointments": "Appointments",
      "Billing": "Billing",
      
      // Resources
      "Crisis Resources": "Crisis Resources",
      "If you're experiencing a mental health crisis, please reach out for immediate help:": "If you're experiencing a mental health crisis, please reach out for immediate help:",
      "Newsletter Subscription": "Newsletter Subscription",
      "Stay updated with our latest resources and tips": "Stay updated with our latest resources and tips",
      "Subscribe": "Subscribe",
      
      // Booking
      "Select Date": "Select Date",
      "Available Times": "Available Times",
      "Book Appointment": "Book Appointment",
      
      // Payment
      "Payment Summary": "Payment Summary",
      "Appointment Details": "Appointment Details",
      "Total Amount": "Total Amount",
      "Payment Method": "Payment Method",
      "Confirm Payment": "Confirm Payment",
      
      // About
      "About Our Practice": "About Our Practice",
      "Our Mission": "Our Mission",
      "Our Approach": "Our Approach",
      
      // Contact
      "Get in Touch": "Get in Touch",
      "Office Hours": "Office Hours",
      "Location": "Location",
      "Phone": "Phone",
      "Email": "Email",
      
      // Forms
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Email Address": "Email Address",
      "Phone Number": "Phone Number",
      "Date of Birth": "Date of Birth",
      "Address": "Address",
      "City": "City",
      "State": "State",
      "Zip Code": "Zip Code",
      "Message": "Message",
      
      // Status
      "Active": "Active",
      "Inactive": "Inactive",
      "Pending": "Pending",
      "Completed": "Completed",
      "Cancelled": "Cancelled",
      "Scheduled": "Scheduled",
      
      // Time
      "Today": "Today",
      "Tomorrow": "Tomorrow",
      "This Week": "This Week",
      "This Month": "This Month",
      "Last Week": "Last Week",
      "Last Month": "Last Month",
      
      // Additional common phrases
      "Schedule Consultation": "Schedule Consultation",
      "Call (555) 123-4567": "Call (555) 123-4567",
      "Book Your Session": "Book Your Session",
      "Schedule Your First Visit": "Schedule Your First Visit",
      "What to Expect in Our First Session": "What to Expect in Our First Session",
      "My Therapeutic Approach": "My Therapeutic Approach",
      "Professional Credentials & Certifications": "Professional Credentials & Certifications",
      "My Commitment to You": "My Commitment to You",
      "Confidentiality": "Confidentiality",
      "Compassionate Care": "Compassionate Care",
      "Excellence": "Excellence",
      "Crisis Support Available 24/7": "Crisis Support Available 24/7",
      "Call 988 - Crisis Lifeline": "Call 988 - Crisis Lifeline",
      "Mental Health Resources": "Mental Health Resources",
      "Enter your email": "Enter your email",
      "HIPAA Compliant": "HIPAA Compliant",
      "Licensed Therapists": "Licensed Therapists",
      "Secure Platform": "Secure Platform",
      "Flexible Scheduling": "Flexible Scheduling",
      "500+ Clients Helped": "500+ Clients Helped",
      "Building stronger mental health since 2018": "Building stronger mental health since 2018",
      "8+ Years Experience": "8+ Years Experience",
      "Mon-Fri 8AM-8PM, Sat 9AM-5PM": "Mon-Fri 8AM-8PM, Sat 9AM-5PM",
      "Licensed mental health services.": "Licensed mental health services.",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",
      "HIPAA Notice": "HIPAA Notice",
      "If you're experiencing a mental health emergency, please contact the crisis hotline immediately.": "If you're experiencing a mental health emergency, please contact the crisis hotline immediately.",
      "Professional, compassionate counseling services in a safe and supportive environment.": "Professional, compassionate counseling services in a safe and supportive environment.",
      "Take the first step towards healing and personal growth with our licensed therapists.": "Take the first step towards healing and personal growth with our licensed therapists.",
      "Explore Resources": "Explore Resources",
      "Licensed Professional Counseling": "Licensed Professional Counseling",
      "Find Peace in Your Mental Health Journey": "Find Peace in Your Mental Health Journey",
      "Meet Dr. Sarah Chen": "Meet Dr. Sarah Chen",
      "Licensed Clinical Social Worker specializing in trauma therapy, anxiety treatment, and relationship counseling": "Licensed Clinical Social Worker specializing in trauma therapy, anxiety treatment, and relationship counseling",
      "My Journey in Mental Health": "My Journey in Mental Health",
      "My Mission & Values": "My Mission & Values",
      "No data available": "No data available",
      "Select all": "Select all",
      "Clear selection": "Clear selection",
      "Actions": "Actions",
      "Bulk Actions": "Bulk Actions",
      "Available": "Available",
      "Unavailable": "Unavailable",
      "Book Appointment": "Book Appointment",
      "Appointment Summary": "Appointment Summary",
      "Payment Details": "Payment Details",
      "Consent Forms": "Consent Forms",
      "I agree to the terms and conditions": "I agree to the terms and conditions",
      "I consent to treatment": "I consent to treatment",
      "Processing payment...": "Processing payment...",
      "Payment successful": "Payment successful",
      "Thank you for your payment": "Thank you for your payment",
      "Your appointment has been confirmed": "Your appointment has been confirmed",
      "Confirmation details have been sent to your email": "Confirmation details have been sent to your email",
      "Return to homepage": "Return to homepage",
      "View appointment details": "View appointment details",
      "Emergency Resources": "Emergency Resources",
      "Self-Help Tools": "Self-Help Tools",
      "Educational Materials": "Educational Materials",
      "Support Groups": "Support Groups",
      "Wellness Tips": "Wellness Tips",
      "Download Resource": "Download Resource",
      "Read More": "Read More",
      "Share Resource": "Share Resource",
      "Bookmark": "Bookmark",
      "Print": "Print",
      "Email Resource": "Email Resource",
      "Resource Categories": "Resource Categories",
      "All Categories": "All Categories",
      "Anxiety & Stress": "Anxiety & Stress",
      "Depression": "Depression",
      "Trauma & PTSD": "Trauma & PTSD",
      "Relationships": "Relationships",
      "Grief & Loss": "Grief & Loss",
      "Addiction Recovery": "Addiction Recovery",
      "Mindfulness": "Mindfulness",
      "Sleep & Wellness": "Sleep & Wellness",
      "Parenting": "Parenting",
      "Teen & Youth": "Teen & Youth",
      "Workplace Stress": "Workplace Stress",
      "Life Transitions": "Life Transitions"
    }
  }
};

// Add more translations as needed
resources.en.translation = {
  ...resources.en.translation,
  // Dynamic content that might be used in components
  "No upcoming sessions": "No upcoming sessions",
  "View all sessions": "View all sessions",
  "Recent activity": "Recent activity",
  "No recent activity": "No recent activity",
  "Load more": "Load more",
  "Refresh": "Refresh",
  "Export data": "Export data",
  "Import data": "Import data",
  "Bulk edit": "Bulk edit",
  "Select date range": "Select date range",
  "Apply filters": "Apply filters",
  "Clear filters": "Clear filters",
  "Sort by": "Sort by",
  "Order by": "Order by",
  "Ascending": "Ascending",
  "Descending": "Descending",
  "Items per page": "Items per page",
  "Page": "Page",
  "of": "of",
  "Go to page": "Go to page",
  "First page": "First page",
  "Last page": "Last page",
  "Previous page": "Previous page",
  "Next page": "Next page"
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;