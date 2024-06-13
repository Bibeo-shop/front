'use client'

import { useState } from 'react'
import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import SelectOption from '@/components/atom/SelectOption/SelectOption'
import cn from './SignUpForm.module.scss'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userName, setUserName] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [mainAddress, setMainAddress] = useState('')
  const [detailAddress, setDetailnAddress] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [isChecked, setIsChecked] = useState(0)

  const currentYear = new Date().getFullYear()

  const handleFindZipcode = () => {
    console.log('zipcode function')
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('signUp function')
    console.log(signupData)
  }

  const signupData = {
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    userName: userName,
    zipcode: zipcode,
    address: `${mainAddress} ${detailAddress}`,
    birthDay: `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDate.padStart(2, '0')}`,
    agreement: isChecked,
  }

  return (
    <div className={cn.container}>
      <form onSubmit={handleSignUp}>
        <Typography
          type="h3"
          weight="800"
          color="primary"
          size="20"
          className={cn.title}
        >
          기본정보
        </Typography>
        <div className={cn.inputContainer}>
          <div className={cn.inputWrap}>
            <div>
              <Input
                id="signupEmail"
                type="email"
                label="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography
                type="p"
                size="12"
                color="gray-strong"
                className={cn.message}
              >
                회원가입 시 이메일로만 아이디 생성이 가능합니다.
              </Typography>
            </div>
            <div>
              <Input
                id="signupPassword"
                type="password"
                label="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Typography
                type="p"
                size="12"
                color="gray-strong"
                className={cn.message}
              >
                영문 대소문자/숫자/특수문자 중 3가지 이상 조합. 8자~16자
              </Typography>
            </div>
            <Input
              id="signupPasswordConfirm"
              type="password"
              label="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Input
              id="signupPhoneNumber"
              type="text"
              label="휴대폰 번호"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              id="signupUserName"
              type="text"
              label="이름"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className={cn.addressSearch}>
              <Input
                id="signupZipcode"
                type="text"
                label="우편번호"
                value={zipcode}
                className={cn.zipcode}
                readOnly
              />
              <Button variant="outline" onClick={handleFindZipcode}>
                우편번호검색
              </Button>
            </div>
            <Input
              id="signupMainAddress"
              type="text"
              label="주소"
              value={mainAddress}
              readOnly
            />
            <Input
              id="signupDetailAddress"
              type="text"
              value={detailAddress}
              className="indent-0"
              readOnly
            />
            <div className={cn.birthday}>
              <Typography
                weight="600"
                color="gray-strong"
                size="14"
                className={cn.label}
              >
                생일
              </Typography>
              <SelectOption
                placeholder="년"
                suffix="년"
                start={1900}
                end={currentYear}
                reverse={true}
                className={cn.yearSelect}
                selectedValue={birthYear}
                setSelectedValue={setBirthYear}
              />
              <SelectOption
                placeholder="월"
                suffix="월"
                start={1}
                end={12}
                selectedValue={birthMonth}
                setSelectedValue={setBirthMonth}
              />
              <SelectOption
                placeholder="일"
                suffix="일"
                start={1}
                end={31}
                selectedValue={birthDate}
                setSelectedValue={setBirthDate}
              />
              <div />
            </div>
            <div className={cn.agreementWrap}>
              <Typography
                type="h3"
                weight="800"
                color="primary"
                size="20"
                className={cn.title}
              >
                약관동의
              </Typography>
              <div className={cn.agreement}>
                <Typography size="12">약관내용</Typography>
              </div>
              <div className={cn.checkbox}>
                <Checkbox
                  id="agree"
                  checked={isChecked === 1}
                  onCheckedChange={() => setIsChecked(isChecked === 1 ? 0 : 1)}
                />
                <label htmlFor="agree">
                  <Typography
                    size="14"
                    weight="800"
                    color="primary"
                    className={cn.check}
                  >
                    (필수)
                  </Typography>
                  <Typography size="14" weight="600">
                    모든 약관을 확인하고 전체 동의합니다.
                  </Typography>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={cn.inputWrap}>
          <Button type="submit" size="full">
            JOIN
          </Button>
          <Button size="full" variant="outline" asChild>
            <Link href="/login">CANCEL</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
