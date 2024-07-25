'use client'

import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/api/product'
import { ProductDetailProps } from '@/types'

export const useProductDetail = () => {
  return useQuery<ProductDetailProps>({
    queryKey: ['product'],
    queryFn: getProduct,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
}
