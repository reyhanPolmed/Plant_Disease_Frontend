"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card";
import { fetchDiseasesByPlantId, type Disease } from "../lib/api";


export default function DiseaseGrid() {
  const { plantId } = useParams();
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter()

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {diseases.map((disease) => (
        <Card
          key={disease.id}
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden"
          // onClick={() => handleDiseaseClick(disease.id)}
        >
          <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
            <img
              src="/plant-disease-.jpg"
              alt={disease.localName}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {disease.localName}
            </h3>
            <p className="text-muted-foreground italic mb-2">
              {disease.scientificName}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Penyebab: {disease.causativeOrganism}
            </p>
            <div className="flex items-center text-primary">
              <span className="text-sm font-medium">Lihat Detail</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
