import Typography from '@/components/atom/Typography/Typography'
import cn from './TotalPrice.module.scss'
import PriceText from '@/components/atom/PriceText/PriceText'
import { EqualIcon, MinusIcon, PlusIcon } from '@/components/atom/svg'
import clsx from 'clsx'

const TotalPrice = () => {
  return (
    <div className={cn.totalWrap}>
      <div className={cn.roundWrap}>
        <Typography color="gray-strong" weight="600">
          총 적립금
        </Typography>
        <div>
          <PriceText price={150} weight="800" />
        </div>
      </div>
      <div className={cn.countWrap}>
        <div className={cn.count}>
          <div className={cn.label}>
            <Typography color="gray-strong" weight="600">
              총 1개의 상품금액
            </Typography>
          </div>
          <div>
            <PriceText price={13500} color="primary" weight="800" />
          </div>

          <PlusIcon />
          <div className={cn.label}>
            <Typography color="gray-strong" weight="600">
              배송비
            </Typography>
            <div>
              <PriceText price={2000} color="primary" weight="800" />
            </div>
          </div>
          <MinusIcon />
          <div className={cn.label}>
            <Typography color="gray-strong" weight="600">
              할인
            </Typography>
            <div>
              <PriceText price={800} color="red" weight="800" />
            </div>
          </div>
          <EqualIcon />
        </div>
        <div className={clsx(cn.label, cn.total)}>
          <Typography weight="800">TOTAL</Typography>
          <div>
            <PriceText price={14300} color="primary" weight="800" size="24" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalPrice
