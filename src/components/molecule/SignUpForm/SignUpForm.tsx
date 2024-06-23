'use client'

import axios from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Link from 'next/link'
import { postSignUp } from '@/api/signup'
import { useTerms } from '@/hooks/useTerms'
import Typography from '@/components/atom/Typography/Typography'
import SelectDateOption from '@/components/atom/SelectDateOption/SelectDateOption'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignUpFormProps } from '@/types'
import { formatPhoneNumber } from '@/utils/formatNumber'
import { messages } from '@/utils/message'
import { checkValidDate } from '@/utils/checkValidDate'
import cn from './SignUpForm.module.scss'

const SignUpForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      phonenumber: '',
      name: '',
      zipcode: '',
      userAddress: {
        mainAddress: '00시 00구 00동',
        detailAddress: '101호',
      },
      birthDay: { year: '', month: '', day: '' },
      agreement: 0,
      checked: false,
    },
  })

  const terms = useTerms()

  const currentYear = new Date().getFullYear()

  const handleFindZipcode = () => {
    console.log('zipcode function')
  }

  const onSubmit: SubmitHandler<SignUpFormProps> = async (data) => {
    try {
      const { birthDay, userAddress, passwordConfirm, checked, ...rest } = data
      if (!checked) {
        alert('약관에 동의해주세요.')
        return
      } else if (data.password !== passwordConfirm) {
        setError(
          'passwordConfirm',
          { message: '비밀번호가 일치하지 않습니다.' },
          { shouldFocus: true }
        )
        return
      }

      if (birthDay && userAddress) {
        const birth_day = `${birthDay.year}-${birthDay.month.padStart(2, '0')}-${birthDay.day.padStart(2, '0')}`
        const validBirth = checkValidDate(birth_day)
        if (!validBirth) {
          setError(
            'birthDay.year',
            { message: '유효하지 않은 날짜입니다.' },
            { shouldFocus: true }
          )
          return
        }
        const address = `${userAddress.mainAddress} ${userAddress.detailAddress}`
        const signUpData = { ...rest, birth_day, address }
        const res = await postSignUp(signUpData)
        if (res.data.message === 'User creation successful') {
          alert('회원가입 완료!')
          window.location.href = '/login'
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          alert('사용할 수 없는 이메일입니다.')
        }
      }
    }
  }

  const emailRegister = register('email', {
    required: { value: true, message: messages.isEmpty('이메일을') },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: messages.isPattern('이메일'),
    },
  })
  const passwordRegister = register('password', {
    required: { value: true, message: messages.isEmpty('비밀번호를') },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
      message: messages.isPattern('비밀번호'),
    },
    maxLength: { value: 16, message: messages.maxLength('비밀번호는', 16) },
    minLength: { value: 8, message: messages.minLength('비밀번호는', 8) },
  })

  const nameRegister = register('name', {
    required: { value: true, message: messages.isEmpty('이름을') },
    maxLength: { value: 10, message: messages.maxLength('이름은', 10) },
    minLength: { value: 2, message: messages.minLength('이름은', 2) },
  })

  const passWordConfirmRegister = register('passwordConfirm')

  const zipcodeRegister = register('zipcode', {
    required: { value: true, message: messages.isEmpty('배송지 주소를') },
  })

  const mainAddressRegister = register('userAddress.mainAddress')
  const detailAddressRegister = register('userAddress.detailAddress')

  return (
    <div className={cn.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...emailRegister}
              />
              <Typography
                type="p"
                size="12"
                color="gray-strong"
                className={cn.message}
              >
                회원가입 시 이메일로만 아이디 생성이 가능합니다.
              </Typography>
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
            </div>
            <div>
              <div>
                <Input
                  id="signupPassword"
                  type="password"
                  label="비밀번호"
                  {...passwordRegister}
                />
                <Typography
                  type="p"
                  size="12"
                  color="gray-strong"
                  className={cn.message}
                >
                  영문 대소문자/숫자/특수문자 중 3가지 이상 조합. 8자~16자
                </Typography>
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
            </div>
            <div>
              <Input
                id="signupPasswordConfirm"
                type="password"
                label="비밀번호 확인"
                {...passWordConfirmRegister}
              />
              <ErrorMessage
                errors={errors}
                name="passwordConfirm"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
            </div>
            <div>
              <Controller
                name="phonenumber"
                control={control}
                defaultValue=""
                rules={{
                  required: messages.isEmpty('휴대폰 번호를'),
                }}
                render={({ field }) => (
                  <Input
                    id="signupPhoneNumber"
                    type="text"
                    label="휴대폰 번호"
                    {...field}
                    onChange={(e) =>
                      field.onChange(formatPhoneNumber(e.target.value))
                    }
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="phonenumber"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
            </div>
            <div>
              <Input
                id="signupUserName"
                type="text"
                label="이름"
                {...nameRegister}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
            </div>
            <div className={cn.addressSearch}>
              <Input
                id="signupZipcode"
                type="text"
                label="우편번호"
                className={cn.zipcode}
                readOnly
                {...zipcodeRegister}
              />
              <Button variant="outline" onClick={handleFindZipcode}>
                우편번호검색
              </Button>
            </div>
            <Input
              id="signupMainAddress"
              type="text"
              label="주소"
              readOnly
              {...mainAddressRegister}
            />
            <div>
              <Input
                id="signupDetailAddress"
                type="text"
                className="indent-0"
                {...detailAddressRegister}
                readOnly
              />
              <ErrorMessage
                errors={errors}
                name="zipcode"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
            </div>
            <div className={cn.birthMessage}>
              <div className={cn.birthday}>
                <Typography
                  weight="600"
                  color="gray-strong"
                  size="14"
                  className={cn.label}
                >
                  생일
                </Typography>
                <Controller
                  name="birthDay.year"
                  control={control}
                  rules={{
                    required: messages.isEmpty('년도를'),
                  }}
                  render={({ field }) => (
                    <SelectDateOption
                      placeholder="년"
                      suffix="년"
                      start={1900}
                      end={currentYear}
                      reverse={true}
                      className={cn.yearSelect}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="birthDay.month"
                  control={control}
                  rules={{
                    required: messages.isEmpty('월을'),
                  }}
                  render={({ field }) => (
                    <SelectDateOption
                      placeholder="월"
                      suffix="월"
                      start={1}
                      end={12}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Controller
                  name="birthDay.day"
                  control={control}
                  rules={{
                    required: messages.isEmpty('일을'),
                  }}
                  render={({ field }) => (
                    <SelectDateOption
                      placeholder="일"
                      suffix="일"
                      start={1}
                      end={31}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <div />
              </div>

              <ErrorMessage
                errors={errors}
                name="birthDay.year"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="birthDay.month"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="birthDay.day"
                render={({ message }) => (
                  <Typography color="red" size="14" className={cn.message}>
                    {message}
                  </Typography>
                )}
              />
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
                <Typography size="12">{terms}</Typography>
              </div>
              <div className={cn.checkbox}>
                <div className={cn.checkWrap}>
                  <input
                    type="checkbox"
                    id="checked"
                    {...register('checked')}
                  />
                  <label htmlFor="checked">
                    <Typography
                      size="14"
                      weight="800"
                      color="primary"
                      className={cn.check}
                    >
                      (필수)
                    </Typography>
                    <Typography size="14" weight="600">
                      이용약관 및 개인정보수집에 모두 동의합니다.
                    </Typography>
                  </label>
                </div>
                <div className={cn.checkWrap}>
                  <Controller
                    name="agreement"
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                      <input
                        id="agree"
                        type="checkbox"
                        ref={ref}
                        checked={value === 1}
                        onChange={(e) => onChange(e.target.checked ? 1 : 0)}
                      />
                    )}
                  />
                  <label htmlFor="agree">
                    <Typography
                      size="14"
                      weight="800"
                      color="primary"
                      className={cn.check}
                    >
                      (선택)
                    </Typography>
                    <Typography size="14" weight="600">
                      SMS, 이메일 수신에 동의합니다.
                    </Typography>
                  </label>
                </div>
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
