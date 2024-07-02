'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import cn from './BoxCarousel.module.scss'
import Link from 'next/link'

export function BoxCarousel() {
  const items = [
    { id: 1, content: '/images/product_image.png' },
    { id: 2, content: '/images/product_image1.png' },
    { id: 3, content: '/images/product_image2.png' },
    { id: 4, content: '/images/product_image3.png' },
    { id: 5, content: '/images/product_image4.png' },
    { id: 6, content: '/images/product_image5.png' },
  ]
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className={cn.carousel}
    >
      <CarouselContent>
        {items.map((item, index) => {
          return (
            <CarouselItem key={index} className={cn.item}>
              <div className={cn.imageContainer}>
                <Link href="/products" className={cn.imageLink} />
                <Image
                  src={item.content}
                  fill={true}
                  alt="product detail image"
                  className={cn.image}
                  sizes="289px"
                  priority
                />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className={cn.prev} />
      <CarouselNext className={cn.next} />
    </Carousel>
  )
}
