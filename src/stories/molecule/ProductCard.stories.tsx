import ProductCard from '@/components/molecule/ProductCard/ProductCard'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ProductCard> = {
  title: 'Components/molecule/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {}
