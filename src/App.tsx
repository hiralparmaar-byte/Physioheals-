import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ServicesSection } from './components/ServicesSection';
import { ErgonomicEvaluator } from './components/ErgonomicEvaluator';
import { MicroBreakRoutine } from './components/MicroBreakRoutine';
import { CorporateRoiCalculator } from './components/CorporateRoiCalculator';
import { AboutFounder } from './components/AboutFounder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Check URL hash on load (e.g. #cases from user prompt)
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  const scrollToCases = () => {
    const el = document.getElementById('cases');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-teal-800 selection:text-white">
      {/* Top Bar Contract Header */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with 4-Column Proof Strip */}
        <Hero
          onOpenBooking={() => setBookingModalOpen(true)}
          onExploreCases={scrollToCases}
        />

        {/* Clinical Case Studies Section (Highlighted #cases Anchor) */}
        <CaseStudiesSection onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Specialized Services with Editorial Numbering */}
        <ServicesSection onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Interactive Diagnostic Tool: Postural & Ergonomic Evaluator */}
        <ErgonomicEvaluator onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Interactive Tool: 3-Minute Desk Mobility & Nerve Reset Sequencer */}
        <MicroBreakRoutine />

        {/* Corporate ROI & Strain Calculator for HR & Enterprise Leaders */}
        <CorporateRoiCalculator onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Lead Physiotherapist & Ergonomist Profile: Dr. Hiral Parmar */}
        <AboutFounder onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Attributable Quantitative Proof & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Consultation & Corporate Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
