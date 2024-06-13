'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import cn from './LoginForm.module.scss'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('login function')
  }

  return (
    <div className={cn.container}>
      <div className={cn.inputContainer}>
        <div className={cn.inputWrap}>
          <Input
            id="loginEmail"
            type="email"
            label="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="loginPassword"
            type="password"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <Button size="full" onClick={handleLogin}>
          LOGIN
        </Button>
        <Button size="full" variant="outline" asChild>
          <Link href="/signup">JOIN</Link>
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
