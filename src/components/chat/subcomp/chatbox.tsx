import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { AiOutlineStar } from 'react-icons/ai'

export default function Chatbox({
  children,
  ans = false,
  qna = false,
}: {
  children: string
  ans?: boolean
  qna?: boolean
}) {
  return (
    <div
      className={`rounded-2xl px-2 py-3 w-fit text-sm max-w-xl ${
        ans ? 'self-start' : 'self-end'
      }
      ${ans ? 'bg-[#3A7FE180] text-black dark:text-gray-300' : 'bg-[#3DA48880]'}
      `}
    >
      <div className='flex gap-3'>
        <div className='flex flex-col'>
          {ans && (
            <Button
              variant={'ghost'}
              size={'icon'}
              className='w-fit h-fit p-1 rounded-sm '
            >
              <AiOutlineStar />
            </Button>
          )}

          {qna && (
            <Button
              variant={'ghost'}
              size={'icon'}
              className='w-fit h-fit p-1 rounded-3xl text-green-700 hover:text-green-500'
            >
              <Plus className='w-4 h-4' />
            </Button>
          )}
        </div>

        <p className='flex-1'>{children}</p>
      </div>
    </div>
  )
}
