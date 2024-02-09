import Selector from '@/components/chat/subcomp/selector'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { useStoreState } from '@/context/useStore'
import { exampleConversation, qnaOrReport } from '@/lib/data/dummyData'
import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from '@/lib/data/selectDatas'
import { useMicSpeechRecognition } from '@/lib/hooks/useMicSpeechRecognition'
import { useEffect, useRef, useState } from 'react'
import { BiMessageDots, BiTargetLock } from 'react-icons/bi'
import { CiFaceSmile } from 'react-icons/ci'
import { FaCopy, FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoCheckmarkDone, IoLogoTiktok, IoMicOutline, IoSend, IoShareSocialSharp } from 'react-icons/io5'
import { LuBookOpen } from 'react-icons/lu'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { MdCopyAll } from 'react-icons/md'

const ConversationBotApp = () => {
    const [showShare, setShowShare] = useState(false)
    const [loadingCopyClipboard, setLoadingCopyClipboard] = useState(false)
    const menuRef = useRef(null)
    const {listening, transcript, handleMic} = useMicSpeechRecognition()

    const {isStandart, setShowFeedbackModal, setContentMSWord, focusedConversation, setFocusedConversation, setConversationFocusedById, conversationFocusedById, setToogleSendEmailWord, toogleSendEmailWord} = useStoreState()

    useEffect(() => {
      const handler = (e: any)=>{
        if(menuRef.current && !menuRef?.current.contains(e.target)){
          setShowShare(false)
        }      
      };
      window.addEventListener('mousedown', handler);
      return () => window.removeEventListener('mousedown', handler);
    }, []);

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
          {exampleConversation.map((item) => (
            <div key={item.id} className={` ${item.role === "bot" ? `${focusedConversation && conversationFocusedById === item.id ?  "bg-[#a7a4f7] text-white" : "bg-[#DADAEA] text-black" } ` : "bg-[#040C34CC] text-white dark:text-gray-200"}  space-y-3 relative  rounded-md px-3 py-2 text-xs`}>
          {item.role === "bot" && toogleSendEmailWord && conversationFocusedById === item.id && (
            <div className="absolute bottom-8 z-20 border border-primary bg-white dark:bg-black p-1 rounded-md max-w-[180px]  right-2">
              <button type='button'  onClick={() => {
                setContentMSWord(item.content)
                setToogleSendEmailWord(false)
                setShowShare(false)
              }} className='p-2 bg-primary rounded-md text-white'>
                MS Word
              </button>
            </div>
          )}
          {item.role === "bot" && (
            <button type='button' onClick={() => {
              setConversationFocusedById(item.id)
              setToogleSendEmailWord(false)
              setFocusedConversation(!focusedConversation)
              setShowShare(false)
            }} className={`p-1 opacity-80 bg-[#040C34] dark:bg-[#343434] rounded-md absolute ${toogleSendEmailWord && item.id === conversationFocusedById ? "-top-1" : "top-2"} left-2 hover:opacity-100`}>
            <BiTargetLock size={20} color="white" />
          </button>
          )}
         {item.role === "bot" && (
           <div className='flex justify-end'>
           <div className='w-[150px] flex gap-2'>
             <HiOutlineEmojiSad className='w-6 h-auto dark:text-black' />
             <Slider defaultValue={[50]} max={100} step={1} />
             <CiFaceSmile className='w-6 h-auto dark:text-black' />
           </div>
         </div>
         )}
          <p className='font-bold'>{item.content}</p>
         {item.role === "bot" ? (
           <div ref={menuRef} className='mt-3 flex gap-2 flex-wrap'>
         <CopyToClipboard  text={item.content} onCopy={() => setLoadingCopyClipboard(true)}>
          <button className='text-xs black-button flex items-center'>
            {loadingCopyClipboard ? <IoCheckmarkDone size={17} color="white" />: <MdCopyAll size={17} color="white" />}
            {loadingCopyClipboard ? <span>Copied</span>: <span>Copy</span>}
            </button> 
         </CopyToClipboard>
           <button onClick={() => {
            setShowShare((prev) => !prev)
           }} className='text-xs black-button flex items-center'>
             <IoShareSocialSharp size={15} />
             <span>Share</span>
           </button>
           {showShare && (
           <div  className="absolute flex items-center justify-center bg-white py-3 min-w-[100px] gap-3 border top-[24px] border-black/60 left-[97px] px-2 rounded-md  ">
             <a target='_blank' href='https://facebook.com'>
               <FaFacebook color="#4c74ed" size={25} />
             </a>
               <a target='_blank' href='https://web.whatsapp.com'>
                 <IoLogoWhatsapp color="green" size={25} />
               </a>
               <a target='_blank' href='https://instagram.com'>
                 <FaInstagram color="#b5288f" size={25} />
               </a>
               <a target='_blank' href='https://tiktok.com'>
                 <IoLogoTiktok size={25} color="black" />
               </a>
           </div>
         )}
           <button className='text-xs black-button flex items-center'>
             <LuBookOpen size={15} />
             <p><span className='font-semibold'>{item.content.length}</span> Words Count</p>
           </button>
           <button onClick={() => setShowFeedbackModal(true)} className='text-xs black-button flex items-center'>
             <BiMessageDots size={15} />
             <span>Feedback</span>
           </button>
         </div>
         ) : (
          <div className='mt-3 flex gap-2'>
          <button className='text-xs black-button'>Copy</button>
          <button className='text-xs black-button'>Edit</button>
          <button className='text-xs black-button'>{item.content.length} words count</button>
        </div>
         )}
         {item.role === "bot" && (
          <button type='button' onClick={() => {
            setToogleSendEmailWord(!toogleSendEmailWord)
            setConversationFocusedById(item.id)
          }} className='absolute bottom-0 right-0 p-2 opacity-80 hover:opacity-100'>
           <IoSend size={20} color={focusedConversation ? "white" : "black"}  className=" rotate-[320deg]" />
         </button>
         )}
          
        </div>
          ))}
       
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
        <p className='text-2 font-semibold'>Correlation Analysis</p>
        <Switch />
      </div>
    </div>
    ) : ""}
  </div>
  )
}

export default ConversationBotApp