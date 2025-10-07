import cabai from "../assets/cabai.png";
import jagung from "../assets/jagung.png";
import bawang from "../assets/bawangmerah.png";
import kunyit from "../assets/kunyit.png";
import tomat from "../assets/tomat.png";
import kentang from "../assets/kentang.png";
const Card = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap xl:flex-nowrap items-center justify-center min-h-screen p-8">
      <div className="min-w-[400px] grow flex justify-center items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight">
          Ketahui Kondisi Tanaman Anda
        </h1>
      </div>
      <div className="max-w-full flex flex-wrap justify-between box-border gap-y-8 p-10">
        {/* <!-- Kartu Produk 1: Sepatu Lari --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={cabai}
            alt="Sepatu Lari Merah"
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">CABAI</h3>
              <p className="text-sm text-gray-300">Capsicum annuum L.</p>
            </div>
          </div>
        </div>

        {/* <!-- Kartu Produk 2: Jam Tangan --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={jagung}
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">JAGUNG</h3>
              <p className="text-sm text-gray-300">Zea mays L.</p>
            </div>
          </div>
        </div>

        {/* <!-- Kartu Produk 3: Kamera --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={bawang}
            alt="Kamera DSLR"
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">BAWANG</h3>
              <p className="text-sm text-gray-300">
                Allium cepa var. ascalonicum.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Kartu Produk 4: Headphone --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={kunyit}
            alt="Headphone"
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">KUNYIT</h3>
              <p className="text-sm text-gray-300">Curcuma longa L.</p>
            </div>
          </div>
        </div>
        {/* <!-- Kartu Produk 5: Headphone --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={tomat}
            alt="Headphone"
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">TOMAT</h3>
              <p className="text-sm text-gray-300">Solanum lycopersicum L.</p>
            </div>
          </div>
        </div>
        {/* <!-- Kartu Produk 6: Headphone --> */}
        <div className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={kentang}
            alt="Headphone"
            className="w-full h-96 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* <!-- Overlay yang Muncul Saat Hover --> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
          <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
              <h3 className="text-xl font-bold text-white">KENTANG</h3>
              <p className="text-sm text-gray-300">Solanum tuberosum L.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
