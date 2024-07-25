import Link from 'next/link'
import Image from 'next/image'
import Typography from '@/components/atom/Typography/Typography'
import { Badge } from '@/components/ui/badge'
import { StarIcon } from '@/components/atom/svg'
import cn from './ProductCard.module.scss'
import { Product } from '@/types'
import PriceText from '@/components/atom/PriceText/PriceText'
import ProductBadge from '../ProductBadge/ProductBadge'

const ProductCard = (product: Product) => {
  const {
    name,
    product_image_url,
    rate,
    review_count,
    price,
    retail_price,
    status,
  } = product

  const discountAmount = retail_price - price
  const discountRate = (discountAmount / retail_price) * 100
  const discount = Math.round(discountRate)
  return (
    <div className={cn.productCard}>
      <Link href="/products/products_list">
        <div className={cn.productImg}>
          <Image
            src={product_image_url}
            fill={true}
            alt="product detail image"
            className={cn.image}
            sizes="289px"
            priority
          />
        </div>

        <div className={cn.productInfo}>
          <div className={cn.statusWrap}>
            <ProductBadge status={status} />
          </div>
          <Typography type="h3" size="14" weight="800" className={cn.title}>
            {name}
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
                {rate}
              </Typography>
            </div>
            <div className={cn.rateWrap}>
              <Typography size="12" color="gray-strong">
                리뷰
              </Typography>

              <PriceText
                price={review_count}
                size="12"
                color="gray-strong"
                weight="400"
              />
            </div>
          </div>
          <div className={cn.priceWrap}>
            <div className={cn.priceGroup}>
              <PriceText
                price={price}
                suffixes="원"
                color="primary"
                size="24"
                weight="800"
              />
              <PriceText
                price={retail_price}
                suffixes="원"
                color="gray-strong"
                weight="400"
                className={cn.beforePrice}
              />
            </div>
            <Typography color="primary" size="20" weight="800">
              {discount}%
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
