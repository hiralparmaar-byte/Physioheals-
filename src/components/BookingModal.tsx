import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Clock, Building, User, Mail, Phone, AlertCircle } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'individual' | 'corporate'>('individual');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const [formData, setFormData] = useState<BookingFormData>({
    serviceType: "Women's Specialized Physiotherapy",
    consultationFormat: 'virtual',
    fullName: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    primaryConcern: 'Neck, shoulder & upper crossed syndrome',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid corporate or personal email';
    }
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    if (activeTab === 'corporate' && !formData.company?.trim()) {
      errs.company = 'Please specify company name';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const code = `PH-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              Schedule with PhysioHeals
            </div>
            <h2 id="booking-modal-title" className="text-lg font-bold text-neutral-900 mt-0.5">
              {submitted ? 'Appointment Confirmed' : 'Book Clinical or Corporate Consultation'}
            </h2>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Consultation Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-neutral-900">{formData.fullName}</strong>. Dr. Hiral Parmar’s clinical coordinator will email you within 2 business hours with calendar invites and intake forms.
              </p>
            </div>

            {/* Reference Box */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-left text-xs max-w-md mx-auto space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-200/80">
                <span className="text-neutral-500 font-medium">Confirmation Reference:</span>
                <span className="font-mono font-bold text-teal-900 text-sm">{confirmationCode}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Service:</span>
                <span className="font-semibold text-neutral-900">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Target Date &amp; Time:</span>
                <span className="font-semibold text-neutral-900">
                  {formData.preferredDate} at {formData.preferredTime}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Format:</span>
                <span className="font-semibold text-neutral-900 capitalize">
                  {formData.consultationFormat.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Preparation Tip */}
            <div className="p-3.5 bg-teal-50/70 border border-teal-200/80 rounded-xl text-left text-xs text-teal-950 max-w-md mx-auto flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Next Step: </span>
                Please prepare 2–3 photos of your seated desk setup (side view and arm angle) to upload during your digital intake.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 text-sm">
            {/* Segmented Mode Selector */}
            <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('individual');
                  setFormData({
                    ...formData,
                    serviceType: "Women's Specialized Physiotherapy",
                  });
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'individual'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                1:1 Clinical / Ergonomic Client
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('corporate');
                  setFormData({
                    ...formData,
                    serviceType: 'Corporate Ergonomics Team Audit & Workshop',
                  });
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'corporate'
                    ? 'bg-white text-neutral-900 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Corporate / HR Team Inquiry
              </button>
            </div>

            {/* Service & Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Service Selection
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-teal-800"
                >
                  {activeTab === 'individual' ? (
                    <>
                      <option>Women's Specialized Physiotherapy</option>
                      <option>1:1 Virtual Workstation Ergonomics Audit</option>
                      <option>In-Clinic Spine &amp; Posture Comprehensive</option>
                      <option>Prenatal &amp; Postpartum Desk Rehabilitation</option>
                      <option>RSI &amp; Carpal Tunnel Clinical Care</option>
                    </>
                  ) : (
                    <>
                      <option>Corporate Ergonomics Team Audit &amp; Workshop</option>
                      <option>On-Site Workstation Ergonomic Audits (Per Desk)</option>
                      <option>Women’s Health in Corporate ERG Seminar</option>
                      <option>Executive 1-on-1 Ergonomic Health Assessments</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Format Preference
                </label>
                <select
                  value={formData.consultationFormat}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consultationFormat: e.target.value as any,
                    })
                  }
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-teal-800"
                >
                  <option value="virtual">Virtual Tele-Physio (Video Call)</option>
                  <option value="in-clinic">In-Clinic Session</option>
                  <option value="corporate-onsite">On-Site Corporate Office</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Rachel Sterling"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border bg-white focus:outline-teal-800 ${
                      errors.fullName ? 'border-rose-500' : 'border-neutral-300'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border bg-white focus:outline-teal-800 ${
                      errors.email ? 'border-rose-500' : 'border-neutral-300'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  {activeTab === 'corporate' ? 'Company / Organization *' : 'Company / Employer (Optional)'}
                </label>
                <div className="relative">
                  <Building className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Tech Corp / Studio"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border bg-white focus:outline-teal-800 ${
                      errors.company ? 'border-rose-500' : 'border-neutral-300'
                    }`}
                  />
                </div>
                {errors.company && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Contact Phone (Optional)
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-teal-800"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border bg-white focus:outline-teal-800 ${
                      errors.preferredDate ? 'border-rose-500' : 'border-neutral-300'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                  Preferred Time Window
                </label>
                <div className="relative">
                  <Clock className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full text-xs pl-8 pr-3 py-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-teal-800"
                  >
                    <option>09:00 AM - 11:00 AM Morning</option>
                    <option>11:30 AM - 01:30 PM Mid-Day</option>
                    <option>02:00 PM - 04:00 PM Afternoon</option>
                    <option>04:30 PM - 06:30 PM Evening</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Primary Symptoms or Needs */}
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wide mb-1.5">
                Primary Symptoms or Workspace Goals
              </label>
              <textarea
                rows={2}
                placeholder="Describe your current pain, desk setup issues, team size, or pregnancy/postpartum stage..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs p-3 rounded-lg border border-neutral-300 bg-white focus:outline-teal-800"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-white bg-teal-900 hover:bg-teal-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Confirm Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
