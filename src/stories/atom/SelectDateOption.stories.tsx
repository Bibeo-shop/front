import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SelectDateOption, { SelectDateProps } from '@/components/atom/SelectDateOption/SelectDateOption'

export default {
  title: 'Components/atom/SelectDateOption',
  component: SelectDateOption,
  argTypes: {
    start: { control: 'number' },
    end: { control: 'number' },
    placeholder: { control: 'text' },
    suffix: { control: 'text' },
    reverse: { control: 'boolean' },
    className: { control: 'text' },
  },
} as Meta

const Template: StoryFn<SelectDateProps> = (args) => <SelectDateOption {...args} />

export const Default = Template.bind({})
Default.args = {
  start: 1,
  end: 10,
  placeholder: 'Select option',
  suffix: '일',
  reverse: false,
  className: '',
}
