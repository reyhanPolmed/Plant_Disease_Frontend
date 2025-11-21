// import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { fetchDiseasesByPlantId, type Disease } from "../lib/api";

const CardDisease = () => {
  const { plantId } = useParams();
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDiseaseClick = (diseaseId: number) => {
    navigate(`/disease-detail/${plantId}/${diseaseId}`);
  };

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        setError(null);
        const apiDiseases = await fetchDiseasesByPlantId(plantId!);
        const response = await apiDiseases;
        console.log(response);
        setDiseases(response);
      } catch (error) {
        console.error("Error fetching diseases:", error);
        setError("Gagal memuat data penyakit");
      } finally {
        setLoading(false);
      }
    };

    fetchDiseases();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-32 bg-muted rounded-t-lg" />
            <CardContent className="p-6">
              <div className="h-6 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Terjadi Kesalahan
        </h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (diseases.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Belum Ada Data Penyakit
        </h3>
        <p className="text-muted-foreground">
          Data penyakit untuk tanaman ini sedang dalam proses pengembangan.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                Daftar Penyakit dan Hama
              </h1>
              <p className="text-lg text-muted-light dark:text-muted-dark">
                Jelajahi, identifikasi, dan pelajari cara mengelola berbagai
                ancaman bagi tanaman Anda.
              </p>
            </div>
            <div className="mb-8 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark text-xl">
                search
              </span>
              <input
                className="form-input w-full bg-input-light dark:bg-input-dark border-border-light dark:border-border-dark focus:ring-primary focus:border-primary rounded-lg pl-12 pr-4 py-3 text-base"
                placeholder="Cari penyakit atau hama..."
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {diseases.map((disease) => (
                <div
                  onClick={() => handleDiseaseClick(disease.id)}
                  className="group cursor-pointer flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className="w-full h-40 bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url(${disease.urlPhoto})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-3">
                      <span className="text-xs font-bold uppercase bg-primary/80 text-white px-2 py-1 rounded">
                        Penyakit
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-md font-bold mb-1">{disease.localName}</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark line-clamp-3">
                      {disease.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardDisease;
