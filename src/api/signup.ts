import { axiosInstance } from './axiosInstance'
import { SignUpData } from '@/types'

export const postSignUp = async (data: SignUpData) => {
  const response = await axiosInstance.post(`/users/signup`, data)
  return response.data
}
