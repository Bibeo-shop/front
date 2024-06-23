import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import cn from './Category.module.scss'

export const categoryData = [
  {
    id: 1,
    category: 'NEW',
  },
  { id: 2, category: 'BEST' },
  { id: 3, category: 'NECKLACE' },
  { id: 4, category: 'EARRING' },
]

const Category = () => {
  return (
    <div className={cn.category}>
      <nav className={cn.categoryWrap}>
        <ul>
          {categoryData.map((item) => (
            <li key={item.id}>
              <Link href="/products">
                <Typography color="primary" weight="800">
                  {item.category}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Category
