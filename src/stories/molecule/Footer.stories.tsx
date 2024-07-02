import Footer from '@/components/molecule/Footer/Footer'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Footer> = {
  title: 'Components/molecule/Footer',
  component: Footer,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
