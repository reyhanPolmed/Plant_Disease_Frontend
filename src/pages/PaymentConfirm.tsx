import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  
  // State untuk menyimpan file gambar dan URL preview-nya
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi saat user memilih file dari galeri/komputer
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      // Membuat URL sementara agar gambar bisa muncul di layar (Preview)
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Fungsi kirim data ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage || !orderId) {
      alert("Mohon lengkapi Order ID dan Bukti Transfer!");
      return;
    }

    setIsLoading(true);

    // --- LOGIKA PENGIRIMAN DATA (FormData) ---
    // Karena kita mengirim file, kita TIDAK BISA pakai JSON biasa.
    // Kita harus pakai object "FormData".
    const formData = new FormData();
    formData.append("order_id", orderId);
    formData.append("proof_file", selectedImage); // File aslinya

    try {
      // SIMULASI REQUEST KE BACKEND
      console.log("Mengirim data:", formData.get("order_id"));
      console.log("File gambar:", formData.get("proof_file"));
      
      // Simulasi delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      alert("Bukti pembayaran berhasil dikirim! Admin akan memverifikasi.");
      navigate("/"); // Kembali ke home atau halaman history

    } catch (error) {
      console.error(error);
      alert("Gagal mengupload bukti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Konfirmasi Pembayaran
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Input Order ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order ID / Kode Pesanan
            </label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Contoh: INV-20250115-001"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
            <p className="text-xs text-gray-500 mt-1 ml-1">
              Lihat kode pesanan di email atau halaman Payment Pending.
            </p>
          </div>

          {/* Area Upload & Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Bukti Transfer
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer relative">
              
              {/* Jika belum ada gambar, tampilkan input */}
              {!previewUrl ? (
                <>
                  <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-sm text-gray-500 text-center">
                    Klik untuk upload foto <br /> (JPG, PNG, max 2MB)
                  </p>
                </>
              ) : (
                // Jika sudah ada gambar, tampilkan Preview
                <div className="relative w-full">
                  <img 
                    src={previewUrl} 
                    alt="Preview Bukti" 
                    className="w-full h-48 object-contain rounded-lg" 
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewUrl(null);
                      setSelectedImage(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              )}

              {/* Input file yang sebenarnya (disembunyikan tapi menutupi area agar bisa diklik) */}
              {!previewUrl && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white font-medium py-3 rounded-[20px] transition-colors shadow-md ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#004e1d] hover:bg-green-700"
            }`}
          >
            {isLoading ? "Mengirim..." : "Kirim Bukti Pembayaran"}
          </button>

          {/* Tombol Batal */}
          <Link to="/" className="block text-center text-gray-500 text-sm hover:text-gray-700">
            Batalkan & Kembali ke Beranda
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentConfirmation;