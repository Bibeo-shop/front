import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectValue,
} from '@/components/ui/select'

export default {
  title: 'Components/ui/Select',
  component: Select,
  subcomponents: {
    SelectGroup,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectScrollUpButton,
    SelectScrollDownButton,
  },
  argTypes: {},
} as Meta

const Template: StoryFn = (args) => (
  <Select>
    <SelectTrigger>
    <SelectValue placeholder="select options" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectSeparator />
      <SelectItem value="option3">Option 3</SelectItem>
    </SelectContent>
  </Select>
)

export const Default = Template.bind({})
Default.args = {}
