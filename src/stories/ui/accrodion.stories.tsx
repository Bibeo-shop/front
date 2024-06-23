import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default {
  title: 'Components/ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = ({ args }) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Item 1</AccordionTrigger>
      <AccordionContent>Content for item 1</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Accordion Item 2</AccordionTrigger>
      <AccordionContent>Content for item 2</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Accordion Item 3</AccordionTrigger>
      <AccordionContent>Content for item 3</AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Default = Template.bind({})
Default.args = {
  type: 'multiple',
  defaultValue: 'item-1',
}
