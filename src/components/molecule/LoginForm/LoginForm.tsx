'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { LoginForm } from '@/types'
import FormField from '../FormField/FormField'
import { useLogin } from '@/hooks/useLogin'
import cn from './LoginForm.module.scss'
import { AxiosError } from 'axios'

const LoginForm = () => {
  const loginMutation = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    loginMutation.mutate(data, {
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            alert('로그인에 실패했습니다. 계정 정보를 다시 확인해 주세요.')
          } else {
            alert('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.')
          }
        } else {
          alert('로그인 중 알 수 없는 오류가 발생했습니다.')
        }
      },
    })
  }
  return (
    <form className={cn.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn.inputContainer}>
        <div className={cn.inputWrap}>
          <FormField
            id="email"
            type="email"
            label="이메일"
            register={register}
            errors={errors}
            rules={{
              required: { value: true, message: '이메일을 입력해주세요.' },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            }}
          />
          <FormField
            id="password"
            type="password"
            label="비밀번호"
            register={register}
            errors={errors}
            rules={{
              required: { value: true, message: '비밀번호를 입력해주세요.' },
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자 이상이어야 합니다.',
              },
              maxLength: {
                value: 16,
                message: '비밀번호는 최대 16자까지 가능합니다.',
              },
            }}
          />
        </div>
        <div className={cn.linkWrap}>
          <Button asChild variant="link" size="link" className={cn.link}>
            <Link href="/">아이디 찾기</Link>
          </Button>
          <Button asChild variant="link" size="link">
            <Link href="/">비밀번호 찾기</Link>
          </Button>
        </div>
      </div>
      <div className={cn.inputWrap}>
        <Button size="full" type="submit">
          LOGIN
        </Button>
        <Button size="full" variant="outline" asChild>
          <Link href="/signup">JOIN</Link>
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
