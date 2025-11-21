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
  id: number;
  name: string;
  scientificName: string;
  description: string;
  urlPhoto: string
}

export interface Login {
    user: string;
    token: string;
}

export interface Register {
  user: string;
  token: string;
}

export interface Disease {
  id: number;
  localName: string;
  scientificName: string;
  description: string;
  causativeOrganism: string;
  urlPhoto: string
}

export interface DiseaseDetail {
  id: number;
  localName: string;
  scientificName: string;
  description: string;
  causativeOrganism: string;
  urlPhoto: string;
  symptoms?: 
    {
      id: number;
      affectedParts: string;
      description: string
      symptomProggression: [
        {
          description: string;
          id: number;
          order: number;
          stage: string;
        }
      ];
      visualCharacteristic: [];
    }
  ;
  cycle?: {
    id: string;
    environmentalFactors: string;
    spreadMethod: string;
    infectionStage: [
      {
        description: string;
        stage: string;
        fieldRecognitionSteps: string;
        id: number;
        order: number;
      }
    ];
  };
  diagnosis?: [
    {
      description: string;
      fieldRecognitionSteps: string;
      id: number;
      order: number;
    }
  ];
  controls?: [
    {
      controlType: string;
      description: string;
      effectiveness: string;
      id: number;
      method: string;
    }
  ];
}

// API functions
export async function fetchAllPlants(): Promise<Plant[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/plant`);
    const responseBody: ApiResponse<Plant[]> = await response.json();
    return responseBody.data;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching diseases:", error);
    throw error;
  }
}

export async function fetchDiseasesByPlantId(
  plantId: string
): Promise<Disease[]> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/disease/${plantId}`
    );
    const responseBody: ApiResponse<PlantDiseaseData> = await response.json();
    return responseBody.data.diseases;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching disease detail:", error);
    throw error;
  }
}

export async function fetchDiseaseDetail(
  plantId: string,
  diseaseId: string
): Promise<DiseaseDetail> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_PATH}/disease/${plantId}/${diseaseId},`
    );
    const responseBody: ApiResponse<DiseaseDetail> = await response.json();
    return responseBody.data;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}
export async function fetchLogin(
  email: string,
  password: string
): Promise<Login> {
  try {
const response = await fetch(`${import.meta.env.VITE_API_PATH}/auth/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
});

    const responseBody: ApiResponse<Login> = await response.json();
    return responseBody.data;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}

export async function fetchRegister(
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<Register> {
  try {
const response = await fetch(`${import.meta.env.VITE_API_PATH}/auth/register`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstname,
    lastname,
    email: email,
    password: password,
  }),
});

    const responseBody: ApiResponse<Register> = await response.json();
    return responseBody.data;
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error("Error searching diseases:", error);
    throw error;
  }
}


