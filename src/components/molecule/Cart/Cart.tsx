import Link from 'next/link'
import { Button } from '@/components/ui/button'
import OrderProcess from '../OrderProcess/OrderProcess'
import SectionTitle from '../SectionTitle/SectionTitle'
import { CartTable } from '../CartTable/CartTable'
import TotalPrice from '../TotalPrice/TotalPrice'
import cn from './Cart.module.scss'

const Cart = () => {
  return (
    <div className={cn.cart}>
      <OrderProcess process="cart" />
      <div className={cn.container}>
        <div className={cn.sectionArea}>
          <SectionTitle title="장바구니" />
          <CartTable />
          <TotalPrice />
          <div className={cn.deleteBtn}>
            <Button variant="outline">선택 상품 삭제</Button>
          </div>
        </div>
        <div className={cn.btnWrap}>
          <Button size="normal" asChild>
            <Link href="/order/order">주문하기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
