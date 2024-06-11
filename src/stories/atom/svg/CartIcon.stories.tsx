import { CartIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CartIcon> = {
  title: 'Components/atom/svg/CartIcon',
  component: CartIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CartIcon>

export const Default: Story = {}
