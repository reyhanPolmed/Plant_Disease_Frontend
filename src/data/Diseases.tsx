export type Disease = {
  slug: string
  title: string
  subtitle: string
  pathogen: string
  host: string
  favorable: string
  gallery: { src: string; alt: string; caption?: string }[]
  symptoms: {
    description: string[]
    progression: string[]
  }
  cycle: {
    spread: string
    environment: string[]
    stages: string[]
  }
  diagnosis: string[]
  management: {
    cultural: string[]
  }
}

export const diseases: Record<string, Disease> = {
  "busuk-pelepah-jagung": {
    slug: "busuk-pelepah-jagung",
    title: "Busuk Pelepah Jagung (Rhizoctonia solani)",
    subtitle:
      "Penyakit jamur yang menyerang pelepah dan daun jagung; pada kondisi parah dapat menjalar ke klobot hingga biji dan menurunkan kualitas hasil.",
    pathogen: "Rhizoctonia solani",
    host: "Jagung (Zea mays)",
    favorable: "Lembap tinggi (>90%) dan suhu hangat 28–32°C",
    gallery: [
      { src: "/images/reference.png", alt: "Contoh tampilan UI referensi", caption: "Referensi tata letak UI" },
      { src: "/lesi-oval-pucat-pada-pelepah.jpg", alt: "Lesi oval pucat pada pelepah" },
      { src: "/miselium-putih-benang-laba-laba.jpg", alt: "Miselium putih seperti benang" },
    ],
    symptoms: {
      description: [
        "Menyerang pelepah dan daun; pada kondisi parah dapat menjalar ke tongkol.",
        "Bercak/lesi abu-abu kehijauan atau pucat keputihan, bentuk oval/tidak beraturan, tepi coklat tua/keunguan.",
        "Pada kondisi lembap terlihat miselium jamur putih seperti benang.",
      ],
      progression: [
        "Awal: Bercak kecil pada pelepah dekat permukaan tanah.",
        "Berkembang: Bercak membesar dan menyatu; menyebar ke pelepah atas dan helaian daun; daun berat mengering dan mati.",
        "Parah: Infeksi mengenai klobot hingga biji; tongkol membusuk dan kualitas biji turun drastis.",
      ],
    },
    cycle: {
      spread:
        "Penyebaran melalui kontak tanaman sehat dengan jaringan terinfeksi; jamur bertahan di tanah/seresah, dapat terbawa aliran irigasi sebagai sklerotia.",
      environment: [
        "Kelembapan udara tinggi (>90%), terutama pada kanopi rimbun.",
        "Suhu hangat 28–32°C.",
        "Lebih parah pada musim hujan.",
      ],
      stages: [
        "Inkubasi: Miselium aktif di tanah/seresah lalu menginfeksi pelepah bawah.",
        "Perkembangan: Menyebar ke atas dari pelepah ke pelepah; bercak makin jelas dan membesar.",
        "Penularan: Terjadi saat jaringan terinfeksi bersentuhan dengan tanaman sehat, terutama pada populasi rapat.",
      ],
    },
    diagnosis: [
      "Periksa pangkal tanaman terutama pelepah yang menyentuh tanah.",
      "Cari bercak oval/tidak beraturan pucat dengan tepi coklat gelap ('kulit ular' / 'mata katak').",
      "Saat lembap perhatikan lapisan miselium putih tipis di atas bercak.",
      "Amati pola sebaran dari bawah ke atas dan lebih parah di area rimbun/lembap.",
    ],
    management: {
      cultural: [
        "Rotasi dengan non-inang (kedelai, kacang tanah, umbi-umbian); hindari jagung/padi terus-menerus.",
        "Sanitasi lahan: bersihkan seresah dan lakukan pembajakan dalam untuk membenamkan sklerotia.",
        "Gunakan varietas tahan/toleran.",
        "Atur jarak tanam agar sirkulasi udara baik dan kelembapan menurun.",
      ],
    },
  },
}
