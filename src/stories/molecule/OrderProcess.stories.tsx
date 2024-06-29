import { Meta, StoryFn } from '@storybook/react'
import OrderProcess, {
  OrderProcessProps,
} from '@/components/molecule/OrderProcess/OrderProcess'

const meta: Meta<typeof OrderProcess> = {
  title: 'Components/molecule/OrderProcess',
  component: OrderProcess,
  tags: ['autodocs'],
  argTypes: {
    process : {
      control: 'select',
      options: ['cart','order','complete']}
  }
}

export default meta

const Template: StoryFn<OrderProcessProps> = (args) => (
  <OrderProcess {...args} />
)


export const Cart = Template.bind({})
Cart.args = {
  process: 'cart'
}
export const Order = Template.bind({})
Order.args = {
  process: 'order'
}
export const Complete = Template.bind({})
Complete.args = {
  process: 'complete'
}
