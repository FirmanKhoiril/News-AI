import { MdHistory } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
// import { ScrollArea } from '@/components/ui/scroll-area'
import { Trash2 } from 'lucide-react'
import { useAtom } from 'jotai'
import { MdOutlineMenu } from 'react-icons/md'
import { openHistory } from '@/lib/context'

const dummyHistory = [
  {
    name: 'Today',
    items: [
      {
        title: 'Chat History 1',
      },
      {
        title: 'Chat History 2',
      },
      {
        title: 'Chat History 3',
      },
    ],
  },
  {
    name: 'Yesterday',
    items: [
      {
        title: 'Chat History 4',
      },
      {
        title: 'Chat History 5',
      },
      {
        title: 'Chat History 6',
      },
    ],
  },
  {
    name: 'Previous 7 Days',
    items: [
      {
        title: 'Chat History 7',
      },
      {
        title: 'Chat History 8',
      },
    ],
  },
]

export default function History({ isDouble }: { isDouble?: boolean }) {
  const [openHistoryValue, setOpenHistory] = useAtom(openHistory)
  const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter)
  const topics = () => {
    const topics = CAIA_LAVEL_ONE.chapters.map((e) => {
      if (typeof e.topics[0] === 'string') {
        return e
      }
      if (typeof e.topics[0] === 'object') {
        return e.topics.map((e) => e.topics)
      }
    })
    return topics
  }

  if (isDouble) {
    return (
      <main className='bg-white dark:bg-gray-800 w-full rounded-xl px-2 mt-2'>
        <div className='flex justify-end py-2 px-1'>
          <MdHistory
            className='text-2 w-5 h-auto'
            role='button'
            onClick={() => setOpenHistory(!openHistoryValue)}
          />
        </div>
        {openHistoryValue && (
          <section className='card h-full grid grid-rows-2 max-h-[80vh] overflow-hidden gap-4'>
            <div className=' w-full rounded-xl'>
              <p className='text-base ml-3 text-2 font-semibold mb-1'>Topics</p>

              <Command className='bg-light-green/40 dark:bg-transparent rounded-none p-0'>
                {/* <CommandInput placeholder='Type a command or search...' /> */}
                <CommandList className='max-h-min pt-2 p-0'>
                  {topics()
                    .flat(Infinity)
                    .slice(1, 10)
                    .map((topicItem, i) => {
                      return (
                        <CommandItem
                          className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488]  mb-1 mx-3 flex justify-between group'
                          key={i}
                        >
                          {topicItem as string}
                          <Button
                            variant={'ghost'}
                            className='w-fit h-fit hover:bg-transparent block '
                          >
                            <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-500' />
                          </Button>
                        </CommandItem>
                      )
                    })}
                </CommandList>
              </Command>
            </div>
            <div className='w-full rounded-xl py-4 z-20'>
              <p className='text-base ml-3 text-2 font-semibold mb-1'>
                Chapters
              </p>

              <Command className='bg-light-green/40 dark:bg-transparent rounded-none p-0'>
                {/* <CommandInput placeholder='Type a command or search...' /> */}
                <CommandList className='max-h-min pt-2'>
                  {chapters.map((topicItem, i) => {
                    return (
                      <CommandItem
                        className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488] mb-1 mx-3 flex justify-between group'
                        key={i}
                      >
                        {topicItem as string}
                        <Button
                          variant={'ghost'}
                          className='w-fit h-fit hover:bg-transparent block'
                        >
                          <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-500' />
                        </Button>
                      </CommandItem>
                    )
                  })}
                </CommandList>
              </Command>
            </div>
          </section>
        )}
      </main>
    )
  }

  return (
    <main className='bg-white dark:bg-gray-800 w-full rounded-xl px-2 mt-2'>
      <div className='flex justify-end py-2 px-1'>
        <MdOutlineMenu
          className='text-2 w-5 h-auto'
          role='button'
          onClick={() => setOpenHistory(!openHistoryValue)}
        />
      </div>
      {openHistoryValue && (
        <Command className='card rounded-none p-0'>
          {/* <CommandInput placeholder='Type a command or search...' /> */}
          <CommandList className='max-h-min p-0'>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='History' className='p-0'>
              {dummyHistory.map((historyGroup, i) => {
                return (
                  <CommandGroup
                    heading={historyGroup.name}
                    key={i}
                    className='p-0'
                  >
                    {historyGroup.items.map((historyItem, i) => {
                      return (
                        <CommandItem
                          className='bg-[#F1F9F2] dark:bg-gray-900 hover:bg-[#F1F9F2] border-b border-[#3DA488] mb-1 mx-1 flex justify-between group'
                          key={i}
                        >
                          {historyItem.title}
                          <Button
                            variant={'ghost'}
                            className='w-fit h-fit hover:bg-transparent block '
                          >
                            <Trash2 className='w-4 h-4 text-green-900 dark:text-gray-400' />
                          </Button>
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    </main>
  )
}
