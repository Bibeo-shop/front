import { StarIcon } from '@/components/atom/svg'

interface StarRatingProps {
  rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return <StarIcon key={index} size="12" color="#FFC52F" />
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative">
              <StarIcon size="12" color="#D1D5DB" />
              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                <StarIcon size="12" color="#FFC52F" />
              </div>
            </div>
          )
        } else {
          return <StarIcon key={index} size="12" color="#D1D5DB" />
        }
      })}
    </div>
  )
}

export default StarRating
