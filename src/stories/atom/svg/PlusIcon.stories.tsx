import { PlusIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PlusIcon> = {
  title: 'Components/atom/svg/PlusIcon',
  component: PlusIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlusIcon>

export const Default: Story = {}
