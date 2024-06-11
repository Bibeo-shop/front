import { Meta, StoryFn } from "@storybook/react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

export default {
  title: "Components/ui/Sheet",
  component: Sheet,
  subcomponents: { SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription },
  argTypes: {
    side: {
      control: { type: "select", options: ["top", "bottom", "left", "right"] },
    },
  },
} as Meta

const Template: StoryFn = (args) => (
  <Sheet {...args}>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side={args.side}>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>
          This is a description for the sheet.
        </SheetDescription>
      </SheetHeader>
      <div className="p-4">
        <p>Sheet content goes here.</p>
      </div>
      <SheetFooter>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const Default = Template.bind({})
Default.args = {
  side: "right",
}

export const TopSheet = Template.bind({})
TopSheet.args = {
  side: "top",
}

export const BottomSheet = Template.bind({})
BottomSheet.args = {
  side: "bottom",
}

export const LeftSheet = Template.bind({})
LeftSheet.args = {
  side: "left",
}
