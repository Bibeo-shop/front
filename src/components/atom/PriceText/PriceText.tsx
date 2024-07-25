import Typography, { TextProps } from '../Typography/Typography'

interface PriceTextProps {
  price: number | string
  color?: TextProps['color']
  weight?: TextProps['weight']
  size?: TextProps['size']
  suffixes?: string
  className?: string
}

const PriceText = ({
  price,
  color = 'black',
  weight = '600',
  size = '16',
  suffixes,
  className,
}: PriceTextProps) => {
  const priceNumber = typeof price === 'string' ? parseInt(price) : price

  if (isNaN(priceNumber)) {
    return null
  }
  const replacePrice = priceNumber.toLocaleString()
  return (
    <Typography color={color} weight={weight} size={size} className={className}>
      {replacePrice}
      {suffixes}
    </Typography>
  )
}

export default PriceText
