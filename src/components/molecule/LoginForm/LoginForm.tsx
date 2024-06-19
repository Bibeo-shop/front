'use client'

import axios from 'axios'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { postLogin } from '@/api/login'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoginFormProps } from '@/types'
import cn from './LoginForm.module.scss'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    try {
      const res = await postLogin(data)
      if (res.data) {
        window.localStorage.setItem('token', res.data.token)
        window.location.href = '/'
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          alert('로그인에 실패했습니다. 계정 정보를 다시 확인해 주세요.')
        }
      }
    }
  }

  const emailRegister = register('email', {
    required: { value: true, message: '이메일은 필수 입력입니다.' },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: '유효한 이메일 주소를 입력하세요.',
    },
  })
  const passwordRegister = register('password', {
    required: { value: true, message: '비밀번호는 필수 입력입니다.' },
    maxLength: { value: 16, message: '비밀번호는 16자 이내여야 합니다.' },
    minLength: { value: 8, message: '비밀번호는 8자 이상이여야 합니다.' },
  })

  return (
    <form className={cn.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn.inputContainer}>
        <div className={cn.inputWrap}>
          <Input id="email" type="email" label="이메일" {...emailRegister} />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <Typography color="red" size="14" className={cn.message}>
                {message}
              </Typography>
            )}
          />
          <Input
            id="password"
            type="password"
            label="비밀번호"
            {...passwordRegister}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <Typography color="red" size="14" className={cn.message}>
                {message}
              </Typography>
            )}
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
