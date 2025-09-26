// API configuration and helper functions

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
export interface PlantDiseaseData {
  plant: Plant;
  diseases: Disease[];
}
export interface Plant {
  id: number
  name: string
  scientificName: string
  description: string
  imageUrl: string
}

export interface Disease {
  id: number;
  localName: string;
  scientificName: string;
  description: string;
  causativeOrganism: string;
}

export interface DiseaseDetail {
  id: number;
  localName: string;
  scientificName: string;
  description: string;
  causativeOrganism: string;
  symptoms?: {
    affected_parts: string;
    visual_characteristics: string;
    developingStage: string;
  };
  disease_cycles?: {
    spread_method: string;
    environmentalFactors: string;
    favorableSeason: string;
  };
  diagnoses?: {
    fieldRecognitionSteps: string;
    keyIdentifiers: string;
    differentialDiagnosis: string
  };
  controls?: {
    controlType: string;
    method: string;
    description: string;
    effectiveness: string;
  };
}

// API functions
export async function fetchAllPlants(): Promise<Plant[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/plant`)
    const responseBody: ApiResponse<Plant[]> = await response.json();
    return responseBody.data;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching diseases:", error)
    throw error
  }
}

export async function fetchDiseasesByPlantId(plantId: string): Promise<Disease[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/disease/${plantId}`)
    const responseBody: ApiResponse<PlantDiseaseData> = await response.json();
    return responseBody.data.diseases;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching disease detail:", error)
    throw error
  }
}

export async function fetchDiseaseDetail(plantId: string, diseaseId: string): Promise<DiseaseDetail[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/disease/${plantId}/${diseaseId},`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error searching diseases:", error)
    throw error
  }
}
