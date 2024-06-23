import { StarIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StarIcon> = {
  title: 'Components/atom/svg/StarIcon',
  component: StarIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof StarIcon>

export const Default: Story = {}
