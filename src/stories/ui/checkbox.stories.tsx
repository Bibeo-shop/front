import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/ui/Checkbox',
  component: Checkbox,
}

export default meta

const Template: StoryFn = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {}
