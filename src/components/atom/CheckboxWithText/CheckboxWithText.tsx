import { Checkbox } from '@/components/ui/checkbox'

interface CheckboxProps {
  label: string
  id: string
}

export function CheckboxWithText({ label, id }: CheckboxProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={id} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="flex items-center font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </div>
  )
}
