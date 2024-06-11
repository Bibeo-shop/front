import Header from '@/components/molecule/Header/Header'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'Components/molecule/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
