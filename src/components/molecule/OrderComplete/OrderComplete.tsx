import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { CheckIcon } from '@/components/atom/svg'
import OrderProcess from '../OrderProcess/OrderProcess'
import cn from './OrderComplete.module.scss'

const OrderComplete = () => {
  return (
    <div className={cn.orderComplete}>
      <OrderProcess process="complete" />
      <div className={cn.container}>
        <div className={cn.wrap}>
          <CheckIcon />
          <Typography size="36" weight="800">
            주문이 완료되었습니다.
          </Typography>
          <Typography color="primary" size="20" weight="600">
            주문번호 : 11231231313131
          </Typography>
          <div className={cn.textWrap}>
            <Typography size="20" weight="600">
              주문 내역 확인은 마이페이지의
              <br />
              "주문/배송조회"에서 하실 수 있습니다.
            </Typography>
          </div>
          <Button size="normal" asChild>
            <Link href="/">홈으로</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderComplete
