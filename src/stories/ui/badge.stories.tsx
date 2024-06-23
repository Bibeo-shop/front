import { Badge, BadgeProps } from '@/components/ui/badge'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Badge> = {
  title: 'Components/ui/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'secondary', 'third', 'outline'],
      },
    },
  },
}

export default meta

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args}>Badge</Badge>

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Third = Template.bind({})
Third.args = {
  variant: 'third',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}
