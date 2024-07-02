import Typography from '@/components/atom/Typography/Typography'
import { RoundCarousel } from '../RoundCarousel/RoundCarousel'
import { BoxCarousel } from '../BoxCarousel/BoxCarousel'
import ProductsList from '../ProductsList/ProductsList'
import cn from './Main.module.scss'

const Main = () => {
  return (
    <div className={cn.main}>
      <div className={cn.wrap}>
        <div className={cn.carousel}>
          <RoundCarousel />
        </div>
      </div>
      <div className={cn.container}>
        <div className={cn.productInfo}>
          <Typography type="h3" size="36" weight="800" color="primary">
            이달의 신상품
          </Typography>
          <Typography size="14" color="gray-strong" className={cn.description}>
            새롭게 만나는
            <br />
            다양한 상품들을 구경하세요
          </Typography>
        </div>
        <BoxCarousel />
      </div>
      <div className={cn.line} />
      <div>
        <div className={cn.productInfo}>
          <Typography type="h3" size="36" weight="800" color="primary">
            BEST
          </Typography>
          <Typography size="14" color="gray-strong" className={cn.description}>
            이달의 베스트 상품을 만나보세요
          </Typography>
        </div>
        <ProductsList />
      </div>
    </div>
  )
}

export default Main
