import { FaPrint } from 'react-icons/fa6'
import { FaRegTrashCan } from 'react-icons/fa6'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LuSliders } from 'react-icons/lu'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import NotebookCard from '@/components/notebookCard'
import dummyData from '@/lib/data/notebook'
import useInputChange from '@/lib/hooks/useInput'

export default function Notebook() {
  const { inputValues, handleInputChange } = useInputChange()

  const [isSelected, setIsSelected] = useState(true)
  return (
    <main className='p-5 mt-5'>
      <div className='space-y-4 card'>
        <section className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Dialog>
              <DialogTrigger asChild>
                <button className='btn-primary'>+ New Note</button>
              </DialogTrigger>
              <DialogContent className='max-w-[98vw] md:max-w-[50vw] h-[90vh] '>
                <div className='space-y-5 mt-5'>
                  <div>
                    <Input
                      placeholder='Note’s Title'
                      name='title'
                      value={inputValues.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='h-full'>
                    <Textarea
                      placeholder='Note’s Content'
                      className='h-full'
                      name='content'
                      value={inputValues.content}
                      // rows={9}
                      onChange={handleInputChange as never}
                    />
                  </div>
                </div>
                <div />
                <div />
                <DialogFooter>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className='flex items-center gap-2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'secondary'}
                  size={'default'}
                  className='flex gap-2'
                >
                  <LuSliders />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-60 mr-4 space-y-5'>
                {/* todo: addfilter */}
                <div className='space-y-2'>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Created' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='For the last three days'>
                          For the last three days
                        </SelectItem>
                        <SelectItem value='For the week'>
                          For the week
                        </SelectItem>
                        <SelectItem value='For the month'>
                          For the month
                        </SelectItem>
                        <SelectItem value='For the three month'>
                          For the three month
                        </SelectItem>
                        <SelectItem value='For all time'>
                          For all time
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Notebook type' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='created_first'>
                          Flashcard Notes
                        </SelectItem>
                        <SelectItem value='created_last'>
                          Questions Notes
                        </SelectItem>
                        <SelectItem value='created_last'>
                          Chatbot Notes
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex justify-end'>
                  <Button variant={'outline'} className='gap-2'>
                    <LuSliders /> Apply
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
            {isSelected && (
              <Button variant='destructive'>
                <FaRegTrashCan className='cursor-pointer mr-3' role='button' />
                Delete
              </Button>
            )}
            {isSelected && (
              <button className='px-3 py-2 h-fit text-sm rounded-md bg-[#3DA488] text-white flex gap-2 items-center justify-center'>
                <FaPrint />
                Print
              </button>
            )}
          </div>
        </section>
        <section className='grid grid-cols-2 gap-3'>
          {[
            ...dummyData,
            ...dummyData,
            ...dummyData,
            ...dummyData,
            ...dummyData,
            ...dummyData,
          ].map((e, i) => {
            return (
              <NotebookCard
                key={i}
                {...e}
                onChange={() => setIsSelected(!isSelected)}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}
