import TestButton from '@/components/atom/TestButton';
import type { Meta, StoryObj } from '@storybook/react';
 
const meta: Meta<typeof TestButton> = {
  title: 'Button',
  component: TestButton,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof TestButton>;
 
export const Primary: Story = {
  args: {
    label: '테스트버튼',
  },
};