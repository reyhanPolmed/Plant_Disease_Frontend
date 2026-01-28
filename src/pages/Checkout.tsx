import { fetchCreatOrder } from "@/lib/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ganti Link dengan useNavigate
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/AuthSlice";
const Checkout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
      const user = useSelector(selectCurrentUser);
  // 1. STATE UNTUK MENAMPUNG DATA FORM
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    fullAddress: "", // Gabungan provinsi, kota, dll (bisa dipisah jika perlu)
    streetAddress: "",
    details: "",
    paymentMethod: "Transfer Bank", // Default value
    bankProvider: "BCA", // Default jika transfer bank
  });

  // 2. FUNCTION UNTUK MENGUBAH STATE SAAT USER MENGETIK
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};


  // 3. FUNCTION SAAT TOMBOL PESAN DITEKAN
  const handleCheckout = async () => { 
    // Mencegah reload halaman

    // Validasi sederhana (Wajib isi nama)
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
      alert("Harap lengkapi data diri Anda!");
      return;
    }
    setIsLoading(true);
    try {
      // Kita pakai setTimeout untuk meniru delay internet
      const shippingAddres = formData.fullAddress
      const paymentMethod = formData.paymentMethod
      console.log("shipping" + shippingAddres)
      console.log("payment" + paymentMethod)
      const userId = user?.id
      const responseCart = await fetchCreatOrder(shippingAddres,paymentMethod, Number(userId));
      const responseBody = await responseCart;
      console.log("response" + responseBody)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("SUKSES! Data berhasil dikirim ke dapur:", formData);

      // 4. Jika sukses, pindah halaman
      navigate("/payment-pending");
    } catch (error) {
      console.error("Gagal mengirim data:", error);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      // 5. Matikan loading (baik sukses maupun gagal)
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* */}
        <div className="md:col-span-2 space-y-10">
          {/* */}
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName" // Name harus sama dengan key di useState
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline outline-none"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label className="block font-medium text-sm">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline-none"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-sm">
                Nomor Telepon *
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline-none"
                placeholder="Enter Phone number"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium text-sm">
                Provinsi, Kota, Kecamatan, Kode Pos
              </label>
              <input
                type="text"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline-none"
                placeholder="Masukan Provinsi, kota, Kecamatan, Kode Pos"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium text-sm">
                Nama Jalan, Gedung, No. Rumah
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline-none"
                placeholder="Masukan Jalan, Gedung, No. Rumah"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium text-sm">
                Detail Lainnya
              </label>
              <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full border rounded-[20px] text-sm px-3 py-2 mt-1 outline-none"
                placeholder="Detail Lainnya (Cth: blok / Unit No. Patokan)"
              />
            </div>
          </div>

          {/* */}
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="space-y-3">
              {/* */}
              <label
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
                  formData.paymentMethod === "Transfer Bank"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Transfer Bank"
                    checked={formData.paymentMethod === "Transfer Bank"}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span>Transfer Bank</span>
                </div>
                {/* Tampilkan Dropdown hanya jika Transfer Bank dipilih */}
                {formData.paymentMethod === "Transfer Bank" && (
                  <select
                    name="bankProvider"
                    value={formData.bankProvider}
                    onChange={handleChange}
                    className="border rounded-lg px-2 py-1"
                  >
                    <option value="BCA">BCA</option>
                    <option value="BNI">BNI</option>
                    <option value="BRI">BRI</option>
                    <option value="Mandiri">Mandiri</option>
                  </select>
                )}
              </label>

              {/* */}
              <label
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer ${
                  formData.paymentMethod === "Dana"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Dana"
                  checked={formData.paymentMethod === "Dana"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Dana</span>
              </label>

              {/* */}
              <label
                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer ${
                  formData.paymentMethod === "QRIS"
                    ? "border-green-500 bg-green-50"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="QRIS"
                  checked={formData.paymentMethod === "QRIS"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>QRIS</span>
              </label>
            </div>
          </div>
        </div>

        {/* */}
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold border-b pb-2">Order Summary</h2>

          <div className="text-sm mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Items</span>
              {/* Nanti ini diambil dari Cart Slice/Context */}
              <span>9</span>
            </div>
            {/* ... sisa summary lainnya tetap sama ... */}
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$170.00</span>
            </div>
          </div>

          {/* Tombol diganti fungsinya */}
          <button
            onClick={handleCheckout}
            disabled={isLoading} // Tombol mati saat loading
            className={`w-full mt-8 rounded-[20px] text-white px-4 py-2 transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#004e1d] hover:bg-green-700"
            }`}
          >
            {isLoading ? "Memproses..." : "Pesan Sekarang"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
