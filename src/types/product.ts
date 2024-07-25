export interface Product {
  id: number
  name: string
  product_image_url: string
  rate: number
  review_count: number
  price: number
  retail_price: number
  status: string[]
}

export interface Options {
  name: string
  soldOut: boolean
}

export interface ProductDetailProps extends Product {
  points: number
  description: string
  shipping_fee: number
  shipping_details: string
  options: Options[]
}
