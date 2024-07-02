import Typography from '@/components/atom/Typography/Typography'
import cn from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={cn.footer}>
      <Typography color="white">footer</Typography>
    </footer>
  )
}

export default Footer
