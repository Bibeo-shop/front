import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'

const meta: Meta = {
  title: 'Components/ui/Table',
  component: Table,
}

export default meta

const Template: StoryFn = (args) => (
  <Table {...args}>
    <TableCaption>A simple table example</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Header 1</TableHead>
        <TableHead>Header 2</TableHead>
        <TableHead>Header 3</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Data 1</TableCell>
        <TableCell>Data 2</TableCell>
        <TableCell>Data 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Data 4</TableCell>
        <TableCell>Data 5</TableCell>
        <TableCell>Data 6</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export const Default = Template.bind({})
Default.args = {}
