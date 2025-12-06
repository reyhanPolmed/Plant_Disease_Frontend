import React from "react";
import { Link } from "react-router-dom";

const PaymentPending = () => {
  // Ceritanya ini data yang didapat dari Backend setelah checkout sukses
  // Nanti data ini diambil dinamis berdasarkan ID Order
  const orderDetails = {
    orderId: "INV-20250115-001",
    totalAmount: "Rp 170.000",
    bankName: "BCA",
    accountNumber: "8830-1234-5678",
    accountName: "PT E-Commerce Tani",
    expiryTime: "24 Jam",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderDetails.accountNumber);
    alert("Nomor rekening berhasil disalin!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-gray-100">
        
        {/* Ikon Sukses */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Pesanan Berhasil Dibuat!
        </h2>
        <p className="text-gray-500 mb-6">
          Kode Pesanan: <span className="font-mono font-semibold text-gray-700">{orderDetails.orderId}</span>
        </p>

        {/* Kotak Instruksi Pembayaran */}
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6 mb-6">
          <p className="text-sm text-gray-500 mb-1">Silakan transfer sebesar:</p>
          <p className="text-2xl font-bold text-[#004e1d] mb-4">
            {orderDetails.totalAmount}
          </p>

          <div className="h-px bg-gray-200 w-full mb-4"></div>

          <div className="text-left space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bank Tujuan</span>
              <span className="font-semibold text-gray-800">{orderDetails.bankName}</span>
            </div>
            
            <div>
              <span className="text-sm text-gray-600 block mb-1">Nomor Rekening</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg font-semibold text-gray-800">
                  {orderDetails.accountNumber}
                </span>
                <button 
                  onClick={handleCopy}
                  className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-gray-700 transition"
                >
                  Salin
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">a.n {orderDetails.accountName}</p>
            </div>
          </div>
        </div>

        {/* Informasi Batas Waktu */}
        <div className="flex items-center justify-center gap-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Selesaikan pembayaran dalam {orderDetails.expiryTime}</span>
        </div>

        {/* Tombol Aksi */}
        <div className="space-y-3">
          <Link to="/konfirmasi-pembayaran">
            <button className="w-full bg-[#004e1d] hover:bg-green-700 text-white font-medium py-3 rounded-[20px] transition-colors shadow-md">
              Saya Sudah Bayar
            </button>
          </Link>
          
          <Link to="/">
            <button className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-[20px] hover:bg-gray-50 transition-colors">
              Kembali ke Beranda
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PaymentPending;