import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Separator } from '@/components/ui/separator'
import { CartIcon, StarIcon, MinusIcon, PlusIcon } from '@/components/atom/svg'
import cn from './ProductBuyInfo.module.scss'
import SelectOption from '@/components/atom/SelectOption/SelectOption'

const ProductBuyInfo = () => {
  return (
    <div className={cn.productBuyInfo}>
      <div className={cn.statusWrap}>
        <Badge>NEW</Badge>
        <Badge variant="outline">EVENT</Badge>
        <Badge variant="secondary">품절</Badge>
        <Badge variant="third">무료배송</Badge>
      </div>
      <Typography type="h3" size="20" weight="800" className={cn.title}>
        실버 925 블랙 오닉스 큐빅 귀걸이
      </Typography>
      <div className={cn.detailWrap}>
        <div className={cn.rateWrap}>
          <StarIcon size="12" />
          <StarIcon size="12" />
          <StarIcon size="12" />
          <StarIcon size="12" />
          <StarIcon size="12" />
          <Typography
            size="12"
            color="gray-normal"
            weight="800"
            className={cn.rateAmount}
          >
            4.9
          </Typography>
        </div>

        <Separator orientation="vertical" className="h-2" />
        <div className={cn.rateWrap}>
          <Typography size="12" color="primary">
            리뷰
          </Typography>
          <Typography size="12" color="primary">
            5,231개
          </Typography>
        </div>
      </div>
      <div className={cn.priceWrap}>
        <div>
          <Typography color="primary" size="24" weight="800">
            13,000원
          </Typography>
          <Typography color="gray-strong" className={cn.beforePrice}>
            15,000원
          </Typography>
        </div>
        <Typography color="primary" size="20" weight="800">
          10%
        </Typography>
      </div>
      <div className={cn.pointWrap}>
        <Typography size="14" weight="600">
          적립 포인트
        </Typography>
        <Typography size="14" weight="600">
          150원
        </Typography>
      </div>
      <div className={cn.wrap}>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Typography weight="800" color="primary" className={cn.info}>
                상품정보
              </Typography>
            </AccordionTrigger>
            <AccordionContent>
              <div className={cn.infoWrap}>
                <div className={cn.infoGroup}>
                  <Typography size="12" weight="600" className={cn.label}>
                    정가
                  </Typography>
                  <Typography
                    size="12"
                    color="gray-strong"
                    className={cn.price}
                  >
                    15,000원
                  </Typography>
                </div>
                <div className={cn.infoGroup}>
                  <Typography size="12" weight="600" className={cn.label}>
                    판매가
                  </Typography>
                  <Typography
                    size="12"
                    color="gray-strong"
                    className={cn.price}
                  >
                    13,500원
                  </Typography>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Typography weight="800" color="primary" className={cn.info}>
                배송안내
              </Typography>
            </AccordionTrigger>
            <AccordionContent>
              <div className={cn.infoWrap}>
                <div className={cn.infoGroup}>
                  <Typography size="12" weight="600" className={cn.label}>
                    배송비
                  </Typography>
                  <Typography
                    size="12"
                    color="gray-strong"
                    className={cn.price}
                  >
                    2,000원 (주문시 결제)
                  </Typography>
                </div>
                <div className={cn.infoGroup}>
                  <Typography size="12" weight="600" className={cn.label}>
                    출고 정보
                  </Typography>
                  <Typography
                    size="12"
                    color="gray-strong"
                    className={cn.price}
                  >
                    국내 배송 / 롯데택배
                  </Typography>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className={cn.selectWrap}>
          <SelectOption />
        </div>
        <div className={cn.optionContainer}>
          <Typography weight="600">실버925 블랙 오닉스 큐빅 귀걸이</Typography>
          <div className={cn.optionGroup}>
            <div className={cn.selectBtn}>
              <MinusIcon />
              <Typography weight="800">1</Typography>
              <PlusIcon />
            </div>
            <Typography weight="800">13,500원</Typography>
          </div>
        </div>
      </div>

      <div className={cn.optionGroup}>
        <Typography weight="800">총 상품금액</Typography>
        <Typography weight="800" size="24" color="primary">
          13,500원
        </Typography>
      </div>

      <div className={cn.btnWrap}>
        <Button size="full" variant="outline">
          <CartIcon />
        </Button>
        <Button size="full">구매하기</Button>
      </div>
    </div>
  )
}

export default ProductBuyInfo
