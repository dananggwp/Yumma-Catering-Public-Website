import type { GalleryItem, MenuItem, Package, Vendor } from "@/types";

export const site = {
  name: "Yumma Catering",
  description:
    "Catering rumahan premium, wedding, sweet corner, dan ekosistem partner event di Indonesia.",
  instagram: "https://instagram.com/yummacatering",
  tiktok: "https://tiktok.com/@yummacatering",
  maps: "https://www.google.com/maps?q=Jakarta%20Indonesia&output=embed"
};

export const menus: MenuItem[] = [
  {
    id: "senin-rendang",
    date: "2026-05-25",
    title: "Rendang Ayam, Sayur Lodeh, Perkedel",
    description: "Menu keluarga hangat dengan bumbu rendang lembut dan lauk komplet.",
    image: "/images/menu/senin-rendang.jpg",
    tags: ["favorite", "kids friendly"],
    portion: "1 paket untuk 4-5 orang",
    halal: true
  },
  {
    id: "selasa-ikan",
    date: "2026-05-26",
    title: "Ikan Dabu-Dabu, Sup Jagung, Tempe Bacem",
    description: "Segar, sedikit pedas, dan seimbang untuk makan siang keluarga.",
    image: "/images/menu/selasa-ikan.jpg",
    tags: ["spicy", "healthy"],
    portion: "1 paket untuk 4-5 orang",
    halal: true
  },
  {
    id: "rabu-ayam",
    date: "2026-05-27",
    title: "Ayam Panggang Madu, Capcay, Tahu Jamur",
    description: "Rasa manis gurih premium dengan sayur warna-warni.",
    image: "/images/menu/rabu-ayam.jpg",
    tags: ["favorite", "healthy"],
    portion: "1 paket untuk 4-5 orang",
    halal: true
  },
  {
    id: "kamis-sapi",
    date: "2026-05-28",
    title: "Sapi Lada Hitam, Tumis Buncis, Bakwan Jagung",
    description: "Menu restoran yang dibuat nyaman untuk makan di rumah.",
    image: "/images/menu/kamis-sapi.jpg",
    tags: ["favorite"],
    portion: "1 paket untuk 4-5 orang",
    halal: true
  },
  {
    id: "jumat-nasi",
    date: "2026-05-29",
    title: "Nasi Kebuli Ayam, Acar, Sambal Goreng",
    description: "Akhir pekan dimulai dengan aroma rempah yang meriah.",
    image: "/images/menu/jumat-nasi.jpg",
    tags: ["spicy", "favorite"],
    portion: "1 paket untuk 4-5 orang",
    halal: true
  }
];

export const packages: Package[] = [
  {
    id: "weekly",
    name: "Paket Mingguan",
    price: 625000,
    cadence: "5 hari kerja",
    serving: "4-5 orang per hari",
    benefits: ["Menu Senin-Jumat berbeda", "Gratis konsultasi preferensi", "Pengingat menu via WhatsApp"],
    featured: true
  },
  {
    id: "monthly",
    name: "Paket Bulanan",
    price: 2350000,
    cadence: "20 hari kerja",
    serving: "4-5 orang per hari",
    benefits: ["Prioritas slot dapur", "Rotasi menu sehat", "Penyesuaian alergi ringan"]
  },
  {
    id: "family",
    name: "Family Package",
    price: 780000,
    cadence: "per minggu",
    serving: "6-8 orang",
    benefits: ["Porsi keluarga besar", "Lauk utama ekstra", "Cocok untuk orang tua dan anak"]
  },
  {
    id: "office",
    name: "Office Package",
    price: 32000,
    cadence: "per pax",
    serving: "minimum 30 pax",
    benefits: ["Box lunch rapi", "Invoice perusahaan", "Pengiriman terjadwal"]
  },
  {
    id: "healthy",
    name: "Healthy Package",
    price: 720000,
    cadence: "5 hari kerja",
    serving: "2-3 orang",
    benefits: ["Lebih rendah minyak", "Banyak sayuran", "Menu protein seimbang"]
  }
];

export const vendors: Vendor[] = [
  {
    id: "flora-decor",
    name: "Flora Decor Studio",
    category: "Decoration",
    image: "/images/vendors/flora-decor.jpg",
    instagram: "https://instagram.com/floradecor",
    description: "Dekor intimate wedding bernuansa floral modern.",
    rating: 4.9,
    portfolio: ["Pelaminan outdoor", "Tablescape", "Akad minimalis"]
  },
  {
    id: "cerita-lensa",
    name: "Cerita Lensa",
    category: "Photographer",
    image: "/images/vendors/cerita-lensa.jpg",
    instagram: "https://instagram.com/ceritalensa",
    description: "Dokumentasi wedding natural dan hangat.",
    rating: 4.8,
    portfolio: ["Wedding", "Engagement", "Corporate event"]
  },
  {
    id: "nada-mc",
    name: "Nada MC & Host",
    category: "MC",
    image: "/images/vendors/nada-mc.jpg",
    instagram: "https://instagram.com/nadamc",
    description: "MC bilingual untuk akad, resepsi, dan corporate gathering.",
    rating: 4.7,
    portfolio: ["Wedding reception", "Product launch", "Family event"]
  },
  {
    id: "aurora-mua",
    name: "Aurora Makeup",
    category: "Makeup artist",
    image: "/images/vendors/aurora-makeup.jpg",
    instagram: "https://instagram.com/auroramakeup",
    description: "Makeup flawless untuk pengantin dan keluarga.",
    rating: 4.9,
    portfolio: ["Bridal", "Mother of bride", "Prewedding"]
  }
];

export const gallery: GalleryItem[] = [
  { id: "g1", category: "Catering", title: "Paket keluarga harian", image: "/images/hero/hero-catering.jpg" },
  { id: "g2", category: "Wedding", title: "Buffet wedding premium", image: "/images/wedding/wedding-hero.jpg" },
  { id: "g3", category: "Sweet Corner", title: "Dessert table", image: "/images/gallery/sweet-corner-dessert.jpg" },
  { id: "g4", category: "Events", title: "Corporate lunch", image: "/images/gallery/corporate-lunch.jpg" },
  { id: "g5", category: "Behind The Scene", title: "Dapur Yumma", image: "/images/gallery/kitchen-behind-scenes.jpg" },
  { id: "g6", category: "Wedding", title: "Live cooking station", image: "/images/wedding/live-cooking-station.jpg" }
];

export const testimonials = [
  {
    name: "Ibu Ratna",
    role: "Pelanggan catering harian",
    quote: "Menu Yumma selalu terasa rumahan tapi presentasinya rapi. Orang tua saya cocok dengan rasanya."
  },
  {
    name: "Dewi & Arman",
    role: "Wedding intimate 250 pax",
    quote: "Timnya komunikatif, buffet cantik, dan keluarga banyak yang memuji rasa makanannya."
  },
  {
    name: "HR Nusantara Co.",
    role: "Corporate lunch",
    quote: "Pengiriman tepat waktu dan invoice jelas. Membantu sekali untuk kebutuhan kantor."
  }
];

export const faqs = [
  ["Apakah harus daftar akun untuk pesan?", "Tidak. Pelanggan bisa tetap pesan langsung lewat WhatsApp seperti biasa."],
  ["Apakah menu bisa disesuaikan?", "Bisa, selama slot dapur tersedia. Tim Yumma akan bantu cek alergi dan preferensi."],
  ["Apakah menerima wedding luar kota?", "Bisa didiskusikan berdasarkan tanggal, jumlah tamu, dan kebutuhan vendor."],
  ["Apakah semua menu halal?", "Ya, Yumma menggunakan bahan halal dan proses dapur yang terjaga."]
];
