import History from '@/components/chat/subcomp/history'
import { Textarea } from '@/components/ui/textarea'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useInputChange from '@/lib/hooks/useInput'
import { BsFillPencilFill } from 'react-icons/bs'
import { BiSolidSend } from 'react-icons/bi'
import { MdMicNone } from 'react-icons/md'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { openHistory } from '@/lib/context'
import { useAtom } from 'jotai'
function ChatLayout({
  children,
  chatType = 'basic',
}: {
  children: React.ReactNode
  chatType: 'pro' | 'basic' | 'advance'
}) {
  const { inputValues, handleInputChange, preventPaste } = useInputChange()
  const [openHistoryValue] = useAtom(openHistory)

  return (
    <div className='p-3'>
      <div className='flex gap-3'>
        <div className={`${openHistoryValue ? 'w-4/12' : 'w-fit'}`}>
          <History isDouble={chatType !== 'basic'} />
        </div>
        <div className='w-8/12 card'>
          <div className='flex flex-col h-[85vh]'>
            {children}

            <div className='flex flex-col items-end px-4'>
              {chatType === 'pro' && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline'>
                      <BsFillPencilFill />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className=' md:w-96 mr-4 max-w-full'>
                    <div className='space-y-5'>
                      <div>
                        <Input
                          placeholder='Note’s Title'
                          name='title'
                          value={inputValues.title}
                          onChange={handleInputChange}
                          onPaste={preventPaste as never}
                        />
                      </div>
                      <div className='h-full'>
                        <Textarea
                          placeholder='Note’s Content'
                          className='h-full'
                          name='content'
                          value={inputValues.content}
                          rows={9}
                          onPaste={preventPaste as never}
                          onChange={handleInputChange as never}
                        />
                      </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                      <Button variant={'outline'}>save</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
              <div className='flex gap-3 py-3 items-center w-full group/main'>
                <Button variant={'ghost'} size='icon'>
                  <MdMicNone className='w-6 h-auto text-black dark:text-gray-300' />
                </Button>
                <Input className='border-gray-400 bg-green-50/20' />
                <Button className='flex gap-2 items-center group/btn'>
                  Sent
                  <BiSolidSend className='group-focus/btn:text-red-700 group-hover/main:animate-bounce' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLayout
