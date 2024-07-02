'use client'

import axios from 'axios'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { postLogin } from '@/api/login'
import { Button } from '@/components/ui/button'
import { LoginForm } from '@/types'
import FormField from '../FormField/FormField'
import cn from './LoginForm.module.scss'

const LoginForm = () => {
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

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
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
