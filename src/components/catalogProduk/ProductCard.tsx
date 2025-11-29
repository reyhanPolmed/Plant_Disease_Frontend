import { ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router';
import { Link } from 'react-router';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    unit: string;
  };
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const navigate = useNavigate()
  // const handlePlantClick = () => {
  //   navigate(`/products/${product.id}`);
  // };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-1">{product.description}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-gray-800">${parseFloat(String(product.price)).toFixed(2)}</span>
            <span className="text-xs text-gray-500">/ {product.unit}</span>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1"
          >
            View
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
