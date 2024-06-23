
import SelectOption from '@/components/atom/SelectOption/SelectOption'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectOption> = {
  title: 'Components/atom/selectOption',
  component: SelectOption,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SelectOption>

export const Default: Story = {}