import DiseaseDetail from "../components/diseaseDetail"

const plantNames: Record<string, string> = {
  cabai: "Cabai",
  jagung: "Jagung",
  tomat: "Tomat",
  kentang: "Kentang",
  kunyit: "Kunyit",
  bawang: "Bawang",
}

interface PageProps {
  params: {
    plantId: string
    diseaseId: string
  }
}

export default function DiseaseDetailPage({ params }: PageProps) {
  const plantName = plantNames[params.plantId]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary transition-colors">
              Beranda
            </a>
            <span>/</span>
            <a href={`/plants/${params.plantId}/diseases`} className="hover:text-primary transition-colors">
              {plantName}
            </a>
            <span>/</span>
            <span>Detail Penyakit</span>
          </div>
        </div>
        <DiseaseDetail plantId={params.plantId} diseaseId={params.diseaseId} />
      </div>
    </main>
  )
}
