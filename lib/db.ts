import {
  Project,
  Service,
  Testimonial,
  Career,
  PartnershipCategory,
  CompanyProfile,
  Inquiry,
  CostEstimatorInput,
  CostEstimatorResult
} from '@/types';

// Source of truth company profile matching PRD and image.png
export const companyProfile: CompanyProfile = {
  name: "BuildDeva",
  tagline: "Architectural Integrity in Construction",
  positioning: "Perusahaan konstruksi Indonesia berstandar tinggi yang berfungsi sebagai digital trust layer: memperkuat reputasi offline, menjelaskan kapabilitas, dan menunjukkan bukti proyek presisi.",
  description: "Kami percaya bahwa bangunan terbaik lahir dari landasan kepercayaan, kolaborasi yang transparan, dan dedikasi tanpa kompromi terhadap seni serta ketepatan teknis konstruksi.",
  address: "Graha BuildDeva, Jl. Jendral Sudirman No. 88, Karet Semanggi, Setiabudi",
  city: "Jakarta Selatan, DKI Jakarta 12930",
  phone: "+62 21 5558 9900",
  email: "hello@builddeva.com",
  workingHours: "Senin - Sabtu: 08:00 - 18:00 WIB",
  socialLinks: {
    instagram: "https://instagram.com/builddeva",
    linkedin: "https://linkedin.com/company/builddeva",
    whatsapp: "https://wa.me/6281188990011?text=Halo%20BuildDeva,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20konstruksi."
  },
  metrics: {
    yearsExperience: 15,
    projectsCompleted: 200,
    specializations: 4,
    clientSatisfaction: 100
  },
  values: [
    {
      title: "Trust Before Beauty",
      description: "Keandalan struktur dan kejujuran spesifikasi adalah fondasi utama sebelum keindahan arsitektural diwujudkan."
    },
    {
      title: "Clarity Over Decoration",
      description: "Transparansi biaya, linimasa, dan material mengurangi ketidakpastian serta membangun hubungan jangka panjang."
    },
    {
      title: "Architectural Precision",
      description: "Toleransi pengerjaan yang presisi didukung oleh kontrol kualitas berlapis pada setiap tahap konstruksi."
    },
    {
      title: "Safety & Accountability",
      description: "Standar Keselamatan Kerja (K3) tanpa kompromi untuk melindungi tenaga kerja dan aset investasi Anda."
    }
  ],
  team: [
    {
      name: "Ir. Hendra Wijaya, M.T.",
      role: "Chief Executive Officer & Principal Structural Engineer",
      bio: "18+ tahun memimpin proyek konstruksi komersial dan gedung bertingkat tinggi di Indonesia dengan sertifikasi IPM.",
      image: "https://picsum.photos/seed/hendra/600/700"
    },
    {
      name: "Siti Rahmania, S.T., IAI",
      role: "Head of Architectural Design & Project Integration",
      bio: "Arsitek senior berdedikasi pada keselarasan desain kontemporer, keandalan fungsi, dan efisiensi material.",
      image: "https://picsum.photos/seed/siti/600/700"
    },
    {
      name: "Budi Santoso, S.T.",
      role: "Director of Field Operations & QA/QC",
      bio: "Spesialis manajemen proyek lapangan dan kontrol kualitas konstruksi industri bertaraf internasional.",
      image: "https://picsum.photos/seed/budi/600/700"
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "the-apex-tower",
    title: "The Apex Tower",
    category: "Commercial",
    year: 2023,
    location: "Sudirman CBD, Jakarta",
    clientName: "PT Apex Multi Development",
    heroImage: "https://picsum.photos/seed/apextower/1200/800",
    gallery: [
      "https://picsum.photos/seed/apex1/1000/667",
      "https://picsum.photos/seed/apex2/1000/667",
      "https://picsum.photos/seed/apex3/1000/667"
    ],
    areaSize: "18,500 sqm",
    duration: "22 Bulan",
    completionDate: "Oktober 2023",
    overview: "Pembangunan gedung perkantoran modern 18 lantai berkonsep green-building dengan fasad double-glazed facade dan sistem integrasi energi cerdas.",
    challenge: "Area tapak yang terbatas di pusat perkantoran padat Jakarta menuntut manajemen logistik harian yang presisi tanpa mengganggu lalu lintas sekitar.",
    approach: "Menggunakan metodologi Lean Construction, pengerjaan struktur beton pracetak presisi tinggi, dan koordinasi BIM 3D harian.",
    result: "Proyek diselesaikan 3 minggu lebih awal dari jadwal resmi dengan Zero Lost Time Injury (LTI) dan menghemat 8% konsumsi energi.",
    isFeatured: true,
    testimonial: {
      quote: "BuildDeva menunjukkan disiplin luar biasa dalam mengeksekusi struktur kompleks Apex Tower. Komunikasi mereka sangat transparan.",
      author: "Eko Prasetyo",
      title: "Project Director",
      company: "PT Apex Multi Development"
    },
    metrics: [
      { label: "Luas Area", value: "18.500 m²" },
      { label: "Waktu Pengerjaan", value: "22 Bulan" },
      { label: "Keselamatan Kerja", value: "0 LTI Accidents" },
      { label: "Sertifikasi Green", value: "Gold Level" }
    ]
  },
  {
    id: "proj-2",
    slug: "lumina-residence",
    title: "Lumina Residence",
    category: "Residential",
    year: 2024,
    location: "Pondok Indah, Jakarta Selatan",
    clientName: "Private Homeowner",
    heroImage: "https://picsum.photos/seed/lumina/1200/800",
    gallery: [
      "https://picsum.photos/seed/lumina1/1000/667",
      "https://picsum.photos/seed/lumina2/1000/667"
    ],
    areaSize: "1,200 sqm",
    duration: "14 Bulan",
    completionDate: "Maret 2024",
    overview: "Hunian privat tropis kontemporer 3 lantai dengan lanskap kolam renang menyatu, pencahayaan alami maksimal, dan spesifikasi interior batu alam impor.",
    challenge: "Memadukan cantilever beton gantung sepanjang 6 meter tanpa tiang penyangga tengah untuk menciptakan keterbukaan visual yang bersih.",
    approach: "Rekayasa struktur beton bertulang dengan paska-tarik (post-tensioning) serta pengawasan perataan permukaan hingga toleransi sub-milimeter.",
    result: "Hunian berdiri dengan keanggunan arsitektural tanpa defleksi struktur, memberikan privasi akustik dan termal terbaik.",
    isFeatured: true,
    testimonial: {
      quote: "Setiap sudut rumah ini dikerjakan dengan presisi pengrajin kelas atas. BuildDeva memenuhi janji mereka dari blueprint hingga serah terima kunci.",
      author: "Dra. Sylvia Hermawan",
      title: "Pemilik Hunian"
    },
    metrics: [
      { label: "Luas Bangunan", value: "1.200 m²" },
      { label: "Jumlah Lantai", value: "3 + Basement" },
      { label: "Toleransi Presisi", value: "< 2mm" }
    ]
  },
  {
    id: "proj-3",
    slug: "samarinda-logistics-hub",
    title: "Samarinda Logistics Hub & Warehouse",
    category: "Warehouse & Industrial",
    year: 2023,
    location: "Samarinda, Kalimantan Timur",
    clientName: "PT Nusantara Logistics Corp",
    heroImage: "https://picsum.photos/seed/samarindawarehouse/1200/800",
    gallery: [
      "https://picsum.photos/seed/wh1/1000/667",
      "https://picsum.photos/seed/wh2/1000/667"
    ],
    areaSize: "24,000 sqm",
    duration: "11 Bulan",
    completionDate: "Desember 2023",
    overview: "Pusat distribusi logistik skala besar dengan lantai beton super-flat kelas lapang terbang, struktur baja span lebar, dan sistem otomatisasi loading dock.",
    challenge: "Kondisi tanah rawa lokal berdaya dukung rendah requiring stabilitas tanah canggih dan beban dinamis alat berat.",
    approach: "Pemasangan pancang kedalaman 36m, lantai burnished super-flat kelas FM2, dan struktur atap baja bentang 48 meter tanpa kolom tengah.",
    result: "Fasilitas logistik siap beroperasi dengan efisiensi tinggi, memfasilitasi pergerakan kendaraan berat tanpa keretakan lantai.",
    isFeatured: true,
    testimonial: {
      quote: "Kualitas lantai super-flat yang dikerjakan BuildDeva melampaui standar spesifikasi audit kami. Operasional forklift berjalan tanpa goyangan.",
      author: "Rudi Hartono",
      title: "VP Supply Chain",
      company: "PT Nusantara Logistics"
    },
    metrics: [
      { label: "Kapasitas Area", value: "24.000 m²" },
      { label: "Standar Flatness", value: "FM2 High Tolerance" },
      { label: "Bentang Tanpa Kolom", value: "48 Meter" }
    ]
  },
  {
    id: "proj-4",
    slug: "menara-mandiri-refurbishment",
    title: "Menara Mandiri HQ Renovation",
    category: "Renovation",
    year: 2024,
    location: "Gatot Subroto, Jakarta",
    clientName: "Mandiri Group",
    heroImage: "https://picsum.photos/seed/mandirireno/1200/800",
    gallery: [
      "https://picsum.photos/seed/mren1/1000/667",
      "https://picsum.photos/seed/mren2/1000/667"
    ],
    areaSize: "8,200 sqm",
    duration: "8 Bulan",
    completionDate: "Mei 2024",
    overview: "Modernisasi total lobi utama, auditorium, dan 4 lantai kantor eksekutif tanpa menghentikan operasional gedung harian.",
    challenge: "Pengerjaan konstruksi bernuansa suara tinggi hanya boleh dilakukan di luar jam kerja efektif gedung dengan isolasi debu ketat.",
    approach: "Sistem konstruksi modul prefabricated malam hari, penghalang kedap suara bertingkat, dan pengalihan aliran HVAC sementara.",
    result: "Interior kantor berubah menjadi lingkungan kerja modern bergaya arsitektural tanpa gangguan pada aktivitas perbankan harian.",
    isFeatured: false,
    testimonial: {
      quote: "Renovasi berlangsung cepat, bersih, dan mematuhi aturan keamanan ketat korporasi kami.",
      author: "Andi Saputra",
      title: "General Manager Facilities",
      company: "Mandiri Group"
    },
    metrics: [
      { label: "Area Renovasi", value: "8.200 m²" },
      { label: "Night Shift Work", value: "100% On-Schedule" }
    ]
  },
  {
    id: "proj-5",
    slug: "bali-cliffside-eco-resort",
    title: "Uluwatu Cliffside Sanctuary",
    category: "Residential",
    year: 2023,
    location: "Uluwatu, Bali",
    clientName: "PT Bali Haven Estates",
    heroImage: "https://picsum.photos/seed/balicliff/1200/800",
    gallery: [
      "https://picsum.photos/seed/bali1/1000/667",
      "https://picsum.photos/seed/bali2/1000/667"
    ],
    areaSize: "3,500 sqm",
    duration: "16 Bulan",
    completionDate: "Agustus 2023",
    overview: "Resort privat 8 villa mewah di tebing Uluwatu memanfaatkan kayu jati terdaur ulang, batu paras lokal, dan kolam renang infinity gantung.",
    challenge: "Medan tebing curam dan iklim pesisir korosif yang menuntut teknik perkuatan lereng dan material tahan garam laut.",
    approach: "Jaringan angkur tebing bertulang galvanis, material kayu terolah anti-karat, dan desain pasif pencahayaan alami.",
    result: "Sanctuary tebing eksklusif yang menyatu harmonis dengan kontur alam tanpa merusak ekosistem sekitar.",
    isFeatured: false,
    metrics: [
      { label: "Luas Tapak", value: "3.500 m²" },
      { label: "Jumlah Villa", value: "8 Units" }
    ]
  },
  {
    id: "proj-6",
    slug: "grand-horizon-retail-park",
    title: "Grand Horizon Lifestyle Center",
    category: "Commercial",
    year: 2024,
    location: "BSD City, Tangerang",
    clientName: "Horizon Commercial Properties",
    heroImage: "https://picsum.photos/seed/grandhorizon/1200/800",
    gallery: [
      "https://picsum.photos/seed/gh1/1000/667"
    ],
    areaSize: "14,000 sqm",
    duration: "15 Bulan",
    completionDate: "Juni 2024",
    overview: "Pusat gaya hidup terbuka dengan lanskap pedestrian luas, atrium seluas 2.000m², dan kanopi struktur baja arsitektural geometris.",
    challenge: "Pemasangan struktur kanopi baja lengkung raksasa di atas ruang publik tanpa penyangga lantai.",
    approach: "Pengangkatan crane ganda secara sinkron dan simulasi tegangan beban angin real-time.",
    result: "Lifestyle center yang kini menjadi landmark destinasi favorit masyarakat BSD dan sekitarnya.",
    isFeatured: false,
    metrics: [
      { label: "Kapasitas Tenant", value: "45 Outlets" },
      { label: "Luas Total", value: "14.000 m²" }
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "serv-1",
    slug: "residential",
    title: "Residential Construction",
    subtitle: "Bespoke private residences & architectural luxury homes",
    category: "Residential",
    description: "Layanan pembangunan rumah tinggal eksklusif, villa, dan hunian privat dengan standar arsitektural tertinggi. Kami menerjemahkan desain impian menjadi bangunan kokoh, nyaman, dan bernilai investasi tinggi.",
    heroImage: "https://picsum.photos/seed/servresidential/1200/800",
    scopeOfWork: [
      "Perencanaan Teknis & Analisis Struktur (DED)",
      "Pekerjaan Pondasi & Struktur Beton Bertulang / Post-Tension",
      "Pekerjaan Arsitektural, Dinding, & Fasad Presisi",
      "Sistem Mekanikal, Elektrikal, & Plumbing (MEP) Terintegrasi",
      "Finish Interior Batu Alam, Kayu, & Kaca Kualitas Premium",
      "Pekerjaan Lanskap, Kolam Renang, & Pagar Area"
    ],
    approach: "Kami mengedepankan pendekatan kolaboratif bersama klien dan arsitek. Pengawasan harian oleh engineer bersertifikat memastikan setiap toleransi milimeter dan detail material sesuai blueprint.",
    capabilities: [
      { title: "Mewah & Presisi", description: "Toleransi perataan lantai dan dinding sub-milimeter untuk finishing batu dan kayu impor." },
      { title: "Insulasi Akustik & Termal", description: "Penggunaan material dinding dan kaca khusus untuk kenyamanan ruangan maksimal." },
      { title: "Jaminan Garansi Struktur", description: "Masa pemeliharaan intensif dan garansi ketahanan struktur hingga 10 tahun." }
    ],
    faqs: [
      {
        question: "Berapa lama estimasi pembangunan rumah tinggal 2-3 lantai?",
        answer: "Rata-rata durasi fisik pembangunan hunian seluas 500-1.200 m² berkisar antara 10 hingga 16 bulan, tergantung pada kompleksitas spesifikasi material dan kondisi lahan."
      },
      {
        question: "Apakah BuildDeva menerima pembangunan dari gambar rancangan arsitek eksternal?",
        answer: "Ya, kami sering bekerja sama dengan arsitek independen atau konsultan desain klien. Kami melakukan evaluasi teknis (constructability review) sebelum memulai pengerjaan."
      }
    ],
    relevantProjectIds: ["proj-2", "proj-5"]
  },
  {
    id: "serv-2",
    slug: "industrial",
    title: "Warehouse & Industrial Facilities",
    subtitle: "High-capacity distribution centers, factories & specialized plants",
    category: "Warehouse & Industrial",
    description: "Konstruksi gudang modern, pabrik manufaktur, dan pusat distribusi logistik dengan efisiensi tata ruang, daya tahan lantai beban berat, dan ketepatan linimasa pengerjaan.",
    heroImage: "https://picsum.photos/seed/servindustrial/1200/800",
    scopeOfWork: [
      "Penyelidikan Tanah (Soil Test) & Perbaikan Tanah Lahan Luas",
      "Pemasangan Lantai Super-Flat / Burnished Concrete FM1 & FM2",
      "Ereksi Struktur Baja Bentang Lebar (Wide Span Steel Trusses)",
      "Sistem Atap Insulasi Termal & Pencahayaan Alami Sky-Light",
      "Sistem Pemadam Kebakaran Sprinkler & Hydrant Otomatis",
      "Area Loading Dock, Ramp, & Infrastruktur Jalan Beban Berat"
    ],
    approach: "Mengutamakan keselamatan operasional dan kecepatan konstruksi melalui pemanfaatan struktur baja modular serta pengerjaan lantai beton berpresisi tinggi.",
    capabilities: [
      { title: "Super-Flat Flooring", description: "Lantai beton kelas FM1/FM2 tanpa sambungan kasar untuk pergerakan VNA Forklift aman." },
      { title: "Bentang Bebas Kolom", description: "Konstruksi atap bentang lebar hingga 50m untuk optimalisasi kapasitas penyimpanan gudang." },
      { title: "Kepatuhan K3 & Lingkungan", description: "Penerapan standar keselamatan kerja ketat serta pengelolaan limbah konstruksi." }
    ],
    faqs: [
      {
        question: "Apakah lantai gudang BuildDeva cocok untuk spesifikasi forklift otomatis (AGV/VNA)?",
        answer: "Sangat cocok. Kami menggunakan alat screed laser berteknologi tinggi dan pengujian tingkat kerataan FM2/FM1 sesuai standar ASTM/TR34."
      }
    ],
    relevantProjectIds: ["proj-3"]
  },
  {
    id: "serv-3",
    slug: "commercial",
    title: "Commercial Buildings & Real Estate",
    subtitle: "Modern corporate offices, retail spaces & mixed-use complexes",
    category: "Commercial",
    description: "Pembangunan gedung perkantoran, pusat perbelanjaan, showroom, dan fasilitas publik yang memadukan estetika merek, efisiensi energi, dan keamanan pengoperasian jangka panjang.",
    heroImage: "https://picsum.photos/seed/servcommercial/1200/800",
    scopeOfWork: [
      "Pekerjaan Pondasi Dalam (Bored Pile / Diaphragm Wall)",
      "Struktur Gedung Bertingkat Beton Bertulang & Baja Komposit",
      "Fasad Unitized Curtain Wall & Aluminium Composite Panel",
      "Instalasi HVAC Sentral, Lift/Escalator, & Building Management System",
      "Interior Fit-Out & Sertifikasi Green Building (GBCI/LEED)",
      "Pekerjaan Infrastruktur Parkir & Utilitas Kawasan"
    ],
    approach: "Manajemen proyek terintegrasi menggunakan BIM 3D untuk mencegah benturan (clash detection) antar sistem saluran utamanya sebelum pemasangan fisik.",
    capabilities: [
      { title: "BIM Clash Detection", description: "Digital mockup 3D lengkap untuk mengeliminasi kesalahan pengerjaan pipa & kabel di lapangan." },
      { title: "Efisiensi Energi", description: "Penerapan fasad dan sistem pendingin hemat energi untuk biaya operasional gedung rendah." }
    ],
    faqs: [
      {
        question: "Apakah BuildDeva dapat membantu pengurusan sertifikasi Green Building?",
        answer: "Ya, tim engineering kami dapat mendampingi proses optimasi rancangan agar memenuhi kriteria Green Building Council Indonesia (GBCI)."
      }
    ],
    relevantProjectIds: ["proj-1", "proj-6"]
  },
  {
    id: "serv-4",
    slug: "renovation",
    title: "Renovation & Structural Improvement",
    subtitle: "Meticulous restoration, adaptive reuse & building modernization",
    category: "Renovation",
    description: "Layanan perbaikan struktur, renovasi total interior/eksterior, serta retrofit gedung tua untuk meningkatkan keandalan bangunan dan nilai estetika properti Anda.",
    heroImage: "https://picsum.photos/seed/servrenovation/1200/800",
    scopeOfWork: [
      "Audit Keandalan Struktur (Structural Audit & Non-Destructive Test)",
      "Perkuatan Struktur Beton/Baja (Carbon Fiber Wrapping / Steel Jacketing)",
      "Renovasi Total Fasad & Modernisasi Elemen Eksterior",
      "Peremajaan Total Sistem Listrik, Pipa, & Tata Udara",
      "Penataan Ulang Layout Ruangan (Adaptive Reuse)",
      "Penanganan Kebocoran & Water-Proofing Garansi Tingkat Tinggi"
    ],
    approach: "Pengerjaan renovasi terencana yang meminimalkan kebisingan dan debu, memungkinkan bagian bangunan lain tetap beroperasi dengan aman.",
    capabilities: [
      { title: "Perkuatan CFRP", description: "Teknologi serat karbon modern untuk menambah kapasitas beban tanpa memperbesar ukuran kolom." },
      { title: "Pengerjaan Clean Shift", description: "Prosedur kedap debu dan jadwal fleksibel untuk menjaga kenyamanan penghuni sekitar." }
    ],
    faqs: [
      {
        question: "Apakah gedung yang sedang beroperasi bisa direnovasi tanpa tutup total?",
        answer: "Bisa. Kami berpengalaman menerapkan strategi penahapan (phasing work) dan pengerjaan malam hari sehingga aktivitas bisnis Anda tetap berjalan."
      }
    ],
    relevantProjectIds: ["proj-4"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Ir. Eko Prasetyo",
    role: "Project Director",
    company: "PT Apex Multi Development",
    projectTitle: "The Apex Tower",
    category: "Commercial",
    avatarUrl: "https://picsum.photos/seed/testeko/200/200",
    rating: 5,
    quote: "BuildDeva menunjukkan disiplin luar biasa dalam mengeksekusi struktur kompleks Apex Tower. Laporan mingguan transparan, kontrol mutu ketat, dan serah terima 3 minggu lebih awal dari jadwal resmi.",
    date: "November 2023"
  },
  {
    id: "test-2",
    clientName: "Dra. Sylvia Hermawan",
    role: "Property Owner",
    company: "Pondok Indah Private Residence",
    projectTitle: "Lumina Residence",
    category: "Residential",
    avatarUrl: "https://picsum.photos/seed/testsylvia/200/200",
    rating: 5,
    quote: "Membangun rumah impian bersama BuildDeva sangat menenangkan. Tim mereka mendengarkan setiap detail, jujur mengenai estimasi material, dan hasil pengerjaannya sungguh halus bagaikan mahakarya.",
    date: "April 2024"
  },
  {
    id: "test-3",
    clientName: "Rudi Hartono",
    role: "VP Supply Chain Operations",
    company: "PT Nusantara Logistics Corp",
    projectTitle: "Samarinda Logistics Hub",
    category: "Warehouse & Industrial",
    avatarUrl: "https://picsum.photos/seed/testrudi/200/200",
    rating: 5,
    quote: "Spesifikasi lantai super-flat FM2 yang dijanjikan terbukti presisi di lapangan. Armada forklift otomatis kami beroperasi tanpa kendala sejak hari pertama pengoperasian gudang.",
    date: "Januari 2024"
  }
];

export const careersData: Career[] = [
  {
    id: "car-1",
    slug: "senior-project-engineer",
    title: "Senior Project Engineer (Structural)",
    department: "Engineering",
    location: "Jakarta HQ / Site Assigned",
    type: "Full-time",
    experienceLevel: "5+ Tahun Pengalaman",
    summary: "Memimpin analisis struktur lapangan, koordinasi pengerjaan kontraktor utama, serta memastikan standar mutu konstruksi beton dan baja bertingkat tinggi.",
    responsibilities: [
      "Mengawasi eksekusi pengerjaan struktur sesuai rancangan DED dan regulasi SNI.",
      "Melakukan rekayasa lapangan (site engineering) dan memverifikasi perhitungan beban cadangan.",
      "Memimpin rapat koordinasi mingguan bersama konsultan pengawas dan arsitek.",
      "Memastikan pengujian material (beton, baja, pancang) dilaksanakan sesuai prosedur laboratorium."
    ],
    requirements: [
      "S1 Teknik Sipil dari universitas terkemuka.",
      "Minimal 5 tahun pengalaman pada proyek konstruksi gedung bertingkat atau gudang industri.",
      "Memiliki Sertifikat Keahlian (SKA) / SKK Konstruksi Ahli Muda/Madya.",
      "Fasih membaca gambar kerja AutoCad, Tekla, dan BIM Revit."
    ],
    isOpen: true,
    postedDate: "10 Agustus 2026"
  },
  {
    id: "car-2",
    slug: "qa-qc-site-inspector",
    title: "QA/QC Site Inspector",
    department: "Operations",
    location: "Jabodetabek Proyek",
    type: "Full-time",
    experienceLevel: "3+ Tahun Pengalaman",
    summary: "Verifikator standar mutu independen di lapangan, memastikan seluruh detail material dan toleransi dimensi memenuhi indikator kinerja BuildDeva.",
    responsibilities: [
      "Melakukan inspeksi harian terhadap kualitas pengerjaan bekisting, pembesian, dan pengecoran.",
      "Mencatat dan menindaklanjuti temuan ketidaksesuaian (Non-Conformance Report).",
      "Menyusun berita acara serah terima pengerjaan antar sub-kontraktor."
    ],
    requirements: [
      "S1 / D3 Teknik Sipil atau Arsitektur.",
      "Pengalaman 3 tahun di posisi QA/QC konstruksi.",
      "Sangat teliti, berintegritas tinggi, dan tegas mengawal kriteria mutu."
    ],
    isOpen: true,
    postedDate: "12 Agustus 2026"
  },
  {
    id: "car-3",
    slug: "site-safety-manager-k3",
    title: "Site Safety Manager (Ahli K3 Konstruksi)",
    department: "Safety",
    location: "Proyek Luar Jawa / Kalimantan",
    type: "Contract",
    experienceLevel: "4+ Tahun Pengalaman",
    summary: "Penanggung jawab keselamatan kerja lingkungan proyek, menjamin komitmen Zero Accident dan perlindungan penuh seluruh tenaga kerja lapangan.",
    responsibilities: [
      "Menyusun dan mengawasi Rencana K3L (Kesehatan, Keselamatan Kerja, dan Lingkungan) proyek.",
      "Penyelenggaraan Safety Induction, Toolbox Talk harian, serta analisis risiko kerja (JSA).",
      "Audit berkala kelengkapan APD dan kesiapan alat berat lokasi pengerjaan."
    ],
    requirements: [
      "Sertifikat Ahli K3 Konstruksi Umum / Muda dari Kemnaker RI.",
      "Pengalaman memimpin HSE pada proyek industri atau gedung minimal 4 tahun.",
      "Memahami manajemen darurat dan pertolongan pertama."
    ],
    isOpen: true,
    postedDate: "15 Agustus 2026"
  }
];

export const partnershipsData: PartnershipCategory[] = [
  {
    id: "part-1",
    title: "Suppliers & Material Vendors",
    targetGroup: "Suppliers/Vendors",
    description: "Kami membuka kemitraan jangka panjang dengan produsen beton, baja, semen, keramik, fasad kaca, dan material bangunan berkualitas tinggi di seluruh Indonesia.",
    criteria: [
      "Material memiliki sertifikasi SNI / ISO resmi",
      "Jaminan ketersediaan stok & linimasa pengiriman tepat waktu",
      "Transparansi spesifikasi teknis dan garansi pabrikan"
    ],
    benefits: [
      "Pembayaran terkontrol & kepastian jadwal sesuai kontrak",
      "Peluang alokasi pasokan pada portofolio proyek nasional BuildDeva",
      "Akses platform vendor terintegrasi"
    ]
  },
  {
    id: "part-2",
    title: "Architects & Design Consultants",
    targetGroup: "Architects/Consultants",
    description: "Sinergi antara visi estetika arsitektural hebat dan kepiawaian eksekusi teknik konstruksi presisi tinggi tanpa memotong ide awal.",
    criteria: [
      "Studio arsitektur terdaftar / berizin IAI",
      "Komitmen pada constructability dan efisiensi material",
      "Komunikasi terbuka pada tahap pemodelan awal"
    ],
    benefits: [
      "Eksplorasi material canggih dengan dukungan teknis engineer kami",
      "Realisasi proyek sesuai presisi visual awal tanpa kompromi",
      "Rujukan bersama bagi klien premium"
    ]
  },
  {
    id: "part-3",
    title: "Property & Industrial Developers",
    targetGroup: "Business Partners",
    description: "Kemitraan strategis bersama pengembang kawasan, pemilik lahan komersial, dan grup bisnis untuk merealisasikan kawasan bernilai tinggi.",
    criteria: [
      "Pengembang properti terpercaya berizin resmi",
      "Visi pembangunan berkelanjutan dan bertanggung jawab"
    ],
    benefits: [
      "Estimasi biaya konstruksi akurat dan terprediksi",
      "Pengurangan risiko ketidakpastian proyek melalui transparansi proses",
      "Kemitraan konstruksi andalan"
    ]
  },
  {
    id: "part-4",
    title: "Specialized Construction Contractors",
    targetGroup: "Construction Professionals",
    description: "Kolaborasi bersama kontraktor spesialis pondasi dalam, paku bumi, MEP, waterproofing, serta spesialis fasad.",
    criteria: [
      "Rekam jejak spesialisasi yang terverifikasi",
      "Penerapan standar Keselamatan K3 ketat di lapangan"
    ],
    benefits: [
      "Kemitraan sub-kontraktor berulang",
      "Ekosistem kerja profesional bertaraf tinggi"
    ]
  }
];

// Persistent in-memory storage for submitted inquiries (Rest API v1 integration)
export const initialInquiries: Inquiry[] = [
  {
    id: "inq-101",
    type: "client",
    fullName: "Hendra Setiawan",
    email: "hendra.setiawan@gmail.com",
    phone: "081234567890",
    companyName: "PT Sentrosa Land",
    projectType: "Commercial Building",
    estimatedBudget: "Rp 15M - 30M",
    location: "Gading Serpong, Tangerang",
    message: "Kami berencana membangun perkantoran 5 lantai seluas 3.500 m². Ingin berkonsultasi mengenai linimasa dan RAB estimasi.",
    createdAt: "2026-08-16T10:00:00Z",
    status: "in_review"
  }
];

// Global runtime store array for inquiries
let runtimeInquiries: Inquiry[] = [...initialInquiries];

export function getInquiries(): Inquiry[] {
  return runtimeInquiries;
}

export function createInquiry(data: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry {
  const newInquiry: Inquiry = {
    ...data,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'new'
  };
  runtimeInquiries = [newInquiry, ...runtimeInquiries];
  return newInquiry;
}

// ROI / Construction Cost Estimator Logic
export function calculateConstructionEstimate(input: CostEstimatorInput): CostEstimatorResult {
  const { projectType, areaSqm, qualityGrade, locationZone } = input;

  // Base price per sqm (in IDR)
  let basePricePerSqm = 6000000; // Default Residential Standard 6M IDR/sqm
  let baseMonthsPer1000Sqm = 6;

  switch (projectType) {
    case 'Residential':
      basePricePerSqm = 6500000;
      baseMonthsPer1000Sqm = 7;
      break;
    case 'Warehouse & Industrial':
      basePricePerSqm = 4200000;
      baseMonthsPer1000Sqm = 4;
      break;
    case 'Commercial':
      basePricePerSqm = 8000000;
      baseMonthsPer1000Sqm = 8;
      break;
    case 'Renovation':
      basePricePerSqm = 3500000;
      baseMonthsPer1000Sqm = 5;
      break;
  }

  // Quality Grade Multiplier
  let qualityMultiplier = 1.0;
  if (qualityGrade === 'Premium') qualityMultiplier = 1.35;
  if (qualityGrade === 'Luxury Architectural') qualityMultiplier = 1.85;

  // Location Zone Multiplier
  let locationMultiplier = 1.0; // Jabodetabek
  if (locationZone === 'Java Outer') locationMultiplier = 1.1;
  if (locationZone === 'Outside Java') locationMultiplier = 1.25;

  const calculatedUnitPrice = basePricePerSqm * qualityMultiplier * locationMultiplier;
  const totalCostEstimate = calculatedUnitPrice * areaSqm;

  const minCost = Math.round(totalCostEstimate * 0.92);
  const maxCost = Math.round(totalCostEstimate * 1.12);

  // Duration calculation
  const durationMonths = Math.max(
    4,
    Math.round((areaSqm / 1000) * baseMonthsPer1000Sqm * (qualityGrade === 'Luxury Architectural' ? 1.3 : 1.0))
  );

  return {
    estimatedCostMin: minCost,
    estimatedCostMax: maxCost,
    currency: "IDR",
    estimatedDurationMonths: durationMonths,
    recommendedConsultationSteps: [
      "Peninjauan Lahan & Pengujian Daya Dukung Tanah (Soil Test)",
      "Penyusunan Rencana Anggaran Biaya (RAB) Definitif & DED",
      "Penyesuaian Spesifikasi Material & Lisensi IMB/PBG",
      "Diskusi Kontrak & Garansi Pemeliharaan"
    ],
    disclaimer: "Estimasi ini merupakan gambaran indikatif awal berdasarkan standar pengerjaan BuildDeva. Angka final dipastikan setelah survei lokasi dan penyusunan Detail Engineering Design (DED)."
  };
}
