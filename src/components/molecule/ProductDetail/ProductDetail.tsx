'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProductsTab from '../ProductsTab/ProductsTab'
import ProductBuyInfo from '../ProductBuyInfo/ProductBuyInfo'
import { CartIcon } from '@/components/atom/svg'
import cn from './ProductDetail.module.scss'
import Link from 'next/link'
import { useProductDetail } from '@/hooks/useProductDetail'

const ProductDetail = () => {
  const { data, error, isLoading } = useProductDetail()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={cn.productDetail}>
      <div className={cn.productInfoArea}>
        <div className={cn.imageArea}>
          {data && (
            <Image
              src={data?.product_image_url}
              alt="product detail image"
              className={cn.image}
              fill={true}
              priority={true}
              sizes="50vw"
            />
          )}
        </div>

        <div className={cn.container}>{data && <ProductBuyInfo />}</div>
      </div>
      <div className={cn.productDetailTab}>
        <ProductsTab />
      </div>

      <div className={cn.mobileOrderContainer}>
        <div className={cn.btnWrap}>
          <Button size="full" variant="outline" className={cn.btnCart}>
            <CartIcon />
          </Button>

          <Button size="full">구매하기</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
