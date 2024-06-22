type UserCommonProps = {
  email: string
  password: string
}

export type LoginFormProps = UserCommonProps

export type SignUpFormProps = UserCommonProps & {
  phonenumber: string
  name: string
  zipcode: string
  userAddress: UserAddress
  birthDay: BirthDay
  agreement: number
  passwordConfirm: string
  checked: boolean
}

type BirthDay = {
  year: string
  month: string
  day: string
}

type UserAddress = {
  mainAddress: string
  detailAddress: string
}

export type SignUpDataProps = {
  email: string;
  password: string;
  phonenumber: string;
  name: string;
  zipcode: string;
  address: string;
  birth_day: string;
  agreement: number;
}