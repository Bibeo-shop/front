import Typography from '@/components/atom/Typography/Typography'
import cn from './Title.module.scss'

export interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className={cn.title}>
      <Typography type="h2" color="primary" size="20" weight="800">
        {title}
      </Typography>
    </div>
  )
}

export default Title
