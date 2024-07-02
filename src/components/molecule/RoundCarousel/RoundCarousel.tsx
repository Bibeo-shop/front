'use client'

import { useState, useEffect, useCallback } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import cn from './RoundCarousel.module.scss'

export function RoundCarousel() {
  const items = [
    {
      id: 1,
      image: '/images/product_image.png',
      title: '4월 생일선물',
      description:
        '4월 생일인 가족, 친구, 지인에게\n가장 감동적인 선물을 하고 싶다면?\n후기 4.5점 이상 작품들만 모아 소개해요.',
      buttonText: 'READ MORE',
    },
    {
      id: 2,
      image: '/images/product_image2.png',
      title: '5월 특별 이벤트',
      description:
        '봄의 끝자락, 5월을 맞이하여\n특별한 이벤트를 준비했습니다.\n지금 바로 확인해보세요!',
      buttonText: '자세히 보기',
    },
    {
      id: 3,
      image: '/images/product_image4.png',
      title: '6월 할인 이벤트',
      description: '6월 특별 할인 이벤트!',
      buttonText: '자세히 보기',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const paddedIndex = (currentIndex + 1).toString().padStart(2, '0')

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    )
  }, [items.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const currentItem = items[currentIndex]
  return (
    <div className={cn.roundCarousel}>
      <div className={cn.infoContainer}>
        <Typography size="40" color="third" weight="800" className="text-third">
          {currentItem.title}
        </Typography>
        <Typography>
          <Typography className={cn.description}>
            {currentItem.description}
          </Typography>
        </Typography>
        <Button className={clsx('bg-third', cn.btn)}>READ MORE &#10095;</Button>
      </div>
      <div className={cn.line}>
        <Typography color="third" weight="800" className={cn.index}>
          {paddedIndex}
        </Typography>
      </div>

      <div className={cn.carouselContainer}>
        {items.map((item, index) => {
          let itemClass = cn.item
          if (index === currentIndex) {
            itemClass += ` ${cn.center}`
          } else if (index === (currentIndex + 1) % items.length) {
            itemClass += ` ${cn.next}`
          }
          return (
            <div key={item.id} className={itemClass}>
              <Image
                src={item.image}
                fill={true}
                alt="product detail image"
                className={cn.image}
                sizes="500px"
                priority
              />
            </div>
          )
        })}
        <button onClick={prevSlide} className={cn.prevBtn}>
          &#10094;
        </button>
        <button onClick={nextSlide} className={cn.nextBtn}>
          &#10095;
        </button>
      </div>
    </div>
  )
}
