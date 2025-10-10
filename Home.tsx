import PlantGrid from "@/components/plantGrid"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
            Sistem Informasi
            <span className="text-primary"> Penyakit Tanaman</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Temukan informasi lengkap tentang penyakit tanaman dan cara pengendaliannya
          </p>
        </div>
        <PlantGrid />
      </div>
    </main>
  )
}