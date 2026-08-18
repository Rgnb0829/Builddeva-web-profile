'use client';

import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Navigation, ShieldCheck, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { companyProfile } from '@/lib/db';

interface ServiceZone {
  id: string;
  name: string;
  category: string;
  lat: number;
  lng: number;
  radiusMeters: number;
  coverage: string;
  leadTime: string;
  description: string;
  color: string;
}

const serviceZones: ServiceZone[] = [
  {
    id: 'hq',
    name: 'BuildDeva Headquarters & Studio',
    category: 'Kantor Pusat & Studio Desain',
    lat: -6.2250,
    lng: 106.8080,
    radiusMeters: 4000,
    coverage: 'DKI Jakarta & Sekitarnya',
    leadTime: 'Survei Langsung 24 Jam',
    description: 'Kantor pusat administrasi, studio arsitektur, dan representasi konsultasi klien.',
    color: '#66735A',
  },
  {
    id: 'cikarang',
    name: 'Cikarang & GIIC Delta Silicon Hub',
    category: 'Zona Industri & Pergudangan Timur',
    lat: -6.3300,
    lng: 107.1500,
    radiusMeters: 9000,
    coverage: 'Cikarang, Cibatu, Deltamas',
    leadTime: 'Tim Lapangan Standby 24/7',
    description: 'Pusat konstruksi pabrik logistik bentang lebar, warehouse modern, dan instalasi crane girder.',
    color: '#344335',
  },
  {
    id: 'karawang',
    name: 'Karawang KIIC & Suryacipta Corridor',
    category: 'Zona Manufaktur & Otomotif',
    lat: -6.3550,
    lng: 107.2850,
    radiusMeters: 11000,
    coverage: 'KIIC, Suryacipta, Telukjambe',
    leadTime: 'Kapasitas Batching Plant Rekanan',
    description: 'Spesialisasi lantai beton heavy-duty (K-400), struktur portal baja WF, dan insulasi termal pabrik.',
    color: '#D8B65A',
  },
  {
    id: 'tangerang',
    name: 'Tangerang Industrial & Balaraja Zone',
    category: 'Zona Distribusi & Pergudangan Barat',
    lat: -6.2100,
    lng: 106.5800,
    radiusMeters: 8000,
    coverage: 'Balaraja, Cikupa, Pasar Kemis',
    leadTime: 'Akses Tol Merak-Jakarta',
    description: 'Layanan cepat pembangunan pusat distribusi logistik, ruko komersial, dan workshop manufaktur ringan.',
    color: '#66735A',
  },
  {
    id: 'cilegon',
    name: 'Cilegon Maritime & Heavy Steel Hub',
    category: 'Zona Industri Berat & Fabrikasi Baja',
    lat: -6.0150,
    lng: 106.0400,
    radiusMeters: 10000,
    coverage: 'Krakatau Industrial Estate, Ciwandan',
    leadTime: 'Akses Pelabuhan & Raw Steel',
    description: 'Penyediaan struktur baja profil berat, proteksi anti-korosi maritim, dan fasilitas petrokimia.',
    color: '#1E211F',
  },
];

export default function ContactMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selectedZone, setSelectedZone] = useState<ServiceZone>(serviceZones[0]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const circlesRef = useRef<any[]>([]);

  useEffect(() => {
    let isSubscribed = true;

    async function initLeaflet() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      try {
        // Dynamically import leaflet to prevent SSR issues
        const L = (await import('leaflet')).default;

        // Fix leaflet marker icon path
        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `
            <div style="
              background-color: #66735A;
              color: white;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid white;
              box-shadow: 0 4px 10px rgba(0,0,0,0.3);
              font-family: sans-serif;
              font-weight: bold;
              font-size: 14px;
            ">
              BD
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        // Initialize map centered at Jakarta
        const map = L.map(mapContainerRef.current, {
          center: [-6.2400, 106.8500],
          zoom: 10,
          scrollWheelZoom: false,
        });

        // Add CartoDB Positron / OSM tiles with clean architectural look
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;

        // Add Markers and Service Zone Circles
        serviceZones.forEach((zone) => {
          const circle = L.circle([zone.lat, zone.lng], {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: zone.id === 'hq' ? 0.25 : 0.15,
            radius: zone.radiusMeters,
            weight: 2,
          }).addTo(map);

          circle.bindPopup(`
            <div style="font-family: sans-serif; padding: 4px;">
              <p style="font-size: 10px; font-weight: bold; color: #66735A; text-transform: uppercase; margin: 0 0 2px 0;">${zone.category}</p>
              <h4 style="font-size: 13px; font-weight: bold; margin: 0 0 4px 0; color: #1E211F;">${zone.name}</h4>
              <p style="font-size: 11px; margin: 0 0 4px 0; color: #555;">${zone.description}</p>
              <p style="font-size: 10px; font-weight: 600; color: #344335; margin: 0;">⚡ ${zone.leadTime}</p>
            </div>
          `);

          const marker = L.marker([zone.lat, zone.lng], {
            icon: L.divIcon({
              className: 'zone-marker',
              html: `
                <div style="
                  background-color: ${zone.id === 'hq' ? '#1E211F' : zone.color};
                  color: ${zone.id === 'karawang' ? '#1E211F' : '#FFFFFF'};
                  padding: 3px 8px;
                  font-size: 10px;
                  font-weight: 700;
                  border: 1px solid rgba(255,255,255,0.8);
                  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
                  white-space: nowrap;
                  cursor: pointer;
                ">
                  ${zone.id === 'hq' ? '★ HQ BUILDDEVA' : zone.name.split(' ')[0]}
                </div>
              `,
              iconAnchor: [30, 10],
            }),
          }).addTo(map);

          marker.on('click', () => {
            setSelectedZone(zone);
            map.flyTo([zone.lat, zone.lng], 11, { duration: 1.2 });
          });

          markersRef.current.push(marker);
          circlesRef.current.push(circle);
        });

        if (isSubscribed) {
          setIsMapLoaded(true);
        }
      } catch (err) {
        console.error('Leaflet initialization error:', err);
      }
    }

    initLeaflet();

    return () => {
      isSubscribed = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleSelectZone = (zone: ServiceZone) => {
    setSelectedZone(zone);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([zone.lat, zone.lng], 11, { duration: 1.2 });
    }
  };

  return (
    <div className="bg-white border border-[#E2DFD7] overflow-hidden shadow-xs">
      {/* Map Header */}
      <div className="p-6 border-b border-[#E2DFD7] bg-[#F7F6F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-brand-olive animate-ping inline-block"></span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-olive">
              GEOGRAPHIC MOBILIZATION NETWORK
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-xl text-charcoal">
            Kantor Pusat & Koridor Wilayah Layanan Industri
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-heading font-bold text-muted-charcoal">
          <Layers className="w-4 h-4 text-brand-olive" />
          <span>Jabodetabek & Koridor Industri Banten–Jawa Barat</span>
        </div>
      </div>

      {/* Map + Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Leaflet Interactive Map View */}
        <div className="lg:col-span-8 relative min-h-[420px] sm:min-h-[480px] bg-[#EFECE6]">
          <div ref={mapContainerRef} className="w-full h-full absolute inset-0 z-10" />
          
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#EFECE6] z-20">
              <div className="flex items-center gap-3 text-xs font-heading font-bold text-charcoal">
                <span className="animate-spin h-4 w-4 border-2 border-brand-olive border-t-transparent rounded-full"></span>
                <span>Memuat Peta Wilayah Layanan...</span>
              </div>
            </div>
          )}

          {/* Quick Map Legend Overlay */}
          <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-xs p-3 border border-[#E2DFD7] shadow-sm max-w-xs hidden sm:block">
            <p className="text-[10px] font-heading font-bold uppercase text-charcoal mb-1">Petunjuk Peta:</p>
            <div className="flex flex-col gap-1 text-[11px] font-body text-muted-charcoal">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-charcoal inline-block border border-white"></span>
                <span>Kantor Pusat & Studio Desain</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-brand-olive/50 inline-block border border-brand-olive"></span>
                <span>Radius Mobilisasi Cepat Lapangan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Zone Directory Panel */}
        <div className="lg:col-span-4 p-6 bg-[#F7F6F2] border-t lg:border-t-0 lg:border-l border-[#E2DFD7] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-olive block mb-2">
              PILIH ZONA LAYANAN
            </span>
            <h4 className="font-heading font-bold text-base text-charcoal mb-4">
              Cakupan Titik Distribusi & Fabrikasi
            </h4>

            <div className="flex flex-col gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              {serviceZones.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => handleSelectZone(zone)}
                    className={`p-3 text-left border transition-all cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-white border-brand-olive shadow-xs'
                        : 'bg-[#EFECE6] border-[#E2DFD7] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-olive">
                        {zone.category}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-olive" />
                      )}
                    </div>
                    <p className="font-heading font-bold text-xs text-charcoal">
                      {zone.name}
                    </p>
                    <p className="text-[11px] text-muted-charcoal font-body line-clamp-1">
                      {zone.coverage}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Zone Active Card */}
          <div className="mt-6 pt-4 border-t border-[#E2DFD7] bg-white p-4 border">
            <span className="text-[10px] font-heading font-bold uppercase text-brand-olive block">
              ZONA AKTIF: {selectedZone.name}
            </span>
            <p className="text-xs text-charcoal font-body mt-1 leading-relaxed">
              {selectedZone.description}
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] font-heading font-bold text-charcoal bg-[#EFECE6] p-2">
              <span>Status Mobilisasi:</span>
              <span className="text-brand-olive">{selectedZone.leadTime}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
