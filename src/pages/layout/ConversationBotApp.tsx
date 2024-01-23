import Selector from '@/components/chat/subcomp/selector'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { useStoreState } from '@/context/useStore'
import { qnaOrReport } from '@/lib/data/dummyData'
import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from '@/lib/data/selectDatas'
import { useMicSpeechRecognition } from '@/lib/hooks/useMicSpeechRecognition'
import { useState } from 'react'
import { BiMessageDots, BiTargetLock } from 'react-icons/bi'
import { CiFaceSmile } from 'react-icons/ci'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { IoMicOutline, IoSend, IoShareSocialSharp } from 'react-icons/io5'
import { LuBookOpen } from 'react-icons/lu'
import { MdContentCopy } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ConversationBotApp = () => {
    const [toogleSendEmailWord, setToogleSendEmailWord] = useState(false)
    const {listening, transcript, handleMic} = useMicSpeechRecognition()
    const {isStandart} = useStoreState()

  return (
    <div className={`${isStandart === "standart" ? "grid  gap-3 grid-cols-12" : "flex items-center gap-2  "} card w-full  overflow-y-auto h-full`}>
    <div className='col-span-8 border w-full rounded-md shadow dark:border-gray-700 h-full'>
      <div className={`px-3 py-4 flex flex-col ${listening ? "justify-between" : " justify-end"} h-full gap-3`}>
      {transcript !== "" && (
          <div className="bg-[#DADAEA] text-black rounded-md max-w-[90%] px-3 py-2 text-xs space-y-3">
          <p>{transcript}</p>
        </div>
        )}
        <div className="flex flex-col h-full justify-end gap-4">
        <div  className='bg-[#DADAEA] rounded-md px-3 py-2 text-xs space-y-3 relative'>
          {toogleSendEmailWord && (
            <div className="absolute bottom-8 z-40 flex flex-col gap-2 border border-primary bg-white dark:bg-black p-1 rounded-md max-w-[180px]  right-2">
             <Link to={"/emailai"}>
                <button type='button' className='p-2 bg-primary rounded-md text-white '>
                  Email/Text
                </button>
             </Link>
              <button type='button'  className='p-2 bg-primary rounded-md text-white'>
                MS Word
              </button>
            </div>
          )}
          <button type='button' className={`p-1 opacity-80 bg-[#040C34] dark:bg-[#343434] rounded-md absolute ${toogleSendEmailWord ? "-top-1" : "top-2"} left-2 hover:opacity-100`}>
            <BiTargetLock size={20} color="white" />
          </button>
          <div className='flex justify-end'>
            <div className='w-[150px] flex gap-2'>
              <HiOutlineEmojiSad className='w-6 h-auto dark:text-black' />
              <Slider defaultValue={[50]} max={100} step={1} />
              <CiFaceSmile className='w-6 h-auto dark:text-black' />
            </div>
          </div>
          <p className='font-bold dark:text-black'>I’m an AI bot!</p>
          <div className='mt-3 flex gap-2 flex-wrap'>
            <button className='text-xs black-button flex items-center'>
              <MdContentCopy size={15} />
              <span>Copy</span>
            </button> 
            <button className='text-xs black-button flex items-center'>
              <IoShareSocialSharp size={15} />
              <span>Share</span>
            </button>
            <button className='text-xs black-button flex items-center'>
              <LuBookOpen size={15} />
              <span>Word Count</span>
            </button>
            <button className='text-xs black-button flex items-center'>
              <BiMessageDots size={15} />
              <span>Feedback</span>
            </button>
          </div>
          <button type='button' onClick={() => setToogleSendEmailWord((prev) => !prev)} className='absolute bottom-0 right-0 p-2 opacity-80 hover:opacity-100'>
            <IoSend size={20} color="black"  className=" rotate-[320deg]" />
          </button>
          
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
          <button type='button' onClick={handleMic}>
            <IoMicOutline className={`w-6 ${listening ? "text-primary" : "dark:text-white text-black"} h-auto`} />
          </button>
          <button>
            <IoSend className='w-6 h-auto text-primary' />
          </button>
        </div>
        </div>
      </div>
    </div>
    {isStandart === "standart" ? (
      <div className='col-span-4 border rounded-md shadow dark:border-gray-700 h-full space-y-3 px-2 py-2'>
        <div className="font-bold">
         <Selector
        title='QnA/Report'
        options={qnaOrReport}
        onValueChange={(e) => {}}
      />
      </div>
       <div className="flex items-center my-1   gap-4">
        <input id="tableContent" type="checkbox" className="accent-[#5E3AFF] h-5 w-5 " />
        <label htmlFor="tableContent" className='opacity-80'>Table of Content</label>
      </div>
     
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
      <div className='flex gap-1'>
        <p className='text-2 text-[10px]'>
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
        <p className='text-2 font-semibold'>Highlight</p>
        <Switch />
      </div>
    </div>
    ) : ""}
  </div>
  )
}

export default ConversationBotApp