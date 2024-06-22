'use client'

import { useEffect, useState } from 'react'
import { getTerms } from '@/api/terms'

export const useTerms = () => {
  const [terms, setTerms] = useState(null)

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const data = await getTerms()
        setTerms(data)
      } catch (error) {
        console.error('약관을 불러오는 데 실패했습니다.', error)
      }
    }

    fetchTerms()
  }, [])

  return terms
}
