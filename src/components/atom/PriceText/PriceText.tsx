import Typography, { TextProps } from '../Typography/Typography'

interface PriceTextProps {
  price: number | string
  color?: TextProps['color']
  weight?: TextProps['weight']
  size?: TextProps['size']
}

const PriceText = ({
  price,
  color = 'black',
  weight = '600',
  size = '16',
}: PriceTextProps) => {
  const priceNumber = typeof price === 'string' ? parseInt(price) : price

  if (isNaN(priceNumber)) {
    return null
  }
  const replacePrice = priceNumber.toLocaleString()
  return (
    <div>
      <Typography color={color} weight={weight} size={size}>
        {replacePrice}
      </Typography>
      <Typography weight={weight} size={size}>
        원
      </Typography>
    </div>
  )
}

export default PriceText
