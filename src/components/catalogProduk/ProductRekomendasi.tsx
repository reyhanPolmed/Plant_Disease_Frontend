import React from "react";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  CategoryId?: number;
  category?: {
    name: string;
  };
  image: string
}

interface ProductRekomendasiProps {
  product: Product;
  score?: number; // jika ingin menampilkan skor rekomendasi
}

const ProductRekomendasi: React.FC<ProductRekomendasiProps> = ({ product, score }) => {
  return (
    <div className="w-[19%] flex flex-col justify-between shadow-md border-[1px] border-slate-300 bg-white rounded-lg p-4 hover:shadow-lg transition duration-300">
      {/* Gambar Produk */}
      <div className="w-full h-36 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nama Produk */}
      <h3 className="mt-3 font-semibold text-gray-800 text-sm">
        {product.name}
      </h3>

      {/* Harga */}
      <p className="text-gray-600 text-xs">Rp {product.price.toLocaleString()}</p>

      {/* Score rekomendasi */}
      {score !== undefined && (
        <p className="text-xs text-blue-600 mt-1">
          Rekomendasi Score: {score.toFixed(3)}
        </p>
      )}

      {/* Tombol Aksi */}
      <button className="mt-3 text-xs w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition">
        Lihat Produk
      </button>
    </div>
  );
};

export default ProductRekomendasi;
