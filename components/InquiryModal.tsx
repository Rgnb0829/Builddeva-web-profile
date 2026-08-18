'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, ArrowUpRight, Loader2 } from 'lucide-react';
import { InquiryType } from '@/types';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: InquiryType;
  defaultValues?: Record<string, string>;
}

export default function InquiryModal({ isOpen, onClose, initialType = 'client', defaultValues }: InquiryModalProps) {
  const [activeTypeOverride, setActiveTypeOverride] = useState<InquiryType | null>(null);
  const activeType = activeTypeOverride ?? initialType;
  const [fullName, setFullName] = useState(defaultValues?.fullName || '');
  const [email, setEmail] = useState(defaultValues?.email || '');
  const [phone, setPhone] = useState(defaultValues?.phone || '');
  const [companyName, setCompanyName] = useState(defaultValues?.companyName || '');
  const [projectType, setProjectType] = useState(defaultValues?.projectType || '');
  const [estimatedBudget, setEstimatedBudget] = useState(defaultValues?.estimatedBudget || '');
  const [location, setLocation] = useState(defaultValues?.location || '');
  const [message, setMessage] = useState(defaultValues?.message || '');

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-base w-full max-w-2xl rounded-3xl border border-token-subtle shadow-2xl relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-secondary-token hover:text-primary-token transition-colors rounded-full z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-surface-muted border-b border-token-subtle">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-token block mb-1">
              BUILDDEVA OFFICIAL INQUIRY PORTAL
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-primary-token">
              {activeType === 'client' && 'Konsultasi Proyek & Penawaran DED'}
              {activeType === 'partner' && 'Pengajuan Kemitraan & Vendor'}
              {activeType === 'talent' && 'Aplikasi Karir & Portofolio'}
            </h3>
            <p className="text-xs sm:text-sm text-secondary-token font-body mt-1">
              Tim engineering dan kemitraan BuildDeva akan memproses pesan Anda dalam 1x24 jam kerja.
            </p>

            {/* Type Switcher Tabs */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-token-subtle overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTypeOverride('client')}
                className={`px-3.5 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  activeType === 'client'
                    ? 'bg-primary-token text-white border-token-primary'
                    : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
                }`}
              >
                Client Consultation
              </button>
              <button
                type="button"
                onClick={() => setActiveTypeOverride('partner')}
                className={`px-3.5 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  activeType === 'partner'
                    ? 'bg-primary-token text-white border-token-primary'
                    : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
                }`}
              >
                Partnership / Vendor
              </button>
              <button
                type="button"
                onClick={() => setActiveTypeOverride('talent')}
                className={`px-3.5 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  activeType === 'talent'
                    ? 'bg-primary-token text-white border-token-primary'
                    : 'bg-surface text-primary-token border-token-subtle hover:bg-surface-muted'
                }`}
              >
                Career Application
              </button>
            </div>
          </div>

          {/* Modal Form Body */}
          <div className="p-6 sm:p-8 bg-base">
            {successMessage ? (
              <div className="bg-surface-muted p-8 text-center rounded-2xl border border-token-subtle">
                <CheckCircle className="w-12 h-12 text-brand-token mx-auto mb-4" />
                <h4 className="font-heading font-extrabold text-2xl text-primary-token mb-2">
                  Pesan Berhasil Terkirim
                </h4>
                <p className="text-sm text-secondary-token font-body mb-6 max-w-md mx-auto">
                  {successMessage}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-primary"
                >
                  Tutup Jendela
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg flex items-start gap-3 text-red-600 dark:text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ir. Hendra Kusuma"
                      className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hendra@perusahaan.com"
                      className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +62 812-3456-7890"
                      className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                      Nama Perusahaan / Organisasi (Opsional)
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. PT Logistik Mega Nusantara"
                      className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                    />
                  </div>
                </div>

                {activeType === 'client' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-surface-muted p-4 border border-token-subtle">
                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                        Jenis Proyek
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                      >
                        <option value="">Pilih Jenis Proyek</option>
                        <option value="Residential">Residential</option>
                        <option value="Warehouse & Industrial">Warehouse & Industrial</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                        Estimasi Anggaran
                      </label>
                      <input
                        type="text"
                        value={estimatedBudget}
                        onChange={(e) => setEstimatedBudget(e.target.value)}
                        placeholder="e.g. Rp 2 Milyar - 5 Milyar"
                        className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                      />
                    </div>

                    <div>
                      <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                        Lokasi Proyek
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. BSD City, Tangerang"
                        className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary-token mb-1">
                    Detail Pesan & Kebutuhan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan gambaran singkat rencana proyek, kebutuhan spesifikasi, atau pertanyaan Anda..."
                    className="w-full bg-surface border border-token-subtle p-3 text-xs text-primary-token focus:outline-hidden focus:border-token-primary font-body"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    id="modal-submit-inquiry-btn"
                    className="btn-primary w-full py-4 text-xs font-extrabold uppercase tracking-widest disabled:opacity-50"
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
                  <p className="text-[10px] text-secondary-token text-center mt-2 font-body">
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
