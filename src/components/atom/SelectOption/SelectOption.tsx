import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SelectProps {
  start: number
  end: number
  placeholder: string
  suffix: string
  reverse?: boolean
  className?: string
  selectedValue: string | undefined
  setSelectedValue: (value: string) => void
}

const SelectOption = ({
  start,
  end,
  placeholder,
  suffix,
  reverse = false,
  className,
  selectedValue,
  setSelectedValue,
}: SelectProps) => {
  const generateOptions = (
    start: number,
    end: number,
    suffix: string,
    reverse: boolean
  ) => {
    const options = []
    if (!reverse) {
      for (let i = start; i <= end; i++) {
        options.push(
          <SelectItem key={i} value={i.toString()}>
            {i}
            {suffix}
          </SelectItem>
        )
      }
    } else {
      for (let i = end; i >= start; i--) {
        options.push(
          <SelectItem key={i} value={i.toString()}>
            {i}
            {suffix}
          </SelectItem>
        )
      }
    }
    return options
  }

  return (
    <div className={className}>
      <Select onValueChange={(value) => setSelectedValue(value)}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {generateOptions(start, end, suffix, reverse)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectOption
