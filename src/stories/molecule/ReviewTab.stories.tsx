import ReviewTab from '@/components/molecule/ReviewTab/ReviewTab'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof ReviewTab> = {
  title: 'Components/molecule/ReviewTab',
  component: ReviewTab,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <ReviewTab {...args} />

export const Default = Template.bind({})
Default.args = {}
