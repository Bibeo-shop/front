import ProductDetail from '@/components/molecule/ProductDetail/ProductDetail'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ProductDetail> = {
  title: 'Components/molecule/ProductDetail',
  component: ProductDetail,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ProductDetail {...args} />

export const Default = Template.bind({})
Default.args = {}
