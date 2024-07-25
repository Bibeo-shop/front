import { Badge } from '@/components/ui/badge'
import { Product } from '@/types'

interface ProductBadgeProps {
  status: Product['status'] 
}

const ProductBadge = ({ status }: ProductBadgeProps) => {
  return (
    <>
      {status.includes('NEW') && <Badge>NEW</Badge>}
      {status.includes('EVENT') && <Badge variant="outline">EVENT</Badge>}
      {status.includes('품절') && <Badge variant="secondary">품절</Badge>}
      {status.includes('무료배송') && <Badge variant="third">무료배송</Badge>}
    </>
  )
}

export default ProductBadge
