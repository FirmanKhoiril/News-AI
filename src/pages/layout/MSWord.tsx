import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CgProfile } from 'react-icons/cg'
import { IoChatboxOutline,  IoMicOutline, IoSend } from 'react-icons/io5'
import TextEditor from '@/components/TextEditor'
import BottomTextEditor from '@/components/BottomTextEditor'

const MSWord = () => {
  return (
    <div className='border shadow overflow-x-hidden card flex flex-col  justify-between   w-full overflow-y-auto dark:border-gray-700 rounded-md'>
      <TextEditor />
      <div className='flex justify-between items-center w-full z-20'>
        <BottomTextEditor />
        <div>
          <Popover>
            <PopoverTrigger>
             <div className="px-3 py-2">
             <button className='bg-white px-3 py-1.5 drop-shadow-4xl rounded-full'>
                <IoChatboxOutline className='w-6 h-auto dark:text-primary text-primary' />
              </button>
             </div>
            </PopoverTrigger>
            <PopoverContent className='border max-w-[500px] w-full bg-white rounded-2xl overflow-x-hidden'>
              <div className='bg-white text-black space-y-3'>
                <div className='space-y-1 py-2 px-2 bg-gray-100 rounded-2xl'>
                  <p className='text-base font-semibold'>Cluadia Dias</p>
                  <p className='text-sm flex'>Online</p>
                </div>
                <div className='max-h-[250px] h-full overflow-y-auto'>
                  <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                      <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-b-xl rounded-tr-xl px-4 flex flex-col items-start py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>Claudia Dias</p>
                        <span>Hello Josh! How are you today 😊</span>
                      </button>
                  </div>
                  <div className='flex py-2 px-2 gap-2 flex-row-reverse bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                    <button className='text-sm max-w-[90%] text-white bg-primary rounded-b-xl rounded-tl-xl px-4 flex flex-col items-end py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>You</p>
                        <span>Pretty good! thanks</span>
                      </button>
                  </div>
                  <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                       <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-b-xl rounded-tr-xl px-4 flex flex-col items-start py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>Claudia Dias</p>
                        <span>Certainly! Is there anything specific you would like to talk about or ask?</span>
                      </button>
                  </div>
                </div>
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
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default MSWord