import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ISelector {
  title: string
  options: (string | boolean)[]
  onValueChange: (value: string) => void
  defaultValue?: string
}
export default function Selector({
  title,
  options,
  onValueChange,
  defaultValue,
}: ISelector) {
  return (
    <Select onValueChange={onValueChange} value={defaultValue}>
      <SelectTrigger className='w-full truncate'>
        <SelectValue placeholder={title} className='text-sm' />
      </SelectTrigger>
      <SelectContent className='dark:border-gray-700'>
        {options.length < 6 ? (
          <SelectGroup>
            {/* <SelectLabel>{title}s</SelectLabel> */}
            {options.map((opt) => {
              return (
                <SelectItem key={opt as string} value={opt as string}>
                  <span>{opt}</span>
                </SelectItem>
              )
            })}
          </SelectGroup>
        ) : (
          <ScrollArea className='h-44'>
            <SelectGroup>
              {/* <SelectLabel>{title}s</SelectLabel> */}
              {options.map((opt) => {
                return (
                  <SelectItem key={opt as string} value={opt as string}>
                    <span>{opt}</span>
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </ScrollArea>
        )}
      </SelectContent>
    </Select>
  )
}
