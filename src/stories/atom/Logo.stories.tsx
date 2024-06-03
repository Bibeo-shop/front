import Logo from '@/components/atom/Logo'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Logo> = {
  title: 'Components/atom/Logo',
  component: Logo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {}
