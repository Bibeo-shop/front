import type { Meta, StoryFn } from '@storybook/react'
import { OrderTable } from '@/components/molecule/OrderTable/OrderTable'

const meta: Meta<typeof OrderTable> = {
  title: 'Components/molecule/OrderTable',
  component: OrderTable,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <OrderTable {...args} />

export const Default = Template.bind({})
Default.args = {}
