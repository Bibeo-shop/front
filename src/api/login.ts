import { LoginForm } from '@/types'
import axiosInstance from './axiosInstance'


export const postLogin = (data: LoginForm) => {
  return axiosInstance.post(`/users/login`, data)
}
