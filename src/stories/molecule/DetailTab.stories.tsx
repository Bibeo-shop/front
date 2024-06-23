import DetailTab from '@/components/molecule/DetailTab/DetailTab'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof DetailTab> = {
  title: 'Components/molecule/DetailTab',
  component: DetailTab,
  tags: ['autodocs']
}

export default meta

const Template: StoryFn = (args) => <DetailTab {...args} />

export const Default = Template.bind({})
Default.args = {}
