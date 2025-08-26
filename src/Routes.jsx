import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ClientResources from './pages/client-resources';
import ContactLocationPage from './pages/contact-location';
import ServicesBooking from './pages/services-booking';
import PaymentConfirmation from './pages/payment-confirmation';
import Homepage from './pages/homepage';
import AboutPage from './pages/about';
import AdminDashboard from './pages/admin-dashboard';
import ClientManagement from './pages/client-management';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/client-resources" element={<ClientResources />} />
        <Route path="/contact-location" element={<ContactLocationPage />} />
        <Route path="/services-booking" element={<ServicesBooking />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/client-management" element={<ClientManagement />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;