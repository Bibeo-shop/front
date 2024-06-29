import SectionTitle, {
  SectionTitleProps,
} from '@/components/molecule/SectionTitle/SectionTitle'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/molecule/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<SectionTitleProps> = (args) => (
  <SectionTitle {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'title',
}
