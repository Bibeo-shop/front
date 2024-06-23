import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-muted-foreground',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:text-white hover:bg-third hover:border-white',
        destructive:
          'bg-destructive text-white hover:bg-white hover:text-destructive',
        outline:
          'border border-gray-300 bg-background text-primary hover:text-white hover:bg-third hover:border-white',
        secondary:
          'bg-secondary text-primary hover:bg-primary hover:text-secondary',
        dark:
          'bg-black text-white rounded hover:bg-input',
        darkoutline:
          'border border-black bg-background text-black rounded hover:text-white hover:bg-input hover:border-input',
        ghost: 'hover:bg-secondary hover:text-primary',
        link: 'text-ghost font-normal underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'px-1 py-1 text-xs',
        lg: 'px-8 py-1',
        icon: 'h-10 w-10',
        full: 'h-[60px] w-full py-4 text-2xl rounded-full',
        link: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
