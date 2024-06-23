import ProductsList from '@/components/molecule/ProductsList/ProductsList'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ProductsList> = {
  title: 'Components/molecule/ProductsList',
  component: ProductsList,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ProductsList {...args} />

export const Default = Template.bind({})
Default.args = {}
