import { CgProfile } from 'react-icons/cg'
import { IoChatboxOutline } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { MdFileDownload } from 'react-icons/md'
import { FaShareAlt,FaPencilAlt,FaSave } from 'react-icons/fa'
import { Switch } from '@/components/ui/switch'
import { IoMicOutline,IoSend } from 'react-icons/io5'
import { CiFaceSmile } from 'react-icons/ci'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { Slider } from '@/components/ui/slider'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import React, { useState } from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import { Input } from '@/components/ui/input'
import Selector from '@/components/chat/subcomp/selector'
import { Button } from '@/components/ui/button'
import Youtube from '@/assets/icon/yt.png'
import URL from '@/assets/icon/url.png'
import PasteText from '@/assets/icon/paste.png'
import PDF from '@/assets/icon/pdf.png'
import PPT from '@/assets/icon/ppt.png'
import Excel from '@/assets/icon/xls.png'
import Audio from '@/assets/icon/sound.png'
import ImageFile from '@/assets/icon/image-files.png'
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
const ReactGridLayout = WidthProvider(RGL)

const GridLayout = () => {
  const initialLayout = [
    { i: '1', x: 0, y: 0, w: 2, h: 2.4 },
    { i: '2', x: 3, y: 0, w: 2, h: 2.4 },
    { i: '3', x: 0, y: 2, w: 2, h: 2.4 },
    { i: '4', x: 3, y: 2, w: 2, h: 2.4 },
  ]

  const [layout, setLayout] = useState(initialLayout)

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout)
  }

  const uploadList = [
    { image: Youtube, title: 'YouTube URL' },
    { image: URL, title: 'URL' },
    { image: PasteText, title: 'Paste Text' },
    { image: ImageFile, title: 'Picture/Text extraction' },
    { image: PDF, title: 'PDF' },
    { image: PPT, title: 'PPT' },
    { image: Excel, title: 'Excel' },
    { image: Audio, title: 'Audio' },
  ]
  function UploadGrid({ image, title }) {
    return (
      <div className='h-full flex flex-col'>
        <div className='border dark:border-gray-600 shadow rounded-md flex flex-col items-center justify-center w-full px-4 py-2 h-full'>
          <div className='flex justify-end w-full mb-0'>
            <FaPencilAlt className='text-xs text-2' />
          </div>
          <img src={image} alt='' className='w-8 h-8 object-contain' />
          <p className='text-center font-semibold text-xs'>{title}</p>
        </div>
        <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
          100%
        </div>
      </div>
    )
  }
  const Component1 = () => (
    <div>
      <div className='flex justify-between gap-2'>
        <Button variant='outline'>Standard</Button>
        <Button variant='outline'>Customized</Button>
      </div>
      <div className='mt-3 grid grid-cols-5 gap-2'>
        {uploadList.map((e, i) => (
          <div key={i} className='h-full'>
            <UploadGrid {...e} />
          </div>
        ))}
        <div className='space-y-2'>
          <button className='border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
            Generate
          </button>
          <button className='px-3 py-2 rounded-lg text-xs bg-[#5E3AFF] text-white w-full'>
            Generate & Send Report
          </button>
        </div>
      </div>
    </div>
  )
  const Component2 = () => <div className='w-full h-full flex flex-row gap-4 items-center p-2'>
    <div className="w-full max-w-[140px] h-full overflow-y-auto">
      {/* Images */}Test

    </div>
    <div className="w-full h-full">
      tEST
      {/* Big Images */}
    </div>
  </div>
  const Component3 = () => (
    <div className='grid gap-3 grid-cols-12 overflow-auto h-full'>
      <div className='col-span-8 border rounded-md shadow dark:border-gray-700 h-full'>
        <div className='px-3 py-4 flex flex-col justify-end h-full gap-y-3'>
          <div className='bg-[#DADAEA] rounded-md px-3 py-2 text-xs space-y-3'>
            <div className='flex justify-end'>
              <div className='w-[150px] flex gap-2'>
                <HiOutlineEmojiSad className='w-6 h-auto dark:text-black' />
                <Slider defaultValue={[50]} max={100} step={1} />
                <CiFaceSmile className='w-6 h-auto dark:text-black' />
              </div>
            </div>
            <p className='font-bold dark:text-black'>I’m an AI bot!</p>
            <div className='mt-3 flex gap-2 flex-wrap'>
              <button className='text-xs black-button'>Copy</button>
              <button className='text-xs black-button'>Share</button>
              <button className='text-xs black-button'>Edit</button>
              <button className='text-xs black-button'>Word Count</button>
              <button className='text-xs black-button'>Feedback</button>
            </div>
          </div>
          <div className='bg-[#040C34CC] text-gray-200 rounded-md px-3 py-2 text-xs'>
            <div>What is your name?</div>
            <div className='mt-3 flex gap-2'>
              <button className='text-xs black-button'>Copy</button>
              <button className='text-xs black-button'>Edit</button>
              <button className='text-xs black-button'>Word Count</button>
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
        <div className='text-xs justify-between px-2 flex gap-2'>
          <p className='text-2 font-semibold'>Bold key words</p>
          <Switch />
        </div>
        <div className='text-xs justify-between px-2 flex gap-2'>
          <p className='text-2 font-semibold'>Correlation Analysis</p>
          <Switch />
        </div>
      </div>
    </div>
  )
  const Component4 = () => (
    <div className='border shadow flex flex-col justify-between dark:border-gray-700 h-full rounded-md'>
      <Editor />
      <div className='flex justify-between items-center w-full'>
        <div className='flex justify-between gap-2 py-1.5 px-3 w-full bg-[#040C34] dark:text-black'>
          <div className='flex gap-2 w-full'>
            <button className='bg-white px-1 py-1 rounded-full'>
              <MdFileDownload className='w-5 h-auto' />
            </button>
            <button className='bg-white px-1 py-1 rounded-full'>
              <FaSave className='w-5 h-auto' />
            </button>
            <button className='bg-white px-1 py-1 rounded-full'>
              <FaShareAlt className='w-5 h-auto' />
            </button>
          </div>
          <div>
            <button className='flex  items-center gap-2 text-sm bg-white px-1 py-1 rounded-md w-full font-bold'>
              Send <IoMdMail />
            </button>
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger>
              <button className='bg-white px-3 drop-shadow-2xl py-1 rounded-full'>
                <IoChatboxOutline className='w-6 h-auto dark:text-primary text-primary' />
              </button>
            </PopoverTrigger>
            <PopoverContent className='border rounded-2xl overflow-hidden'>
              <div className='bg-white text-black space-y-3'>
                <div className='space-y-1 py-2 px-2 bg-gray-100 rounded-2xl'>
                  <p className='text-base font-semibold'>Cluadia Dias</p>
                  <p className='text-sm flex'>Online</p>
                </div>
                <div>
                  <div className='flex py-2 px-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                    <div className='space-y-3'>
                      <p className='text-center text-sm font-semibold'>
                        Talk Suggestion
                      </p>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        Hello! How can i help you?
                      </button>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        Hello! If you need any help?
                      </button>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        I need more helps
                      </button>
                    </div>
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

  const generateDOM = () => {
    const components = [Component1, Component2, Component3, Component4]
    return layout.map((item, index) => (
      <div key={item.i} style={{ width: `${item.w * 25}%` }} className='card'>
        {React.createElement(components[index])}
      </div>
    ))
  }

  return (
    <main className='mt-12 w-full h-full'>
      <ReactGridLayout
        className='layout'
        layout={layout}
        onLayoutChange={onLayoutChange}
        cols={4}
        // isDraggable={false}
      >
        {generateDOM()}
      </ReactGridLayout>
    </main>
  )
}

export default GridLayout
