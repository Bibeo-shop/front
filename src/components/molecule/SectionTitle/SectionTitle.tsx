import Typography from '@/components/atom/Typography/Typography'
import cn from './SectionTitle.module.scss'

export interface SectionTitleProps {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className={cn.title}>
      <Typography type="h3" color="primary" size="20" weight="800">
        {title}
      </Typography>
    </div>
  )
}

export default SectionTitle
