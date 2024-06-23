import Image from 'next/image'
import cn from './DetailTab.module.scss'

const DetailTab = () => {
  return (
    <div className={cn.detailTab}>
        <Image
          src="/images/product_image.png"
          width={0}
          height={0}
          alt="product detail image"
          sizes="100vw"
          className={cn.image}
        />
    </div>
  )
}

export default DetailTab
