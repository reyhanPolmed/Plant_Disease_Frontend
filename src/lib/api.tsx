// API configuration and helper functions

export interface Disease {
  id: number
  local_name: string
  scientific_name: string
  causative_organism: string
  host_plants: string
  created_at: string
}

export interface DiseaseDetail extends Disease {
  symptoms: Array<{
    id: number
    affected_parts: string
    visual_characteristics: string
    progression_stages: string
  }>
  disease_cycles: Array<{
    id: number
    spread_methods: string
    environmental_conditions: string
    infection_stages: string
  }>
  diagnoses: Array<{
    id: number
    field_recognition: string
    laboratory_tests: string
  }>
  controls: Array<{
    id: number
    cultural_practices: string
    chemical_control: string
    biological_control: string
    monitoring: string
  }>
}

// API functions
export async function fetchDisease(): Promise<Disease[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/disease`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching diseases:", error)
    throw error
  }
}

export async function fetchDiseaseDetail(diseaseId: string): Promise<DiseaseDetail> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/diseases/${diseaseId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching disease detail:", error)
    throw error
  }
}

export async function searchDiseases(query: string): Promise<Disease[]> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PATH}/diseases/search?q=${encodeURIComponent(query)}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error("Error searching diseases:", error)
    throw error
  }
}
