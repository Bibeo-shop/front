import { SearchIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchIcon> = {
  title: 'Components/atom/svg/SearchIcon',
  component: SearchIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SearchIcon>

export const Default: Story = {}
