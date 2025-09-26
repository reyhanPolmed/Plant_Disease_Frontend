"use client"

import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { fetchDisease, type Disease } from "../lib/api"

// interface DiseaseGridProps {
//   plantId: string
// }

const mockDiseaseData: Record<string, Disease[]> = {
  cabai: [
    {
      id: 1,
      local_name: "Antraknosa",
      scientific_name: "Anthracnose",
      causative_organism: "Colletotrichum capsici",
      host_plants: "Cabai, Tomat",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      local_name: "Layu Bakteri",
      scientific_name: "Bacterial Wilt",
      causative_organism: "Ralstonia solanacearum",
      host_plants: "Cabai, Tomat, Kentang",
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      local_name: "Bercak Daun",
      scientific_name: "Leaf Spot",
      causative_organism: "Cercospora capsici",
      host_plants: "Cabai",
      created_at: new Date().toISOString(),
    },
  ],
  jagung: [
    {
      id: 4,
      local_name: "Busuk Pelepah",
      scientific_name: "Sheath Blight",
      causative_organism: "Rhizoctonia solani",
      host_plants: "Jagung, Padi",
      created_at: new Date().toISOString(),
    },
    {
      id: 5,
      local_name: "Hawar Daun",
      scientific_name: "Leaf Blight",
      causative_organism: "Exserohilum turcicum",
      host_plants: "Jagung",
      created_at: new Date().toISOString(),
    },
    {
      id: 6,
      local_name: "Karat Daun",
      scientific_name: "Common Rust",
      causative_organism: "Puccinia sorghi",
      host_plants: "Jagung",
      created_at: new Date().toISOString(),
    },
  ],
  tomat: [
    {
      id: 7,
      local_name: "Layu Fusarium",
      scientific_name: "Fusarium Wilt",
      causative_organism: "Fusarium oxysporum",
      host_plants: "Tomat, Cabai",
      created_at: new Date().toISOString(),
    },
    {
      id: 8,
      local_name: "Busuk Daun",
      scientific_name: "Late Blight",
      causative_organism: "Phytophthora infestans",
      host_plants: "Tomat, Kentang",
      created_at: new Date().toISOString(),
    },
  ],
  kentang: [
    {
      id: 9,
      local_name: "Busuk Daun",
      scientific_name: "Late Blight",
      causative_organism: "Phytophthora infestans",
      host_plants: "Kentang, Tomat",
      created_at: new Date().toISOString(),
    },
    {
      id: 10,
      local_name: "Kudis Kentang",
      scientific_name: "Common Scab",
      causative_organism: "Streptomyces scabies",
      host_plants: "Kentang",
      created_at: new Date().toISOString(),
    },
  ],
  kunyit: [
    {
      id: 11,
      local_name: "Busuk Rimpang",
      scientific_name: "Rhizome Rot",
      causative_organism: "Pythium aphanidermatum",
      host_plants: "Kunyit, Jahe",
      created_at: new Date().toISOString(),
    },
    {
      id: 12,
      local_name: "Bercak Daun",
      scientific_name: "Leaf Spot",
      causative_organism: "Colletotrichum curcumae",
      host_plants: "Kunyit",
      created_at: new Date().toISOString(),
    },
  ],
  bawang: [
    {
      id: 13,
      local_name: "Busuk Leher",
      scientific_name: "Neck Rot",
      causative_organism: "Botrytis allii",
      host_plants: "Bawang Merah, Bawang Putih",
      created_at: new Date().toISOString(),
    },
    {
      id: 14,
      local_name: "Embun Bulu",
      scientific_name: "Downy Mildew",
      causative_organism: "Peronospora destructor",
      host_plants: "Bawang",
      created_at: new Date().toISOString(),
    },
  ],
}

export default function DiseaseGrid() {
  const [diseases, setDiseases] = useState<Disease[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  // const router = useRouter()

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        setError(null)
        try {
          const apiDiseases = await fetchDisease()
          const response = await apiDiseases
          console.log(response.data)
          setDiseases(response)
        } catch (apiError) {
          console.warn("API not available, using mock data:", apiError)
          // Fallback to mock data
          const plantDiseases = mockDiseaseData['cabai'] || []
          setDiseases(plantDiseases)
        }
      } catch (error) {
        console.error("Error fetching diseases:", error)
        setError("Gagal memuat data penyakit")
      } finally {
        setLoading(false)
      }
    }

    fetchDiseases()
  }, [])

  // const handleDiseaseClick = (diseaseId: number) => {
  //   // router.push(`/plants/${plantId}/diseases/${diseaseId}`)
  // }

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

  if (diseases.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Belum Ada Data Penyakit</h3>
        <p className="text-muted-foreground">Data penyakit untuk tanaman ini sedang dalam proses pengembangan.</p>
      </div>
    )
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
              alt={disease.local_name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {disease.local_name}
            </h3>
            <p className="text-muted-foreground italic mb-2">{disease.scientific_name}</p>
            <p className="text-sm text-muted-foreground mb-4">Penyebab: {disease.causative_organism}</p>
            <div className="flex items-center text-primary">
              <span className="text-sm font-medium">Lihat Detail</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
