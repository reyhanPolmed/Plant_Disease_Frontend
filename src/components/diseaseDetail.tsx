"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fetchDiseaseDetail, type DiseaseDetail as DiseaseDetailType } from "../lib/api"

interface DiseaseDetailData {
  id: number
  local_name: string
  scientific_name: string
  causative_organism: string
  host_plants: string
  symptoms: {
    affected_parts: string
    visual_characteristics: string
    progression_stages: string
  }
  disease_cycle: {
    spread_methods: string
    environmental_conditions: string
    infection_stages: string
  }
  diagnosis: {
    field_recognition: string
    laboratory_tests: string
  }
  control: {
    cultural_practices: string
    chemical_control: string
    biological_control: string
    monitoring: string
  }
}

interface DiseaseDetailProps {
  plantId: string
  diseaseId: string
}

const mockDetailedData: Record<string, DiseaseDetailData> = {
  "4": {
    id: 4,
    local_name: "Busuk Pelepah",
    scientific_name: "Sheath Blight",
    causative_organism: "Rhizoctonia solani",
    host_plants: "Jagung, Padi",
    symptoms: {
      affected_parts: "Pelepah daun, batang bagian bawah, dan akar",
      visual_characteristics: "Bercak coklat keabu-abuan dengan tepi yang jelas, berbentuk oval hingga memanjang",
      progression_stages: "Dimulai dari pelepah daun bawah, menyebar ke atas, dapat menyebabkan rebah tanaman",
    },
    disease_cycle: {
      spread_methods: "Spora jamur melalui angin, air hujan, dan kontak langsung",
      environmental_conditions: "Kelembaban tinggi (>80%), suhu 25-30°C, curah hujan tinggi",
      infection_stages: "Penetrasi → kolonisasi → sporulasi → penyebaran",
    },
    diagnosis: {
      field_recognition: "Bercak coklat pada pelepah, miselium putih pada kondisi lembab",
      laboratory_tests: "Isolasi jamur, identifikasi morfologi spora",
    },
    control: {
      cultural_practices: "Rotasi tanaman, pengaturan jarak tanam, drainase yang baik, sanitasi lahan",
      chemical_control: "Fungisida berbahan aktif propikonazol, tebukonazol, atau validamycin",
      biological_control: "Trichoderma spp., Bacillus subtilis, atau Pseudomonas fluorescens",
      monitoring: "Pemantauan rutin setiap 7-10 hari, terutama saat musim hujan",
    },
  },
  "1": {
    id: 1,
    local_name: "Antraknosa",
    scientific_name: "Anthracnose",
    causative_organism: "Colletotrichum capsici",
    host_plants: "Cabai, Tomat",
    symptoms: {
      affected_parts: "Buah, daun, dan batang",
      visual_characteristics: "Bercak bulat berwarna coklat kehitaman dengan lingkaran konsentris",
      progression_stages: "Bercak kecil → membesar → buah busuk dan gugur",
    },
    disease_cycle: {
      spread_methods: "Percikan air hujan, serangga, dan alat pertanian",
      environmental_conditions: "Kelembaban tinggi, suhu 20-30°C",
      infection_stages: "Kontak → penetrasi → infeksi → sporulasi",
    },
    diagnosis: {
      field_recognition: "Bercak coklat dengan massa spora berwarna orange-pink",
      laboratory_tests: "Isolasi jamur, uji patogenisitas",
    },
    control: {
      cultural_practices: "Sanitasi kebun, pemangkasan, pengaturan drainase",
      chemical_control: "Fungisida mankozeb, klorotalonil, atau azoksistrobin",
      biological_control: "Trichoderma harzianum, Bacillus subtilis",
      monitoring: "Inspeksi mingguan, terutama pada buah muda",
    },
  },
}

function transformApiResponse(apiData: DiseaseDetailType): DiseaseDetailData {
  return {
    id: apiData.id,
    local_name: apiData.local_name,
    scientific_name: apiData.scientific_name,
    causative_organism: apiData.causative_organism,
    host_plants: apiData.host_plants,
    symptoms: {
      affected_parts: apiData.symptoms[0]?.affected_parts || "",
      visual_characteristics: apiData.symptoms[0]?.visual_characteristics || "",
      progression_stages: apiData.symptoms[0]?.progression_stages || "",
    },
    disease_cycle: {
      spread_methods: apiData.disease_cycles[0]?.spread_methods || "",
      environmental_conditions: apiData.disease_cycles[0]?.environmental_conditions || "",
      infection_stages: apiData.disease_cycles[0]?.infection_stages || "",
    },
    diagnosis: {
      field_recognition: apiData.diagnoses[0]?.field_recognition || "",
      laboratory_tests: apiData.diagnoses[0]?.laboratory_tests || "",
    },
    control: {
      cultural_practices: apiData.controls[0]?.cultural_practices || "",
      chemical_control: apiData.controls[0]?.chemical_control || "",
      biological_control: apiData.controls[0]?.biological_control || "",
      monitoring: apiData.controls[0]?.monitoring || "",
    },
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DiseaseDetail({ plantId, diseaseId }: DiseaseDetailProps) {
  const [disease, setDisease] = useState<DiseaseDetailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDiseaseDetailData = async () => {
      try {
        setError(null)
        try {
          const apiData = await fetchDiseaseDetail(diseaseId)
          const transformedData = transformApiResponse(apiData)
          setDisease(transformedData)
        } catch (apiError) {
          console.warn("API not available, using mock data:", apiError)
          // Fallback to mock data
          const diseaseData = mockDetailedData[diseaseId]
          setDisease(diseaseData || null)
        }
      } catch (error) {
        console.error("Error fetching disease detail:", error)
        setError("Gagal memuat detail penyakit")
      } finally {
        setLoading(false)
      }
    }

    fetchDiseaseDetailData()
  }, [diseaseId])

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
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Terjadi Kesalahan</h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    )
  }

  if (!disease) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Penyakit Tidak Ditemukan</h3>
        <p className="text-muted-foreground">Data penyakit yang Anda cari tidak tersedia.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">{disease.local_name}</h1>
        <p className="text-xl text-muted-foreground italic mb-4">{disease.scientific_name}</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Penyebab: {disease.causative_organism}</Badge>
          <Badge variant="outline">Inang: {disease.host_plants}</Badge>
        </div>
      </div>

      {/* Disease Image */}
      <Card className="overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 relative">
          <img src="/plant-disease-.jpg" alt={disease.local_name} className="w-full h-full object-cover" />
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
            <h4 className="font-semibold text-foreground mb-2">Bagian Tanaman yang Terserang:</h4>
            <p className="text-muted-foreground">{disease.symptoms.affected_parts}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Karakteristik Visual:</h4>
            <p className="text-muted-foreground">{disease.symptoms.visual_characteristics}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tahapan Perkembangan:</h4>
            <p className="text-muted-foreground">{disease.symptoms.progression_stages}</p>
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
            <h4 className="font-semibold text-foreground mb-2">Cara Penyebaran:</h4>
            <p className="text-muted-foreground">{disease.disease_cycle.spread_methods}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Kondisi Lingkungan:</h4>
            <p className="text-muted-foreground">{disease.disease_cycle.environmental_conditions}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Tahapan Infeksi:</h4>
            <p className="text-muted-foreground">{disease.disease_cycle.infection_stages}</p>
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
            <h4 className="font-semibold text-foreground mb-2">Pengenalan di Lapangan:</h4>
            <p className="text-muted-foreground">{disease.diagnosis.field_recognition}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Uji Laboratorium:</h4>
            <p className="text-muted-foreground">{disease.diagnosis.laboratory_tests}</p>
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
            <h4 className="font-semibold text-foreground mb-2">Praktik Budidaya:</h4>
            <p className="text-muted-foreground">{disease.control.cultural_practices}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pengendalian Kimia:</h4>
            <p className="text-muted-foreground">{disease.control.chemical_control}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Pengendalian Biologis:</h4>
            <p className="text-muted-foreground">{disease.control.biological_control}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Monitoring:</h4>
            <p className="text-muted-foreground">{disease.control.monitoring}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
