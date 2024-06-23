import ProductBuyInfo from '@/components/molecule/ProductBuyInfo/ProductBuyInfo'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ProductBuyInfo> = {
  title: 'Components/molecule/ProductBuyInfo',
  component: ProductBuyInfo,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ProductBuyInfo {...args} />

export const Default = Template.bind({})
Default.args = {}
