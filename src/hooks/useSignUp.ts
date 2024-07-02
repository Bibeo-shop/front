import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { postSignUp } from '@/api/signup'
import { SignUpData } from '@/types'

interface SignUpResponse {
  message: string,
}

export const useSignUp = () => {
  return useMutation<SignUpResponse, AxiosError, SignUpData>({
    mutationFn: postSignUp,
    onSuccess: (data) => {
      if (data.message === 'User creation successful') {
        alert('회원가입 완료!')
        window.location.href = '/login'
      } else {
        alert('회원가입 처리 중 문제가 발생했습니다.')
      }
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        alert('사용할 수 없는 이메일입니다.')
      } else {
        alert('회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.')
      }
    },
  })
}