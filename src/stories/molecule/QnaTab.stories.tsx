import QnaTab from '@/components/molecule/QnaTab/QnaTab'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof QnaTab> = {
  title: 'Components/molecule/QnaTab',
  component: QnaTab,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <QnaTab {...args} />

export const Default = Template.bind({})
Default.args = {}
