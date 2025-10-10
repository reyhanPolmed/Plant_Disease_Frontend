import { fetchAllPlants, type Plant } from "@/lib/api";
// import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import cabai from "../assets/cabai.png";
const HomePage = () => {
    const navigate = useNavigate()
  const [plants, setPlants] = useState<Plant[] | null>(null);

  async function fetchPlants() {
    const response = await fetchAllPlants();
    const responseBody = await response;
    console.log(responseBody);
    if (responseBody) {
      setPlants(responseBody);
    } else {
      alert("error");
    }
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  if (!plants) {
    return <div>Loading...</div>;
  }

  const handlePlantClick = (plantId: number) => {
    navigate(`/card-disease/${plantId}`);
  }
  return (
    <div className="bg-gray-100 flex flex-wrap xl:flex-nowrap items-center justify-center min-h-screen p-8">
      <div className="min-w-[400px] grow flex justify-center items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight">
          Ketahui Kondisi Tanaman Anda
        </h1>
      </div>
      <div className="max-w-full flex flex-wrap justify-between box-border gap-y-8 p-10">
        {plants.map((plant) => (
          <div onClick={() => handlePlantClick(plant.id)} className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border">
          {/* <!-- Gambar Produk sebagai Background --> */}
          <img
            src={plant.urlPhoto}
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
        ))}
      </div>
    </div>
  );
};

export default HomePage;
