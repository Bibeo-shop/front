import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CheckboxWithText } from '@/components/atom/CheckboxWithText/CheckboxWithText'

const meta: Meta = {
  title: 'Components/atom/CheckboxWithText',
  component: CheckboxWithText,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
  },
}

export default meta

const Template: StoryFn<{
  label: string
  id: string
}> = (args) => <CheckboxWithText {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default Label',
  id: 'default-checkbox',
}
