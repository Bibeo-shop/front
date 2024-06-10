import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from '@/components/atom/svg'
import Link from 'next/link'
import cn from './Menu.module.scss'

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
            <li>
              <Link href="/">new</Link>
            </li>
            <li>
              <Link href="/">best</Link>
            </li>
            <li>
              <Link href="/">necklace</Link>
            </li>
            <li>
              <Link href="/">earring</Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Menu
