import { CartTable } from '@/components/molecule/CartTable/CartTable'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof CartTable> = {
  title: 'Components/molecule/CartTable',
  component: CartTable,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <CartTable {...args} />

export const Default = Template.bind({})
Default.args = {}
