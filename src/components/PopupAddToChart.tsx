import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import tomat from "../assets/bawangmerah.png";
import { Card} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

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
  onClose: () => void; // jika ingin menampilkan skor rekomendasi
}

const PopupAddToChart: React.FC<ProductRekomendasiProps> = ({ product,  onClose }) => {
      const navigate = useNavigate();
      const handleToChart = () => {
        navigate('/cart')
      }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="w-[90%] max-w-sm"
      >
        <Card className="w-[350px] py-8 px-4  border border-1 border-slate-200 rounded-[10px] text-sm flex flex-col gap-6 items-center">
            <div className="flex justify-center items-center w-[80px] h-[80px] rounded-full bg-green-300">
              <FiCheckCircle className="text-green-800 text-[30px]" />
            </div>
            <div className="w-full px-2 flex flex-col items-center gap-2">
              <p className="text-lg font-semibold">Added to Chart!</p>
              <div className="w-full h-[1px] bg-slate-800"></div>
              <div className="flex gap-4 items-center justify-between">
                <img src={tomat} alt="" className="w-12 rounded-[15px]" />
                <div>
                  <p className="text-xs">{product.name}</p>
                  <p className="text-xs">Size: small</p>
                </div>
                <p className="w-32 text-xs">Rp {product.price}</p>
              </div>
              <div className="w-full h-[1px] bg-slate-800"></div>
            </div>
            <p className="text-sm">Cart subtotal (1 items): Rp {product.price}</p>
            <div className="flex flex-col gap-2 w-full">
              <button onClick={handleToChart} className="w-full py-2 bg-green-900 text-white rounded-[10px]">
                View Chart & Checkout
              </button>
              <button onClick={onClose} className="w-full py-2 bg-slate-200 rounded-[10px]">
                Continue Shopping
              </button>
            </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default PopupAddToChart;
