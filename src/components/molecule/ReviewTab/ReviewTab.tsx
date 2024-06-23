import Image from 'next/image'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@/components/atom/svg'
import { Separator } from '@/components/ui/separator'
import cn from './ReviewTab.module.scss'

const ReviewTab = () => {
  return (
    <div className={cn.reviewTab}>
      <div className={cn.rateContainer}>
        <div className={cn.countGroup}>
          <div className={cn.countWrap}>
            <Typography weight="800">사용자 총 평점</Typography>
            <div className={cn.starWrap}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={cn.rateWrap}>
              <Typography size="24" weight="800">
                4.9
              </Typography>
              <Typography size="24" color="gray-strong" weight="800">
                /
              </Typography>
              <Typography size="24" color="gray-strong" weight="800">
                5
              </Typography>
            </div>
          </div>
          <Separator orientation="vertical" className="h-full" />
          <div className={cn.countWrap}>
            <Typography weight="800" className={cn.label}>
              전체 리뷰수
            </Typography>
            <Typography size="24" weight="800">
              50
            </Typography>
          </div>
        </div>
      </div>
      <div className={cn.reviewContainer}>
        <div className={cn.reviewArea}>
          <div className={cn.userInfoWrap}>
            <div className={cn.starWrap}>
              <StarIcon size="18" color="#0000FF" />
              <StarIcon size="18" color="#0000FF" />
              <StarIcon size="18" color="#0000FF" />
              <StarIcon size="18" color="#0000FF" />
              <StarIcon size="18" color="#0000FF" />
            </div>
            <Typography size="12" weight="800" className={cn.userName}>
              닉네임12
            </Typography>
            <Typography size="12" weight="600" color="gray-strong">
              2024.04.17
            </Typography>
          </div>
          <div className={cn.userReviewWrap}>
            <div className={cn.review}>
              <Typography
                size="12"
                weight="600"
                color="gray-strong"
                className={cn.option}
              >
                옵션 : FREE
              </Typography>
              <Typography size="12" weight="600">
                호냐냐
              </Typography>
              <div className={cn.imageWrap}>
                <Image
                  src="/images/product_image.png"
                  fill={true}
                  alt="review image"
                  className={cn.image}
                  sizes="100px"
                />
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full">더보기</Button>
      </div>
    </div>
  )
}

export default ReviewTab
