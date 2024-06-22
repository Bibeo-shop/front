'use client'

import axios from 'axios'

export const getTerms = async () => {
  const res = await axios.get('/terms.txt')
  return res.data
}
