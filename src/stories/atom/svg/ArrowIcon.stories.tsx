import { ArrowIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ArrowIcon> = {
  title: 'Components/atom/svg/ArrowIcon',
  component: ArrowIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ArrowIcon>

export const Default: Story = {}