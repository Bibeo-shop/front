import type { Meta, StoryFn } from '@storybook/react'
import Order from '@/components/molecule/Order/Order'

const meta: Meta<typeof Order> = {
  title: 'Components/molecule/Order',
  component: Order,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <Order {...args} />

export const Default = Template.bind({})
Default.args = {}
