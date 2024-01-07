import { PiDotsThreeBold } from 'react-icons/pi'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { Button } from './ui/button'
import { Card } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface IBookmarkCard {
  title: string
  desc: string
  chapter: string
}

export function BookmarkCard({ title, desc, chapter }: IBookmarkCard) {
  return (
    <Card className='border shadow-sm'>
      <div className='p-5'>
        <p className='text-xs text-primary'>{chapter}</p>
        <div className='flex justify-between items-center gap-3'>
          <p className='text-xl font-[500]'>{title}</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} size={'icon'} className='h-auto'>
                <PiDotsThreeBold className='w-6 h-auto' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BsFillTrash3Fill className='mr-2 h-4 w-4 text-destructive' />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className='text-sm mt-3 text-gray-600'>
          {desc.length > 100
            ? desc.split(' ').slice(0, 20).join(' ') + '...'
            : desc}
        </p>
      </div>
    </Card>
  )
}
