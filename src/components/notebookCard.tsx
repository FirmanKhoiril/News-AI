import { FaRegTrashCan } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa6'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import useInputChange from '@/lib/hooks/useInput'

interface INotebookCard {
  title: string
  content: string
  showSelect?: boolean
  onChange?: () => void
}
export default function NotebookCard(e: INotebookCard) {
  const { inputValues, handleInputChange } = useInputChange()
  const [isChecked, setIsChecked] = useState(e.showSelect || false)
  useEffect(() => {
    if (e.onChange) {
      e.onChange()
    }
  }, [isChecked])
  return (
    <Card
      className={`border dark:border-gray-800 shadow-sm max-w-2xl bg-[#F1F9F2] card`}
    >
      <div className='flex'>
        <Dialog>
          <DialogTrigger>
            <div role='button' className='flex'>
              <p className='text-lg font-[500] flex-1 text-left'>{e.title}</p>
              <button className='px-3 py-1 h-fit text-xs rounded-md bg-[#3DA488] text-white flex gap-2 items-center justify-center'>
                <FaPrint />
                Print
              </button>
            </div>
            <p className='text-xs font-[500] text-muted-foreground mt-2 text-left'>
              {e.content?.slice(0, 200) + '...'}
            </p>
          </DialogTrigger>
          <DialogContent>
            <div className='space-y-5 mt-5'>
              <div>
                <Input
                  placeholder='note title'
                  name='title'
                  value={inputValues.title || e.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className='h-full'>
                <Textarea
                  placeholder='notbook content'
                  className='h-full'
                  name='content'
                  value={inputValues.content || e.content}
                  // rows={9}
                  onChange={handleInputChange as never}
                />
              </div>
            </div>
            <div />
            <div />
            <div />
            <div />
            <DialogFooter>
              <Button variant={'destructive'}>Delete</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className='flex justify-end gap-3 items-center'>
        {e.onChange && (
          <button
            onClick={() => setIsChecked(!isChecked)}
            className={`border border-gray-400 w-4 h-4 flex items-center justify-center rounded-md ${
              isChecked ? 'bg-[#006aff] text-white' : ''
            }`}
          >
            {isChecked && <FaCheck className='w-3 h-3' />}
          </button>
        )}
        {!e.onChange && <FaRegTrashCan className='text-base text-red-600' />}
      </div>
    </Card>
  )
}
