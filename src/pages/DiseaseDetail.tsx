// import { diseases, type Disease } from "../data/Diseases"
import React from "react";
import { DiseaseDetail } from "@/components/disease/disease-detail"
import { useParams } from "react-router-dom";
export const DiseaseDetailNew : React.FC = () => {
    const { plantId } = useParams();
  const { diseaseId } = useParams();
  // const disease: Disease | undefined = diseases["busuk-pelepah-jagung"]
  return (
    <main className="min-h-dvh">
      <DiseaseDetail plantId={plantId} diseaseId={diseaseId}/>
    </main>
  )
}
