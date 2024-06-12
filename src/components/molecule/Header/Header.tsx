import Link from 'next/link'
import Logo from '../../atom/Logo/Logo'
import { CartIcon, MyPageIcon, SearchIcon } from '@/components/atom/svg'
import Menu from '../Menu/Menu'
import cn from './Header.module.scss'

const Header = () => {
  return (
    <div className={cn.headerWrap}>
      <Logo />
      <nav>
        <ul className={cn.topNavWrap}>
          <div className={cn.menuWrap}>
            <li className={cn.search}>
              <button type="button">
                <SearchIcon />
              </button>
            </li>
            <li>
              <Link href="/login">
                <MyPageIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <CartIcon />
              </Link>
            </li>
          </div>
          <li>
            <Menu />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
