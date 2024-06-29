import Image from 'next/image'
import { MinusIcon, PlusIcon } from '@/components/atom/svg'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import PriceText from '@/components/atom/PriceText/PriceText'
import { OrderProps } from '@/types'
import clsx from 'clsx'
import cn from './OrderTable.module.scss'

const orderData: OrderProps[] = [
  {
    id: '728ed52f',
    image: '/images/product_image.png',
    product: '실버925 블랙 오닉스 큐빅 귀걸이',
    options: '옵션 1 어쩌고저쩌고',
    amount: 1,
    price: '13500',
    discount: '-1200',
    point: '150',
    delivery: '2000',
    total_price: '14300',
  },
  {
    id: '489e1d42',
    image: '/images/product_image.png',
    product: '실버925 블랙 오닉스 큐빅 귀걸이',
    options: '옵션 2',
    amount: 1,
    price: '13500',
    discount: '-1200',
    point: '150',
    delivery: '2000',
    total_price: '14300',
  },
]

export function OrderTable() {
  return (
    <Table className={cn.table}>
      <TableHeader className={cn.header}>
        <TableRow className={cn.tableRow}>
          <TableHead className={cn.mobileHide}></TableHead>
          <TableHead className={cn.headCol}>상품/옵션</TableHead>
          <TableHead className={cn.mobileHide}>수량</TableHead>
          <TableHead className={cn.mobileHide}>상품금액</TableHead>
          <TableHead className={cn.mobileHide}>할인</TableHead>
          <TableHead className={cn.mobileHide}>적립</TableHead>
          <TableHead className={cn.mobileHide}>배송비</TableHead>
          <TableHead className={clsx(cn.mobileHide, cn.cellLast)}>
            합계금액
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={cn.tableBody}>
        {orderData.map((data) => (
          <TableRow key={data.id}>
            <TableCell className={clsx('font-medium', 'w-[100px]')}>
              <div className={cn.imageArea}>
                <Image
                  src={data.image}
                  fill={true}
                  alt="review image"
                  className={cn.image}
                  sizes="100px"
                />
              </div>
            </TableCell>
            <TableCell>
              <div className={cn.product}>
                <div>{data.product}</div>
                <div className={cn.option}>{data.options}</div>
              </div>
            </TableCell>
            <TableCell className={cn.cellWrap}>
              <div className={cn.mobileRow}>수량</div>
              <div className={cn.count}>
                <MinusIcon />
                {data.amount}
                <PlusIcon />
              </div>
            </TableCell>
            <TableCell className={cn.cellWrap}>
              <div className={cn.mobileRow}>상품금액</div>
              <PriceText price={data.price} size="14" />
            </TableCell>
            <TableCell className={cn.cellWrap}>
              <div className={cn.mobileRow}>할인</div>
              <PriceText price={data.discount} size="14" />
            </TableCell>
            <TableCell className={cn.cellWrap}>
              <div className={cn.mobileRow}>적립</div>
              <PriceText price={data.point} size="14" />
            </TableCell>
            <TableCell className={cn.cellWrap}>
              <div className={cn.mobileRow}>배송비</div>
              <PriceText price={data.delivery} size="14" />
            </TableCell>
            <TableCell className={clsx(cn.cellWrap, cn.cellLast)}>
              <div className={cn.mobileRow}>합계금액</div>
              <PriceText
                price={data.total_price}
                size="14"
                color="primary"
                weight="800"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
