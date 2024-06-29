import { Meta, StoryFn } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'

export default {
  title: 'Components/ui/Checkbox',
  component: Checkbox,
} as Meta

const Template: StoryFn = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {}
