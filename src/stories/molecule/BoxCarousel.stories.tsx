import { BoxCarousel } from '@/components/molecule/BoxCarousel/BoxCarousel'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof BoxCarousel> = {
  title: 'Components/molecule/BoxCarousel',
  component: BoxCarousel,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <BoxCarousel {...args} />

export const Default = Template.bind({})
Default.args = {}
