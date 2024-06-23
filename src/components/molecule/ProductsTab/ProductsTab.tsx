import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DetailTab from '../DetailTab/DetailTab'
import ReviewTab from '../ReviewTab/ReviewTab'
import QnaTab from '../QnaTab/QnaTab'
import cn from './ProductsTab.module.scss'

const ProductsTab = () => {
  return (
    <div className={cn.productsTab}>
      <Tabs defaultValue="qna" className={cn.wrap}>
        <TabsList className={cn.listWrap}>
          <TabsTrigger value="detail">상세정보</TabsTrigger>
          <TabsTrigger value="review">리뷰 (50)</TabsTrigger>
          <TabsTrigger value="qna">Q&A (50)</TabsTrigger>
        </TabsList>
        <TabsContent value="detail">
          <DetailTab />
        </TabsContent>
        <TabsContent value="review">
          <ReviewTab />
        </TabsContent>
        <TabsContent value="qna">
          <QnaTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProductsTab
