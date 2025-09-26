"use client";

import { fetchAllPlants, type Plant } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// const plants = [
//   {
//     id: "cabai",
//     name: "Cabai",
//     description: "Capsicum annuum",
//     image: "/red-chili-pepper-plant.jpg",
//     color: "from-red-500/20 to-red-600/20",
//   },
//   {
//     id: "jagung",
//     name: "Jagung",
//     description: "Zea mays",
//     image: "/corn-maize-plant.jpg",
//     color: "from-yellow-500/20 to-yellow-600/20",
//   },
//   {
//     id: "tomat",
//     name: "Tomat",
//     description: "Solanum lycopersicum",
//     image: "/ripe-tomato-plant.png",
//     color: "from-red-500/20 to-orange-500/20",
//   },
//   {
//     id: "kentang",
//     name: "Kentang",
//     description: "Solanum tuberosum",
//     image: "/potato-plant.png",
//     color: "from-amber-500/20 to-yellow-500/20",
//   },
//   {
//     id: "kunyit",
//     name: "Kunyit",
//     description: "Curcuma longa",
//     image: "/turmeric-plant.jpg",
//     color: "from-orange-500/20 to-yellow-500/20",
//   },
//   {
//     id: "bawang",
//     name: "Bawang",
//     description: "Allium cepa",
//     image: "/onion-plant.png",
//     color: "from-purple-500/20 to-pink-500/20",
//   },
// ]

export default function PlantGrid() {
  const navigate = useNavigate()
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
    navigate(`/disease/${plantId}`);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <Card
          key={plant.id}
          className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border bg-card overflow-hidden"
          onClick={() => handlePlantClick(plant.id)}
        >
          <div
            className={`h-48 bg-gradient-to-br relative overflow-hidden`}
          >
            <img
              src={plant.imageUrl || "/placeholder.svg"}
              alt={plant.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {plant.name}
            </h3>
            <p className="text-muted-foreground italic">{plant.description}</p>
            <div className="mt-4 flex items-center text-primary">
              <span className="text-sm font-medium">Lihat Penyakit</span>
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
