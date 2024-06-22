import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SelectOption, {
  SelectProps,
} from '@/components/atom/SelectOption/SelectOption'

export default {
  title: 'Components/atom/SelectOption',
  component: SelectOption,
  argTypes: {
    start: { control: 'number' },
    end: { control: 'number' },
    placeholder: { control: 'text' },
    suffix: { control: 'text' },
    reverse: { control: 'boolean' },
    className: { control: 'text' },
  },
} as Meta

const Template: StoryFn<SelectProps> = (args) => <SelectOption {...args} />

export const Default = Template.bind({})
Default.args = {
  start: 1,
  end: 10,
  placeholder: 'Select option',
  suffix: '일',
  reverse: false,
  className: '',
}
