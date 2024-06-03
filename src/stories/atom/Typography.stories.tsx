import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Typography, { TextProps } from '@/components/atom/Typography/Typography';

export default {
  title: 'Components/atom/Typography',
  component: Typography,
} as Meta;

// Size
const SizeTemplate: StoryFn<TextProps> = (args) => (
  <div>
    <Typography {...args} size="14">This is size 14</Typography><br/>
    <Typography {...args} size="16">This is size 16</Typography><br/>
    <Typography {...args} size="18">This is size 18</Typography><br/>
    <Typography {...args} size="24">This is size 24</Typography>
  </div>
);

export const Sizes = SizeTemplate.bind({});
Sizes.args = {
  children: 'Typography Text',
  type: 'span',
  color: 'black',
  weight: '400',
};

// Color
const ColorTemplate: StoryFn<TextProps> = (args) => (
  <div>
    <Typography {...args} color="black">This is black color</Typography><br/>
    <Typography {...args} color="red">This is red color</Typography><br/>
    <Typography {...args} color="white">This is white color</Typography><br/>
    <Typography {...args} color="primary">This is primary color</Typography><br/>
    <Typography {...args} color="gray-strong">This is gray-strong color</Typography><br/>
    <Typography {...args} color="gray-normal">This is gray-normal color</Typography><br/>
    <Typography {...args} color="gray-light">This is gray-light color</Typography>
  </div>
);

export const Colors = ColorTemplate.bind({});
Colors.args = {
  children: 'Typography Text',
  type: 'span',
  size: '16',
  weight: '400',
};

// Weight
const WeightTemplate: StoryFn<TextProps> = (args) => (
  <div>
    <Typography {...args} weight="400">This is weight 400</Typography><br/>
    <Typography {...args} weight="600">This is weight 600</Typography><br/>
    <Typography {...args} weight="800">This is weight 800</Typography>
  </div>
);

export const Weights = WeightTemplate.bind({});
Weights.args = {
  children: 'Typography Text',
  type: 'span',
  size: '16',
  color: 'black',
};
