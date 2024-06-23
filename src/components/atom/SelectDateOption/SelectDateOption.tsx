import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SelectDateProps {
  start: number
  end: number
  placeholder: string
  suffix: string
  value: string
  onChange: (value: string) => void
  reverse?: boolean
  className?: string
}

const SelectDateOption = ({
  start,
  end,
  placeholder,
  suffix,
  value,
  onChange,
  reverse = false,
  className,
}: SelectDateProps) => {
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
      <Select value={value} onValueChange={onChange}>
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

export default SelectDateOption
