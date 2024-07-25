import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const mockDataInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
