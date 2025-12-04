import type React from "react"

const Footer: React.FC = () => {
  return (
    // PERUBAHAN UTAMA:
    // 1. bg-gradient-to-br: Arah gradasi diagonal (kiri atas ke kanan bawah)
    // 2. from-green-900 via-emerald-700 to-green-500: Gradasi dari hijau gelap hutan, ke emerald, lalu ke hijau daun terang.
    <footer className="bg-gradient-to-br from-green-900 via-emerald-700 to-green-500 text-white  pt-8 pb-4 px-8 bebas-neue neobrutalism-border relative overflow-hidden">
        
        {/* Dekorasi Visual (Opsional): Efek cahaya halus di pojok */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="flex justify-between relative z-10 ">
            {/* Kolom 1: Brand */}
            <div className="w-1/3">
                <h3 className="text-4xl font-bold mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 drop-shadow-sm">
                    LIHATKEBUNKU
                </h3>
                <p className=" text-green-50 opacity-90 leading-relaxed text-sm">
                    Platform terpercaya untuk informasi penyakit tanaman anda dengan sarana produktifitas yang berkualitas.
                </p>
                <div className="mt-6 space-y-3  text-sm opacity-80">
                    <div className="flex items-center gap-2">
                         <span>📞</span> <p>+62 21 1234 5678</p>
                    </div>
                    <div className="flex items-center gap-2">
                         <span>✉️</span> <p>info@lihatkebunku.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                         <span>📍</span> <p>Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>

            {/* Kolom 2: Layanan */}
            <div className="flex flex-1 justify-evenly">
            <div>
                <h3 className="text-2xl font-bold mb-4 tracking-widest text-green-100 border-b-2 border-green-400/30 w-max pb-1">
                    LAYANAN
                </h3>
                <ul className="space-y-3  text-sm">
                    {/* Mengubah hover menjadi lime-300 agar terlihat di background hijau */}
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Contact</a></li>
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Promo</a></li>
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Bantuan</a></li>
                </ul>
            </div>

            {/* Kolom 3: Dukungan */}
            <div>
                <h3 className="text-2xl font-bold mb-4 tracking-widest text-green-100 border-b-2 border-green-400/30 w-max pb-1">
                    DUKUNGAN
                </h3>
                <ul className="space-y-3  text-sm">
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">FAQ</a></li>
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Kontak</a></li>
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Kebijakan</a></li>
                    <li><a href="#" className="hover:text-lime-300 hover:translate-x-1 transition-all duration-300 inline-block">Syarat & Ketentuan</a></li>
                </ul>
            </div>

            </div>
        </div>
        
        {/* Copyright Section Kecil */}
        <div className="border-t border-green-400/30 mt-10 pt-6 text-center text-green-200">
            &copy; {new Date().getFullYear()} LIHATKEBUNKU. Tumbuh bersama alam.
        </div>
    </footer>
  )
}

export default Footer