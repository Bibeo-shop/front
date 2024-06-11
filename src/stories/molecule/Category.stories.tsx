import { Meta, StoryFn } from '@storybook/react';
import Category from '@/components/molecule/Category/Category';

const meta: Meta<typeof Category> = {
  title: 'Components/molecule/Category',
  component: Category,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = () => <Category />;

export const Default = Template.bind({});
