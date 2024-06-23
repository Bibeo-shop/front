// stories/Input.stories.tsx

import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Input, InputProps } from '@/components/ui/input'

export default {
  title: 'Components/ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'email', 'password'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn<InputProps> = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  placeholder: '텍스트',
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: '숫자',
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: '이메일',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: '패스워드',
}

export const File = Template.bind({})
File.args = {
  type: 'file',
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: '사용불가',
  disabled: true,
}
