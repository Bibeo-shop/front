import { useMutation } from '@tanstack/react-query'
import { postLogin } from '@/api/login'
import { LoginForm } from '@/types'

interface LoginResponse {
  token: string
}

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginForm>({
    mutationFn: postLogin,
    onSuccess: (data) => {
      console.log(data)
      window.localStorage.setItem('token', data.token)
      window.location.href = '/'
    },
  })
}
