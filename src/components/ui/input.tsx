import * as React from 'react'
import { cn } from '@/lib/utils'
import Typography from '../atom/Typography/Typography'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className={cn('relative')}>
        <label
          htmlFor={id}
          className={cn('inline-block absolute left-[26px] top-5 text-left')}
        >
          <Typography weight="600" color="gray-strong" size="14">
            {label}
          </Typography>
        </label>
        <input
          id={id}
          type={type}
          className={cn(
            'flex h-[58px] w-full rounded-[50px] indent-24 border-input bg-secondary px-[26px] py-[20px] text-base ring-offset-background file:border-0 file:bg-transparent file:text-medium file:font-medium placeholder:text-muted-foreground placeholder:font-normal focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
