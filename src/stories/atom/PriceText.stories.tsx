import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { TextProps } from '@/components/atom/Typography/Typography'
import PriceText from '@/components/atom/PriceText/PriceText'

const meta: Meta = {
  title: 'Components/atom/PriceText',
  component: PriceText,
  argTypes: {
    price: { control: 'text' },
    color: { control: 'color' },
    weight: { control: 'text' },
    size: { control: 'text' },
  },
}

export default meta

const Template: StoryFn<{
  price: number | string
  color?: TextProps['color']
  weight?: TextProps['weight']
  size?: TextProps['size']
}> = (args) => <PriceText {...args} />

export const Default = Template.bind({})
Default.args = {
  price: '1000',
  color: 'black',
  weight: '600',
  size: '16',
}

export const CustomPrice = Template.bind({})
CustomPrice.args = {
  price: '2500',
  color: 'primary',
  weight: '800',
  size: '18',
}

export const InvalidPrice = Template.bind({})
InvalidPrice.args = {
  price: 'invalid',
  color: 'red',
  weight: '400',
  size: '14',
}
