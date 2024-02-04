import { MdClose, MdEmail } from 'react-icons/md'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { IoMicOutline } from 'react-icons/io5'
import { IoSend } from 'react-icons/io5'
import Selector from '@/components/chat/subcomp/selector'
import {
  fontFormat,
  fontType,
  formatOptions,
  languageList,
  llms,
  purposeOfWriting,
  writingStyle,
  popularColors,
} from '@/lib/data/selectDatas'
import { IoMdSearch } from 'react-icons/io'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import MSWordEmailAI from '@/components/MSWordEmailAI'
import { useStoreState } from '@/context/useStore'

function Emailai() {
  const {contentMSWord} = useStoreState()
  return (
    <div className='grid grid-cols-12 gap-3 py-2 px-3'>
      <section className='col-span-8 card space-y-3'>
        <div className='w-full space-y-3'>
          <div className='bg-[#040C34D9] rounded-lg px-4 py-2 space-y-3'>
            <div className=' rounded-lg px-4 py-2 grid grid-cols-2 gap-3 mx-auto max-w-xl'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='singleUser' />{' '}
                <label htmlFor='singleUser' className='text-white text-base'>
                  Single User
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='multipleUser' />{' '}
                <label htmlFor='multipleUser' className='text-white text-base'>
                  Multiple User
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='male' />{' '}
                <label htmlFor='male' className='text-white text-base'>
                  Male
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='female' />{' '}
                <label htmlFor='female' className='text-white text-base'>
                  Female
                </label>
              </div>
            </div>
            <div className='w-full flex dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3 rounded-md bg-[#040C34] border-0 text-sm mx-auto max-w-xl'>
              <IoMdSearch className='w-5 h-auto text-white' />
              <input
                type='text'
                className='outline-none w-full dark:bg-gray-900 bg-transparent text-gray-300'
                placeholder='Add Name'
              />
            </div>
          </div>

          <div className='bg-[#040C34D9] rounded-lg px-4 py-2 gap-3 '>
            <div className='rounded-lg px-4 py-2 grid grid-cols-2 gap-3 mx-auto max-w-xl'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='formal' />{' '}
                <label htmlFor='formal' className='text-white text-base'>
                  Formal
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='informal' />{' '}
                <label htmlFor='informal' className='text-white text-base'>
                  Informal
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='enclosedAIGeneratedFiles' />{' '}
                <label
                  htmlFor='enclosedAIGeneratedFiles'
                  className='text-white text-base'
                >
                  Enclosed AI Generated files
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <Checkbox id='enclosedBaseFiles' />{' '}
                <label
                  htmlFor='enclosedBaseFiles'
                  className='text-white text-base'
                >
                  Enclosed base files
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='grid gap-3 grid-cols-12 overflow-auto'>
          <div className='col-span-8 flex flex-col justify-between border rounded-md shadow dark:border-gray-700 h-full'>
           {contentMSWord !== "" &&  <div className="px-3 py-4 bg-[#DADAEA] text-black font-semibold max-w-[300px] mx-2 my-4 rounded-md">{contentMSWord}</div> }
            <div className='px-3 py-4 flex flex-col justify-end h-full gap-y-3'>
              <div className='flex py-2 w-full gap-2'>
                <Input placeholder='Write a Question...' className='w-full' />
                <button>
                  <IoMicOutline className='w-6 h-auto' />
                </button>
                <button>
                  <IoSend className='w-6 h-auto' />
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-4 border rounded-md shadow dark:border-gray-700 h-full space-y-3 px-2 py-2'>
            <Selector
              title='Select Language'
              options={languageList}
              onValueChange={() => {}}
            />
            <Selector
              title='Writing Style'
              options={writingStyle}
              onValueChange={() => {}}
            />
            <Selector
              title='Purpose of Writing'
              options={purposeOfWriting}
              onValueChange={() => {}}
            />
            <Selector
              title='Format Option'
              options={formatOptions}
              onValueChange={() => {}}
            />
            <div className='flex gap-2'>
              <p className='text-2 font-semibold text-xs'>
                Number of word to be generated
              </p>
              <Input type='number' min='1' max='100' />
            </div>
            <Selector
              title='Font Colour'
              options={popularColors}
              onValueChange={() => {}}
            />
            <Selector
              title='Font Type'
              options={fontType}
              onValueChange={() => {}}
            />
            <Selector
              title='Font Format'
              options={fontFormat}
              onValueChange={() => {}}
            />
            <Selector title='LLM' options={llms} onValueChange={() => {}} />
            <div className='text-sm flex pb-2 gap-2'>
              <p className='text-2 font-semibold'>Bold key words</p>
              <Switch />
            </div>
           
          </div>
        </div>
        <div className='grid gap-3 grid-cols-12 overflow-auto w-full'>
          <div className='flex w-full col-span-8 justify-between'>
            <button className='border-2 rounded-md border-primary bg-primary/10 py-2 px-4 text-sm'>
              Remake
            </button>
            <div className="flex items-center gap-4">
               <button className='btn-primary focus:bg-primary/90 dark:focus:bg-primary'>Highlight</button>
               <button className='btn-primary flex gap-2 items-center'>
              Send <MdEmail />
            </button>
            </div> 
            
          </div>
          <div className='flex justify-end col-span-4'>
            <button className='btn-primary'>Generate</button>
          </div>
        </div>
      </section>
      <section className='col-span-4 space-y-2 card'>
        <MSWordEmailAI />
        <div className='bg-[#040C34D9] rounded-lg px-4 py-2 space-y-3'>
          <p className='text-center font-semibold text-white'>Choose Contact</p>
          <div className='w-full flex dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3 rounded-md bg-[#040C34] border-0 text-sm mx-auto max-w-xl'>
            <IoMdSearch className='w-5 h-auto text-white' />
            <input
              type='text'
              className='outline-none w-full dark:bg-gray-900 bg-transparent text-gray-300'
              placeholder='Search Contact'
            />
          </div>
          <div className='flex justify-center'>
            <Button variant='default' size='sm'>
              Validate
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Emailai
