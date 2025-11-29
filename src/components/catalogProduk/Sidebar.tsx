'use client';

import { Filter, Tag, TrendingDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter size={20} className="text-teal-600" />
            <h2 className="text-lg font-bold text-gray-800">Filter By</h2>
          </div>
          <p className="text-sm text-gray-600">Find the right product</p>
        </div>

        {/* Product Category */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Tag size={18} className="text-teal-600" />
            Product Category
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" defaultChecked className="accent-teal-600" />
              <span>All Categories</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" className="accent-teal-600" />
              <span>Bibit</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" className="accent-teal-600" />
              <span>Pestisida</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" className="accent-teal-600" />
              <span>Pupuk</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" className="accent-teal-600" />
              <span>Alat Produksi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="checkbox" className="accent-teal-600" />
              <span>Benih</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <TrendingDown size={18} className="text-teal-600" />
            Price Range
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="radio" name="price" defaultChecked className="accent-teal-600" />
              <span>All Prices</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="radio" name="price" className="accent-teal-600" />
              <span>$0 - $100</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="radio" name="price" className="accent-teal-600" />
              <span>$100 - $500</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="radio" name="price" className="accent-teal-600" />
              <span>$500 - $1000</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-teal-600">
              <input type="radio" name="price" className="accent-teal-600" />
              <span>$1000+</span>
            </label>
          </div>
        </div>

        {/* Clear Button */}
        <button className="w-full bg-gray-100 hover:bg-teal-600 hover:text-white text-gray-800 font-semibold py-2 rounded-lg transition mt-4">
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}
