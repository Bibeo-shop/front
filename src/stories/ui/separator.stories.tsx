import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Separator } from '@/components/ui/separator'

export default {
  title: 'Components/ui/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    decorative: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = (args) => (
  <div className="flex flex-col items-center space-y-4">
    <Separator {...args} />
    <div className="w-full text-center">Content Below</div>
  </div>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  orientation: 'horizontal',
  decorative: true,
}

export const Vertical = Template.bind({})
Vertical.args = {
  orientation: 'vertical',
  decorative: true,
  className: 'h-32',
}
