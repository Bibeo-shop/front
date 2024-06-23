'use client'

import Typography from '@/components/atom/Typography/Typography'
import ProductCard from '../ProductCard/ProductCard'
import cn from './ProductsList.module.scss'

const ProductsList = () => {
  return (
    <div className={cn.productsList}>
      <div className={cn.wrap}>
        <div className={cn.filterWrap}>
          <Typography color="gray-strong">전체</Typography>
          <Typography color="gray-strong">최신순</Typography>
          <Typography color="gray-strong">인기순</Typography>
          <Typography color="gray-strong">판매순</Typography>
        </div>
        <div className={cn.totalWrap}>
          <Typography weight="600">TOTAL</Typography>
          <Typography color="primary" weight="600">
            20
          </Typography>
        </div>
      </div>
      <div className={cn.productArea}>
        <ul className={cn.container}>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ProductsList
