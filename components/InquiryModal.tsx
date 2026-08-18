'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, ArrowUpRight, Building, Handshake, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryType } from '@/types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: InquiryType;
  defaultValues?: Record<string, string>;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialType = 'client',
  defaultValues = {}
}: InquiryModalProps) {
  const [activeType, setActiveType] = useState<InquiryType>(initialType);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form Fields State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState(defaultValues.projectType || '');
  const [estimatedBudget, setEstimatedBudget] = useState(defaultValues.estimatedBudget || '');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(defaultValues.message || '');

  // Reset or adjust form state when opening/type changes
  const [prevType, setPrevType] = useState(initialType);
  if (initialType !== prevType) {
    setPrevType(initialType);
    setActiveType(initialType);
    if (defaultValues.projectType) setProjectType(defaultValues.projectType);
    if (defaultValues.estimatedBudget) setEstimatedBudget(defaultValues.estimatedBudget);
    if (defaultValues.message) setMessage(defaultValues.message);
  }

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const payload = {
        type: activeType,
        fullName,
        email,
        phone,
        companyName: companyName || undefined,
        projectType: projectType || undefined,
        estimatedBudget: estimatedBudget || undefined,
        location: location || undefined,
        message,
        source: 'Website Modal'
      };

      const res = await fetch('/api/v1/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Gagal mengirimkan formulir.');
      }

      setSuccessMessage(data.message || 'Inquiry Anda telah diterima dengan sukses.');
      
      // Reset fields
      setFullName('');
      setEmail('');
      setPhone('');
      setCompanyName('');
      setMessage('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Terjadi kesalahan sistem. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#F7F6F2] w-full max-w-2xl border border-[#E2DFD7] shadow-2xl relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal hover:bg-black/5 transition-colors rounded-none z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-[#EFECE6] border-b border-[#E2DFD7]">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive block mb-1">
              BUILDDEVA OFFICIAL INQUIRY PORTAL
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-charcoal">
              {activeType === 'client' && 'Konsultasi Proyek & Penawaran DED'}
              {activeType === 'partner' && 'Pengajuan Kemitraan Vendor / Konsultasi'}
              {activeType === 'talent' && 'Aplikasi Karir & Rekrutmen Talent'}
            </h3>

            {/* Type Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 mt-6">
              {[
                { id: 'client', label: 'Client / Proyek', icon: Building },
                { id: 'partner', label: 'Partner / Vendor', icon: Handshake },
                { id: 'talent', label: 'Talent / Karir', icon: Briefcase },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeType === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveType(tab.id as InquiryType);
                      setSuccessMessage(null);
                      setErrorMessage(null);
                    }}
                    className={`py-2.5 px-3 text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-white text-charcoal border-[#E2DFD7] hover:bg-[#F7F6F2]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
            {successMessage ? (
              <div className="py-8 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-olive/10 border border-brand-olive flex items-center justify-center text-brand-olive">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-charcoal">
                  Pesan Terkirim dengan Sukses!
                </h4>
                <p className="text-sm text-muted-charcoal font-body max-w-md leading-relaxed">
                  {successMessage}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors cursor-pointer"
                >
                  TUTUP JENDELA
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-800 text-xs font-body">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ir. Ahmad Sudirman"
                      className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                      Email Resmi *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ahmad@perusahaan.com"
                      className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="081234567890"
                      className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                      Perusahaan / Entitas
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. PT Sentrosa Land"
                      className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                    />
                  </div>
                </div>

                {activeType === 'client' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                        Jenis Proyek
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                      >
                        <option value="">Pilih Jenis Proyek</option>
                        <option value="Residential">Residential</option>
                        <option value="Warehouse & Industrial">Warehouse & Industrial</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                        Estimasi Anggaran
                      </label>
                      <input
                        type="text"
                        value={estimatedBudget}
                        onChange={(e) => setEstimatedBudget(e.target.value)}
                        placeholder="e.g. Rp 2 Milyar - 5 Milyar"
                        className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                        Lokasi Proyek
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. BSD City, Tangerang"
                        className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-charcoal mb-1">
                    Detail Pesan & Kebutuhan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan gambaran singkat rencana proyek, kebutuhan spesifikasi, atau pertanyaan Anda..."
                    className="w-full bg-white border border-[#E2DFD7] p-3 text-xs text-charcoal focus:outline-hidden focus:border-brand-olive font-body"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    id="modal-submit-inquiry-btn"
                    className="w-full bg-charcoal hover:bg-brand-olive text-white font-heading text-xs font-extrabold uppercase tracking-widest py-4 px-6 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>MEMPROSES PESAN...</span>
                      </>
                    ) : (
                      <>
                        <span>KIRIM PESAN INQUIRE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-muted-charcoal text-center mt-2 font-body">
                    Data Anda dilindungi kebijakan privasi BuildDeva & tidak akan dibagikan ke pihak ketiga.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
