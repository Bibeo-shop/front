import SignUpForm from '@/components/molecule/SignUpForm/SignUpForm'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof SignUpForm> = {
  title: 'Components/molecule/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <SignUpForm {...args} />

export const Default = Template.bind({})
Default.args = {}
