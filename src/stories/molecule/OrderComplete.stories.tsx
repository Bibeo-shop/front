import type { Meta, StoryFn } from '@storybook/react'
import OrderComplete from '@/components/molecule/OrderComplete/OrderComplete'

const meta: Meta<typeof OrderComplete> = {
  title: 'Components/molecule/OrderComplete',
  component: OrderComplete,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <OrderComplete {...args} />

export const Default = Template.bind({})
Default.args = {}
