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
    image: string
  };
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const navigate = useNavigate()
  // const handlePlantClick = () => {
  //   navigate(`/products/${product.id}`);
  // };
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-4 gap-3">
        <div>
          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{product.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-1">{product.description}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-gray-800">Rp {product.price}</span>
            <span className="text-xs text-gray-500">/ bks</span>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="bg-green-600 hover:bg-green-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1"
          >
            View
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
