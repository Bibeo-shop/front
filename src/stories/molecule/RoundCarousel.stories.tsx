import { RoundCarousel } from '@/components/molecule/RoundCarousel/RoundCarousel'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof RoundCarousel> = {
  title: 'Components/molecule/RoundCarousel',
  component: RoundCarousel,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <RoundCarousel {...args} />

export const Default = Template.bind({})
Default.args = {}
