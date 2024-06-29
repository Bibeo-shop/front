import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import SectionTitle from '../SectionTitle/SectionTitle'
import { CheckboxWithText } from '@/components/atom/CheckboxWithText/CheckboxWithText'
import { OrderTable } from '../OrderTable/OrderTable'
import OrderProcess from '../OrderProcess/OrderProcess'
import PriceText from '@/components/atom/PriceText/PriceText'
import TotalPrice from '../TotalPrice/TotalPrice'
import { Textarea } from '@/components/ui/textarea'
import clsx from 'clsx'
import cn from './Order.module.scss'

export default function Order() {
  return (
    <div className={cn.order}>
      <OrderProcess process="order" />
      <div className={cn.container}>
        <div className={cn.sectionArea}>
          <SectionTitle title="주문내역" />
          <OrderTable />
          <TotalPrice />
        </div>
        <div className={cn.sectionArea}>
          <SectionTitle title="주문자정보" />
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">주문자명</Typography>
            </label>
            <input className={cn.input} type="text"></input>
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">휴대폰 번호</Typography>
            </label>
            <input className={cn.input} type="text"></input>
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">이메일</Typography>
            </label>
            <input className={cn.input} type="text"></input>
          </div>
        </div>
        <div className={cn.sectionArea}>
          <SectionTitle title="배송지정보" />
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">받는 사람</Typography>
            </label>
            <input className={cn.input} type="text" />
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">주소</Typography>
            </label>
            <div className={cn.address}>
              <div className={cn.addressWrap}>
                <input className={cn.input} type="text" />
                <Button variant="dark">주소 선택</Button>
              </div>
              <div className={cn.inputGroup}>
                <input className={clsx(cn.input, cn.mainAddress)} type="text" />
                <input className={cn.input} type="text" />
              </div>
            </div>
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">휴대폰 번호</Typography>
            </label>
            <input className={cn.input} type="text" />
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">요청 사항</Typography>
            </label>
            <Textarea className={clsx(cn.input, cn.textarea)} />
          </div>
        </div>
        <div className={cn.sectionArea}>
          <SectionTitle title="결제정보" />
          <div className={cn.priceWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">상품 금액</Typography>
            </label>
            <PriceText price={13500} color="primary" />
          </div>
          <div className={cn.priceWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">배송비</Typography>
            </label>
            <PriceText price={2000} />
          </div>
          <div className={cn.priceWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">할인 금액</Typography>
            </label>
            <PriceText price={-1200} color="red" />
          </div>
          <div className={cn.priceWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">합계 금액</Typography>
            </label>
            <PriceText price={14300} color="primary" />
          </div>
        </div>
        <div className={cn.sectionArea}>
          <SectionTitle title="쿠폰/적립금" />
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">쿠폰 할인</Typography>
            </label>
            <div className={cn.labelWrap}>
              <input className={cn.input} type="text"></input>
              <Typography weight="600">원</Typography>
            </div>
            <div className={cn.couponWrap}>
              <div className={cn.couponCheckWrap}>
                <Button variant="dark">쿠폰 적용</Button>
              </div>
              <div className={cn.labelWrap}>
                <Typography weight="600">보유 쿠폰</Typography>
                <Typography weight="600" color="red">
                  2장
                </Typography>
              </div>
            </div>
          </div>
          <div className={cn.inputWrap}>
            <label className={cn.inputLabel}>
              <Typography weight="600">포인트</Typography>
            </label>
            <div className={cn.labelWrap}>
              <input className={cn.input} type="text"></input>
              <Typography weight="600">원</Typography>
            </div>
            <div className={cn.couponWrap}>
              <div className={cn.couponCheckWrap}>
                <div className={cn.labelWrap}>
                  <input id="useAllPoints" type="checkbox" />
                  <label htmlFor="useAllPoints">
                    <Typography weight="600">모두 사용</Typography>
                  </label>
                </div>
              </div>
              <div className={cn.labelWrap}>
                <Typography weight="600">보유 포인트</Typography>
                <Typography weight="600" color="red">
                  200원
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={cn.sectionArea}>
          <SectionTitle title="결제수단" />
          <div className={cn.checkLabel}>
            <CheckboxWithText label="신용카드" id="creditCard" />
            <CheckboxWithText
              label="실시간 계좌이체"
              id="realTimeBankTransfer"
            />
            <CheckboxWithText label="가상계좌" id="virtualAccount" />
            <CheckboxWithText label="카카오페이" id="KakaoPay" />
          </div>
        </div>
        <div className={cn.btnWrap}>
          <Button size="normal" asChild>
            <Link href="/order/complete">주문 완료</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
