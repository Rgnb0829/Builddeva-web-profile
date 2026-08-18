import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] flex flex-col items-center justify-center p-8 text-center">
      <h1 className="font-heading font-extrabold text-6xl text-charcoal mb-4">404</h1>
      <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-sm text-muted-charcoal font-body max-w-md mb-8">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </p>
      <Link
        href="/"
        className="bg-charcoal text-white hover:bg-brand-olive font-heading text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors"
      >
        KEMBALI KE BERANDA
      </Link>
    </div>
  );
}
