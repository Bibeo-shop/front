import { MyPageIcon } from '@/components/atom/svg'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MyPageIcon> = {
  title: 'Components/atom/svg/MyPageIcon',
  component: MyPageIcon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MyPageIcon>

export const Default: Story = {}
