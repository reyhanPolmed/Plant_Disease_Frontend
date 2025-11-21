import { fetchAllPlants, type Plant } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import cabai from "../assets/cabai.png";
const HomePage = () => {
  const navigate = useNavigate();
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
  };
  return (
    <div className="items-center justify-center min-h-screen">
      <div>
        <div
          className="flex min-h-screen flex-col gap-8 items-center justify-center bg-cover bg-center"
          data-alt="A lush, green garden with healthy plants"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9lPMc03wqR41N46336_ayVuWOzipkXZPIJA1-JngfdHDUDGNabxtZQv8aT1DXsm0dKySWjf84f0eMk6QitdS8YhqO7mv5UyAnUYIiuaqHVSivYY-I58Z3p15EhgCNPhGVQo7eOoDsofN1KTPGio91GzQydAEx6bZ-2PnYyRaEs1T7rAt8D_MYZTDyH-r6ZMX06mLAZOhcd6hmjyJWMqAezZI2IK1o53IJ3B-PgwQ6cH5rwH-NGfkTrfzGemtpPmI_g29dLs03vwo')",
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              Protect Your Plants: Your Guide to a Healthy Garden
            </h1>
            <h2 className="text-white text-base font-normal leading-normal">
              Find expert advice and solutions for common plant diseases.
            </h2>
          </div>
        </div>
      </div>

      {/* information  section */}
      <section className="py-10 bg-gray-50">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih LihatKebunku?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platform terpercaya untuk kesehatan tanaman Anda dengan
              fitur-fitur unggulan
            </p>
          </div>

          <div className="flex justify-between w-full gap-8">
            <div>
              <Card className="p-8 hover:shadow-lg transition-shadow border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Identifikasi Penyakit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identifikasi penyakit tanaman dengan akurat menggunakan
                  teknologi terkini dan database lengkap.
                </p>
              </Card>
            </div>
            <div>
              <Card className="p-8 hover:shadow-lg transition-shadow border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Identifikasi Penyakit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identifikasi penyakit tanaman dengan akurat menggunakan
                  teknologi terkini dan database lengkap.
                </p>
              </Card>
            </div>
            <div>
              <Card className="p-8 hover:shadow-lg transition-shadow border-border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Identifikasi Penyakit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identifikasi penyakit tanaman dengan akurat menggunakan
                  teknologi terkini dan database lengkap.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* tanaman section */}
      <div className="p-10">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Tanaman Saat Ini
        </h2>
        <p className="text-muted-foreground">
          Monitor kesehatan tanaman Anda dan dapatkan rekomendasi perawatan
        </p>
      </div>
      <div className="max-w-full flex flex-wrap justify-between box-border gap-y-8">
        {plants.map((plant) => (
          <div
            onClick={() => handlePlantClick(plant.id)}
            className="group w-full md:w-[48%] lg:w-[32%] relative overflow-hidden rounded-xl shadow-lg cursor-pointer box-border"
          >
            {/* <!-- Gambar Produk sebagai Background --> */}
            <img
              src={plant.urlPhoto}
              alt="Sepatu Lari Merah"
              className="w-full h-60 lg:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* <!-- Overlay yang Muncul Saat Hover --> */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"></div>

            {/* <!-- Konten Teks yang Muncul dari Bawah --> */}
            <div className="absolute inset-0 flex items-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <div className="w-full text-center py-4 bg-black bg-opacity-70 rounded-lg">
                <h3 className="text-xl font-bold text-white">{plant.name}</h3>
                <p className="text-sm text-gray-300">{plant.scientificName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomePage;
