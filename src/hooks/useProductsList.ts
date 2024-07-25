import { useQuery } from '@tanstack/react-query'
import { getProductsList } from '@/api/product'
import { Product } from '@/types'

export const useProductsList = () => {
  return useQuery<Product[]>({
    queryKey: ['productsList'],
    queryFn: getProductsList,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
}