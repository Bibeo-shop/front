import LoginForm from '@/components/molecule/LoginForm/LoginForm'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof LoginForm> = {
  title: 'Components/molecule/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
