/**
 * PT. Anugerah Bakti Prima (ABP) — Main SPA Application Router & Lead Logger
 */

let productsContent = {};
let leadsData = [];

// Detailed hardcoded metadata fallback enriched with exact PDF content
const productMetadata = {
  rtnet: {
    id: 'rtnet',
    name: 'RTnet',
    sector: 'Komunitas & RT/RW',
    color: '#C7973F',
    tagline: 'Administrasi & Keuangan RT/RW Bebas Ribet',
    heroDesc: 'Membantu pengurus RT menagih iuran warga secara transparan dan menerbitkan surat pengantar dalam hitungan detik, sehingga catatan kas dan data warga tidak pernah hilang saat pengurus berganti.',
    problems: [
      'Buku pencatatan iuran fisik sering terselip, rawan keliru hitung, dan menagih pintu ke pintu terasa kurang nyaman.',
      'Warga butuh surat pengantar mendadak saat pengurus RT sedang tidak berada di rumah.',
      'Saat pergantian pengurus RT baru, data warga dan catatan historis kas lama sering hilang/tidak lengkap.'
    ],
    solutions: [
      'Pencatatan kas digital transparan dengan laporan rekapitulasi yang bisa diakses warga kapan saja.',
      'Penerbitan surat pengantar online berformat resmi lengkap dengan QR verifikasi dari smartphone.',
      'Database warga terpusat dan tersimpan aman di cloud, siap diterserah-terimakan ke pengurus baru tanpa ada data tercecer.'
    ],
    features: [
      { title: 'Manajemen Iuran & Kas RT', desc: 'Tagihan otomatis per KK, status lunas/tunggakan real-time, & cetak bukti bayar.' },
      { title: 'Surat Pengantar Digital', desc: 'Warga mengajukan lewat HP, Pengurus RT menyetujui dengan 1-klik via WhatsApp/Web.' },
      { title: 'Database Warga & KK', desc: 'Pencatatan data keluarga, domisili tetap/kontrak, & status kependudukan rapi.' },
      { title: 'Laporan Keuangan Transparan', desc: 'Rekapitulasi pemasukan & pengeluaran bulanan otomatis yang bisa dibagikan ke grup warga.' }
    ],
    workflow: [
      { num: '1', title: 'Registrasi Data Warga & Unit Rumah', desc: 'Pengurus mendaftarkan daftar KK dan menetapkan nominal iuran bulanan.' },
      { num: '2', title: 'Penagihan & Pembayaran Iuran', desc: 'Warga menerima pengingat iuran dan bukti pembayaran digital tercatat otomatis.' },
      { num: '3', title: 'Pelayanan Surat & Laporan Kas', desc: 'Surat pengantar diterbitkan instant dan kas RT terpantau jujur tanpa selisih.' }
    ],
    roi: 'Menghilangkan 100% risiko kehilangan catatan kas RT saat ganti pengurus dan meningkatkan kolektibilitas iuran warga hingga 95%.'
  },

  eklesia: {
    id: 'eklesia',
    name: 'Eklesia',
    sector: 'Keagamaan / Gereja',
    color: '#E8862B',
    tagline: 'Manajemen Gereja & Penggembalaan Jemaat Terpadu',
    heroDesc: 'Membantu gereja mencatat keuangan persembahan secara rapi dan akuntabel, merawat hubungan penggembalaan jemaat, dan mengatur jadwal pelayanan tanpa beban administrasi fisik.',
    problems: [
      'Pencatatan keuangan persembahan dan persepuluhan rentan ketidakcocokan antara majelis dan pengurus.',
      'Data jemaat tercecer di berbagai buku catatan, membuat gembala sulit memantau jemaat yang butuh kunjungan.',
      'Jadwal pelayan ibadah minggu (pembicara, musik, usher) sering bentrok atau lupa dikonfirmasi.'
    ],
    solutions: [
      'Pusat kendali keuangan gereja transparan dengan pencatatan multi-kantong persembahan.',
      'Database penggembalaan terpadu lengkap dengan pengingat ulang tahun, pernikahan, dan status keaktifan jemaat.',
      'Penjadwalan tim pelayanan otomatis dengan notifikasi jadwal ibadah mingguan.'
    ],
    features: [
      { title: 'Statistik Pertumbuhan Jemaat', desc: 'Memantau jumlah jiwa aktif, keluarga, serta jemaat baru secara real-time.' },
      { title: 'Keuangan & Persembahan', desc: 'Pencatatan transparan kantong persembahan, persepuluhan, & dana pembangunan.' },
      { title: 'Pengingat Hari Bahagia', desc: 'Notifikasi otomatis ulang tahun & ulang tahun pernikahan jemaat untuk sapaan gembala.' },
      { title: 'Penjadwalan Ibadah & Pelayan', desc: 'Pengaturan jadwal pelayan mimbar & musik tanpa khawatir terjadi bentrok tugas.' }
    ],
    workflow: [
      { num: '1', title: 'Pencatatan Base Jemaat', desc: 'Pendataan anggota keluarga jemaat, sakramen baptis/sidi, dan minat pelayanan.' },
      { num: '2', title: 'Rekapitulasi Ibadah & Kas', desc: 'Input jumlah kehadiran dan penghitungan persembahan pasca ibadah secara akuntabel.' },
      { num: '3', title: 'Penggembalaan Aktif', desc: 'Gembala menerima alert jemaat yang absen atau membutuhkan doa & kunjungan.' }
    ],
    roi: 'Meningkatkan akuntabilitas keuangan gereja 100% dan memastikan tidak ada satu pun jemaat yang terlewat dari perhatian penggembalaan.'
  },

  servio: {
    id: 'servio',
    name: 'Servio',
    sector: 'Jasa Lapangan / Pest Control',
    color: '#1F9E6D',
    tagline: 'Operasional Pest Control & Manajemen Kontrak Lapangan',
    heroDesc: 'Membantu pemilik usaha pest control memastikan setiap kontrak pelanggan terpenuhi tepat waktu, sehingga tagihan keluar akurat dan pelanggan tidak berpindah ke pesaing karena kunjungan terlewat.',
    problems: [
      'Kunjungan rutin teknisi pest control terlewat tanpa disadari, memicu komplain klien dan klaim penalti.',
      'Teknisi di lapangan tidak membawa bukti foto & tanda tangan pelanggan yang sah.',
      'Kesulitan mengelola penjadwalan banyak cabang dan membagikan rute kerja harian teknisi.'
    ],
    solutions: [
      'Monitoring pemenuhan kontrak otomatis yang memberi peringatan jika jadwal kunjungan mendekati tenggat.',
      'Aplikasi mobile teknisi untuk pengisian berita acara, lampiran foto sebelum/sesudah, dan TTD digital klien.',
      'Web admin multi-cabang untuk alokasi rute teratur dan penagihan otomatis sesuai progres kerja.'
    ],
    features: [
      { title: 'Manajemen Multi-Cabang', desc: 'Pengelolaan kantor cabang & divisi layanan dalam satu portal terpusat.' },
      { title: 'Penjadwalan Otomatis Teknisi', desc: 'Alokasi penugasan harian bebas bentrok dengan optimasi rute terdekat.' },
      { title: 'Aplikasi Mobile Teknisi', desc: 'Input checklist pest control, rekomendasi teknis, & foto lokasi secara offline-first.' },
      { title: 'Portal Klien Mandiri', desc: 'Pelanggan korporat dapat mengunduh sertifikat & berita acara pekerjaan kapan saja.' }
    ],
    workflow: [
      { num: '1', title: 'Input Kontrak & SLA Service', desc: 'Pendaftaran kontrak pelanggan (misal: 2x kunjungan/bulan selama 1 tahun).' },
      { num: '2', title: 'Penugasan & Inspeksi Lapangan', desc: 'Teknisi menerima perintah kerja via HP, menjalankan treatment, dan mengunggah foto.' },
      { num: '3', title: 'Verifikasi & Invoicing', desc: 'Admin memverifikasi bukti kunjungan dan menerbitkan tagihan tepat waktu.' }
    ],
    roi: 'Memangkas risiko kehilangan kontrak berlangganan akibat kunjungan terlewat hingga 0% dan mempercepat proses invoicing 5x lebih cepat.'
  },

  govply: {
    id: 'govply',
    name: 'GovPly',
    sector: 'Instansi Pemerintah & Swasta',
    color: '#2C6E63',
    tagline: 'Tata Naskah Dinas & Disposisi Surat Digital Instant',
    heroDesc: 'Membantu instansi menyelesaiakan persetujuan surat hanya dalam hitungan detik lewat ponsel pimpinan, sehingga pekerjaan staf tidak lagi tertahan berhari-hari hanya karena atasan sedang di luar kantor.',
    problems: [
      'Surat fisik tertumpuk di meja pimpinan, terselip, rusak, atau terlambat didisposisi saat dinas luar.',
      'Staf kesulitan melacak status surat: berada di meja siapa dan berapa lama sudah tertahan.',
      'Pemborosan anggaran kertas, cetak berulang kali, dan biaya kurir antar gedung.'
    ],
    solutions: [
      'Disposisi surat digital berbasis seluler yang dapat ditandatangani pimpinan dari mana saja via smartphone.',
      'Tracking alur surat real-time lengkap dengan riwayat timestamp penanganan antar bidang.',
      'Pengarsipan digital terenkripsi yang siap dicari kembali dalam hitungan detik.'
    ],
    features: [
      { title: 'Disposisi Cepat via Smartphone', desc: 'Pimpinan meninjau draft surat & memberikan instruksi disposisi langsung via HP.' },
      { title: 'Tracking Surat Real-Time', desc: 'Pelacakan posisi dokumen, waktu penanganan, & indikator keterlambatan.' },
      { title: 'Digital Archiving & OCR Search', desc: 'Pencarian berkas lama instan berdasarkan nomor surat, perihal, atau instansi pengirim.' },
      { title: 'Keamanan Hak Akses Multi-Level', desc: 'Pembatasan rahasia jabatan, e-signature verifiable, & audit trail lengkap.' }
    ],
    workflow: [
      { num: '1', title: 'Agenda Surat Masuk', desc: 'Petugas agenda mengunggah/menginput surat masuk ke sistem GovPly.' },
      { num: '2', title: 'Disposisi Pimpinan via Mobile', desc: 'Kepala instansi menerima notifikasi dan meneruskan disposisi ke Kabid/Staf.' },
      { num: '3', title: 'Tindak Lanjut & Arsip Automated', desc: 'Staf menyelesaikan instruksi dan dokumen terarsip rapi tanpa ruang berkas.' }
    ],
    roi: 'Memangkas waktu proses disposisi surat dari 3-5 hari menjadi kurang dari 10 menit dan menghemat 80% anggaran kertas instansi.'
  },

  rekan: {
    id: 'rekan',
    name: 'Rekan',
    sector: 'SDM & Payroll Perusahaan',
    color: '#2E8BC9',
    tagline: 'Platform HRIS, Absensi GPS, & Automated Payroll TER PPh 21',
    heroDesc: 'Membantu perusahaan menghitung gaji, pajak PPh 21 TER, dan BPJS karyawan secara akurat dan sesuai aturan terbaru, memangkas waktu proses payroll dari berhari-hari menjadi hitungan menit.',
    problems: [
      'Hitung gaji, lembur, dan potongan BPJS/Pajak secara manual di Excel memakan 3-5 hari dan rentan salah.',
      'Perubahan regulasi TER PPh 21 dan kalkulasi BPJS Kesehatan/Ketenagakerjaan membingungkan tim HR.',
      'Absensi kartu/mesin fisik mudah dititipkan (buddy punching) dan birokrasi cuti berbasis kertas rumit.'
    ],
    solutions: [
      'Kalkulasi payroll & pajak TER PPh 21 otomatis yang menghasilkan slip gaji & laporan e-SPT siap pakai.',
      'Absensi selfie GPS Geofencing di smartphone karyawan yang mencegah kecurangan lokasi.',
      'Pengajuan cuti, lembur, & klaim reimbursement mandiri (Employee Self-Service) dalam 1 aplikasi.'
    ],
    features: [
      { title: 'Kalkulasi TER PPh 21 & BPJS', desc: 'Penghitungan pajak penghasilan aturan terbaru & jaminan sosial otomatis presisi.' },
      { title: 'Absensi GPS Geofencing', desc: 'Karyawan absen di radius lokasi kerja yang ditentukan lengkap dengan foto selfie.' },
      { title: 'Self-Service Cuti & Lembur', desc: 'Karyawan mengajukan via HP, atasan melakukan persetujuan digital instant.' },
      { title: 'HR Analytics & Audit Trail', desc: 'Grafik rasio turnover, keaktifan jam kerja, & riwayat perubahan gaji transparan.' }
    ],
    workflow: [
      { num: '1', title: 'Clock-in & Aktivitas Harian', desc: 'Absensi otomatis terekam lengkap dengan verifikasi lokasi geofence GPS.' },
      { num: '2', title: 'Kalkulasi Payroll 1-Klik', desc: 'Sistem menarik data kehadiran, cuti, lembur, & pajak TER PPh 21 secara presisi.' },
      { num: '3', title: 'Distribusi Slip Gaji Digital', desc: 'Gaji ditransfer dan slip gaji terenkripsi langsung terkirim ke HP karyawan.' }
    ],
    roi: 'Menghemat 90% waktu pemrosesan payroll bulanan HR dan menjamin kepatuhan pajak 100% bebas sanksi regulasi.'
  },

  cultiva: {
    id: 'cultiva',
    name: 'Cultiva',
    sector: 'Perkebunan & Agrobisnis',
    color: '#1BA37A',
    tagline: 'Platform Operasional Agrobisnis & Pengendalian COGS Kebun',
    heroDesc: 'Membantu pemilik kebun mengunci kebocoran biaya produksi dan memastikan hasil panen sesuai target, sehingga margin keuntungan lebih terjaga dan produk lebih dipercaya pembeli pasar ekspor.',
    problems: [
      'Pencatatan manual biaya pupuk, obat, dan Harian Lepas (BHK) tidak sinkron dengan hasil panen, memicu kebocoran COGS.',
      'Monitoring kondisi kelembapan tanah & kesehatan tanaman terlambat karena mengandalkan patroli fisik manual.',
      'Hasil perkiraan panen sering meleset dari komitmen buyer, memicu denda keterlambatan penyerahan.'
    ],
    solutions: [
      'Pengendalian HPP/COGS per blok lahan yang mencatat pemakaian sarana produksi (saprotan) & tenaga kerja.',
      'Integrasi Sensor IoT tanah & stasiun cuaca lokasi untuk deteksi dini risiko fase tanam.',
      'Manajemen rantai pasok panen terintegrasi dari penimbangan di kebun hingga pengiriman ke pabrik/buyer.'
    ],
    features: [
      { title: 'Pengendalian COGS per Blok', desc: 'Pelacakan rinci biaya pupuk, pestisida, & upah pekerja per hektar tanaman.' },
      { title: 'Monitoring Presisi IoT & Sensor', desc: 'Integrasi kelembapan tanah, curah hujan, & suhu udara lokasi perkebunan.' },
      { title: 'Verifikasi Kegiatan Mandor', desc: 'Aplikasi mobile lapangan untuk foto bukti pekerjaan pemupukan & pemanenan.' },
      { title: 'Transparansi Bagi Hasil Plasma', desc: 'Rekonsiliasi data pinjaman sarana produksi & hasil panen petani mitra secara terbuka.' }
    ],
    workflow: [
      { num: '1', title: 'Mapping Blok & Rencana Tanam', desc: 'Pengaturan batas petak kebun, komoditas, dan estimasi kebutuhan sarana produksi.' },
      { num: '2', title: 'Input Kegiatan & Sensor IoT', desc: 'Mandor melaporkan pemupukan via HP dan sensor mengirim kondisi lahan real-time.' },
      { num: '3', title: 'Panen & Rekap Margin HPP', desc: 'Hasil panen ditimbang, dicocokkan dengan COGS, dan laporan margin siap dianalisis.' }
    ],
    roi: 'Menekan kebocoran biaya operasional lapangan hingga 20% dan meningkatkan akurasi estimasi jadwal panen untuk kontrak buyer.'
  },

  digisale: {
    id: 'digisale',
    name: 'DigiSale POS',
    sector: 'Retail & Toko Multi-Cabang',
    color: '#D98B2B',
    tagline: 'Kasir Offline-First, Stok Multi-Cabang, & Kontrol Piutang Toko',
    heroDesc: 'Membantu pemilik toko kelontong dan bahan bangunan mencegah utang pelanggan yang tak tertagih, sekaligus memastikan kasir tetap bisa melayani pembeli meski internet toko sedang mati.',
    problems: [
      'Catatan kasbon/utang pelanggan di buku saku sering terselip atau lupa ditagih, menjadi piutang macet.',
      'Aplikasi kasir cloud biasa terhenti saat internet mati, pembeli antre panjang dan beralih ke toko competitor.',
      'Pusing menghitung konversi satuan grosir ke eceran (Dus -> Pcs, Sak -> Kg) yang membuat stok fisik selisih.'
    ],
    solutions: [
      'Manajemen piutang pelanggan terstruktur dengan pengingat jatuh tempo otomatis.',
      'Arsitektur Kasir Offline-First: Transaksi tetap berjalan 100% lancar walau internet mati dan tersinkron otomatis saat online.',
      'Konversi satuan bertingkat otomatis dan monitoring stok multi-cabang dari satu dashboard HP.'
    ],
    features: [
      { title: 'Arsitektur Offline-First', desc: 'Kasir bebas jualan tanpa koneksi internet; data otomatis tersinkron saat terhubung.' },
      { title: 'Manajemen Kasbon & Piutang', desc: 'Pencatatan batas kredit pelanggan, histori bayar, & pengingat jatuh tempo WA.' },
      { title: 'Konversi Satuan Bertingkat', desc: 'Penjualan otomatis memotong stok grosir ke eceran secara presisi tanpa selisih.' },
      { title: 'Multi-Cabang & Audit Stok', desc: 'Pantau omzet harian & sisa stok barang laris di semua toko langsung dari HP pimpinan.' }
    ],
    workflow: [
      { num: '1', title: 'Setup Katalog & Satuan Grosir', desc: 'Input produk, harga eceran/grosir, dan limit utang pelanggan setia.' },
      { num: '2', title: 'Transaksi Kasir Cepat (Offline/Online)', desc: 'Kasir melayani pembayaran, cetak struk, atau catat piutang tanpa hambatan.' },
      { num: '3', title: 'Sinkronisasi & Konsolidasi Omzet', desc: 'Pemilik toko menerima laporan laba rugi & peringatan stok menipis secara otomatis.' }
    ],
    roi: 'Mencegah 100% kehilangan omzet saat mati internet dan menekan piutang macet pelanggan hingga 75%.'
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  setupNavigation();
  await loadProductContentData();
  await refreshLeadsData();
  handleRouting();
  window.addEventListener('hashchange', handleRouting);
});

// ESC Key & Backdrop Click Handlers
window.handleBackdropClick = function(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    closeImageModal();
    closeDemoModal();
    closeInvestorModal();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModal();
    closeDemoModal();
    closeInvestorModal();
  }
});

// Load extracted JSON if available
async function loadProductContentData() {
  try {
    const res = await fetch('assets/products_content.json');
    if (res.ok) {
      productsContent = await res.json();
    }
  } catch (err) {
    console.warn('Using metadata fallback:', err);
  }
}

// Fetch Leads Data for Admin
async function refreshLeadsData() {
  try {
    const res = await fetch('/api/leads');
    if (res.ok) {
      leadsData = await res.json();
    } else {
      leadsData = JSON.parse(localStorage.getItem('abp_leads_backup') || '[]');
    }
  } catch (err) {
    leadsData = JSON.parse(localStorage.getItem('abp_leads_backup') || '[]');
  }
  updateLeadBadgeCount();
}

function updateLeadBadgeCount() {
  const badge = document.getElementById('lead-count-badge');
  if (badge) {
    badge.textContent = leadsData.length;
  }
}

// Navigation & Mobile Menu Handler
function setupNavigation() {
  const toggle = document.getElementById('mobile-toggle');
  const links = document.getElementById('nav-links');
  
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  document.querySelectorAll('.dropdown-menu a').forEach(item => {
    item.addEventListener('click', () => {
      if (links) links.classList.remove('open');
    });
  });
}

// SPA Router
function handleRouting() {
  const hash = window.location.hash || '#home';
  const appView = document.getElementById('app-view');
  
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  
  if (hash === '#home' || hash === '') {
    const homeNav = document.querySelector('[data-route="home"]');
    if (homeNav) homeNav.classList.add('active');
    renderHomePage(appView);
  } else if (hash.startsWith('#produk/')) {
    const productId = hash.replace('#produk/', '');
    renderProductPage(appView, productId);
  } else if (hash === '#investor') {
    const invNav = document.querySelector('[data-route="investor"]');
    if (invNav) invNav.classList.add('active');
    renderInvestorPage(appView);
  } else if (hash === '#kemitraan') {
    const kamNav = document.querySelector('[data-route="kemitraan"]');
    if (kamNav) kamNav.classList.add('active');
    renderPartnershipPage(appView);
  } else if (hash === '#kontak') {
    const konNav = document.querySelector('[data-route="kontak"]');
    if (konNav) konNav.classList.add('active');
    renderContactPage(appView);
  } else if (hash === '#admin') {
    const admNav = document.querySelector('[data-route="admin"]');
    if (admNav) admNav.classList.add('active');
    renderAdminPage(appView);
  } else {
    renderHomePage(appView);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================
 * LEAD SUBMISSION & LOGGING ENGINE
 * ========================================== */

async function recordLeadSubmission(leadData) {
  const dateObj = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = dateObj.toLocaleDateString('id-ID', options) + ' WIB';

  leadData.timestamp = formattedTime;

  const existingBackup = JSON.parse(localStorage.getItem('abp_leads_backup') || '[]');
  existingBackup.unshift(leadData);
  localStorage.setItem('abp_leads_backup', JSON.stringify(existingBackup));

  try {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
  } catch (err) {
    console.warn('API POST error, saved locally:', err);
  }

  await refreshLeadsData();
}

/* ==========================================
 * VIEW RENDERERS
 * ========================================== */

// 1. HOMEPAGE
function renderHomePage(container) {
  container.innerHTML = `
    <section class="hero">
      <div class="wrap">
        <div class="hero-eyebrow"><span class="rule"></span> PT. Anugerah Bakti Prima</div>
        <h1>Membangun bisnis yang menjadi tulang punggung institusi Indonesia sehari-hari.</h1>
        <p class="lede">Kami memiliki dan mengembangkan tujuh lini usaha berlangganan yang melayani kebutuhan operasional riil — mulai dari RT, gereja, dan instansi pemerintah, hingga jasa lapangan, perkebunan, dan toko ritel.</p>
        
        <div class="hero-cta">
          <a href="#produk/rtnet" class="btn btn-primary">Lihat 7 Portofolio Bisnis</a>
          <a href="#investor" class="btn btn-ghost">Investor Relations & Tesis Pasar →</a>
        </div>

        <div class="hero-stats">
          <div class="stat"><b>7</b><span>Lini SaaS Berlangganan</span></div>
          <div class="stat"><b>7</b><span>Sektor Institusi & Pasar</span></div>
          <div class="stat"><b>3</b><span>Pihak Dilayani (Pemilik, Staf, Klien)</span></div>
          <div class="stat"><b>100%</b><span>Offline-First & Separated Data</span></div>
        </div>
      </div>
    </section>

    <section id="about-sec">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Tentang Perusahaan Holding</div>
            <h2>Satu holding, banyak sektor riil yang kami pahami secara mendalam.</h2>
          </div>
          <p class="sub">Setiap lini usaha berdiri dan dikelola dengan fokus mendalam pada satu bidang, namun seluruhnya mengikuti standar mutu, keandalan, dan keamanan data yang sama.</p>
        </div>

        <div class="pillars-grid">
          <div class="pillar-item">
            <span class="pillar-icon">🔒</span>
            <h3>Kerahasiaan Terjaga</h3>
            <p>Data setiap pelanggan tersimpan secara terpisah (tenant isolation) dan tidak akan pernah tercampur satu sama lain.</p>
          </div>
          <div class="pillar-item">
            <span class="pillar-icon">⚡</span>
            <h3>Selalu Bisa Beroperasi</h3>
            <p>Sistem dirancang dengan arsitektur offline-first. Operasional di lokasi pelanggan tetap berjalan walau internet terputus.</p>
          </div>
          <div class="pillar-item">
            <span class="pillar-icon">📱</span>
            <h3>Menjangkau Semua Peran</h3>
            <p>Dapat diakses oleh pimpinan/pemilik usaha dari kantor maupun staf dan teknisi yang bekerja langsung di lapangan.</p>
          </div>
        </div>
      </div>
    </section>

    <section style="background:var(--paper-dim);">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Etalase Portofolio Bisnis</div>
            <h2>Tujuh lini bisnis SaaS berlangganan ABP.</h2>
          </div>
          <p class="sub">Klik pada setiap produk di bawah untuk melihat pratinjau antarmuka dan nilai tambah operasionalnya.</p>
        </div>

        <div class="matrix-tabs" id="matrix-tabs-container">
          ${Object.keys(productMetadata).map((pid, idx) => {
            const p = productMetadata[pid];
            return `<button class="matrix-tab ${idx === 0 ? 'active' : ''}" onclick="switchMatrixTab('${pid}')">
              <span style="width:8px;height:8px;border-radius:50%;background:${p.color};"></span>
              ${p.name}
            </button>`;
          }).join('')}
        </div>

        <div id="matrix-card-target">
          ${renderMatrixCardHTML('rtnet')}
        </div>
      </div>
    </section>

    <section style="background:var(--ink); color:var(--paper);">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label" style="color:var(--brass);"><span class="rule" style="background:var(--brass);"></span> Peluang Akselerasi</div>
            <h2 style="color:var(--paper);">Tumbuh bersama ekosistem ABP.</h2>
          </div>
          <p class="sub" style="color:rgba(246,244,236,0.7);">Kami membuka kolaborasi bagi investor yang ingin mendukung ekspansi SaaS di Indonesia serta mitra daerah untuk distribusi produk.</p>
        </div>

        <div class="partner-tracks" style="margin-top:0;">
          <div class="track-card" style="background:rgba(246,244,236,0.05); border-color:var(--line-dark);">
            <h3 style="color:var(--paper);">Bagi Investor Institusi & Angel</h3>
            <p style="color:rgba(246,244,236,0.75);">Pelajari tesis pasar B2B/B2G SaaS untuk sektor riil Indonesia dan minta berkas Executive Summary portofolio ABP.</p>
            <a href="#investor" class="btn btn-primary btn-sm">Buka Investor Hub →</a>
          </div>
          <div class="track-card" style="background:rgba(246,244,236,0.05); border-color:var(--line-dark);">
            <h3 style="color:var(--paper);">Bagi Mitra Reseller & Integrator</h3>
            <p style="color:rgba(246,244,236,0.75);">Dapatkan skema bagi hasil menarik dengan memasarkan produk ABP di kabupaten/kota Anda dengan pendampingan penuh.</p>
            <a href="#kemitraan" class="btn btn-ghost btn-sm">Pelajari Skema Kemitraan →</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMatrixCardHTML(productId) {
  const p = productMetadata[productId];
  const images = (productsContent[productId] && productsContent[productId].images) || [];
  const previewImg = images.length > 2 ? images[2] : (images[0] || '');

  return `
    <div class="matrix-card">
      <div class="matrix-card-info">
        <span class="sector-tag" style="color:${p.color};">${p.sector}</span>
        <h3>${p.name}</h3>
        <p><strong>${p.tagline}</strong> — ${p.heroDesc}</p>
        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <a href="#produk/${p.id}" class="btn btn-primary btn-sm">Jelajahi ${p.name} Selengkapnya →</a>
          <button class="btn btn-outline btn-sm" onclick="openDemoModal('${p.name}')">Minta Demo ${p.name}</button>
        </div>
      </div>
      <div class="matrix-card-preview" onclick="openImageModal('${previewImg}', '${p.name} Main Interface')">
        ${previewImg ? `<img src="${previewImg}" alt="${p.name} Preview">` 
          : `<div style="padding:60px; color:var(--ink-soft); font-weight:600;">Pratinjau Antarmuka ${p.name}</div>`}
        <small style="display:block; margin-top:8px; opacity:0.6;">Klik gambar untuk memperbesar</small>
      </div>
    </div>
  `;
}

window.switchMatrixTab = function(pid) {
  document.querySelectorAll('.matrix-tab').forEach(t => t.classList.remove('active'));
  event.target.closest('.matrix-tab').classList.add('active');
  const target = document.getElementById('matrix-card-target');
  if (target) target.innerHTML = renderMatrixCardHTML(pid);
};

// 2. PRODUCT DETAIL PAGE (PDP)
function renderProductPage(container, productId) {
  const p = productMetadata[productId];
  if (!p) {
    container.innerHTML = `<div class="wrap" style="padding:100px 0; text-align:center;"><h2>Produk tidak ditemukan</h2><a href="#home" class="btn btn-primary" style="margin-top:20px;">Kembali ke Beranda</a></div>`;
    return;
  }

  const pContent = productsContent[productId] || {};
  const images = pContent.images || [];
  const pagesText = pContent.pages_text || [];
  
  const heroImg = images.length > 2 ? images[2] : (images[0] || '');

  container.innerHTML = `
    <!-- PDP HERO WITH FEATURED SCREENSHOT -->
    <section class="pdp-hero">
      <div class="wrap">
        <div class="pdp-hero-grid">
          <div>
            <div class="pdp-badge" style="border-left: 3px solid ${p.color};">
              <span style="width:8px;height:8px;border-radius:50%;background:${p.color};"></span>
              ${p.sector}
            </div>
            <h1>${p.name}</h1>
            <div class="tagline">${p.tagline}</div>
            <p style="max-width:54ch; font-size:17.5px; color:rgba(246,244,236,0.8); margin-bottom:32px;">${p.heroDesc}</p>
            <div style="display:flex; gap:16px; flex-wrap:wrap;">
              <button class="btn btn-primary" onclick="openDemoModal('${p.name}')">Minta Demo & Penawaran ${p.name} →</button>
              <a href="#home" class="btn btn-ghost">← Portofolio Produk Lainnya</a>
            </div>
          </div>

          ${heroImg ? `
            <div class="pdp-hero-preview" onclick="openImageModal('${heroImg}', '${p.name} Main Interface')">
              <img src="${heroImg}" alt="${p.name} Main Interface Screenshot">
              <small style="display:block; margin-top:8px; color:rgba(246,244,236,0.7); font-size:12.5px;">🔍 Klik gambar untuk perbesar antarmuka ${p.name}</small>
            </div>
          ` : ''}
        </div>
      </div>
    </section>

    <!-- PROBLEM VS SOLUTION -->
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Analisis Operasional</div>
            <h2>Tantangan Sektor & Solusi ${p.name}</h2>
          </div>
        </div>

        <div class="problem-solution-grid">
          <div class="ps-card problem">
            <h3>⚠️ Kendala Operasional Saat Ini</h3>
            <ul>
              ${p.problems.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="ps-card solution">
            <h3>✅ Solusi Digital ${p.name}</h3>
            <ul>
              ${p.solutions.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES -->
    <section style="background:var(--paper-dim);">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Fitur Utama</div>
            <h2>Dirancang presisi untuk pengambil keputusan & tim lapangan.</h2>
          </div>
        </div>

        <div class="features-grid">
          ${p.features.map(f => `
            <div class="feature-card">
              <h4>${f.title}</h4>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FULL SLIDE DECK SCREENSHOT GALLERY -->
    ${images.length > 0 ? `
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Galeri Antarmuka & Modul Operasional</div>
            <h2>Screenshot Tangkapan Layar ${p.name} (${images.length} Slide)</h2>
          </div>
          <p class="sub">Klik pada masing-masing kartu slide untuk memperbesar dan mempelajari modul operasional.</p>
        </div>

        <div class="deck-gallery-grid">
          ${images.map((imgUrl, i) => {
            const pageTxt = pagesText[i] || '';
            const firstLine = pageTxt.split('\n')[0] || `Modul Operasional Slide ${i+1}`;
            const titleClean = firstLine.replace(/^[^\w]+/, '').trim();

            return `
              <div class="deck-card" onclick="openImageModal('${imgUrl}', '${p.name} — ${escapeHtml(titleClean)}')">
                <div class="deck-img-wrap">
                  <img src="${imgUrl}" alt="${p.name} Slide ${i+1}">
                </div>
                <div class="deck-card-info">
                  <h4>Slide ${i+1}: ${escapeHtml(titleClean.substring(0, 45))}</h4>
                  <span>🔍 Klik untuk perbesar tampilan</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- WORKFLOW TIMELINE -->
    <section style="background:var(--paper-card); border-top:1px solid var(--line);">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Alur Penggunaan</div>
            <h2>3 Langkah Operasional ${p.name} di Lapangan</h2>
          </div>
        </div>

        <div class="workflow-timeline">
          ${p.workflow.map(wf => `
            <div class="wf-step">
              <div class="wf-num">${wf.num}</div>
              <div class="wf-content">
                <h4>${wf.title}</h4>
                <p>${wf.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="roi-banner">
          <div>
            <h3>Dampak ROI & Keuntungan Bisnis</h3>
            <p>${p.roi}</p>
          </div>
          <button class="btn btn-primary" onclick="openDemoModal('${p.name}')">Dapatkan Penawaran Khusus →</button>
        </div>
      </div>
    </section>
  `;
}

// 3. INVESTOR HUB PAGE
function renderInvestorPage(container) {
  container.innerHTML = `
    <section class="investor-hero">
      <div class="wrap">
        <div class="hero-eyebrow" style="color:var(--brass);"><span class="rule" style="background:var(--brass);"></span> Investor Relations & Pitch Deck</div>
        <h1>Tesis Investasi ABP: B2B SaaS untuk Sektor Riil Indonesia.</h1>
        <p>PT. Anugerah Bakti Prima membangun ekosistem 7 platform berlangganan yang menggarap pasar yang terabaikan oleh pemain besar — mulai dari institusi RT, gereja, instansi pemerintah, hingga agrobisnis & toko eceran.</p>
        <div style="display:flex; gap:16px; margin-top:32px; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="openInvestorModal()">Minta Executive Pitch Deck & Financial Highlights →</button>
          <a href="#kontak" class="btn btn-ghost">Diskusi dengan Management ABP</a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Market Size & Opportunity</div>
            <h2>Potensi Pasar Berulang (Recurring Revenue) di Indonesia</h2>
          </div>
        </div>

        <div class="market-matrix">
          <div class="market-card">
            <h3>Rukun Tetangga & RW</h3>
            <b>> 1.2 Juta RT/RW</b>
            <p>Pasar pengurusan komunitas yang membutuhkan transparansi kas & digitalisasi surat pengantar warga (RTnet).</p>
          </div>
          <div class="market-card">
            <h3>Gereja & Rumah Ibadah</h3>
            <b>> 75.000 Gereja</b>
            <p>Kebutuhan akuntabilitas dana persembahan dan efisiensi penjadwalan tim pelayanan & jemaat (Eklesia).</p>
          </div>
          <div class="market-card">
            <h3>Instansi Pemerintah & BUMD</h3>
            <b>> 500 Kab/Kota</b>
            <p>Pencegahan penumpukan berkas disposisi dan percepatan alur naskah dinas elektronik (GovPly).</p>
          </div>
          <div class="market-card">
            <h3>Agrobisnis & Perkebunan</h3>
            <b>> 14 Juta Ha Lahan</b>
            <p>Kebutuhan penguncian kebocoran biaya COGS dan monitoring presisi sensor IoT lahan panen (Cultiva).</p>
          </div>
          <div class="market-card">
            <h3>HRIS & Perusahaan Menengah</h3>
            <b>> 60 Juta Pekerja</b>
            <p>Otomatisasi penggajian, absensi GPS geofencing, & kepatuhan aturan TER PPh 21 pajak terbaru (Rekan).</p>
          </div>
          <div class="market-card">
            <h3>Jasa Lapangan & Retail</h3>
            <b>> 4.5 Juta Toko</b>
            <p>Pengelolaan kontrak kunjungan pest control (Servio) & sistem kasir offline-first penahan piutang (DigiSale).</p>
          </div>
        </div>
      </div>
    </section>

    <section style="background:var(--paper-dim);">
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Sinergi Portofolio</div>
            <h2>Mengapa Model Holding ABP Sangat Efisien?</h2>
          </div>
        </div>

        <div class="synergy-list">
          <div class="synergy-item">
            <div>
              <strong>Shared Engineering & Core Architecture</strong>
              <p style="margin:4px 0 0; font-size:14px; opacity:0.75;">Arsitektur offline-first, tenant data isolation, dan modul pembayaran dikembangkan secara terpusat untuk 7 produk.</p>
            </div>
            <span style="font-weight:700; color:var(--brass-dim);">CAPEX Efficient</span>
          </div>

          <div class="synergy-item">
            <div>
              <strong>Cross-Selling & Regional Partner Network</strong>
              <p style="margin:4px 0 0; font-size:14px; opacity:0.75;">Satu mitra reseller daerah dapat memasarkan RTnet, Eklesia, dan DigiSale POS sekaligus di wilayahnya.</p>
            </div>
            <span style="font-weight:700; color:var(--brass-dim);">Low CAC Scaling</span>
          </div>

          <div class="synergy-item">
            <div>
              <strong>High LTV / Low Churn Model</strong>
              <p style="margin:4px 0 0; font-size:14px; opacity:0.75;">Aplikasi menjadi sistem inti operasional harian institusi sehingga menciptakan sticky usage dan arus kas berlangganan yang sehat.</p>
            </div>
            <span style="font-weight:700; color:var(--brass-dim);">High Retention</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 4. PARTNERSHIP PAGE
function renderPartnershipPage(container) {
  container.innerHTML = `
    <section class="hero" style="padding:70px 0 50px;">
      <div class="wrap">
        <div class="hero-eyebrow"><span class="rule"></span> Program Kemitraan ABP</div>
        <h1>Tumbuh dan berkembang bersama produk-produk ABP.</h1>
        <p class="lede">Kami membuka jalur kerja sama bagi individu, perusahaan daerah, maupun penyedia teknologi pendukung.</p>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="partner-tracks">
          <div class="track-card">
            <h3>1. Mitra Reseller Daerah</h3>
            <p>Memasarkan dan mengimplementasikan produk ABP (seperti RTnet, Eklesia, DigiSale) di kabupaten/kota Anda dengan komisi berlangganan yang menarik.</p>
            <button class="btn btn-primary btn-sm" onclick="openDemoModal('Kemitraan Reseller Daerah')">Daftar Jadi Mitra Reseller →</button>
          </div>

          <div class="track-card">
            <h3>2. Kemitraan Instansi & Korporat</h3>
            <p>Kerja sama pengadaan langsung dengan pemerintah daerah, gereja pusat, koperasi, atau asosiasi perusahaan untuk implementasi skala besar.</p>
            <button class="btn btn-primary btn-sm" onclick="openDemoModal('Kemitraan Instansi/Korporat')">Diskusi Proyek Korporat →</button>
          </div>

          <div class="track-card">
            <h3>3. Integrasi Layanan Pendukung</h3>
            <p>Kolaborasi teknis bagi penyedia hardware sensor IoT, payment gateway digital, atau provider WhatsApp API untuk terhubung dengan ekosistem ABP.</p>
            <button class="btn btn-outline btn-sm" onclick="openDemoModal('Integrasi Layanan Pendukung')">Ajukan Integrasi Teknis →</button>
          </div>

          <div class="track-card">
            <h3>4. Investasi & Ekspansi SaaS</h3>
            <p>Dukungan pendanaan bagi investor yang tertarik mempercepat pertumbuhan lini bisnis SaaS ABP ke wilayah baru di Indonesia.</p>
            <button class="btn btn-outline btn-sm" onclick="openInvestorModal()">Diskusi Investasi →</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. CONTACT PAGE
function renderContactPage(container) {
  container.innerHTML = `
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Kontak Kami</div>
            <h2>Ceritakan kebutuhan Anda kepada tim ABP.</h2>
          </div>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <dl>
              <div>
                <dt>Perusahaan</dt>
                <dd>PT. Anugerah Bakti Prima</dd>
              </div>
              <div>
                <dt>Email Informasi & Sales</dt>
                <dd>info@abp-prima.id</dd>
              </div>
              <div>
                <dt>Telepon / WhatsApp Business</dt>
                <dd>+62 812-3456-7890</dd>
              </div>
              <div>
                <dt>Wilayah Operasional</dt>
                <dd>Seluruh Indonesia (Layanan Cloud & Implementasi On-Site)</dd>
              </div>
            </dl>
          </div>

          <form onsubmit="handleContactSubmit(event)">
            <div class="field-row">
              <div class="field">
                <label for="c-nama">Nama Lengkap *</label>
                <input type="text" id="c-nama" required placeholder="Nama Anda">
              </div>
              <div class="field">
                <label for="c-instansi">Instansi / Perusahaan *</label>
                <input type="text" id="c-instansi" required placeholder="Nama organisasi">
              </div>
            </div>

            <div class="field-row">
              <div class="field">
                <label for="c-email">Email *</label>
                <input type="email" id="c-email" required placeholder="nama@email.com">
              </div>
              <div class="field">
                <label for="c-produk">Produk / Topik *</label>
                <select id="c-produk">
                  <option>RTnet — RT/RW</option>
                  <option>Eklesia — Gereja</option>
                  <option>Servio — Pest Control</option>
                  <option>GovPly — Surat Instansi</option>
                  <option>Rekan — HRIS & Payroll</option>
                  <option>Cultiva — Agrobisnis</option>
                  <option>DigiSale POS — Retail</option>
                  <option>Kemitraan & Investasi</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="c-pesan">Pesan / Kendala Operasional</label>
              <textarea id="c-pesan" placeholder="Ceritakan pertanyaan atau rencana implementasi Anda..."></textarea>
            </div>

            <button type="submit" class="submit-btn">Kirim Pesan (Otomatis Dicatat) →</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// 6. ADMIN LEAD DASHBOARD PAGE (`#admin`)
async function renderAdminPage(container) {
  await refreshLeadsData();

  container.innerHTML = `
    <section>
      <div class="wrap">
        <div class="sec-head">
          <div>
            <div class="sec-label"><span class="rule"></span> Dashboard Admin</div>
            <h2>📋 Pusat Pesan & Lead Masuk</h2>
          </div>
          <div style="display:flex; gap:12px;">
            <button class="btn btn-outline btn-sm" onclick="exportLeadsToCSV()">📥 Unduh Rekap (CSV)</button>
            <button class="btn btn-ghost btn-sm" style="color:var(--ink);" onclick="refreshAdminLeads()">🔄 Refresh Data</button>
          </div>
        </div>

        <p>Halaman ini mencatat secara otomatis <strong>SIAPA</strong> yang mengisi, <strong>KAPAN</strong> (waktu submit presisi), serta rincian kontak & kebutuhan produk mereka.</p>

        ${leadsData.length === 0 ? `
          <div style="background:var(--paper-card); border:1px solid var(--line); border-radius:var(--radius-md); padding:60px; text-align:center; margin-top:20px;">
            <h3>Belum Ada Pesan Masuk</h3>
            <p style="opacity:0.7;">Isi salah satu form (Demo, Investor, atau Kontak) untuk menguji pencatatan lead otomatis.</p>
          </div>
        ` : `
          <div class="admin-table-wrap">
            <table class="lead-table">
              <thead>
                <tr>
                  <th>Waktu Submit (Kapan)</th>
                  <th>Nama & Instansi (Siapa)</th>
                  <th>Kontak</th>
                  <th>Kategori / Produk</th>
                  <th>Pesan / Catatan</th>
                </tr>
              </thead>
              <tbody>
                ${leadsData.map(item => `
                  <tr>
                    <td style="white-space:nowrap; font-weight:600; font-size:13px; color:var(--brass-dim);">
                      ${item.timestamp || 'N/A'}
                    </td>
                    <td>
                      <strong>${escapeHtml(item.nama || '-')}</strong><br>
                      <small style="opacity:0.7;">${escapeHtml(item.instansi || item.firm || '-')}</small>
                    </td>
                    <td>
                      <a href="mailto:${escapeHtml(item.email)}">${escapeHtml(item.email || '-')}</a><br>
                      <small><a href="https://wa.me/${formatPhoneWA(item.phone)}" target="_blank">📱 WA: ${escapeHtml(item.phone || '-')}</a></small>
                    </td>
                    <td>
                      <span class="lead-tag ${getTagClass(item.type)}">${escapeHtml(item.type || 'Pesan')}</span><br>
                      <small style="font-weight:600;">${escapeHtml(item.produk || '-')}</small>
                    </td>
                    <td style="max-width:280px; font-size:13.5px;">
                      ${escapeHtml(item.pesan || '-')}
                    </td>
                  </tr>
                `).map(row => row).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    </section>
  `;
}

function getTagClass(type) {
  if (!type) return 'tag-contact';
  if (type.includes('Demo')) return 'tag-demo';
  if (type.includes('Investor')) return 'tag-investor';
  return 'tag-contact';
}

function formatPhoneWA(phone) {
  if (!phone) return '';
  let p = phone.replace(/[^0-9]/g, '');
  if (p.startsWith('0')) p = '62' + p.substring(1);
  return p;
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

window.refreshAdminLeads = async function() {
  const container = document.getElementById('app-view');
  if (container) await renderAdminPage(container);
};

window.exportLeadsToCSV = function() {
  if (!leadsData || leadsData.length === 0) {
    alert('Belum ada data pesan untuk diunduh.');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "ID,Waktu Submit (Kapan),Nama (Siapa),Instansi/Firma,Email,WhatsApp/HP,Kategori/Tipe,Produk,Pesan\n";

  leadsData.forEach(row => {
    let line = [
      `"${row.id || ''}"`,
      `"${row.timestamp || ''}"`,
      `"${row.nama || ''}"`,
      `"${row.instansi || row.firm || ''}"`,
      `"${row.email || ''}"`,
      `"${row.phone || ''}"`,
      `"${row.type || ''}"`,
      `"${row.produk || ''}"`,
      `"${(row.pesan || '').replace(/"/g, '""')}"`
    ].join(",");
    csvContent += line + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `ABP_Leads_Report_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/* ==========================================
 * MODAL & FORM HANDLERS
 * ========================================== */

window.openDemoModal = function(productName = '') {
  const modal = document.getElementById('demo-modal');
  const select = document.getElementById('demo-produk');
  const title = document.getElementById('demo-modal-title');
  
  if (productName && select) {
    title.textContent = `Diskusi & Demo ${productName}`;
    for (let opt of select.options) {
      if (opt.value.toLowerCase().includes(productName.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }
  if (modal) modal.classList.add('open');
};

window.closeDemoModal = function() {
  const modal = document.getElementById('demo-modal');
  if (modal) modal.classList.remove('open');
};

window.openInvestorModal = function() {
  const modal = document.getElementById('investor-modal');
  if (modal) modal.classList.add('open');
};

window.closeInvestorModal = function() {
  const modal = document.getElementById('investor-modal');
  if (modal) modal.classList.remove('open');
};

window.openImageModal = function(src, caption) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (img && modal) {
    img.src = src;
    if (cap) cap.textContent = caption || 'Pratinjau Antarmuka';
    modal.classList.add('open');
  }
};

window.closeImageModal = function() {
  const modal = document.getElementById('image-modal');
  if (modal) modal.classList.remove('open');
};

// Form Submissions with Automatic Timestamp & Lead Logging
window.handleDemoSubmit = async function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');

  const lead = {
    type: 'Demo Request',
    nama: document.getElementById('demo-nama').value,
    instansi: document.getElementById('demo-instansi').value,
    email: document.getElementById('demo-email').value,
    phone: document.getElementById('demo-phone').value,
    produk: document.getElementById('demo-produk').value,
    pesan: document.getElementById('demo-pesan').value
  };

  await recordLeadSubmission(lead);

  if (btn) {
    btn.textContent = 'Permintaan Terkirim & Dicatat ✓';
    btn.disabled = true;
    btn.style.background = '#1BA37A';
  }

  setTimeout(() => {
    closeDemoModal();
    if (confirm('Pesan Anda telah dicatat lengkap dengan timestamp! Apakah Anda ingin langsung terhubung ke WhatsApp Sales ABP?')) {
      const waMsg = encodeURIComponent(`Halo ABP, nama saya ${lead.nama} dari ${lead.instansi}. Saya berminat pada produk ${lead.produk}.`);
      window.open(`https://wa.me/6281234567890?text=${waMsg}`, '_blank');
    }
  }, 1000);
};

window.handleInvestorSubmit = async function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');

  const lead = {
    type: 'Investor Pitch Deck',
    nama: document.getElementById('inv-nama').value,
    firm: document.getElementById('inv-firm').value,
    email: document.getElementById('inv-email').value,
    phone: document.getElementById('inv-phone').value,
    produk: 'Executive Pitch Deck',
    pesan: 'Permintaan Executive Pitch Deck & Financial Highlights ABP'
  };

  await recordLeadSubmission(lead);

  if (btn) {
    btn.textContent = 'Permintaan Berkas Investor Terkirim & Dicatat ✓';
    btn.disabled = true;
    btn.style.background = '#1BA37A';
  }

  setTimeout(() => {
    closeInvestorModal();
  }, 1500);
};

window.handleContactSubmit = async function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');

  const lead = {
    type: 'Kontak Umum',
    nama: document.getElementById('c-nama').value,
    instansi: document.getElementById('c-instansi').value,
    email: document.getElementById('c-email').value,
    produk: document.getElementById('c-produk').value,
    pesan: document.getElementById('c-pesan').value
  };

  await recordLeadSubmission(lead);

  if (btn) {
    btn.textContent = 'Pesan Terkirim & Dicatat ✓';
    btn.disabled = true;
    btn.style.background = '#1BA37A';
  }
};
