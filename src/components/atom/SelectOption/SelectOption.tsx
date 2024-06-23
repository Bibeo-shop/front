import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const SelectOption = ({}) => {
  return (
    <Select>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder="옵션 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">option1</SelectItem>
        <SelectItem value="option2">option2</SelectItem>
        <SelectItem value="option3">option3</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectOption
