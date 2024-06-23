import Link from 'next/link'
import Image from 'next/image'
import Typography from '@/components/atom/Typography/Typography'
import { Badge } from '@/components/ui/badge'
import { StarIcon } from '@/components/atom/svg'
import cn from './ProductCard.module.scss'

const ProductCard = () => {
  return (
    <div className={cn.productCard}>
      <Link href="/products/products_list">
        <div className={cn.productImg}>
          <Image
            src="/images/product_image.png"
            fill={true}
            alt="product detail image"
            className={cn.image}
            sizes="289px"
            priority
          />
        </div>

        <div className={cn.productInfo}>
          <div className={cn.statusWrap}>
            <Badge>NEW</Badge>
            <Badge variant="outline">EVENT</Badge>
            <Badge variant="secondary">품절</Badge>
            <Badge variant="third">무료배송</Badge>
          </div>
          <Typography type="h3" size="14" weight="800" className={cn.title}>
            실버 925 블랙 오닉스 큐빅 귀걸이
          </Typography>
          <div className={cn.detailWrap}>
            <div className={cn.rateWrap}>
              <StarIcon size="12" />
              <Typography
                size="12"
                color="primary"
                weight="800"
                className={cn.rateAmount}
              >
                4.9
              </Typography>
            </div>
            <div className={cn.rateWrap}>
              <Typography size="12" color="gray-strong">
                리뷰
              </Typography>
              <Typography size="12" color="gray-strong">
                5,231
              </Typography>
              
            </div>
          </div>
          <div className={cn.priceWrap}>
            <div>
              <Typography color="primary" size="24" weight="800">
                13,000원
              </Typography>
              <Typography color="gray-strong" className={cn.beforePrice}>
                15,000원
              </Typography>
            </div>
            <Typography color="primary" size="20" weight="800">
              10%
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
