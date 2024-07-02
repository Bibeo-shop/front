interface UserData {
  email: string
  password: string
}

export interface LoginForm extends UserData {}

interface BirthDay {
  year: string
  month: string
  day: string
}

interface UserAddress {
  mainAddress: string
  detailAddress: string
}

export interface SignUpForm extends UserData {
  phonenumber: string
  name: string
  zipcode: string
  userAddress: UserAddress
  birthDay: BirthDay
  agreement: number
  passwordConfirm: string
  checked: boolean
}

export interface SignUpData {
  email: string
  password: string
  phonenumber: string
  name: string
  zipcode: string
  address: string
  birth_day: string
  agreement: number
}
