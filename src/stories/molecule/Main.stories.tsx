import Main from '@/components/molecule/Main/Main'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Main> = {
  title: 'Components/molecule/Main',
  component: Main,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {}
