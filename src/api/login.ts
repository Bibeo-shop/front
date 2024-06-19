import axiosInstance from './axiosInstance'
import { LoginFormProps } from '@/types'

export const postLogin = (data: LoginFormProps) => {
  return axiosInstance.post(`/users/login`, data)
}
