import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { LuSliders } from 'react-icons/lu'
import { FaPencil } from 'react-icons/fa6'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FaRegClock } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { BsFilter } from 'react-icons/bs'
import useInputChange from '@/lib/hooks/useInput'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { TodoCard } from '@/components/todoCard'
import TodoDatas from '@/lib/data/todos'
import Board, { moveCard } from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
import { FaRegTrashCan } from 'react-icons/fa6'

const board = {
  columns: [
    {
      id: 1,
      title: 'New',
      cards: [...TodoDatas.slice(0, 3)],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [...TodoDatas.slice(3, 7)],
    },
    {
      id: 3,
      title: 'Done',
      cards: [...TodoDatas.slice(7, Infinity)],
    },
  ],
}
export default function Todos() {
  const { inputValues, handleInputChange } = useInputChange()
  const [controlledBoard, setBoard] = useState(board)

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination)
    setBoard(updatedBoard)
  }
  return (
    <main className='p-5 mt-5 space-y-4'>
      <article className='card space-y-4'>
        <section className='flex justify-between'>
          <Dialog>
            <DialogTrigger asChild>
              <button className='btn-primary'>+ New To Do List</button>
            </DialogTrigger>
            <DialogContent className='max-w-[98vw] md:max-w-[50vw] h-[90vh] '>
              <div className='space-y-5 mt-5'>
                <div className='flex gap-2'>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select priority' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='high'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-destructive' />{' '}
                            <p>High</p>
                          </div>
                        </SelectItem>
                        <SelectItem className='flex gap-3' value='average'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-blue-500' />{' '}
                            <p>Average</p>
                          </div>
                        </SelectItem>
                        <SelectItem className='flex gap-3' value='low'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-green-600' /> <p>Low</p>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Status' />
                    </SelectTrigger>
                    <SelectContent className='min-w-[4rem]'>
                      <SelectGroup>
                        <SelectItem value='high'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-yellow-300' /> <p>New</p>
                          </div>
                        </SelectItem>
                        <SelectItem className='flex gap-3' value='average'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-blue-500' />{' '}
                            <p>In Progress</p>
                          </div>
                        </SelectItem>
                        <SelectItem className='flex gap-3' value='low'>
                          <div className='flex gap-3 items-center'>
                            <div className='w-3 h-3 bg-green-600' />
                            <p>Done</p>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    placeholder='To Do Title'
                    name='title'
                    value={inputValues.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='h-full'>
                  <Textarea
                    placeholder='To Do Content'
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'ghost'} size={'sm'} className='flex gap-2'>
                <LuSliders />
                Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-60 mr-4 space-y-5'>
              {/* todo: addfilter */}
              <div>
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Created' />
                  </SelectTrigger>
                  <SelectContent className='min-w-[4rem]'>
                    <SelectGroup>
                      <SelectItem value='For the last three days'>
                        For the last three days
                      </SelectItem>
                      <SelectItem value='For the week'>For the week</SelectItem>
                      <SelectItem value='For the month'>
                        For the month
                      </SelectItem>
                      <SelectItem value='For the three month'>
                        For the three month
                      </SelectItem>
                      <SelectItem value='For all time'>For all time</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <p className='text-medium text-muted-foreground'>Priorities</p>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='high' className='rounded-none' />
                  <label
                    htmlFor='high'
                    className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
                  >
                    High
                  </label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='low' className='rounded-none' />
                  <label
                    htmlFor='low'
                    className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
                  >
                    Low
                  </label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='average' className='rounded-none' />
                  <label
                    htmlFor='average'
                    className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
                  >
                    Average
                  </label>
                </div>
              </div>
              <div className='flex justify-end'>
                <Button variant={'outline'} className='gap-2'>
                  <BsFilter /> Filter
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </section>
        <Board
          onCardDragEnd={handleCardMove}
          renderCard={(todoContent, { removeCard, dragging }) => {
            let Priority
            switch (todoContent.priority.toLowerCase()) {
              case 'high':
                Priority = (
                  <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-fit rounded-md bg-[#FF000033] text-[#F00]'>
                    <div className='p-1 w-fit h-fit bg-[#F00]'></div>
                    High
                  </div>
                )
                break
              case 'average':
                Priority = (
                  <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-fit rounded-md bg-[#3A7FE133] text-[#3A7FE1]'>
                    <div className='p-1 w-fit h-fit bg-[#3A7FE1]'></div>
                    Average
                  </div>
                )
                break
              case 'low':
                Priority = (
                  <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-fit rounded-md bg-[#3BC64233] text-[#3BC642]'>
                    <div className='p-1 w-fit h-fit bg-[#3BC642]'></div>
                    Low
                  </div>
                )
                break

              default:
                break
            }

            return (
              <div
                className={`max-w-[16rem] w-full card border dark:border-gray-800 shadow-sm space-y-2 mb-3`}
              >
                <div className='flex justify-between'>
                  {Priority}{' '}
                  <p className='text-xs text-2 flex gap-2'>
                    <FaRegClock />
                    15 Days
                  </p>
                </div>
                <p className='text-sm font-medium'>{todoContent.title}</p>
                <p className='text-xs text-2 font-medium'>
                  {todoContent.desc.slice(0, 100)} ...
                </p>
                <div className='flex justify-end cursor-pointer gap-3'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className='text-xs flex text-2 gap-2 items-center'>
                        <FaPencil /> Edit
                      </button>
                    </DialogTrigger>
                    <DialogContent className='max-w-[98vw] md:max-w-[50vw] h-[90vh] '>
                      <div className='space-y-5 mt-5'>
                        <div className='flex gap-3'>
                          <Select>
                            <SelectTrigger className='w-[180px]'>
                              <SelectValue placeholder='Select priority' />
                            </SelectTrigger>
                            <SelectContent className='min-w-[4rem]'>
                              <SelectGroup>
                                <SelectItem value='high'>
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-destructive' />{' '}
                                    <p>High</p>
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  className='flex gap-3'
                                  value='average'
                                >
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-blue-500' />{' '}
                                    <p>Average</p>
                                  </div>
                                </SelectItem>
                                <SelectItem className='flex gap-3' value='low'>
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-green-600' />{' '}
                                    <p>Low</p>
                                  </div>
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className='w-[180px]'>
                              <SelectValue placeholder='Status' />
                            </SelectTrigger>
                            <SelectContent className='min-w-[4rem]'>
                              <SelectGroup>
                                <SelectItem value='high'>
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-yellow-300' />{' '}
                                    <p>New</p>
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  className='flex gap-3'
                                  value='average'
                                >
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-blue-500' />{' '}
                                    <p>In Progress</p>
                                  </div>
                                </SelectItem>
                                <SelectItem className='flex gap-3' value='low'>
                                  <div className='flex gap-3 items-center'>
                                    <div className='w-3 h-3 bg-green-600' />
                                    <p>Done</p>
                                  </div>
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Input
                            placeholder='To Do Title'
                            name='title'
                            value={inputValues.title}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className='h-full'>
                          <Textarea
                            placeholder='To Do Content'
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
                  <FaRegTrashCan className='text-red-600 text-xs' />
                </div>
              </div>
            )
          }}
        >
          {controlledBoard}
        </Board>
      </article>
    </main>
  )
}
