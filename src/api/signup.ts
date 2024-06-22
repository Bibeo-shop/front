import axiosInstance from './axiosInstance'
import { SignUpDataProps } from '@/types'

export const postSignUp = (data: SignUpDataProps) => {
  return axiosInstance.post(`/users/signup`, data)
}
