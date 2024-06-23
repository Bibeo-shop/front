import { Meta, StoryFn } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default {
  title: 'Components/ui/Tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn = (args) => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content for Tab 1</TabsContent>
    <TabsContent value="tab2">Content for Tab 2</TabsContent>
    <TabsContent value="tab3">Content for Tab 3</TabsContent>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'tab1',
};
