import Cart from '@/components/molecule/Cart/Cart'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Cart> = {
  title: 'Components/molecule/Cart',
  component: Cart,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <Cart {...args} />

export const Default = Template.bind({})
Default.args = {}
