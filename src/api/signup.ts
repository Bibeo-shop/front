import axiosInstance from './axiosInstance'
import { SignUpData } from '@/types'

export const postSignUp = (data: SignUpData) => {
  return axiosInstance.post(`/users/signup`, data)
}
