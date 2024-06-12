import Title, { TitleProps } from '@/components/molecule/Title/Title'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Title> = {
  title: 'Components/molecule/Title',
  component: Title,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'title',
}
