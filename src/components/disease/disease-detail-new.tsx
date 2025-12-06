"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Pastikan routing sesuai setup project Anda
import { Breadcrumbs } from "./breadcrumbs";
import { GalleryCarousel } from "./gallery-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Pastikan komponen ini ada
import { fetchDiseaseDetail } from "../../lib/api";

// --- Definisi Tipe Data (Sesuaikan dengan API Response dari MySQL di atas) ---
interface ControlStep {
  id: number;
  description: string;
}

interface DiseaseDetailType {
  id: string;
  localName: string;
  scientificName: string; // Nama ilmiah inang/penyakit
  causativeOrganism: string; // Patogen
  description: string;
  urlPhoto: string[]; // Array URL gambar
  symptoms: {
    description: string;
  };
  cycle: {
    spreadMethod: string;
    environmentalFactors: string;
  };
  controls: ControlStep[];
}

interface DiseaseDetailProps {
  plantId?: string;
  diseaseId?: string;
}

export const DiseaseDetail: React.FC<DiseaseDetailProps> = ({
  plantId,
  diseaseId,
}) => {
  const [disease, setDisease] = useState<DiseaseDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiseaseDetailData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Pastikan plantId dan diseaseId ada sebelum fetch
        if (!plantId || !diseaseId) throw new Error("ID tidak valid");
        
        const apiData = await fetchDiseaseDetail(plantId, diseaseId);
        console.log("api data: ", apiData);
        setDisease(apiData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("Error fetching disease detail:", err);
        setError(err.message || "Gagal memuat detail penyakit");
      } finally {
        setLoading(false);
      }
    };

    fetchDiseaseDetailData();
  }, [plantId, diseaseId]);

  // --- Render Loading State ---
  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-1/4 mb-4" />
          <div className="h-10 bg-muted rounded w-1/2 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 h-64 bg-muted rounded-xl" />
             <div className="h-64 bg-muted rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // --- Render Error State ---
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Terjadi Kesalahan</h3>
        <p className="text-muted-foreground mb-4 max-w-md">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Muat Ulang Halaman
        </button>
      </div>
    );
  }

  // --- Render Not Found ---
  if (!disease) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold">Penyakit Tidak Ditemukan</h3>
        <p className="text-muted-foreground">Data yang Anda cari tidak tersedia di database kami.</p>
      </div>
    );
  }

  // --- Render Main Content ---
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 pb-24"> {/* pb-24 untuk memberi ruang floating button */}
      
      {/* Floating Shop Button */}
      <Link
        to="/product"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all ring-2 ring-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.6 6M16 21a1 1 0 11-2 0 1 1 0 012 0zM9 21a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        <span>Beli Obat/Pupuk</span>
      </Link>

      {/* Header Section */}
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Ensiklopedia", href: "/penyakit" },
            { label: disease.localName },
          ]}
          className="mb-4"
        />
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-foreground">
              {disease.localName}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {disease.description}
            </p>
          </div>
          
          {/* Badge Status (Optional visualization) */}
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
             <Badge variant="outline" className="text-sm py-1 px-3 bg-red-50 text-red-700 border-red-200">
                Resiko Tinggi
             </Badge>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Visuals & Symptoms) - Takes 2/3 width */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Gallery Section */}
          <section className="rounded-2xl overflow-hidden border bg-card shadow-sm">
             <GalleryCarousel items={disease.urlPhoto} className="w-full aspect-video object-cover" />
          </section>

          {/* Symptoms Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-xl">🩺</span> Diagnosis & Gejala
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-stone dark:prose-invert max-w-none">
                <p className="leading-relaxed whitespace-pre-line text-muted-foreground">
                    {disease.symptoms?.description || "Belum ada data gejala."}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Controls / Prevention Section */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <span className="text-xl">🛡️</span> Pengendalian & Pencegahan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {disease.controls && disease.controls.length > 0 ? (
                <ul className="space-y-4">
                  {disease.controls.map((item, index) => (
                    <li key={item.id || index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-foreground/90">{item.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground italic">Belum ada data pengendalian.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Info Card / Sidebar) - Takes 1/3 width */}
        <div className="space-y-6">
            
          {/* Quick Info Card */}
          <Card className="bg-muted/30 sticky top-4">
            <CardHeader>
                <CardTitle className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
                    Informasi Penyakit
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                
                {/* Item 1 */}
                <div>
                    <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                        🦠 Patogen Penyebab
                    </h4>
                    <p className="text-base font-semibold text-foreground">
                        {disease.causativeOrganism || "-"}
                    </p>
                </div>
                
                {/* Item 2 */}
                <div className="w-full h-px bg-border" />
                <div>
                    <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                        🌱 Inang / Tanaman
                    </h4>
                    <p className="text-base font-medium text-foreground">
                        {disease.scientificName || "-"}
                    </p>
                </div>

                {/* Item 3 */}
                <div className="w-full h-px bg-border" />
                <div>
                    <h4 className="text-sm font-medium mb-1">🌦️ Kondisi Lingkungan</h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                        {disease.cycle?.environmentalFactors || "Tidak ada data spesifik."}
                    </p>
                </div>

                 {/* Item 4 */}
                 <div className="w-full h-px bg-border" />
                <div>
                    <h4 className="text-sm font-medium mb-1">🔄 Metode Penyebaran</h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                        {disease.cycle?.spreadMethod || "Tidak ada data spesifik."}
                    </p>
                </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};