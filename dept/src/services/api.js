// src/services/api.js

const BASE_URL = "http://localhost:5000/api"

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)

    if (!response.ok) {
      throw new Error("API Error")
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}