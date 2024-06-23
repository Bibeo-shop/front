import { Meta, StoryFn } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'

export default {
  title: 'Components/ui/Textarea',
  component: Textarea,
} as Meta

const Template: StoryFn = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: '텍스트를 입력하세요',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Disabled textarea',
  disabled: true,
}
