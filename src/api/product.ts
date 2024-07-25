import { mockDataInstance } from './axiosInstance'

export const getProductsList = async () => {
  const response = await mockDataInstance.get(`/data/productsList.json`)
  return response.data
}

export const getProduct = async () => {
  const response = await mockDataInstance.get(`/data/product.json`)
  return response.data
}
