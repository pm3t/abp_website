/**
 * PT. Anugerah Bakti Prima — Indonesia SaaS Marketplace (multi-vendor)
 * SPA: Etalase → Detail Produk → Keranjang → Checkout → Invoice
 */

/* ==========================================
 * KONFIGURASI
 * ========================================== */
const CONFIG = {
  companyName: 'PT. Anugerah Bakti Prima',
  email: 'anugerahbaktiprima@gmail.com',
  phoneDisplay: '0815-8488-9915',
  phoneWA: '6281584889915',
  address: 'Villa Gunung Lestari Jl. Rinjani II Blok F2 No. 5 Jombang Ciputat Tangerang Selatan 15414',
  // Form dikirim ke email via FormSubmit (tanpa backend). Submit pertama memerlukan aktivasi dari inbox email tujuan.
  formEndpoint: 'https://formsubmit.co/ajax/anugerahbaktiprima@gmail.com',
  // GANTI dengan rekening resmi perusahaan sebelum go-live
  bankAccounts: [
    { bank: 'BCA', number: '6090260021', holder: 'Bayu Nurcahyono' },
    { bank: 'Jago', number: '105692105503', holder: 'Bayu Nurcahyono' },
    { bank: 'BRI', number: '140001000726504', holder: 'Bayu Nurcahyono' }
  ],
  adminPasscodes: ['abp2026']
};

/* ==========================================
 * URL LIVE DEMO MASING-MASING PRODUK
 * Isi URL lengkap (mis. 'https://kios.abpcloud.my.id').
 * Jika diisi, tombol "Live Demo" otomatis muncul di Etalase, Detail Produk & Pricelist.
 * ========================================== */
const DEMO_URLS = {
  govply: '',
  rekan: '',
  cultiva: '',
  digisale: '',
  servio: '',
  ledgery: 'https://ledgery.abpcloud.my.id',
  qrgen: 'https://qrgen.abpcloud.my.id',
  eklesia: 'https://eklesia-webadmin.abpcloud.my.id',
  akadex: '',
  rtnet: '',
  bengkelio: 'https://bengkel.abpcloud.my.id',
  kiosio: 'https://kios.abpcloud.my.id'
};

/* ==========================================
 * VENDOR (Marketplace multi-vendor)
 * Tambahkan vendor pihak ketiga di sini, lalu set `vendor` pada produk.
 * ========================================== */
const VENDORS = {
  abp: {
    id: 'abp',
    name: 'ABP Official Labs',
    company: 'PT. Anugerah Bakti Prima',
    verified: true,
    official: true,
    desc: 'Tim pengembang utama PT. Anugerah Bakti Prima untuk solusi enterprise, pemerintahan, pendidikan, agrobisnis, komunitas, dan UMKM.'
  }
};

const CATEGORIES = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'gov', label: 'Pemerintahan & Institusi' },
  { id: 'edu', label: 'Pendidikan' },
  { id: 'community', label: 'Komunitas & Keagamaan' },
  { id: 'enterprise', label: 'Enterprise, HR & Keuangan' },
  { id: 'agro', label: 'Agrobisnis' },
  { id: 'retail', label: 'Retail & UMKM' },
  { id: 'service', label: 'Jasa Lapangan' },
  { id: 'utility', label: 'Utilitas Gratis' }
];

/* ==========================================
 * KATALOG PRODUK (harga sesuai Pricelist.xlsx)
 * ========================================== */
const PRODUCTS = [
  {
    id: 'govply', name: 'GovPly', vendor: 'abp', category: 'gov', color: '#0D9488',
    tagline: 'Tata Naskah Dinas & Persuratan', sector: 'Instansi Pemerintah & Swasta',
    onboarding: 7500000, monthly: 3500000, unit: 'Instansi', unitLabel: 'Per Instansi/Bulan',
    thumb: 0, rating: 4.9,
    desc: 'Disposisi surat digital lewat ponsel pimpinan, pelacakan surat real-time, dan arsip digital yang dapat dicari dalam hitungan detik.',
    highlights: ['Disposisi via HP pimpinan', 'Tracking surat real-time', 'Arsip digital & audit log'],
    problems: [
      'Surat fisik tertumpuk di meja pimpinan, terselip, atau terlambat didisposisi saat dinas luar.',
      'Staf sulit melacak posisi surat: di meja siapa dan sudah berapa lama tertahan.',
      'Pemborosan kertas, cetak berulang, dan biaya kurir antar gedung.'
    ],
    solutions: [
      'Disposisi digital yang bisa diproses pimpinan dari smartphone di mana saja.',
      'Timeline alur surat lengkap dengan waktu penanganan per bidang.',
      'Arsip digital terenkripsi dengan pencarian berdasarkan nomor, perihal, atau pengirim.'
    ],
    features: [
      { title: 'Disposisi Cepat via Smartphone', desc: 'Pimpinan meninjau surat & memberi instruksi disposisi langsung dari HP.' },
      { title: 'Agenda Surat Masuk Otomatis', desc: 'Nomor agenda otomatis tanpa risiko ganda, scan surat fisik via kamera.' },
      { title: 'Surat Keluar Berjenjang', desc: 'Draft → penelaahan atasan → finalisasi & penomoran resmi.' },
      { title: 'Hak Akses & Audit Trail', desc: 'Akses sesuai jabatan dan jejak digital setiap tindakan.' }
    ]
  },
  {
    id: 'rekan', name: 'Rekan', vendor: 'abp', category: 'enterprise', color: '#2E8BC9',
    tagline: 'Manajemen SDM, Penggajian & Absensi', sector: 'SDM & Payroll Perusahaan',
    onboarding: 7500000, monthly: 1500000, unit: 'Perusahaan', unitLabel: 'Per PT/Bulan',
    thumb: 0, rating: 4.8,
    desc: 'Hitung gaji, PPh 21 TER, dan BPJS otomatis; absensi GPS geofencing; pengajuan cuti & lembur mandiri.',
    highlights: ['Payroll PPh 21 TER & BPJS', 'Absensi GPS + verifikasi wajah', 'Self-service cuti & lembur'],
    problems: [
      'Hitung gaji, lembur, dan potongan BPJS/pajak di Excel memakan 3–5 hari dan rawan salah.',
      'Perubahan regulasi TER PPh 21 membingungkan tim HR.',
      'Absensi mudah dititipkan dan birokrasi cuti berbasis kertas.'
    ],
    solutions: [
      'Payroll engine otomatis yang menghasilkan slip gaji & rekap pajak.',
      'Absensi selfie GPS geofencing dengan deteksi lokasi palsu.',
      'Employee & Manager Self-Service untuk cuti, lembur, dan approval berjenjang.'
    ],
    features: [
      { title: 'Kalkulasi PPh 21 TER & BPJS', desc: 'Perhitungan pajak & jaminan sosial sesuai aturan terbaru.' },
      { title: 'Absensi GPS Geofencing', desc: 'Clock-in hanya di radius lokasi kerja, lengkap dengan foto.' },
      { title: 'Cuti, Izin & Lembur Mandiri', desc: 'Saldo cuti tervalidasi otomatis, approval 1-klik.' },
      { title: 'HR Analytics', desc: 'Turnover, biaya SDM per departemen, dan tren kehadiran.' }
    ]
  },
  {
    id: 'cultiva', name: 'Cultiva', vendor: 'abp', category: 'agro', color: '#1BA37A',
    tagline: 'Budidaya & Penjualan', sector: 'Perkebunan & Agrobisnis',
    onboarding: 25000000, monthly: 12500000, unit: 'Perusahaan', unitLabel: 'Per PT/Bulan',
    thumb: 0, rating: 4.8,
    desc: 'Kendalikan COGS per blok kebun, pantau lahan dengan sensor IoT, dan kelola rantai penjualan hingga ke buyer.',
    highlights: ['Kontrol COGS per blok', 'Monitoring IoT lahan', 'Traceability & sales order'],
    problems: [
      'Biaya pupuk, obat, dan tenaga harian tidak sinkron dengan hasil panen sehingga COGS bocor.',
      'Monitoring kelembapan tanah masih mengandalkan patroli manual.',
      'Estimasi panen meleset dari komitmen buyer.'
    ],
    solutions: [
      'Pengendalian HPP per blok lahan, termasuk saprotan & tenaga kerja.',
      'Integrasi sensor IoT & ambang batas alert untuk deteksi dini.',
      'Batch traceability, CRM buyer, sales order, dan invoice dalam satu sistem.'
    ],
    features: [
      { title: 'Pengendalian COGS per Blok', desc: 'Rencana vs realisasi biaya per komoditas dan area.' },
      { title: 'Monitoring IoT & Telemetri', desc: 'Sensor kelembapan, curah hujan, dan log alert.' },
      { title: 'Aktivitas Budidaya & Mandor', desc: 'Laporan lapangan via HP lengkap dengan foto bukti.' },
      { title: 'Kemitraan Plasma & Penjualan', desc: 'Bagi hasil transparan, sales pipeline, dan invoice.' }
    ]
  },
  {
    id: 'digisale', name: 'DigiSale', vendor: 'abp', category: 'retail', color: '#D98B2B',
    tagline: 'POS Toko & Head Office', sector: 'Retail & Toko Multi-Cabang',
    onboarding: 7500000, monthly: 750000, unit: 'Toko', unitLabel: 'Per Toko/Bulan',
    thumb: 0, rating: 4.7,
    desc: 'Kasir offline-first yang tetap jalan saat internet mati, kontrol kasbon pelanggan, konversi satuan grosir–eceran, dan dashboard head office.',
    highlights: ['Kasir tetap jalan tanpa internet', 'Kontrol kasbon & piutang', 'Multi-cabang dari head office'],
    problems: [
      'Catatan kasbon pelanggan di buku saku sering lupa ditagih.',
      'Kasir cloud biasa berhenti saat internet mati sehingga pembeli antre.',
      'Konversi satuan Dus→Pcs atau Sak→Kg membuat stok selisih.'
    ],
    solutions: [
      'Manajemen piutang dengan batas kredit dan pengingat jatuh tempo.',
      'Arsitektur offline-first yang otomatis sinkron saat online.',
      'Konversi satuan bertingkat dan monitoring stok semua cabang.'
    ],
    features: [
      { title: 'Arsitektur Offline-First', desc: 'Jualan tanpa koneksi, data tersinkron otomatis.' },
      { title: 'Kasbon & Piutang', desc: 'Limit kredit, histori bayar, dan pengingat jatuh tempo.' },
      { title: 'Konversi Satuan Bertingkat', desc: 'Jual per sak, kg, dus, atau pcs tanpa selisih stok.' },
      { title: 'Head Office Multi-Cabang', desc: 'Omzet, laba, dan stok semua toko dari satu dashboard.' }
    ]
  },
  {
    id: 'servio', name: 'Servio', vendor: 'abp', category: 'service', color: '#1F9E6D',
    tagline: 'Penjadwalan Teknisi Pest Control', sector: 'Jasa Kebersihan & Pest Control',
    onboarding: 7500000, monthly: 100000, unit: 'User', unitLabel: 'Per User/Bulan',
    thumb: 0, rating: 4.8, defaultQty: 5,
    desc: 'Penjadwalan teknisi bebas bentrok, monitoring target kunjungan kontrak, aplikasi lapangan offline, dan portal klien.',
    highlights: ['Jadwal teknisi bebas bentrok', 'Warning SLA kontrak', 'Foto bukti & TTD digital'],
    problems: [
      'Kunjungan rutin terlewat tanpa disadari sehingga klien komplain.',
      'Teknisi tidak membawa bukti foto & tanda tangan pelanggan yang sah.',
      'Sulit mengelola jadwal banyak cabang dan rute harian tim.'
    ],
    solutions: [
      'Monitoring pemenuhan kontrak dengan peringatan dini H-7.',
      'Aplikasi mobile teknisi: checklist, foto sebelum/sesudah, TTD digital, offline.',
      'Web admin multi-cabang dan invoice otomatis dari pekerjaan terverifikasi.'
    ],
    features: [
      { title: 'Kalender Dispatch', desc: 'Alokasi tim per zona dan pencegahan jadwal bentrok.' },
      { title: 'Kontrak & Target Layanan', desc: 'Kuota kunjungan per bulan dan masa berlaku kontrak.' },
      { title: 'Aplikasi Teknisi Offline', desc: 'Laporan, foto, geotagging, dan TTD klien.' },
      { title: 'Portal Klien & Invoicing', desc: 'Klien unduh berita acara; tagihan terbit otomatis.' }
    ]
  },
  {
    id: 'ledgery', name: 'Ledgery', vendor: 'abp', category: 'enterprise', color: '#0EA5E9',
    tagline: 'Jurnal s.d. Laporan Keuangan', sector: 'Akuntansi & Keuangan',
    onboarding: 2500000, monthly: 750000, unit: 'Perusahaan', unitLabel: 'Per PT/Bulan',
    thumb: 0, rating: 4.7,
    desc: 'Accounting engine multi-tenant: jurnal manual & via API, buku besar, neraca, laba rugi, arus kas, dan rekap pajak dasar.',
    highlights: ['Jurnal manual & via API', 'Neraca, Laba Rugi, Arus Kas', 'Auto-post atau approval'],
    problems: [
      'Transaksi dari aplikasi kasir, payroll, dan operasional tidak tersambung ke pembukuan.',
      'Laporan keuangan baru tersedia setelah rekap manual akhir bulan.',
      'Tidak ada kontrol review sebelum jurnal masuk buku besar.'
    ],
    solutions: [
      'API per tenant untuk menerima jurnal dari aplikasi mana pun, dengan nomor voucher otomatis.',
      'Laporan keuangan standar tersedia kapan saja.',
      'Kebijakan posting fleksibel: Auto-Post atau Approval Manual dengan audit trail.'
    ],
    features: [
      { title: 'Chart of Accounts per Tenant', desc: 'Aset, Liabilitas, Ekuitas, Pendapatan, Beban.' },
      { title: 'Jurnal & Buku Besar', desc: 'Validasi balance, jurnal penyesuaian & tutup buku.' },
      { title: 'Laporan Keuangan', desc: 'Neraca, Laba Rugi, Arus Kas, dan Neraca Saldo.' },
      { title: 'Integrasi API Ber-versi', desc: 'Satu tenant dapat menerima jurnal dari banyak aplikasi.' }
    ]
  },
  {
    id: 'qrgen', name: 'QRGen', vendor: 'abp', category: 'utility', color: '#10B981',
    tagline: 'QR Code Generator', sector: 'Utilitas Gratis',
    onboarding: 0, monthly: 0, unit: 'Akun', unitLabel: 'Gratis', free: true,
    thumb: 0, rating: 4.9,
    desc: 'Buat QR Code resolusi tinggi dari URL apa pun, unduh PNG, atau cetak langsung. Gratis tanpa batas.',
    highlights: ['100% gratis', 'Unduh PNG resolusi tinggi', 'Cetak langsung'],
    problems: [
      'Generator QR online sering berbayar, memasang watermark, atau penuh iklan.',
      'Hasil QR resolusi rendah sulit dipindai saat dicetak.'
    ],
    solutions: [
      'Generator QR gratis tanpa watermark dan tanpa batas kuota.',
      'Error correction level H dan ekspor PNG dengan margin rapi.'
    ],
    features: [
      { title: 'Instan & Client-Side', desc: 'QR langsung muncul saat Anda mengetik URL.' },
      { title: 'Unduh PNG', desc: 'Latar putih bersih, siap ditempel di desain.' },
      { title: 'Cetak Langsung', desc: 'Mode print untuk meja kasir, gudang, atau pengumuman.' },
      { title: 'Koreksi Kesalahan Tinggi', desc: 'Tetap terbaca meski dicetak kecil.' }
    ]
  },
  {
    id: 'eklesia', name: 'CMS Eklesia', vendor: 'abp', category: 'community', color: '#E8862B',
    tagline: 'Manajemen Gereja', sector: 'Keagamaan / Gereja',
    onboarding: 12000000, monthly: 1400000, unit: 'Gereja', unitLabel: 'Per Gereja/Bulan',
    thumb: 0, rating: 4.9,
    desc: 'Data jemaat & penggembalaan, keuangan persembahan multi-kantong, jadwal pelayan, presensi, komsel, dan aplikasi jemaat.',
    highlights: ['Keuangan persembahan transparan', 'Kartu jemaat & lawatan', 'Jadwal pelayan bebas bentrok'],
    problems: [
      'Pencatatan persembahan dan persepuluhan rawan selisih antara majelis dan pengurus.',
      'Data jemaat tercecer sehingga gembala sulit memantau jemaat yang butuh kunjungan.',
      'Jadwal pelayan ibadah sering bentrok atau lupa dikonfirmasi.'
    ],
    solutions: [
      'Keuangan multi-kategori dengan laporan kas otomatis untuk rapat majelis.',
      'Database penggembalaan dengan pengingat ulang tahun & deteksi absen beruntun.',
      'Penjadwalan pelayan dengan pengingat H-3 dan H-1.'
    ],
    features: [
      { title: 'Dashboard Pelayanan', desc: 'Statistik jemaat, kehadiran, dan persembahan.' },
      { title: 'Keuangan & Persembahan', desc: 'Persepuluhan, pembangunan, diakonia, QRIS/transfer.' },
      { title: 'Presensi & Komsel', desc: 'Presensi QR dan pelaporan kelompok sel.' },
      { title: 'Aplikasi Jemaat', desc: 'Renungan, warta, permohonan doa, kartu anggota digital.' }
    ]
  },
  {
    id: 'akadex', name: 'Akadex', vendor: 'abp', category: 'edu', color: '#6366F1',
    tagline: 'Sistem Akademik Perguruan Tinggi', sector: 'Perguruan Tinggi',
    onboarding: 18000000, monthly: 2750000, unit: 'Perguruan Tinggi', unitLabel: 'Per PT/Bulan',
    thumb: 0, rating: 4.8,
    desc: 'SIAKAD multi-tenant untuk kampus kecil–menengah: KRS, presensi, nilai & KHS, tagihan SPP, dan sinkronisasi Neo Feeder PDDIKTI.',
    highlights: ['KRS online & perwalian', 'Nilai, DPNA, EDOM & KHS', 'Sinkronisasi Neo Feeder PDDIKTI'],
    problems: [
      'SIAKAD enterprise terlalu mahal untuk sekolah tinggi kecil.',
      'Data akademik masih dikelola di Excel dan kertas.',
      'Pelaporan PDDIKTI memakan waktu karena data harus disiapkan ulang.'
    ],
    solutions: [
      'Langganan terjangkau dengan implementasi dalam hitungan hari.',
      'Siklus semester lengkap: tahun akademik, KRS, presensi, nilai, KHS.',
      'Validasi & sinkronisasi Neo Feeder langsung dari sistem.'
    ],
    features: [
      { title: 'Portal Multi-Peran', desc: 'Admin akademik, keuangan, dosen, mahasiswa, pimpinan.' },
      { title: 'KRS & Perwalian', desc: 'Validasi SKS, prasyarat, bentrok jadwal, approval Dosen PA.' },
      { title: 'Keuangan Mahasiswa', desc: 'Tagihan SPP massal, verifikasi kasir, kwitansi PDF.' },
      { title: 'Integrasi PDDIKTI', desc: 'Pre-validasi data dan push ke Neo Feeder.' }
    ]
  },
  {
    id: 'rtnet', name: 'RTnet', vendor: 'abp', category: 'community', color: '#C7973F',
    tagline: 'Aplikasi Pengurus & Warga RT', sector: 'Komunitas RT/RW',
    onboarding: 2500000, monthly: 150000, unit: 'RT', unitLabel: 'Per RT/Bulan',
    thumb: 0, rating: 4.8,
    desc: 'Iuran warga transparan, surat pengantar digital, dan data warga yang aman saat pergantian pengurus.',
    highlights: ['Iuran & kas transparan', 'Surat pengantar digital', 'Serah terima pengurus mudah'],
    problems: [
      'Buku iuran sering terselip, rawan salah hitung, dan menagih pintu ke pintu kurang nyaman.',
      'Warga butuh surat pengantar mendadak saat Pak RT tidak di rumah.',
      'Data warga dan catatan kas hilang saat pergantian pengurus.'
    ],
    solutions: [
      'Warga bayar iuran dari HP, bendahara verifikasi 1-klik, laporan kas terbuka.',
      'Surat pengantar diajukan online dan disetujui RT secara digital.',
      'Data KK & kas tersimpan di cloud dan pindah utuh ke pengurus baru.'
    ],
    features: [
      { title: 'Aplikasi Warga', desc: 'Tagihan, upload bukti transfer, ajukan surat.' },
      { title: 'Modul Bendahara', desc: 'Verifikasi pembayaran dan buku kas otomatis.' },
      { title: 'Modul Ketua RT', desc: 'Approval surat, data KK, dan manajemen pengurus.' },
      { title: 'Laporan Transparan', desc: 'Rekap kas siap dibagikan ke grup warga.' }
    ]
  },
  {
    id: 'bengkelio', name: 'BengkelIO', vendor: 'abp', category: 'retail', color: '#F97316',
    tagline: 'Aplikasi Bengkel Kecil', sector: 'Bengkel Motor & Mobil',
    onboarding: 1000000, monthly: 150000, unit: 'Bengkel', unitLabel: 'Per Bengkel/Bulan',
    thumb: 0, rating: 4.7,
    desc: 'Work order servis, kasir, stok sparepart, riwayat kendaraan per plat, dan cetak struk thermal dari HP.',
    highlights: ['Transaksi servis < 1 menit', 'Cetak struk thermal dari HP', 'Bisa dipakai offline'],
    problems: [
      'Nota tulis tangan membuat riwayat servis kendaraan tidak tercatat.',
      'Stok sparepart selisih atau habis tanpa disadari.',
      'Omzet dan laba sulit direkap.'
    ],
    solutions: [
      'Cari plat nomor untuk melihat riwayat servis dan KM terakhir.',
      'Stok sparepart terpotong otomatis dengan peringatan stok minimum.',
      'Dashboard omzet, laba kotor, piutang, dan kinerja mekanik.'
    ],
    features: [
      { title: 'Work Order Servis', desc: 'Status Antri → Dikerjakan → Selesai → Dibayar.' },
      { title: 'Kasir & Jual Cepat', desc: 'Tunai, transfer, QRIS statis, atau hutang.' },
      { title: 'Struk Thermal 58/80mm', desc: 'Bluetooth, cetak browser, atau bagikan PDF ke WhatsApp.' },
      { title: 'Offline & Sinkronisasi', desc: 'Tetap jalan saat sinyal jelek.' }
    ]
  },
  {
    id: 'kiosio', name: 'KiosIO', vendor: 'abp', category: 'retail', color: '#8B5CF6',
    tagline: 'Aplikasi Kios HP', sector: 'Kios & Konter Handphone',
    onboarding: 1500000, monthly: 350000, unit: 'Kios', unitLabel: 'Per Kios/Bulan',
    thumb: 0, rating: 4.8,
    desc: 'Jual HP & aksesoris, beli HP bekas/trade-in, tiket servis, stok per IMEI, serta pulsa & PPOB dalam satu aplikasi.',
    highlights: ['Stok HP per IMEI', 'Trade-in dengan checklist', 'Servis + pulsa & PPOB'],
    problems: [
      'Stok HP dicatat sebagai jumlah saja padahal tiap unit beda IMEI, kondisi, dan modal.',
      'Beli HP bekas berisiko: IMEI diblokir, barang curian, kondisi tidak sesuai.',
      'Status servis tidak jelas dan laba sulit dihitung.'
    ],
    solutions: [
      'Pelacakan unit per IMEI dengan harga modal dan status masing-masing.',
      'Wizard pembelian dengan checklist pemeriksaan dan cek duplikat IMEI.',
      'Tiket servis dengan QR tracking dan laporan laba per transaksi.'
    ],
    features: [
      { title: 'POS HP & Aksesoris', desc: 'Scan IMEI/barcode, garansi toko tercetak di struk.' },
      { title: 'Beli dari Pelanggan', desc: 'Checklist unit, bukti pembelian, kas keluar otomatis.' },
      { title: 'Tiket Servis', desc: 'Status, sparepart, garansi servis, notifikasi pelanggan.' },
      { title: 'Pulsa, Data & PPOB', desc: 'Produk digital langsung dari layar kasir.' }
    ]
  }
];

const BILLING_PERIODS = [
  { months: 1, label: '1 Bulan' },
  { months: 3, label: '3 Bulan' },
  { months: 6, label: '6 Bulan' },
  { months: 12, label: '12 Bulan' }
];

let productsContent = {};
let leadsData = [];
let mpState = { search: '', category: 'all', vendor: 'all', sort: 'featured' };
let selectedPayment = 'transfer';

/* ==========================================
 * UTIL
 * ========================================== */
const rupiah = (n) => 'Rp ' + Math.round(n || 0).toLocaleString('id-ID');
const getProduct = (id) => PRODUCTS.find(p => p.id === id);
const getVendor = (p) => VENDORS[p.vendor] || { name: p.vendor, verified: false };
const getDemoUrl = (p) => (p && (DEMO_URLS[p.id] || p.demoUrl || '')).trim();

function escapeHtml(text) {
  if (text === undefined || text === null) return '';
  return String(text).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

const ASSET_VERSION = '20261026-3';

function productImages(p) {
  const imgs = (productsContent[p.id] && productsContent[p.id].images) || [];
  return imgs.map(src => src.includes('?') ? src : `${src}?v=${ASSET_VERSION}`);
}

function productThumb(p) {
  const imgs = productImages(p);
  return imgs[p.thumb] || imgs[0] || '';
}

function showToast(msg) {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'toast-item';
  t.innerHTML = `✓ ${escapeHtml(msg)}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ==========================================
 * INIT & ROUTER
 * ========================================== */
document.addEventListener('DOMContentLoaded', async () => {
  setupNavigation();
  await loadProductContentData();
  updateCartBadge();
  handleRouting();
  window.addEventListener('hashchange', handleRouting);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal(); closeDemoModal(); closeVendorModal(); closeCartDrawer();
  }
});

window.handleBackdropClick = function (event) {
  if (event.target.classList.contains('modal-backdrop')) {
    closeImageModal(); closeDemoModal(); closeVendorModal();
  }
};

async function loadProductContentData() {
  try {
    const res = await fetch(`assets/products_content.json?v=${ASSET_VERSION}`, { cache: 'no-store' });
    if (res.ok) productsContent = await res.json();
  } catch (err) {
    console.warn('products_content.json tidak dapat dimuat:', err);
  }
}

function setupNavigation() {
  const toggle = document.getElementById('mobile-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('#nav-links a').forEach(a => a.addEventListener('click', () => links && links.classList.remove('open')));

  // Sinkronkan topbar & footer di index.html dengan CONFIG agar cukup ubah 1 tempat di CONFIG
  const topbarRight = document.querySelector('.topbar-right');
  if (topbarRight) {
    topbarRight.innerHTML = `
      <a href="mailto:${CONFIG.email}">✉️ ${escapeHtml(CONFIG.email)}</a>
      <span class="sep">•</span>
      <a href="https://wa.me/${CONFIG.phoneWA}" target="_blank">📞 ${escapeHtml(CONFIG.phoneDisplay)}</a>
    `;
  }
  const footerContact = document.querySelector('.footer-contact-mini');
  if (footerContact) {
    footerContact.innerHTML = `
      <div>📍 ${escapeHtml(CONFIG.address)}</div>
      <div>✉️ <a href="mailto:${CONFIG.email}">${escapeHtml(CONFIG.email)}</a></div>
      <div>📞 <a href="https://wa.me/${CONFIG.phoneWA}" target="_blank">${escapeHtml(CONFIG.phoneDisplay)}</a></div>
    `;
  }
}

function handleRouting() {
  const hash = window.location.hash || '#home';
  const view = document.getElementById('app-view');
  const route = hash.replace('#', '').split('/')[0] || 'home';

  document.querySelectorAll('.nav-item').forEach(i => i.classList.toggle('active', i.dataset.route === route));

  if (hash.startsWith('#produk/')) renderProductPage(view, hash.replace('#produk/', ''));
  else if (hash.startsWith('#invoice/')) renderInvoicePage(view, decodeURIComponent(hash.replace('#invoice/', '')));
  else if (route === 'pricelist') renderPricelistPage(view);
  else if (route === 'vendor') renderVendorPage(view);
  else if (route === 'kontak') renderContactPage(view);
  else if (route === 'checkout') renderCheckoutPage(view);
  else if (route === 'admin') renderAdminPage(view);
  else renderHomePage(view);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================
 * CART (localStorage)
 * ========================================== */
function getCart() {
  try { return JSON.parse(localStorage.getItem('abp_cart') || '[]'); } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('abp_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function lineTotals(item) {
  const p = getProduct(item.id);
  if (!p) return { onboarding: 0, subscription: 0, total: 0 };
  const onboarding = item.onboarding ? p.onboarding : 0;
  const subscription = p.monthly * item.qty * item.months;
  return { onboarding, subscription, total: onboarding + subscription };
}

function cartTotals(cart = getCart()) {
  return cart.reduce((acc, item) => {
    const t = lineTotals(item);
    acc.onboarding += t.onboarding;
    acc.subscription += t.subscription;
    acc.total += t.total;
    return acc;
  }, { onboarding: 0, subscription: 0, total: 0 });
}

window.addToCart = function (id, opts = {}) {
  const p = getProduct(id);
  if (!p) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  const qty = Math.max(1, parseInt(opts.qty || p.defaultQty || 1, 10));
  const months = parseInt(opts.months || 1, 10);
  const onboarding = opts.onboarding !== undefined ? !!opts.onboarding : !p.free;

  if (existing) {
    Object.assign(existing, { qty, months, onboarding });
  } else {
    cart.push({ id, qty, months, onboarding });
  }
  saveCart(cart);
  showToast(`${p.name} ditambahkan ke keranjang`);
  if (opts.openDrawer !== false) openCartDrawer();
};

window.buyNow = function (id, opts = {}) {
  addToCart(id, { ...opts, openDrawer: false });
  window.location.hash = '#checkout';
};

window.removeFromCart = function (id) {
  saveCart(getCart().filter(i => i.id !== id));
  if (location.hash === '#checkout') renderCheckoutPage(document.getElementById('app-view'));
};

window.updateCartItem = function (id, field, value) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (field === 'qty') item.qty = Math.max(1, parseInt(value, 10) || 1);
  if (field === 'months') item.months = parseInt(value, 10) || 1;
  if (field === 'onboarding') item.onboarding = !!value;
  saveCart(cart);
  if (location.hash === '#checkout') renderCheckoutSummary();
};

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (badge) badge.textContent = getCart().length;
}

window.openCartDrawer = function () {
  renderCartDrawer();
  document.getElementById('cart-drawer-backdrop').classList.add('open');
};
window.closeCartDrawer = function () {
  const el = document.getElementById('cart-drawer-backdrop');
  if (el) el.classList.remove('open');
};
window.toggleCartDrawer = function () {
  const el = document.getElementById('cart-drawer-backdrop');
  el.classList.contains('open') ? closeCartDrawer() : openCartDrawer();
};
window.handleCartBackdropClick = function (e) {
  if (e.target.id === 'cart-drawer-backdrop') closeCartDrawer();
};

function cartItemControlsHTML(item, compact = false) {
  const p = getProduct(item.id);
  const t = lineTotals(item);
  if (p.free) {
    return `<div style="font-size:13px; color:var(--emerald-dark); font-weight:700;">Produk gratis — aktivasi akun tanpa biaya</div>`;
  }
  return `
    <div class="field-row" style="gap:10px; margin-top:6px;">
      <div class="field">
        <label>Jumlah ${escapeHtml(p.unit)}</label>
        <input type="number" min="1" value="${item.qty}" onchange="updateCartItem('${p.id}','qty',this.value)">
      </div>
      <div class="field">
        <label>Periode Bayar</label>
        <select onchange="updateCartItem('${p.id}','months',this.value)">
          ${BILLING_PERIODS.map(b => `<option value="${b.months}" ${b.months === item.months ? 'selected' : ''}>${b.label}</option>`).join('')}
        </select>
      </div>
    </div>
    <label style="display:flex; gap:8px; align-items:center; font-size:12.5px; margin-top:10px; cursor:pointer;">
      <input type="checkbox" ${item.onboarding ? 'checked' : ''} onchange="updateCartItem('${p.id}','onboarding',this.checked)" style="accent-color:var(--primary);">
      Onboarding & Migrasi Data (sekali bayar) — ${rupiah(p.onboarding)}
    </label>
    <div style="display:flex; justify-content:space-between; margin-top:10px; font-size:13px;">
      <span style="color:var(--ink-muted);">${rupiah(p.monthly)} × ${item.qty} ${escapeHtml(p.unit)} × ${item.months} bln</span>
      <strong class="mono">${rupiah(t.total)}</strong>
    </div>`;
}

function renderCartDrawer() {
  const body = document.getElementById('cart-drawer-items');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body || !footer) return;
  const cart = getCart();

  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding:60px 10px; color:var(--ink-muted);">
        <div style="font-size:42px; margin-bottom:10px;">🛒</div>
        <strong style="color:var(--ink);">Keranjang masih kosong</strong>
        <p style="font-size:13.5px;">Jelajahi etalase dan pilih aplikasi SaaS yang Anda butuhkan.</p>
        <a href="#home" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Lihat Etalase</a>
      </div>`;
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
      <div class="cart-item-card">
        <div class="cart-item-top">
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="dd-dot" style="background:${p.color};"></span>
              <strong>${escapeHtml(p.name)}</strong>
            </div>
            <small style="color:var(--ink-light);">${escapeHtml(p.tagline)} · ${escapeHtml(getVendor(p).name)}</small>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${p.id}')">Hapus</button>
        </div>
        ${cartItemControlsHTML(item)}
      </div>`;
  }).join('');

  const t = cartTotals(cart);
  footer.innerHTML = `
    <div class="buy-breakdown" style="background:#fff; border:1px solid var(--line);">
      <div class="buy-breakdown-row"><span>Onboarding & Migrasi</span><span class="mono">${rupiah(t.onboarding)}</span></div>
      <div class="buy-breakdown-row"><span>Langganan Cloud</span><span class="mono">${rupiah(t.subscription)}</span></div>
      <div class="buy-breakdown-total"><span>Total</span><span class="mono">${rupiah(t.total)}</span></div>
    </div>
    <a href="#checkout" class="btn btn-primary full-width" onclick="closeCartDrawer()">Lanjut ke Checkout →</a>`;
}

/* ==========================================
 * 1. ETALASE (HOME)
 * ========================================== */
function renderHomePage(container) {
  const paidCount = PRODUCTS.filter(p => !p.free).length;
  const minMonthly = Math.min(...PRODUCTS.filter(p => !p.free).map(p => p.monthly));
  const vendorCount = Object.keys(VENDORS).length;

  container.innerHTML = `
    <section class="mp-hero">
      <div class="wrap mp-hero-grid">
        <div>
          <div class="mp-eyebrow">● Marketplace SaaS Multi-Vendor Indonesia</div>
          <h1>Temukan aplikasi <span>siap pakai</span> untuk instansi, kampus & bisnis Anda.</h1>
          <p class="lede">Bandingkan fitur, lihat tampilan aplikasi, pilih jumlah lisensi, lalu checkout. Langganan cloud sudah termasuk maintenance, tanpa beli server.</p>
          <div class="mp-hero-badges">
            <span class="mp-trust-pill">☁️ Cloud + maintenance</span>
            <span class="mp-trust-pill">🧾 Invoice resmi</span>
            <span class="mp-trust-pill">🛠️ Onboarding & migrasi data</span>
            <span class="mp-trust-pill">✅ Vendor terverifikasi</span>
          </div>
        </div>
        <div class="mp-hero-card">
          <div class="mp-hero-card-stats">
            <div class="mp-stat-box"><b>${PRODUCTS.length}</b><span>Produk di etalase</span></div>
            <div class="mp-stat-box"><b>${vendorCount}</b><span>Vendor terverifikasi</span></div>
            <div class="mp-stat-box"><b>${rupiah(minMonthly).replace('Rp ', 'Rp')}</b><span>Langganan mulai /bulan</span></div>
            <div class="mp-stat-box"><b>${paidCount} + 1</b><span>Berbayar + gratis</span></div>
          </div>
          <div class="vendor-callout-Mini">
            <span>Punya produk SaaS? Jual di marketplace ini.</span>
            <a href="#vendor" class="btn btn-xs btn-primary">Jadi Vendor</a>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap mp-toolbar-wrap">
      <div class="mp-toolbar">
        <div class="mp-search-row">
          <div class="search-input-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="search" id="mp-search" placeholder="Cari aplikasi, mis. payroll, kasir, gereja, PDDIKTI..." value="${escapeHtml(mpState.search)}" oninput="onMpSearch(this.value)">
          </div>
          <select class="mp-select" onchange="onMpVendor(this.value)">
            <option value="all">Semua Vendor</option>
            ${Object.values(VENDORS).map(v => `<option value="${v.id}" ${mpState.vendor === v.id ? 'selected' : ''}>${escapeHtml(v.name)}</option>`).join('')}
          </select>
          <select class="mp-select" onchange="onMpSort(this.value)">
            <option value="featured" ${mpState.sort === 'featured' ? 'selected' : ''}>Urutkan: Unggulan</option>
            <option value="price-asc" ${mpState.sort === 'price-asc' ? 'selected' : ''}>Harga bulanan termurah</option>
            <option value="price-desc" ${mpState.sort === 'price-desc' ? 'selected' : ''}>Harga bulanan termahal</option>
            <option value="name" ${mpState.sort === 'name' ? 'selected' : ''}>Nama A–Z</option>
          </select>
        </div>
        <div class="mp-category-pills">
          ${CATEGORIES.map(c => `<button class="cat-pill ${mpState.category === c.id ? 'active' : ''}" onclick="onMpCategory('${c.id}')">${c.label}</button>`).join('')}
        </div>
      </div>
    </div>

    <section class="etalase-section">
      <div class="wrap">
        <div class="etalase-meta-bar">
          <span class="etalase-count" id="etalase-count"></span>
          <a href="#pricelist" class="btn btn-outline btn-sm">Bandingkan semua harga →</a>
        </div>
        <div class="product-grid" id="product-grid"></div>
      </div>
    </section>

    <section style="padding:0 0 80px;">
      <div class="wrap">
        <div class="content-panel" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px;">
          ${[
            ['1', 'Pilih Produk', 'Jelajahi etalase dan pelajari detail tiap aplikasi.'],
            ['2', 'Atur Paket', 'Tentukan jumlah lisensi, periode bayar, dan onboarding.'],
            ['3', 'Checkout', 'Isi data, pilih QRIS atau transfer, invoice terbit langsung.'],
            ['4', 'Aktivasi', 'Tim kami menghubungi Anda untuk onboarding & migrasi data.']
          ].map(s => `
            <div style="display:flex; gap:12px;">
              <div class="step-num-circle">${s[0]}</div>
              <div><strong>${s[1]}</strong><p style="margin:2px 0 0; font-size:13.5px; color:var(--ink-muted);">${s[2]}</p></div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;

  renderProductGrid();
}

function filteredProducts() {
  const q = mpState.search.trim().toLowerCase();
  let list = PRODUCTS.filter(p => {
    if (mpState.category !== 'all' && p.category !== mpState.category) return false;
    if (mpState.vendor !== 'all' && p.vendor !== mpState.vendor) return false;
    if (!q) return true;
    const hay = [p.name, p.tagline, p.sector, p.desc, ...p.highlights, ...p.features.map(f => f.title + ' ' + f.desc)].join(' ').toLowerCase();
    return hay.includes(q);
  });
  if (mpState.sort === 'price-asc') list = [...list].sort((a, b) => a.monthly - b.monthly);
  if (mpState.sort === 'price-desc') list = [...list].sort((a, b) => b.monthly - a.monthly);
  if (mpState.sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function productCardHTML(p) {
  const v = getVendor(p);
  const thumb = productThumb(p);
  const demoUrl = getDemoUrl(p);
  return `
    <article class="mp-card">
      <div class="mp-card-thumb" onclick="location.hash='#produk/${p.id}'">
        ${thumb ? `<img src="${thumb}" alt="Tampilan ${escapeHtml(p.name)}" loading="lazy">` : ''}
        <div class="mp-card-badges">
          <span class="sector-pill">${escapeHtml(p.sector)}</span>
          ${p.free ? '<span class="free-badge-pill">GRATIS</span>' : ''}
        </div>
      </div>
      <div class="mp-card-body">
        <div class="mp-vendor-row">
          <span class="vendor-tag">${v.verified ? '<span class="verified-check">✔</span>' : ''} ${escapeHtml(v.name)}</span>
          <span class="rating-tag">★ ${p.rating.toFixed(1)}</span>
        </div>
        <div class="mp-card-title"><a href="#produk/${p.id}">${escapeHtml(p.name)}</a><span class="dd-dot" style="background:${p.color}; width:11px; height:11px;"></span></div>
        <div class="mp-card-sub">${escapeHtml(p.tagline)}</div>
        <p class="mp-card-desc">${escapeHtml(p.desc)}</p>
        <ul class="mp-card-highlights">${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul>
        <div class="mp-card-pricing">
          ${p.free ? `
            <div class="price-main-row"><span class="price-amount" style="color:var(--emerald-dark);">Rp 0</span><span class="price-unit">Gratis selamanya</span></div>
          ` : `
            <div class="price-main-row"><span class="price-amount">${rupiah(p.monthly)}</span><span class="price-unit">${escapeHtml(p.unitLabel)}</span></div>
            <div class="price-onboarding-row"><span>Onboarding & migrasi (sekali)</span><strong class="mono">${rupiah(p.onboarding)}</strong></div>
          `}
        </div>
        <div class="mp-card-actions">
          <a href="#produk/${p.id}" class="btn btn-outline btn-sm">Detail</a>
          ${p.free
            ? `<button class="btn btn-emerald btn-sm" onclick="buyNow('${p.id}')">Dapatkan Gratis</button>`
            : `<button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">+ Keranjang</button>`}
        </div>
        ${demoUrl ? `<a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener" class="btn btn-emerald btn-xs full-width" style="margin-top:8px;">🚀 Coba Live Demo ↗</a>` : ''}
      </div>
    </article>`;
}

function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  const count = document.getElementById('etalase-count');
  if (!grid) return;
  const list = filteredProducts();
  if (count) count.textContent = `Menampilkan ${list.length} dari ${PRODUCTS.length} produk`;
  grid.innerHTML = list.length ? list.map(productCardHTML).join('') : `
    <div class="content-panel" style="grid-column:1/-1; text-align:center;">
      <h3>Produk tidak ditemukan</h3>
      <p style="color:var(--ink-muted);">Coba kata kunci lain atau <a href="#kontak" style="color:var(--primary); font-weight:700;">hubungi kami</a> untuk kebutuhan khusus.</p>
    </div>`;
}

window.onMpSearch = (v) => { mpState.search = v; renderProductGrid(); };
window.onMpSort = (v) => { mpState.sort = v; renderProductGrid(); };
window.onMpVendor = (v) => { mpState.vendor = v; renderProductGrid(); };
window.onMpCategory = (c) => {
  mpState.category = c;
  document.querySelectorAll('.cat-pill').forEach((el, i) => el.classList.toggle('active', CATEGORIES[i].id === c));
  renderProductGrid();
};

/* ==========================================
 * 2. DETAIL PRODUK
 * ========================================== */
function renderProductPage(container, id) {
  const p = getProduct(id);
  if (!p) {
    container.innerHTML = `<div class="wrap" style="padding:100px 0; text-align:center;"><h2>Produk tidak ditemukan</h2><a href="#home" class="btn btn-primary" style="margin-top:20px;">Kembali ke Etalase</a></div>`;
    return;
  }
  const v = getVendor(p);
  const demoUrl = getDemoUrl(p);
  const images = productImages(p);
  const pages = (productsContent[p.id] && productsContent[p.id].pages_text) || [];
  const heroImg = productThumb(p);
  const inCart = getCart().find(i => i.id === p.id);
  const qty = inCart ? inCart.qty : (p.defaultQty || 1);
  const months = inCart ? inCart.months : 1;
  const related = PRODUCTS.filter(x => x.id !== p.id && (x.category === p.category || x.vendor === p.vendor)).slice(0, 3);

  container.innerHTML = `
    <div class="pdp-breadcrumb"><div class="wrap"><a href="#home">Etalase</a> / ${escapeHtml(CATEGORIES.find(c => c.id === p.category).label)} / <strong style="color:var(--ink);">${escapeHtml(p.name)}</strong></div></div>
    <div class="wrap pdp-layout">
      <div class="pdp-main-col">
        <div class="pdp-header-card">
          <div class="pdp-top-meta">
            <span class="sector-pill" style="background:${p.color};">${escapeHtml(p.sector)}</span>
            <span class="vendor-tag">${v.verified ? '<span class="verified-check">✔</span>' : ''} <strong>${escapeHtml(v.name)}</strong></span>
            <span class="rating-tag">★ ${p.rating.toFixed(1)}</span>
          </div>
          <h1 style="font-size:clamp(28px,3.4vw,40px);">${escapeHtml(p.name)}</h1>
          <div style="font-size:17px; font-weight:700; color:var(--primary); margin:4px 0 10px;">${escapeHtml(p.tagline)}</div>
          <p style="color:var(--ink-muted); margin:0; font-size:15.5px;">${escapeHtml(p.desc)}</p>
          ${demoUrl ? `<div style="margin-top:14px;"><a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener" class="btn btn-emerald btn-sm">🚀 Buka Live Demo ${escapeHtml(p.name)} ↗</a></div>` : ''}
          ${heroImg ? `
            <div class="pdp-main-preview" onclick="openImageModal('${heroImg}', '${escapeHtml(p.name)}')">
              <img src="${heroImg}" alt="Tampilan ${escapeHtml(p.name)}">
              <div class="pdp-zoom-hint">🔍 Klik untuk memperbesar</div>
            </div>` : ''}
        </div>

        ${p.id === 'qrgen' ? qrgenToolHTML() : ''}

        <div class="content-panel">
          <h2>Masalah yang diselesaikan</h2>
          <div class="problem-solution-grid">
            <div class="ps-card problem"><h3>Kendala saat ini</h3><ul>${p.problems.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
            <div class="ps-card solution"><h3>Solusi ${escapeHtml(p.name)}</h3><ul>${p.solutions.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>
          </div>
        </div>

        <div class="content-panel">
          <h2>Fitur utama</h2>
          <div class="features-grid">${p.features.map(f => `<div class="feature-card"><h4>${escapeHtml(f.title)}</h4><p>${escapeHtml(f.desc)}</p></div>`).join('')}</div>
        </div>

        ${images.length ? `
        <div class="content-panel">
          <h2>Galeri tampilan (${images.length})</h2>
          <div class="deck-gallery-grid">
            ${images.map((img, i) => {
              const title = ((pages[i] || '').split('\n').find(l => l.trim()) || `Tampilan ${i + 1}`).replace(/^[^\w]+/, '').trim().substring(0, 60);
              return `<div class="deck-card" onclick="openImageModal('${img}', '${escapeHtml(p.name)} — ${escapeHtml(title).replace(/'/g, '')}')">
                <div class="deck-img-wrap"><img src="${img}" alt="${escapeHtml(p.name)} ${i + 1}" loading="lazy"></div>
                <div class="deck-card-info"><h4>${escapeHtml(title)}</h4><span>Klik untuk perbesar</span></div>
              </div>`;
            }).join('')}
          </div>
        </div>` : ''}

        <div class="content-panel">
          <h2>Tentang vendor</h2>
          <div style="display:flex; gap:14px; align-items:center;">
            <div class="mark-logo-box">${escapeHtml(v.name.substring(0, 3).toUpperCase())}</div>
            <div>
              <strong>${escapeHtml(v.name)}</strong> ${v.official ? '<span class="free-mini-pill" style="background:var(--primary-soft); color:var(--primary);">OFFICIAL</span>' : ''}
              <div style="font-size:13.5px; color:var(--ink-muted);">${escapeHtml(v.company || '')} — ${escapeHtml(v.desc || '')}</div>
            </div>
          </div>
          <p style="font-size:13px; color:var(--ink-light); margin:14px 0 0;">Transaksi, invoice, dan dukungan pembayaran untuk semua vendor dikelola oleh ${CONFIG.companyName} sebagai operator marketplace.</p>
        </div>

        ${related.length ? `
        <div>
          <h2 style="font-size:22px; margin-bottom:16px;">Produk terkait</h2>
          <div class="product-grid">${related.map(productCardHTML).join('')}</div>
        </div>` : ''}
      </div>

      <aside class="pdp-buy-box">
        <span class="buy-box-badge">${p.free ? '● Gratis' : '● Tersedia · Siap aktivasi'}</span>
        ${p.free ? `
          <div class="buy-box-price" style="color:var(--emerald-dark);">Rp 0</div>
          <div class="buy-box-unit">Gratis selamanya, tanpa watermark</div>
          <button class="btn btn-emerald full-width" onclick="document.getElementById('qrgen-tool').scrollIntoView({behavior:'smooth'})">Coba Sekarang</button>
          <button class="btn btn-outline full-width" style="margin-top:10px;" onclick="buyNow('qrgen')">Daftar Akun Gratis</button>
        ` : `
          <div class="buy-box-price">${rupiah(p.monthly)}</div>
          <div class="buy-box-unit">${escapeHtml(p.unitLabel)} · termasuk cloud & maintenance</div>

          <div class="config-group">
            <label>Jumlah ${escapeHtml(p.unit)}</label>
            <div class="qty-stepper">
              <button type="button" onclick="pdpStep(-1)">−</button>
              <input type="number" id="pdp-qty" min="1" value="${qty}" oninput="pdpRecalc()">
              <button type="button" onclick="pdpStep(1)">+</button>
            </div>
          </div>
          <div class="config-group">
            <label>Periode bayar di muka</label>
            <select class="mp-select" style="width:100%;" id="pdp-months" onchange="pdpRecalc()">
              ${BILLING_PERIODS.map(b => `<option value="${b.months}" ${b.months === months ? 'selected' : ''}>${b.label}</option>`).join('')}
            </select>
          </div>
          <label class="onboarding-check-card">
            <input type="checkbox" id="pdp-onboarding" ${inCart ? (inCart.onboarding ? 'checked' : '') : 'checked'} onchange="pdpRecalc()">
            <div>
              <strong style="font-size:13.5px;">Onboarding & Migrasi Data</strong>
              <div style="font-size:12.5px; color:var(--ink-muted);">Sekali bayar · <span class="mono">${rupiah(p.onboarding)}</span><br>Setup akun, pelatihan, impor data awal.</div>
            </div>
          </label>
          <div class="buy-breakdown" id="pdp-breakdown"></div>
          <button class="btn btn-primary full-width" onclick="pdpAdd(true)">Beli Sekarang →</button>
          <button class="btn btn-outline full-width" style="margin-top:10px;" onclick="pdpAdd(false)">+ Tambah ke Keranjang</button>
          ${demoUrl ? `<a href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener" class="btn btn-emerald full-width" style="margin-top:10px;">🚀 Coba Live Demo Aplikasi ↗</a>` : ''}
        `}
        <button class="btn btn-xs" style="margin-top:12px; width:100%; background:none; color:var(--primary);" onclick="openDemoModal('${p.name}')">Atau jadwalkan demo dengan tim kami</button>
        <div class="buy-box-guarantees">
          <span>☁️ Cloud hosting & maintenance termasuk</span>
          <span>💳 QRIS atau transfer bank</span>
          <span>📞 Dukungan via WhatsApp ${CONFIG.phoneDisplay}</span>
        </div>
      </aside>
    </div>`;

  window._pdpProduct = p;
  if (!p.free) pdpRecalc();
  if (p.id === 'qrgen') initQrgenTool();
}

window.pdpStep = function (d) {
  const el = document.getElementById('pdp-qty');
  el.value = Math.max(1, (parseInt(el.value, 10) || 1) + d);
  pdpRecalc();
};

window.pdpRecalc = function () {
  const p = window._pdpProduct;
  if (!p || p.free) return;
  const qty = Math.max(1, parseInt(document.getElementById('pdp-qty').value, 10) || 1);
  const months = parseInt(document.getElementById('pdp-months').value, 10);
  const ob = document.getElementById('pdp-onboarding').checked;
  const t = lineTotals({ id: p.id, qty, months, onboarding: ob });
  document.getElementById('pdp-breakdown').innerHTML = `
    <div class="buy-breakdown-row"><span>Langganan ${qty} ${escapeHtml(p.unit)} × ${months} bln</span><span class="mono">${rupiah(t.subscription)}</span></div>
    <div class="buy-breakdown-row"><span>Onboarding & migrasi</span><span class="mono">${rupiah(t.onboarding)}</span></div>
    <div class="buy-breakdown-total"><span>Total</span><span class="mono">${rupiah(t.total)}</span></div>`;
};

window.pdpAdd = function (goCheckout) {
  const p = window._pdpProduct;
  const opts = {
    qty: document.getElementById('pdp-qty').value,
    months: document.getElementById('pdp-months').value,
    onboarding: document.getElementById('pdp-onboarding').checked
  };
  goCheckout ? buyNow(p.id, opts) : addToCart(p.id, opts);
};

/* QRGen live tool (gratis) — memakai layanan gambar QR publik */
function qrgenToolHTML() {
  return `
    <div class="content-panel" id="qrgen-tool">
      <h2>Coba QRGen sekarang</h2>
      <div class="field"><label>URL atau teks</label><input type="text" id="qrgen-input" placeholder="https://contoh.id" value="https://anugerahbaktiprima.id"></div>
      <div style="display:flex; gap:24px; align-items:center; margin-top:16px; flex-wrap:wrap;">
        <div style="background:#fff; border:1px solid var(--line); border-radius:12px; padding:12px;"><img id="qrgen-img" alt="QR Code" width="200" height="200"></div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <a id="qrgen-download" class="btn btn-emerald btn-sm" download="qrcode.png" target="_blank">Unduh PNG</a>
          <button class="btn btn-outline btn-sm" onclick="printQrgen()">Cetak QR</button>
        </div>
      </div>
    </div>`;
}

function qrgenUrl(text, size = 400) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&ecc=H&margin=10&data=${encodeURIComponent(text || ' ')}`;
}

function initQrgenTool() {
  const input = document.getElementById('qrgen-input');
  const update = () => {
    const url = qrgenUrl(input.value);
    document.getElementById('qrgen-img').src = url;
    document.getElementById('qrgen-download').href = url;
  };
  input.addEventListener('input', update);
  update();
}

window.printQrgen = function () {
  const src = document.getElementById('qrgen-img').src;
  const w = window.open('', '_blank');
  if (!w) return;
  w.document.write(`<html><body style="display:flex;justify-content:center;align-items:center;height:100vh;margin:0;"><img src="${src}" onload="window.print()"></body></html>`);
  w.document.close();
};

/* ==========================================
 * 3. DAFTAR HARGA
 * ========================================== */
function renderPricelistPage(container) {
  container.innerHTML = `
    <section class="mp-hero" style="padding:44px 0 56px;">
      <div class="wrap">
        <div class="mp-eyebrow">● Harga transparan</div>
        <h1 style="font-size:clamp(28px,3.6vw,40px);">Daftar Harga Semua Produk</h1>
        <p class="lede" style="margin:0;">Onboarding & migrasi data dibayar sekali di awal. Langganan cloud dibayar bulanan dan sudah termasuk maintenance.</p>
      </div>
    </section>
    <section style="padding:36px 0 80px;">
      <div class="wrap">
        <div class="pricelist-table-wrap">
          <table class="pricelist-table">
            <thead><tr><th>Produk</th><th>Vendor</th><th>Deskripsi</th><th>Onboarding & Migrasi (sekali)</th><th>Langganan Cloud /bulan</th><th>Satuan</th><th></th></tr></thead>
            <tbody>
              ${PRODUCTS.map(p => `
                <tr>
                  <td><div style="display:flex; align-items:center; gap:8px;"><span class="dd-dot" style="background:${p.color};"></span><a href="#produk/${p.id}"><strong>${escapeHtml(p.name)}</strong></a></div></td>
                  <td style="font-size:13px; color:var(--ink-muted);">${escapeHtml(getVendor(p).name)}</td>
                  <td>${escapeHtml(p.tagline)}</td>
                  <td class="mono">${p.free ? '—' : rupiah(p.onboarding)}</td>
                  <td class="mono"><strong>${p.free ? 'GRATIS' : rupiah(p.monthly)}</strong></td>
                  <td style="font-size:13px;">${escapeHtml(p.unitLabel)}</td>
                  <td><div style="display:flex; gap:6px; align-items:center;">
                    ${getDemoUrl(p) ? `<a href="${escapeHtml(getDemoUrl(p))}" target="_blank" rel="noopener" class="btn btn-outline btn-xs">Demo ↗</a>` : ''}
                    ${p.free
                      ? `<a href="#produk/qrgen" class="btn btn-emerald btn-xs">Coba</a>`
                      : `<button class="btn btn-primary btn-xs" onclick="addToCart('${p.id}')">+ Keranjang</button>`}
                  </div></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <p style="font-size:13px; color:var(--ink-light); margin-top:14px;">Butuh penawaran untuk banyak cabang, instansi besar, atau paket bundling? <a href="#kontak" style="color:var(--primary); font-weight:700;">Hubungi kami</a>.</p>
      </div>
    </section>`;
}

/* ==========================================
 * 4. HALAMAN VENDOR
 * ========================================== */
function renderVendorPage(container) {
  container.innerHTML = `
    <section class="mp-hero" style="padding:52px 0 60px;">
      <div class="wrap mp-hero-grid">
        <div>
          <div class="mp-eyebrow">● Program Mitra Vendor</div>
          <h1>Jual produk SaaS Anda di <span>Marketplace ABP</span>.</h1>
          <p class="lede">Kami membuka etalase untuk vendor perangkat lunak lain. Anda fokus membangun produk, kami bantu pemasaran, penagihan, dan onboarding ke klien instansi, kampus, dan UMKM.</p>
          <button class="btn btn-primary" onclick="openVendorModal()">Daftarkan Produk Anda →</button>
        </div>
        <div class="mp-hero-card">
          <div class="mp-hero-card-stats">
            ${Object.values(VENDORS).map(v => `<div class="mp-stat-box" style="grid-column:1/-1;"><b style="font-size:16px;">${v.verified ? '✔ ' : ''}${escapeHtml(v.name)}</b><span>${PRODUCTS.filter(p => p.vendor === v.id).length} produk aktif · ${escapeHtml(v.company)}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </section>
    <section style="padding:48px 0 80px;">
      <div class="wrap">
        <div class="features-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));">
          ${[
            ['Etalase & Halaman Produk', 'Produk Anda tampil di etalase dengan galeri, fitur, dan harga transparan.'],
            ['Checkout & Invoice Terpusat', 'Pembeli checkout langsung; invoice dan konfirmasi pembayaran dikelola marketplace.'],
            ['Kurasi & Verifikasi', 'Setiap produk ditinjau sebelum tayang agar kualitas etalase terjaga.'],
            ['Akses Jaringan Klien', 'Instansi, kampus, gereja, dan UMKM dari jaringan ABP.']
          ].map(f => `<div class="feature-card"><h4>${f[0]}</h4><p>${f[1]}</p></div>`).join('')}
        </div>
        <div class="content-panel" style="margin-top:28px;">
          <h2>Alur menjadi vendor</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:18px;">
            ${['Kirim pengajuan produk', 'Kurasi & demo dengan tim ABP', 'Finalisasi kemitraan & standar layanan', 'Produk tayang di etalase'].map((s, i) => `
              <div style="display:flex; gap:10px; align-items:center;"><div class="step-num-circle">${i + 1}</div><strong style="font-size:14px;">${s}</strong></div>`).join('')}
          </div>
        </div>
      </div>
    </section>`;
}

/* ==========================================
 * 5. CONTACT US
 * ========================================== */
function renderContactPage(container) {
  container.innerHTML = `
    <section class="mp-hero" style="padding:44px 0 56px;">
      <div class="wrap">
        <div class="mp-eyebrow">● Contact Us</div>
        <h1 style="font-size:clamp(28px,3.6vw,40px);">Hubungi Tim ${CONFIG.companyName}</h1>
        <p class="lede" style="margin:0;">Pertanyaan produk, penawaran khusus, atau bantuan pembayaran. Pesan dari form ini langsung masuk ke email kami.</p>
      </div>
    </section>
    <section style="padding:40px 0 80px;">
      <div class="wrap contact-page-grid">
        <div class="contact-info-card">
          <h3 style="color:#fff; margin-bottom:8px;">${CONFIG.companyName}</h3>
          <p style="color:rgba(255,255,255,0.65); font-size:14px; margin:0 0 10px;">Operator Marketplace SaaS Indonesia</p>
          <div class="contact-info-item">
            <div class="contact-icon-box">📍</div>
            <div><strong>Alamat</strong><div style="color:rgba(255,255,255,0.75); font-size:14px;">${CONFIG.address}</div></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon-box">✉️</div>
            <div><strong>Email</strong><div><a href="mailto:${CONFIG.email}" style="color:#A5B4FC; font-size:14px;">${CONFIG.email}</a></div></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon-box">📞</div>
            <div><strong>No. Telepon / WhatsApp</strong><div><a href="https://wa.me/${CONFIG.phoneWA}" target="_blank" style="color:#A5B4FC; font-size:14px;">${CONFIG.phoneDisplay}</a></div></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon-box">🕘</div>
            <div><strong>Jam Layanan</strong><div style="color:rgba(255,255,255,0.75); font-size:14px;">Senin–Jumat, 08.00–17.00 WIB</div></div>
          </div>
          <iframe title="Peta lokasi" src="https://www.google.com/maps?q=${encodeURIComponent(CONFIG.address)}&output=embed" style="width:100%; height:200px; border:0; border-radius:12px; margin-top:14px;" loading="lazy"></iframe>
        </div>

        <div class="checkout-card" style="margin:0;">
          <h2 style="font-size:22px; margin-bottom:6px;">Kirim Pesan</h2>
          <p style="color:var(--ink-muted); font-size:14px; margin:0 0 18px;">Dikirim ke <strong>${CONFIG.email}</strong>.</p>
          <form id="contact-form" onsubmit="handleContactSubmit(event)">
            <div class="field-row">
              <div class="field"><label for="c-nama">Nama Lengkap *</label><input type="text" id="c-nama" required placeholder="Nama Anda"></div>
              <div class="field"><label for="c-instansi">Instansi / Perusahaan</label><input type="text" id="c-instansi" placeholder="Nama organisasi"></div>
            </div>
            <div class="field-row">
              <div class="field"><label for="c-email">Email *</label><input type="email" id="c-email" required placeholder="nama@email.com"></div>
              <div class="field"><label for="c-phone">No. Telepon / WhatsApp</label><input type="tel" id="c-phone" placeholder="0812-xxxx-xxxx"></div>
            </div>
            <div class="field">
              <label for="c-topik">Topik *</label>
              <select id="c-topik" required>
                <option>Pertanyaan Produk</option>
                <option>Permintaan Penawaran / Bundling</option>
                <option>Bantuan Pembayaran & Invoice</option>
                <option>Kemitraan Vendor</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div class="field"><label for="c-pesan">Pesan *</label><textarea id="c-pesan" required placeholder="Tulis pesan Anda..."></textarea></div>
            <button type="submit" class="btn btn-primary">Kirim Pesan →</button>
            <p id="contact-status" style="font-size:13.5px; margin:0;"></p>
          </form>
        </div>
      </div>
    </section>`;
}

/* ==========================================
 * 6. CHECKOUT
 * ========================================== */
function renderCheckoutPage(container) {
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <section class="checkout-section"><div class="wrap" style="text-align:center; padding:60px 0;">
        <div style="font-size:48px;">🛒</div>
        <h2>Keranjang Anda kosong</h2>
        <p style="color:var(--ink-muted);">Pilih produk dari etalase untuk mulai checkout.</p>
        <a href="#home" class="btn btn-primary">Ke Etalase</a>
      </div></section>`;
    return;
  }
  const saved = JSON.parse(localStorage.getItem('abp_customer') || '{}');

  container.innerHTML = `
    <div class="pdp-breadcrumb"><div class="wrap"><a href="#home">Etalase</a> / Keranjang / <strong style="color:var(--ink);">Checkout</strong></div></div>
    <section class="checkout-section">
      <div class="wrap checkout-grid">
        <form id="checkout-form" onsubmit="handleCheckoutSubmit(event)" style="display:block;">
          <div class="checkout-card">
            <div class="checkout-step-head"><div class="step-num-circle">1</div><h3 style="font-size:18px;">Data Pemesan</h3></div>
            <div style="display:flex; flex-direction:column; gap:14px;">
              <div class="field-row">
                <div class="field"><label for="co-nama">Nama Lengkap *</label><input id="co-nama" required value="${escapeHtml(saved.nama || '')}" placeholder="Nama penanggung jawab"></div>
                <div class="field"><label for="co-instansi">Instansi / Perusahaan *</label><input id="co-instansi" required value="${escapeHtml(saved.instansi || '')}" placeholder="Nama PT, kampus, gereja, toko, dll."></div>
              </div>
              <div class="field-row">
                <div class="field"><label for="co-email">Email *</label><input id="co-email" type="email" required value="${escapeHtml(saved.email || '')}" placeholder="nama@instansi.id"></div>
                <div class="field"><label for="co-phone">No. WhatsApp *</label><input id="co-phone" type="tel" required value="${escapeHtml(saved.phone || '')}" placeholder="0812-xxxx-xxxx"></div>
              </div>
              <div class="field-row">
                <div class="field"><label for="co-npwp">NPWP (opsional, untuk faktur)</label><input id="co-npwp" value="${escapeHtml(saved.npwp || '')}" placeholder="00.000.000.0-000.000"></div>
                <div class="field"><label for="co-alamat">Alamat Penagihan</label><input id="co-alamat" value="${escapeHtml(saved.alamat || '')}" placeholder="Kota / alamat lengkap"></div>
              </div>
              <div class="field"><label for="co-catatan">Catatan untuk tim onboarding</label><textarea id="co-catatan" placeholder="Jumlah cabang, data yang perlu dimigrasi, jadwal yang diinginkan..."></textarea></div>
            </div>
          </div>

          <div class="checkout-card">
            <div class="checkout-step-head"><div class="step-num-circle">2</div><h3 style="font-size:18px;">Metode Pembayaran</h3></div>
            <div class="payment-methods-grid">
              ${[
                ['transfer', 'Transfer Bank', 'BCA / BRI, konfirmasi manual'],
                ['qris', 'QRIS', 'Semua e-wallet & mobile banking']
              ].map(m => `
                <div class="pay-method-option ${selectedPayment === m[0] ? 'selected' : ''}" data-method="${m[0]}" onclick="selectPayment('${m[0]}')">
                  <strong>${m[1]}</strong><small>${m[2]}</small>
                </div>`).join('')}
            </div>
            <label style="display:flex; gap:10px; font-size:13px; color:var(--ink-muted); cursor:pointer;">
              <input type="checkbox" required style="accent-color:var(--primary); margin-top:3px;">
              Saya menyetujui bahwa langganan dibayar di muka sesuai periode yang dipilih dan aktivasi dilakukan setelah pembayaran terkonfirmasi.
            </label>
          </div>
        </form>

        <div>
          <div class="checkout-card" style="position:sticky; top:86px;">
            <div class="checkout-step-head"><div class="step-num-circle">3</div><h3 style="font-size:18px;">Ringkasan Pesanan</h3></div>
            <div id="checkout-summary"></div>
          </div>
        </div>
      </div>
    </section>`;

  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const cart = getCart();
  const t = cartTotals(cart);
  el.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
      ${cart.map(item => {
        const p = getProduct(item.id);
        if (!p) return '';
        return `<div class="cart-item-card">
          <div class="cart-item-top">
            <div><strong>${escapeHtml(p.name)}</strong><br><small style="color:var(--ink-light);">${escapeHtml(getVendor(p).name)}</small></div>
            <button type="button" class="cart-item-remove" onclick="removeFromCart('${p.id}')">Hapus</button>
          </div>
          ${cartItemControlsHTML(item)}
        </div>`;
      }).join('')}
    </div>
    <div class="buy-breakdown">
      <div class="buy-breakdown-row"><span>Onboarding & Migrasi</span><span class="mono">${rupiah(t.onboarding)}</span></div>
      <div class="buy-breakdown-row"><span>Langganan Cloud</span><span class="mono">${rupiah(t.subscription)}</span></div>
      <div class="buy-breakdown-total"><span>Total Bayar</span><span class="mono">${rupiah(t.total)}</span></div>
    </div>
    <button type="submit" form="checkout-form" class="btn btn-primary full-width" id="checkout-submit-btn">${t.total === 0 ? 'Aktifkan Gratis →' : 'Buat Pesanan & Terbitkan Invoice →'}</button>
    <p style="font-size:12px; color:var(--ink-light); margin:10px 0 0; text-align:center;">Detail pesanan akan dikirim ke ${CONFIG.email} dan WhatsApp tim ABP.</p>`;
}

window.selectPayment = function (m) {
  selectedPayment = m;
  document.querySelectorAll('.pay-method-option').forEach(el => el.classList.toggle('selected', el.dataset.method === m));
};

function generateOrderNo() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `ABP-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function getOrders() {
  try { return JSON.parse(localStorage.getItem('abp_orders') || '[]'); } catch { return []; }
}

window.handleCheckoutSubmit = async function (e) {
  e.preventDefault();
  const cart = getCart();
  if (!cart.length) return;
  const btn = document.getElementById('checkout-submit-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses pesanan...'; }

  const customer = {
    nama: document.getElementById('co-nama').value.trim(),
    instansi: document.getElementById('co-instansi').value.trim(),
    email: document.getElementById('co-email').value.trim(),
    phone: document.getElementById('co-phone').value.trim(),
    npwp: document.getElementById('co-npwp').value.trim(),
    alamat: document.getElementById('co-alamat').value.trim()
  };
  localStorage.setItem('abp_customer', JSON.stringify(customer));

  const totals = cartTotals(cart);
  const order = {
    orderNo: generateOrderNo(),
    createdAt: new Date().toISOString(),
    customer,
    catatan: document.getElementById('co-catatan').value.trim(),
    payment: totals.total === 0 ? 'free' : selectedPayment,
    items: cart.map(item => {
      const p = getProduct(item.id);
      const t = lineTotals(item);
      return {
        id: p.id, name: p.name, vendor: getVendor(p).name, unit: p.unit,
        qty: item.qty, months: item.months, monthly: p.monthly,
        onboarding: t.onboarding, subscription: t.subscription, total: t.total
      };
    }),
    totals,
    status: totals.total === 0 ? 'Aktivasi Gratis' : 'Menunggu Pembayaran'
  };

  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('abp_orders', JSON.stringify(orders));

  const itemsText = order.items.map((it, i) =>
    `${i + 1}. ${it.name} (${it.vendor}) — ${it.qty} ${it.unit} × ${it.months} bln = ${rupiah(it.subscription)}; onboarding ${rupiah(it.onboarding)}; subtotal ${rupiah(it.total)}`
  ).join('\n');

  await sendToEmail({
    _subject: `[PESANAN BARU] ${order.orderNo} — ${customer.instansi} — ${rupiah(totals.total)}`,
    'Jenis': 'Pesanan Marketplace',
    'No. Pesanan': order.orderNo,
    'Nama': customer.nama,
    'Instansi': customer.instansi,
    'Email': customer.email,
    'WhatsApp': customer.phone,
    'NPWP': customer.npwp || '-',
    'Alamat Penagihan': customer.alamat || '-',
    'Metode Pembayaran': paymentLabel(order.payment),
    'Item Pesanan': itemsText,
    'Total Onboarding': rupiah(totals.onboarding),
    'Total Langganan': rupiah(totals.subscription),
    'TOTAL': rupiah(totals.total),
    'Catatan': order.catatan || '-'
  });
  await logLead({ type: 'Pesanan', nama: customer.nama, instansi: customer.instansi, email: customer.email, phone: customer.phone, produk: order.items.map(i => i.name).join(', '), pesan: `${order.orderNo} · ${rupiah(totals.total)} · ${paymentLabel(order.payment)}` });

  saveCart([]);
  window.location.hash = `#invoice/${encodeURIComponent(order.orderNo)}`;
};

function paymentLabel(m) {
  return { transfer: 'Transfer Bank', qris: 'QRIS', invoice: 'Invoice / PO (termin)', free: 'Gratis' }[m] || m;
}

/* ==========================================
 * 7. INVOICE
 * ========================================== */
function renderInvoicePage(container, orderNo) {
  const order = getOrders().find(o => o.orderNo === orderNo);
  if (!order) {
    container.innerHTML = `<div class="wrap" style="padding:100px 0; text-align:center;"><h2>Invoice tidak ditemukan</h2><p style="color:var(--ink-muted);">Invoice hanya tersimpan di perangkat tempat pesanan dibuat.</p><a href="#home" class="btn btn-primary">Ke Etalase</a></div>`;
    return;
  }
  const c = order.customer;
  const date = new Date(order.createdAt);
  const due = new Date(date.getTime() + 3 * 86400000);
  const fmtDate = (d) => d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const waText = encodeURIComponent(
    `Halo ${CONFIG.companyName}, saya ${c.nama} dari ${c.instansi}.\n` +
    `Saya telah membuat pesanan *${order.orderNo}* senilai *${rupiah(order.totals.total)}* (${paymentLabel(order.payment)}).\n` +
    order.items.map(i => `- ${i.name}: ${i.qty} ${i.unit} × ${i.months} bln`).join('\n') +
    `\nMohon konfirmasi & instruksi selanjutnya. Terima kasih.`
  );
  const mailLink = mailtoFallback(
    `[PESANAN] ${order.orderNo} — ${c.instansi}`,
    `Halo ${CONFIG.companyName},\n\nBerikut detail pesanan kami:\nNo. Pesanan: ${order.orderNo}\nNama: ${c.nama}\nInstansi: ${c.instansi}\nEmail: ${c.email}\nWhatsApp: ${c.phone}\nMetode Pembayaran: ${paymentLabel(order.payment)}\n\nItem:\n` +
    order.items.map(i => `- ${i.name} (${i.vendor}): ${i.qty} ${i.unit} × ${i.months} bln = ${rupiah(i.total)}`).join('\n') +
    `\n\nTotal Onboarding: ${rupiah(order.totals.onboarding)}\nTotal Langganan: ${rupiah(order.totals.subscription)}\nTOTAL BAYAR: ${rupiah(order.totals.total)}`
  );

  let payBlock = '';
  if (order.payment === 'transfer') {
    payBlock = `
      <h4 style="margin-bottom:10px;">Instruksi Transfer Bank</h4>
      ${CONFIG.bankAccounts.map(b => `<div style="display:flex; justify-content:space-between; padding:10px 14px; background:var(--surface); border:1px solid var(--line); border-radius:10px; margin-bottom:8px;"><span><strong>${b.bank}</strong> · a.n. ${escapeHtml(b.holder)}</span><span class="mono" style="font-weight:800;">${b.number}</span></div>`).join('')}
      <p style="font-size:13px; color:var(--ink-muted);">Transfer tepat <strong class="mono">${rupiah(order.totals.total)}</strong> dan cantumkan berita <strong class="mono">${order.orderNo}</strong>. Kirim bukti transfer via WhatsApp.</p>`;
  } else if (order.payment === 'qris') {
    const qrData = `ABP-PAYMENT|${order.orderNo}|${order.totals.total}`;
    payBlock = `
      <h4 style="margin-bottom:10px;">Pembayaran QRIS</h4>
      <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
        <div style="border:1px solid var(--line); border-radius:12px; padding:10px; background:#fff;"><img src="${qrgenUrl(qrData, 220)}" width="180" height="180" alt="Kode pembayaran"></div>
        <p style="font-size:13px; color:var(--ink-muted); max-width:40ch;">Kode QRIS resmi merchant ${CONFIG.companyName} akan dikirim tim kami via WhatsApp/email untuk nominal <strong class="mono">${rupiah(order.totals.total)}</strong>. Kode di samping adalah referensi pesanan Anda.</p>
      </div>`;
  } else if (order.payment === 'invoice') {
    payBlock = `<h4>Invoice / Purchase Order</h4><p style="font-size:13.5px; color:var(--ink-muted);">Tim kami akan menghubungi Anda untuk dokumen penawaran resmi, PO, dan skema termin pembayaran.</p>`;
  } else {
    payBlock = `<h4>Aktivasi Gratis</h4><p style="font-size:13.5px; color:var(--ink-muted);">Tidak ada pembayaran. Akun Anda akan diaktifkan dan detail akses dikirim ke ${escapeHtml(c.email)}.</p>`;
  }

  container.innerHTML = `
    <section class="checkout-section">
      <div class="wrap">
        <div class="no-print" style="max-width:900px; margin:0 auto 20px; background:var(--emerald-soft); border:1px solid var(--emerald); border-radius:14px; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap;">
          <div><strong style="color:var(--emerald-dark);">✓ Pesanan berhasil dibuat</strong><div style="font-size:13.5px; color:var(--ink-soft);">Detail pesanan telah diteruskan ke ${CONFIG.email}. Konfirmasi via WhatsApp agar lebih cepat diproses.</div></div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn btn-emerald btn-sm" target="_blank" href="https://wa.me/${CONFIG.phoneWA}?text=${waText}">Konfirmasi via WhatsApp</a>
            <a class="btn btn-outline btn-sm" href="${mailLink}">Kirim via Email</a>
            <button class="btn btn-outline btn-sm" onclick="window.print()">Cetak / Simpan PDF</button>
          </div>
        </div>

        <div class="invoice-box">
          <div class="invoice-top">
            <div>
              <div class="mark"><div class="mark-logo-box">ABP</div><div class="mark-text-group"><span class="mark-title">${CONFIG.companyName}</span><span class="mark-subtitle">SaaS Marketplace</span></div></div>
              <div style="font-size:12.5px; color:var(--ink-muted); margin-top:10px; max-width:42ch;">${CONFIG.address}<br>${CONFIG.email} · ${CONFIG.phoneDisplay}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:26px; font-weight:800; letter-spacing:0.04em;">INVOICE</div>
              <div class="mono" style="font-weight:700;">${order.orderNo}</div>
              <div style="font-size:13px; color:var(--ink-muted);">Tanggal: ${fmtDate(date)}<br>Jatuh tempo: ${fmtDate(due)}</div>
              <span class="lead-tag ${order.payment === 'free' ? 'tag-order' : 'tag-contact'}" style="margin-top:8px;">${escapeHtml(order.status)}</span>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; font-size:14px;">
            <div><div style="font-size:11.5px; font-weight:800; color:var(--ink-light); text-transform:uppercase;">Ditagihkan kepada</div><strong>${escapeHtml(c.instansi)}</strong><br>${escapeHtml(c.nama)}<br>${escapeHtml(c.email)} · ${escapeHtml(c.phone)}${c.npwp ? `<br>NPWP: ${escapeHtml(c.npwp)}` : ''}${c.alamat ? `<br>${escapeHtml(c.alamat)}` : ''}</div>
            <div><div style="font-size:11.5px; font-weight:800; color:var(--ink-light); text-transform:uppercase;">Metode pembayaran</div><strong>${paymentLabel(order.payment)}</strong></div>
          </div>

          <div style="overflow-x:auto;">
          <table class="invoice-table">
            <thead><tr><th>Produk</th><th>Detail</th><th style="text-align:right;">Onboarding</th><th style="text-align:right;">Langganan</th><th style="text-align:right;">Subtotal</th></tr></thead>
            <tbody>
              ${order.items.map(it => `
                <tr>
                  <td><strong>${escapeHtml(it.name)}</strong><br><small style="color:var(--ink-light);">Vendor: ${escapeHtml(it.vendor)}</small></td>
                  <td style="font-size:13px;">${it.monthly ? `${rupiah(it.monthly)} × ${it.qty} ${escapeHtml(it.unit)} × ${it.months} bln` : 'Gratis'}</td>
                  <td class="mono" style="text-align:right;">${rupiah(it.onboarding)}</td>
                  <td class="mono" style="text-align:right;">${rupiah(it.subscription)}</td>
                  <td class="mono" style="text-align:right; font-weight:800;">${rupiah(it.total)}</td>
                </tr>`).join('')}
            </tbody>
          </table>
          </div>

          <div style="display:flex; justify-content:flex-end;">
            <div style="min-width:300px;" class="buy-breakdown">
              <div class="buy-breakdown-row"><span>Total Onboarding</span><span class="mono">${rupiah(order.totals.onboarding)}</span></div>
              <div class="buy-breakdown-row"><span>Total Langganan</span><span class="mono">${rupiah(order.totals.subscription)}</span></div>
              <div class="buy-breakdown-total"><span>TOTAL</span><span class="mono">${rupiah(order.totals.total)}</span></div>
            </div>
          </div>

          <div style="margin-top:24px; padding-top:20px; border-top:1px dashed var(--line-strong);">${payBlock}</div>
          <p style="font-size:12px; color:var(--ink-light); margin-top:24px;">Langganan cloud sudah termasuk maintenance. Masa aktif dihitung sejak akun diaktifkan setelah pembayaran terkonfirmasi.</p>
        </div>

        <div class="no-print" style="text-align:center; margin-top:24px;"><a href="#home" class="btn btn-outline">← Kembali ke Etalase</a></div>
      </div>
    </section>`;
}

/* ==========================================
 * PENGIRIMAN EMAIL & LOG
 * ========================================== */
async function sendToEmail(fields) {
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ _template: 'table', _captcha: 'false', ...fields })
    });
    const data = await res.json().catch(() => ({}));
    const ok = res.ok && String(data.success) !== 'false';
    return { ok, message: data.message || '' };
  } catch (err) {
    console.warn('Gagal mengirim email via FormSubmit:', err);
    return { ok: false, message: err.message || 'network_error' };
  }
}

// Helper untuk memicu email aktivasi FormSubmit melalui form POST standar (bukan AJAX)
window.triggerFormSubmitActivation = function () {
  const f = document.createElement('form');
  f.method = 'POST';
  f.action = `https://formsubmit.co/${CONFIG.email}`;
  f.target = '_blank';
  const inputs = {
    _subject: 'Aktivasi Form Website PT. Anugerah Bakti Prima',
    _captcha: 'false',
    Pesan: 'Ini adalah pengiriman awal untuk mengaktifkan notifikasi email FormSubmit di ' + CONFIG.email
  };
  Object.entries(inputs).forEach(([k, v]) => {
    const inp = document.createElement('input');
    inp.type = 'hidden';
    inp.name = k;
    inp.value = v;
    f.appendChild(inp);
  });
  document.body.appendChild(f);
  f.submit();
  f.remove();
};

async function logLead(lead) {
  lead.timestamp = new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }) + ' WIB';
  const backup = JSON.parse(localStorage.getItem('abp_leads_backup') || '[]');
  backup.unshift(lead);
  localStorage.setItem('abp_leads_backup', JSON.stringify(backup));
  try {
    const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    return res.ok;
  } catch (err) {
    return false;
  }
}

function mailtoFallback(subject, body) {
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

window.handleContactSubmit = async function (e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-status');
  const data = {
    nama: document.getElementById('c-nama').value.trim(),
    instansi: document.getElementById('c-instansi').value.trim(),
    email: document.getElementById('c-email').value.trim(),
    phone: document.getElementById('c-phone').value.trim(),
    topik: document.getElementById('c-topik').value,
    pesan: document.getElementById('c-pesan').value.trim()
  };
  btn.disabled = true; btn.textContent = 'Mengirim...';

  const [emailResult, apiSaved] = await Promise.all([
    sendToEmail({
      _subject: `[Contact Us] ${data.topik} — ${data.nama}`,
      _replyto: data.email,
      'Jenis': 'Contact Us', 'Nama': data.nama, 'Instansi': data.instansi || '-', 'Email': data.email,
      'Telepon': data.phone || '-', 'Topik': data.topik, 'Pesan': data.pesan
    }),
    logLead({ type: 'Kontak', nama: data.nama, instansi: data.instansi, email: data.email, phone: data.phone, produk: data.topik, pesan: data.pesan })
  ]);

  const body = `Nama: ${data.nama}\nInstansi: ${data.instansi || '-'}\nEmail: ${data.email}\nTelepon: ${data.phone || '-'}\nTopik: ${data.topik}\n\n${data.pesan}`;
  const mailHref = mailtoFallback(`[Contact Us] ${data.topik} — ${data.nama}`, body);
  const waHref = `https://wa.me/${CONFIG.phoneWA}?text=${encodeURIComponent(`Halo ${CONFIG.companyName}, saya ${data.nama} (${data.instansi || '-'}).\nTopik: ${data.topik}\n\n${data.pesan}`)}`;

  if (emailResult.ok) {
    status.innerHTML = `<span style="color:var(--emerald-dark); font-weight:700;">✓ Pesan berhasil dikirim ke ${CONFIG.email}.</span>`;
    e.target.reset();
    btn.disabled = false;
    btn.textContent = 'Kirim Pesan →';
  } else {
    const needsActivation = /activation|activate/i.test(emailResult.message);
    status.innerHTML = `
      <div style="background:var(--emerald-soft); border:1px solid var(--emerald); border-radius:10px; padding:12px 14px; margin-top:6px;">
        <div style="color:var(--emerald-dark); font-weight:700; margin-bottom:4px;">✓ Pesan Anda telah tercatat di sistem${apiSaved ? ' & Portal Admin' : ''}.</div>
        <div style="font-size:13px; color:var(--ink-soft); margin-bottom:10px;">
          ${needsActivation
            ? `Untuk mengaktifkan pengiriman otomatis ke inbox <strong>${CONFIG.email}</strong>, cek email dari <em>FormSubmit</em> di inbox/spam Anda lalu klik <strong>Activate Form</strong>, atau klik tombol aktivasi di bawah.`
            : `Teruskan juga pesan ini langsung melalui Email atau WhatsApp:`}
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <a href="${mailHref}" class="btn btn-primary btn-xs">✉️ Kirim via Aplikasi Email</a>
          <a href="${waHref}" target="_blank" class="btn btn-emerald btn-xs">💬 Kirim via WhatsApp</a>
          ${needsActivation ? `<button type="button" onclick="triggerFormSubmitActivation()" class="btn btn-outline btn-xs">⚡ Kirim Ulang Link Aktivasi FormSubmit</button>` : ''}
        </div>
      </div>`;
    e.target.reset();
    btn.disabled = false;
    btn.textContent = 'Kirim Pesan →';
  }
};

/* ==========================================
 * MODAL: DEMO, VENDOR, LIGHTBOX
 * ========================================== */
window.openDemoModal = function (productName = '') {
  const select = document.getElementById('demo-produk');
  const title = document.getElementById('demo-modal-title');
  if (productName && select) {
    title.textContent = `Jadwalkan Demo ${productName}`;
    for (const opt of select.options) {
      if (opt.value.toLowerCase() === productName.toLowerCase()) { opt.selected = true; break; }
    }
  } else if (title) {
    title.textContent = 'Jadwalkan Demo & Konsultasi Implementasi';
  }
  document.getElementById('demo-modal').classList.add('open');
};
window.closeDemoModal = () => { const m = document.getElementById('demo-modal'); if (m) m.classList.remove('open'); };
window.openVendorModal = () => document.getElementById('vendor-modal').classList.add('open');
window.closeVendorModal = () => { const m = document.getElementById('vendor-modal'); if (m) m.classList.remove('open'); };

window.openImageModal = function (src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption || 'Pratinjau Antarmuka';
  document.getElementById('image-modal').classList.add('open');
};
window.closeImageModal = () => { const m = document.getElementById('image-modal'); if (m) m.classList.remove('open'); };

window.handleDemoSubmit = async function (e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const d = {
    nama: document.getElementById('demo-nama').value, instansi: document.getElementById('demo-instansi').value,
    email: document.getElementById('demo-email').value, phone: document.getElementById('demo-phone').value,
    produk: document.getElementById('demo-produk').value, pesan: document.getElementById('demo-pesan').value
  };
  btn.disabled = true; btn.textContent = 'Mengirim...';
  await sendToEmail({ _subject: `[Permintaan Demo] ${d.produk} — ${d.instansi}`, _replyto: d.email, 'Jenis': 'Permintaan Demo', 'Nama': d.nama, 'Instansi': d.instansi, 'Email': d.email, 'WhatsApp': d.phone, 'Produk': d.produk, 'Catatan': d.pesan || '-' });
  await logLead({ type: 'Demo', ...d });
  btn.textContent = 'Terkirim ✓';
  showToast('Permintaan demo terkirim');
  setTimeout(() => { closeDemoModal(); e.target.reset(); btn.disabled = false; btn.textContent = `Kirim ke Tim ABP (${CONFIG.email}) →`; }, 1200);
};

window.handleVendorSubmit = async function (e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const d = {
    nama: document.getElementById('v-nama').value, instansi: document.getElementById('v-perusahaan').value,
    email: document.getElementById('v-email').value, phone: document.getElementById('v-phone').value,
    produk: document.getElementById('v-produk').value, kategori: document.getElementById('v-kategori').value,
    pesan: document.getElementById('v-deskripsi').value
  };
  btn.disabled = true; btn.textContent = 'Mengirim...';
  await sendToEmail({ _subject: `[Pengajuan Vendor] ${d.produk} — ${d.instansi}`, _replyto: d.email, 'Jenis': 'Pengajuan Vendor', 'PIC': d.nama, 'Perusahaan': d.instansi, 'Email': d.email, 'WhatsApp': d.phone, 'Produk & URL': d.produk, 'Kategori': d.kategori, 'Deskripsi & Harga': d.pesan });
  await logLead({ type: 'Vendor', ...d });
  btn.textContent = 'Terkirim ✓';
  showToast('Pengajuan vendor terkirim');
  setTimeout(() => { closeVendorModal(); e.target.reset(); btn.disabled = false; btn.textContent = 'Kirim Pengajuan Vendor ke ABP →'; }, 1200);
};

/* ==========================================
 * ADMIN (lokal) — pesanan & pesan masuk di perangkat ini
 * Catatan: proteksi ini hanya di sisi klien, bukan keamanan sungguhan.
 * Sumber kebenaran pesanan adalah inbox email.
 * ========================================== */
async function renderAdminPage(container) {
  if (sessionStorage.getItem('abp_admin_auth') !== 'true') {
    container.innerHTML = `
      <section style="padding:60px 0;"><div class="wrap" style="max-width:440px;">
        <div class="checkout-card">
          <h2 style="font-size:22px;">Admin & Order Inbox</h2>
          <p style="font-size:13.5px; color:var(--ink-muted);">Masukkan passcode admin.</p>
          <form onsubmit="handleAdminLogin(event)">
            <div class="field"><label for="admin-passcode">Passcode</label><input type="password" id="admin-passcode" required></div>
            <p id="admin-error-msg" style="color:var(--danger); font-size:13px; display:none; margin:0;">Passcode salah.</p>
            <button class="btn btn-dark full-width" type="submit">Masuk</button>
          </form>
        </div>
      </div></section>`;
    return;
  }

  try {
    const res = await fetch('/api/leads');
    leadsData = res.ok ? await res.json() : [];
  } catch { leadsData = []; }
  if (!leadsData.length) leadsData = JSON.parse(localStorage.getItem('abp_leads_backup') || '[]');
  const orders = getOrders();

  container.innerHTML = `
    <section style="padding:40px 0 80px;"><div class="wrap">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <h2>Pesanan & Pesan Masuk</h2>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-outline btn-sm" onclick="exportLeadsToCSV()">Unduh CSV</button>
          <button class="btn btn-sm" style="background:var(--danger); color:#fff;" onclick="sessionStorage.removeItem('abp_admin_auth'); handleRouting();">Keluar</button>
        </div>
      </div>
      <p style="font-size:13.5px; color:var(--ink-muted);">Data di bawah tersimpan di perangkat ini / server lokal. Semua pesanan & pesan juga dikirim ke <strong>${CONFIG.email}</strong>.</p>

      <h3 style="margin-top:24px;">Pesanan (${orders.length})</h3>
      <div class="admin-table-wrap"><table class="lead-table">
        <thead><tr><th>No. Pesanan</th><th>Pemesan</th><th>Produk</th><th>Total</th><th>Pembayaran</th><th></th></tr></thead>
        <tbody>${orders.length ? orders.map(o => `
          <tr><td class="mono">${o.orderNo}<br><small>${new Date(o.createdAt).toLocaleString('id-ID')}</small></td>
          <td><strong>${escapeHtml(o.customer.instansi)}</strong><br><small>${escapeHtml(o.customer.nama)} · ${escapeHtml(o.customer.email)}</small></td>
          <td>${o.items.map(i => escapeHtml(i.name)).join(', ')}</td>
          <td class="mono"><strong>${rupiah(o.totals.total)}</strong></td>
          <td>${paymentLabel(o.payment)}</td>
          <td><a class="btn btn-outline btn-xs" href="#invoice/${encodeURIComponent(o.orderNo)}">Invoice</a></td></tr>`).join('') : '<tr><td colspan="6" style="text-align:center; color:var(--ink-muted);">Belum ada pesanan.</td></tr>'}
        </tbody></table></div>

      <h3 style="margin-top:28px;">Pesan & Lead (${leadsData.length})</h3>
      <div class="admin-table-wrap"><table class="lead-table">
        <thead><tr><th>Waktu</th><th>Nama & Instansi</th><th>Kontak</th><th>Jenis / Produk</th><th>Pesan</th></tr></thead>
        <tbody>${leadsData.length ? leadsData.map(l => `
          <tr><td style="white-space:nowrap; font-size:12.5px;">${escapeHtml(l.timestamp || '-')}</td>
          <td><strong>${escapeHtml(l.nama || '-')}</strong><br><small>${escapeHtml(l.instansi || l.firm || '-')}</small></td>
          <td>${escapeHtml(l.email || '-')}<br><small>${escapeHtml(l.phone || '-')}</small></td>
          <td><span class="lead-tag ${l.type === 'Pesanan' ? 'tag-order' : l.type === 'Demo' ? 'tag-demo' : 'tag-contact'}">${escapeHtml(l.type || 'Pesan')}</span><br><small>${escapeHtml(l.produk || '-')}</small></td>
          <td style="max-width:280px;">${escapeHtml(l.pesan || '-')}</td></tr>`).join('') : '<tr><td colspan="5" style="text-align:center; color:var(--ink-muted);">Belum ada pesan.</td></tr>'}
        </tbody></table></div>
    </div></section>`;
}

window.handleAdminLogin = function (e) {
  e.preventDefault();
  const code = document.getElementById('admin-passcode').value.trim();
  if (CONFIG.adminPasscodes.includes(code)) {
    sessionStorage.setItem('abp_admin_auth', 'true');
    renderAdminPage(document.getElementById('app-view'));
  } else {
    document.getElementById('admin-error-msg').style.display = 'block';
  }
};

window.exportLeadsToCSV = function () {
  const orders = getOrders();
  const rows = [['Tipe', 'Waktu', 'Nama', 'Instansi', 'Email', 'Telepon', 'Produk', 'Keterangan']];
  orders.forEach(o => rows.push(['Pesanan', o.createdAt, o.customer.nama, o.customer.instansi, o.customer.email, o.customer.phone, o.items.map(i => i.name).join('; '), `${o.orderNo} ${rupiah(o.totals.total)}`]));
  leadsData.forEach(l => rows.push([l.type || '', l.timestamp || '', l.nama || '', l.instansi || '', l.email || '', l.phone || '', l.produk || '', l.pesan || '']));
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = `ABP_Marketplace_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
};
