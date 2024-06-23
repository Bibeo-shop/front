import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from '@/components/atom/svg'
import cn from './Menu.module.scss'

export const categoryData = [
  {
    id: 1,
    category: 'NEW',
  },
  { id: 2, category: 'BEST' },
  { id: 3, category: 'NECKLACE' },
  { id: 4, category: 'EARRING' },
]

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetClose />
        </SheetHeader>
        <nav className={cn.rightNavWrap}>
          <ul>
            {categoryData.map((item) => (
              <li key={item.id}>
                <Link href="/products">
                  <Typography size="24" color="primary" weight="800">
                    {item.category}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Menu
