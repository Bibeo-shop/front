import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProductsTab from '../ProductsTab/ProductsTab'
import ProductBuyInfo from '../ProductBuyInfo/ProductBuyInfo'
import { CartIcon } from '@/components/atom/svg'
import cn from './ProductDetail.module.scss'

const ProductDetail = () => {
  return (
    <div className={cn.productDetail}>
      <div className={cn.productInfoArea}>
        <div className={cn.imageArea}>
          <Image
            src="/images/product_image.png"
            alt="product detail image"
            className={cn.image}
            fill={true}
            priority={true}
            sizes="50vw"
          />
        </div>

        <div className={cn.container}>
          <ProductBuyInfo />
        </div>
      </div>
      <div className={cn.productDetailTab}>
        <ProductsTab />
      </div>

      <div className={cn.mobileOrderContainer}>
        <div className={cn.btnWrap}>
          <Button size="full" variant="outline">
            <CartIcon />
          </Button>
          <Button size="full">구매하기</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
