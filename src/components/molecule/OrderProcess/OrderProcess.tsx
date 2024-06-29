import clsx from 'clsx'
import { ArrowIcon } from '@/components/atom/svg'
import cn from './OrderProcess.module.scss'

export interface OrderProcessProps {
  process: string
}
const OrderProcess = ({ process }: OrderProcessProps) => {
  return (
    <div className={cn.category}>
      <div className={clsx(cn.roundBox, { [cn.blue]: process === 'cart' })}>
        CART
      </div>
      <ArrowIcon className={cn.icon} />
      <div className={clsx(cn.roundBox, { [cn.blue]: process === 'order' })}>
        ORDER
      </div>
      <ArrowIcon className={cn.icon} />
      <div className={clsx(cn.roundBox, { [cn.blue]: process === 'complete' })}>
        COMPLETE
      </div>
    </div>
  )
}

export default OrderProcess
