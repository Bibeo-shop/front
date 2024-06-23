import ProductsTab from '@/components/molecule/ProductsTab/ProductsTab'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ProductsTab> = {
  title: 'Components/molecule/ProductsTab',
  component: ProductsTab,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ProductsTab {...args} />

export const Default = Template.bind({})
Default.args = {}
