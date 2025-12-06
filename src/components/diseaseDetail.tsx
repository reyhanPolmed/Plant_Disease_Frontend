"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  fetchDiseaseDetail,
  type DiseaseDetail as DiseaseDetailType,
} from "../lib/api";
import { useParams } from "react-router-dom";
// interface DiseaseDetailData {

//   id: number;
//   local_name: string;
//   scientific_name: string;
//   causative_organism: string;
//   description: string;
//   symptoms: {
//     affected_parts: string;
//     visual_characteristics: string;
//     progression_stages: string;
//   };
//   disease_cycle: {
//     spread_methods: string;
//     environmental_conditions: string;
//     favorable_season: string;
//   };
//   diagnosis: {
//     field_recognition: string;
//     key_identifiers: string;
//   };
//   control: {
//     controlType: string;
//     method: string;
//     description: string;
//     effectiveness: string;
//   };
// }

// function transformApiResponse(apiData: DiseaseDetailType): DiseaseDetailData {
//   return {
//     id: apiData.id,
//     local_name: apiData.localName,
//     scientific_name: apiData.scientificName,
//     causative_organism: apiData.causativeOrganism,
//     description: apiData.description,
//     symptoms: {
//       affected_parts: apiData.symptoms?.affected_parts || "",
//       visual_characteristics: apiData.symptoms?.visual_characteristics || "",
//       progression_stages: apiData.symptoms?.developingStage || "",
//     },
//     disease_cycle: {
//       spread_methods: apiData.disease_cycles?.spread_method || "",
//       environmental_conditions:
//         apiData.disease_cycles?.environmentalFactors || "",
//       favorable_season: apiData.disease_cycles?.favorableSeason || "",
//     },
//     diagnosis: {
//       field_recognition: apiData.diagnoses?.differentialDiagnosis || "",
//       key_identifiers: apiData.diagnoses?.keyIdentifiers || "",
//     },
//     control: {
//       controlType: apiData.controls?.controlType || "",
//       method: apiData.controls?.method || "",
//       description: apiData.controls?.description || "",
//       effectiveness: apiData.controls?.effectiveness || "",
//     },
//   };
// }

export interface Symptom {
  id: number;
  affectedParts: string;
  visualCharacteristics: string;
  earlyStage: string;
  developingStage: string;
  severeStage: string;
  additionalNotes: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DiseaseDetail() {
  const { plantId } = useParams();
  const { diseaseId } = useParams();
  const [disease, setDisease] = useState<DiseaseDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiseaseDetailData = async () => {
      try {
        setError(null);
        const apiData = await fetchDiseaseDetail(plantId!, diseaseId!);
        console.log("api data: ",apiData)
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

  console.log("disease: ",disease)

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
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
          {disease.localName}
        </h1>
        <p className="text-xl text-muted-foreground italic mb-4">
          {disease.scientificName}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">
            Penyebab: {disease.causativeOrganism}
          </Badge>
          <Badge variant="outline">Inang: {disease.description}</Badge>
        </div>
      </div>

      {/* Disease Image */}
      <Card className="overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 relative">
          <img
            src="/plant-disease-.jpg"
            alt={disease.localName}
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Symptoms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            Gejala Penyakit
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Bagian Tanaman yang Terserang:
            </h4>
            {/* {disease?.symptoms?.map((symptom) => (
              // <h1>{symptom.developingStage}</h1>
            ))} */}
            {/* <p className="text-muted-foreground">
              {disease.symptoms.affected_parts}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Karakteristik Visual:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.symptoms.visual_characteristics}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Tahapan Perkembangan:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.symptoms.progression_stages}
            </p> */}
          </div>
        </CardContent>
      </Card>

      {/* Disease Cycle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            Siklus Penyakit
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Cara Penyebaran:
            </h4>
            <p className="text-muted-foreground">
              {disease.cycle?.spreadMethod}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Kondisi Lingkungan:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.disease_cycle.environmental_conditions}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Tahapan Infeksi:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.disease_cycle.favorable_season}
            </p> */}
          </div>
        </CardContent>
      </Card>

      {/* Diagnosis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            Diagnosis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Pengenalan di Lapangan:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.diagnosis?.map((diagnosis) => (
                <h1>{diagnosis.fieldRecognitionSteps}</h1>
              ))}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Uji Laboratorium:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.diagnosis.key_identifiers}
            </p> */}
          </div>
        </CardContent>
      </Card>

      {/* Control & Prevention */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            Pengendalian & Pencegahan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Praktik Budidaya:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.control.controlType}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Pengendalian Kimia:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.control.description}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Pengendalian Biologis:
            </h4>
            {/* <p className="text-muted-foreground">
              {disease.control.effectiveness}
            </p> */}
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Monitoring:</h4>
            {/* <p className="text-muted-foreground">{disease.control.method}</p> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
