interface UserData {
  email: string
  password: string
}

export interface LoginForm extends UserData {}

interface AddressForm {
  zipcode: string
  mainAddress: string
  detailAddress: string
}

export interface SignUpForm extends UserData, AddressForm {
  phonenumber: string
  name: string
  zipcode: string
  mainAddress: string
  detailAddress: string
  birthDay: {
    year: string
    month: string
    day: string
  }
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
