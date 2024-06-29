import TotalPrice from '@/components/molecule/TotalPrice/TotalPrice'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof TotalPrice> = {
  title: 'Components/molecule/TotalPrice',
  component: TotalPrice,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <TotalPrice {...args} />

export const Default = Template.bind({})
Default.args = {}
