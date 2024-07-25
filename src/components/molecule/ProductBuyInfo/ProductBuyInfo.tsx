'use client'
import { useState } from 'react'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { CartIcon, StarIcon, MinusIcon, PlusIcon } from '@/components/atom/svg'
import SelectOption from '@/components/atom/SelectOption/SelectOption'
import Link from 'next/link'
import ProductBadge from '../ProductBadge/ProductBadge'
import PriceText from '@/components/atom/PriceText/PriceText'
import { useProductDetail } from '@/hooks/useProductDetail'
import StarRating from '../StarRating/StarRating'
import cn from './ProductBuyInfo.module.scss'

interface SelectedOption {
  option: string
  quantity: number
}

const ProductBuyInfo = () => {
  const { data } = useProductDetail()
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([])

  if (!data) return null

  const {
    name,
    rate,
    review_count,
    price,
    retail_price,
    points,
    status,
    shipping_fee,
    shipping_details,
    options,
  } = data

  const isSoldOut = options.every((option) => option.soldOut)

  const discountAmount = retail_price - price
  const discountRate = (discountAmount / retail_price) * 100
  const discount = Math.round(discountRate)

  const addOption = (option: string) => {
    setSelectedOptions((prevOptions: SelectedOption[]) => {
      const existingOption = prevOptions.find((opt) => opt.option === option)
      if (existingOption) {
        return prevOptions
      }
      return [...prevOptions, { option, quantity: 1 }]
    })
  }

  const removeOption = (index: number) => {
    const newOptions = selectedOptions.filter((_, i) => i !== index)
    setSelectedOptions(newOptions)
  }

  const updateQuantity = (index: number, newQuantity: number) => {
    const newOptions = [...selectedOptions]
    newOptions[index].quantity = newQuantity
    setSelectedOptions(newOptions)
  }

  const totalPrice =
    selectedOptions && selectedOptions.length > 0
      ? selectedOptions.reduce(
          (total, item) => total + price * item.quantity,
          0
        )
      : price

  return (
    <div className={cn.productBuyInfo}>
      <div className={cn.statusWrap}>
        <ProductBadge status={status} />
      </div>
      <Typography type="h3" size="20" weight="800" className={cn.title}>
        {name}
      </Typography>
      <div className={cn.detailWrap}>
        <div className={cn.rateWrap}>
          <StarRating rating={rate} />
          <PriceText
            price={rate}
            size="12"
            color="gray-normal"
            weight="800"
            className={cn.rateAmount}
          />
        </div>

        <Separator orientation="vertical" className="h-2" />
        <div className={cn.rateWrap}>
          <Typography size="12" color="primary">
            리뷰
          </Typography>
          <PriceText
            price={review_count}
            size="12"
            color="primary"
            suffixes="건"
          />
        </div>
      </div>
      <div className={cn.priceWrap}>
        <div>
          <PriceText
            price={price}
            size="24"
            color="primary"
            weight="800"
            suffixes="원"
          />
          <PriceText
            price={retail_price}
            color="gray-strong"
            className={cn.beforePrice}
            suffixes="원"
          />
        </div>
        <Typography color="primary" size="20" weight="800">
          {discount}%
        </Typography>
      </div>
      <div className={cn.pointWrap}>
        <Typography size="14" weight="600">
          적립 포인트
        </Typography>
        <PriceText price={points} size="14" weight="600" suffixes="원" />
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
                  <Typography size="14" weight="600" className={cn.label}>
                    정가
                  </Typography>
                  <PriceText
                    price={retail_price}
                    color="gray-strong"
                    size="14"
                    weight="400"
                    className={cn.price}
                    suffixes="원"
                  />
                </div>
                <div className={cn.infoGroup}>
                  <Typography size="14" weight="600" className={cn.label}>
                    판매가
                  </Typography>
                  <PriceText
                    price={price}
                    color="gray-strong"
                    size="14"
                    weight="400"
                    className={cn.price}
                    suffixes="원"
                  />
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
                  <Typography size="14" weight="600" className={cn.label}>
                    배송비
                  </Typography>
                  <PriceText
                    price={shipping_fee}
                    color="gray-strong"
                    size="14"
                    weight="400"
                    className={cn.price}
                    suffixes="원 (주문시 결제)"
                  />
                </div>
                <div className={cn.infoGroup}>
                  <Typography size="14" weight="600" className={cn.label}>
                    출고 정보
                  </Typography>
                  <Typography
                    size="14"
                    color="gray-strong"
                    className={cn.price}
                  >
                    {shipping_details}
                  </Typography>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className={cn.selectWrap}>
          <SelectOption options={options} onSelect={addOption} />
        </div>
        {selectedOptions.map((item, index) => (
          <div key={index} className={cn.optionContainer}>
            <Button
              variant="ghost"
              className={cn.closeBtn}
              onClick={() => removeOption(index)}
            >
              &#215;
            </Button>

            <Typography weight="600">{item.option}</Typography>
            <div className={cn.optionGroup}>
              <div className={cn.selectBtn}>
                <MinusIcon
                  onClick={() =>
                    updateQuantity(index, Math.max(1, item.quantity - 1))
                  }
                />
                <Typography weight="800">{item.quantity}</Typography>
                <PlusIcon
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                />
              </div>
              <PriceText
                price={price * item.quantity}
                weight="800"
                suffixes="원"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={cn.optionGroup}>
        <Typography weight="800">총 상품금액</Typography>
        <PriceText
          price={totalPrice}
          weight="800"
          size="24"
          color="primary"
          suffixes="원"
        />
      </div>

      {isSoldOut ? (
        <div className={cn.btnWrap}>
          <Button size="full" disabled>
            SOLD OUT
          </Button>
        </div>
      ) : (
        <div className={cn.btnWrap}>
          <Button size="full" variant="outline" className={cn.btnCart}>
            <CartIcon />
          </Button>

          <Button size="full" asChild>
            <Link href="/order/order">구매하기</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

export default ProductBuyInfo
