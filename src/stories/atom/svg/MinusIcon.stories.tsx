import type { Meta, StoryObj } from '@storybook/react'
import { MinusIcon } from '@/components/atom/svg'

const meta: Meta<typeof MinusIcon> = {
  title: 'Components/atom/svg/MinusIcon',
  component: MinusIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MinusIcon>

export const Default: Story = {}
