import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Options } from '@/types'

interface SelectOptionProps {
  options: Options[]
  onSelect: (option: string) => void
}

const SelectOption: React.FC<SelectOptionProps> = ({ options, onSelect }) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder="옵션 선택" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.name} disabled={option.soldOut}>
            {option.soldOut ? `${option.name} [품절]` : option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectOption
