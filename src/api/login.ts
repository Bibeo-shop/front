import { LoginForm } from '@/types'
import { axiosInstance } from './axiosInstance'

export const postLogin = async (data: LoginForm) => {
  const response = await axiosInstance.post(`/users/login`, data)
  return response.data
}
