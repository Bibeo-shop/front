import { useCallback } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { SignUpForm } from '@/types'

export const useAddressSearch = (setValue: UseFormSetValue<SignUpForm>) => {
  const open = useDaumPostcodePopup(
    'http://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  )

  const handleComplete = useCallback(
    (data: any) => {
      let fullAddress = data.address
      let extraAddress = ''

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
      }

      setValue('zipcode', data.zonecode, { shouldValidate: true })
      setValue('mainAddress', fullAddress)
      setValue('detailAddress', '')
    },
    [setValue]
  )

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      open({ onComplete: handleComplete })
    },
    [open, handleComplete]
  )

  return { handleClick }
}
