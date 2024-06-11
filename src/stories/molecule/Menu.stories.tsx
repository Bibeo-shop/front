import Menu from '@/components/molecule/Menu/Menu'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Menu> = {
  title: 'Components/molecule/Menu',
  component: Menu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}
