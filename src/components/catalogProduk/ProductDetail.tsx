"use client";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, Heart, ShoppingCart, Star, Check } from "lucide-react";
import { addToCart } from "@/features/cart/CartSlice";
import { useDispatch } from "react-redux";
import type { AddToCartPayload } from "@/features/cart/CartSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import PopupLoginPrompt from "../PopUpLogin";
import { recordInteraction} from "../../lib/api";
import ProductRekomendasi from "./ProductRekomendasi";
import { prefetchRekomendasi } from "@/utils/prefetchRekomendasi";
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
export interface Recommendation {
  product_id: number;
  score: number;
}
export default function ProductDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productId = params.productId;
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [recommendations, setRecomendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const user = useSelector(selectCurrentUser);
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const userId = user?.id as string;
    prefetchRekomendasi(userId, "hybrid").then((data) => {
      setRecomendations(data.recommendations);
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("[v0] Products fetched:", data);

        // Handle both response.data and direct array
        const productList = Array.isArray(data) ? data : data.data || [];
        setProducts(productList);
      } catch (err) {
        console.error("[v0] Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${productId}`
        );

        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data.data || data);
        setLoading(false);
      } catch (error) {
        console.log("[v0] Error fetching product:", error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       if (user) {
  //         const userId = user?.id as string;
  //         const method = "hybrid";
  //         const response = await getRecommendations(userId, method);

  //         setRecomendations(response.recommendations);
  //       }
  //     } catch (error) {
  //       console.log("[v0] Error fetching product:", error);
  //     }
  //   };
  //   if (productId) {
  //     fetchProduct();
  //   }
  // }, []);

  if (loading) {
    return (
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-gray-500">Loading...</div>
      </main>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-gray-500">Product not found</div>
        </main>
      </div>
    );
  }
  const convertProductToCartItem = (product: Product): AddToCartPayload => {
    return {
      id: product.id,
      title: product.name, // Product.name → CartItem.title
      price: product.price,
      image: product.image
    };
  };
  const handleAddToCart = async (product: Product) => {
    const cartItem = convertProductToCartItem(product);
    try {
      // await addToCart({ product, username });
      // Dispatch a Redux action here to update the cart state.
      // ...
      if (user) {
        const userId = user?.id as string;
        const rating = 2;
        const tipe: "view" | "like" | "purchase" = "view";
        const response = await recordInteraction(
          userId,
          Number(productId),
          rating,
          tipe
        );
        console.log(response);
        dispatch(addToCart(cartItem));
        setShowPopup(false);
        navigate("/cart");
      } else {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
      // Handle errors if necessary.
    }
  };
  const handleLikeClick = async () => {
    setIsFavorite(!isFavorite);
    const userId = user?.id as string;
    const rating = 2;
    const tipe: "view" | "like" | "purchase" = "view";
    await recordInteraction(userId, Number(productId), rating, tipe);
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <button
              onClick={() => navigate("/")}
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Home
            </button>
            <ChevronLeft size={16} className="rotate-180 text-gray-400" />
            <span className="text-gray-600">Category</span>
            <ChevronLeft size={16} className="rotate-180 text-gray-400" />
            <span className="text-gray-600 font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Product Images */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {/* <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`w-full aspect-square rounded-lg overflow-hidden cursor-pointer flex items-center justify-center ${
                      index === 1
                        ? "bg-yellow-100 border-2 border-green-500"
                        : "bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <img
                      src={`https://via.placeholder.com/100x100?text=View+${index}`}
                      alt={`View ${index}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col gap-6">
              {/* Title & Description */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-green-600 text-base font-medium mb-4">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-gray-300 text-gray-300"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">(132 reviews)</span>
                </div>
              </div>

              {/* Price & Stock */}
              <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    Rp {parseFloat(String(product.price)).toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <Check size={20} />
                  In Stock - Ships within 24 hours
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-3 items-center">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 text-center py-2 border-l border-r border-gray-300 bg-white"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  onClick={handleLikeClick}
                  className={`p-3 rounded-lg border transition ${
                    isFavorite
                      ? "bg-red-50 border-red-300"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <Heart
                    size={20}
                    className={
                      isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                    }
                  />
                </button>
              </div>

              {/* Certifications */}
              <div className="flex gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  <span className="text-sm text-gray-700">
                    Certified Producer
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-600" />
                  <span className="text-sm text-gray-700">
                    Non-GMO Project Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Tab */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex gap-8 border-b border-gray-200 mb-8">
              <button className="font-semibold text-green-600 pb-4 border-b-2 border-green-600">
                Description
              </button>
              <button className="text-gray-600 pb-4 hover:text-gray-900">
                Specifications
              </button>
              <button className="text-gray-600 pb-4 hover:text-gray-900">
                Usage Instructions
              </button>
              <button className="text-gray-600 pb-4 hover:text-gray-900">
                Reviews
              </button>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Product Description
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description} - This is a premium agricultural product
                carefully selected for professional farmers and growers. Our
                commitment to quality ensures you receive only the finest seeds
                and materials.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>High Yield Potential:</strong> Genetically optimized
                  for maximum grain output per acre.
                </li>
                <li>
                  <strong>Drought Resistance:</strong> Maintains performance
                  during periods of low rainfall.
                </li>
                <li>
                  <strong>Strong Stalks:</strong> Excellent standability and
                  lodging resistance for an easier harvest.
                </li>
                <li>
                  <strong>Disease Tolerance:</strong> Built-in resistance to
                  common crop diseases, reducing the need for fungicides.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br  rounded-lg mb-8 mt-6 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">
           Rekomendasi Untuk Anda
          </h2>
        </div>                                          

        {recommendations.length === 0 ? (
          <p className="text-center text-gray-600 py-8">
            Belum ada rekomendasi. Mulai dengan melihat atau menyukai produk
            untuk mendapatkan rekomendasi personal.
          </p>
        ) : (
          <div className="flex justify-between">
            {recommendations.map((rec) => {
              const matchingProduct = products.find(
                (p) => p.id === rec.product_id
              );

              if (!matchingProduct) return null;

              return (
                <ProductRekomendasi
                  key={rec.product_id}
                  product={matchingProduct}
                  score={rec.score} // opsional
                />
              );
            })}
          </div>
        )}
      </div>
        </div>
      </main>
      
      <div>
        {showPopup && <PopupLoginPrompt onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
