"use client";
import { Breadcrumbs } from "./breadcrumbs";
// import { DetailTabs } from "./detail-tabs"
import React from "react";
// import { GalleryCarousel } from "./gallery-carousel";
// import type { Disease } from "../../data/Diseases"

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
  fetchDiseaseDetail,
  type DiseaseDetail as DiseaseDetailType,
} from "../../lib/api";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
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
        setError(null);
        const apiData = await fetchDiseaseDetail(plantId!, diseaseId!);
        console.log("api data: ", apiData);
        // const transformedData = transformApiResponse(apiData);
        setDisease(apiData);
      } catch (error) {
        console.error("Error fetching disease detail:", error);
        setError("Gagal memuat detail penyakit");
      } finally {
        setLoading(false);
      }
    };

    fetchDiseaseDetailData();
  }, [diseaseId]);

  console.log("disease: ", disease);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/2 mb-4" />
          <div className="h-4 bg-muted rounded w-1/3 mb-8" />
        </div>
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-1/4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
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

  if (!disease) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Penyakit Tidak Ditemukan
        </h3>
        <p className="text-muted-foreground">
          Data penyakit yang Anda cari tidak tersedia.
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link
        to={"/product"}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-white font-medium rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all"
      >
        {/* Ikon keranjang */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l3-8H6.4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 13L5.6 6M16 21a1 1 0 11-2 0 1 1 0 012 0zM9 21a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>

        <span>Belanja</span>
      </Link>
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Penyakit", href: "/penyakit" },
          { label: disease.localName },
        ]}
        className="mb-4"
      />

      <header className="mb-6">
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {disease.localName}
        </h1>
        <p className="mt-2 max-w-3xl text-pretty text-muted-foreground">
          {disease.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            Patogen: {disease.causativeOrganism}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            Inang: {disease.scientificName}
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            Kondisi: {disease.scientificName}
          </span>
        </div>
      </header>

      {/* content */}
      <main className="flex flex-col gap-10">
        <div className="space-y-6">
            <img
              src={disease.imageUrl}
              alt="Sepatu Lari Merah"
              className="w-full h-60 lg:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

          <div className="rounded-xl border bg-card p-5">
            {/* <h3 className="mb-2 text-base font-semibold">Deskripsi Gejala</h3>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {disease.symptoms.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul> */}
            <div className="mt-4">
              <h4 className="mb-1 font-semibold">Gejala</h4>
              <p>{disease.symptoms?.description}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <h3 className="mb-2 text-base font-semibold">Siklus & Penyebaran</h3>
          <p className="text-sm">{disease.cycle?.spreadMethod}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <h3 className="mb-2 text-base font-semibold">Kondisi Lingkungan</h3>
          <p className="text-sm">{disease.cycle?.environmentalFactors}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-2 text-base font-semibold">
              Kultur Teknis (Pencegahan)
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {disease.controls?.map((d, i) => (
                <li key={i}>{d.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
