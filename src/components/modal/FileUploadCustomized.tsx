import { qnaOrReport } from "@/lib/data/dummyData"
import Selector from "../chat/subcomp/selector"
import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from "@/lib/data/selectDatas"
import { Input } from "../ui/input"
import { Switch } from "../ui/switch"
import { MdClose } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { useStoreState } from "@/context/useStore"
import Microlink from "@microlink/react";
import pdfImage from '@/assets/pdf-2.png'
import ReactPlayer from 'react-player/youtube'

const FileUploadCustomized = () => {
  const {pasteTextContent, setShowCustomizedPreviewFileUpload, youtubeUrl, websiteUrl, setWebsiteUrl, setYoutubeUrl,  setPasteTextContent} = useStoreState()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowCustomizedPreviewFileUpload(false)
    setWebsiteUrl("")
    setYoutubeUrl("")
    setPasteTextContent("")
  }
  return (
    <div className='fixed z-30 px-4 py-6 top-16 rounded-md shadow-[0px_5px_5px_0px] shadow-black/30 bg-white dark:text-white text-black h-full max-h-[90dvh] w-[83%] mx-3 dark:bg-black flex gap-1'>
    <div className='col-span-4 border max-w-[300px] rounded-md shadow dark:border-gray-700 h-full space-y-3 p-4'>
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
        <Input
         type='number' min='1' max='100' />
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
    <div className="w-full min-h-full px-4 flex flex-col">
      <div className="w-full flex text-white items-center justify-between px-4 bg-[#040C34] rounded-t-md h-12">
       <div className="flex items-center gap-6">
       <button>
          <MdClose size={23}  />
        </button>
        <p className="font-semibold ">{pasteTextContent ? "Paste Text" : youtubeUrl ? youtubeUrl : websiteUrl ? websiteUrl : "Preview"}</p>
       </div>
       <div className="flex items-center gap-5">
         <button type='button' className=''>
           <FiEdit size={18} />
         </button>
         <button type='button' className='p-0.5 border mr-4 border-white rounded-full'>
           <HiOutlineDotsHorizontal size={18} />
         </button>
         </div>
      </div>
      <div className="w-full pt-6 px-8 flex flex-col gap-3 pb-4 rounded-b-md h-full bg-[rgba(4,_12,_52,_0.50)]">
         {pasteTextContent ?  <textarea onChange={(e) => setPasteTextContent(e.target.value)} value={pasteTextContent} rows={20} placeholder="Paste your content here ..." className="px-4  py-3 text-sm w-full resize-none rounded-md text-black  h-[90%] outline-none"></textarea> : youtubeUrl ? <div className="w-full h-full">
         <ReactPlayer width={900} height={450} style={{borderRadius: '5px'}} url={youtubeUrl} controls muted />
         </div> : websiteUrl ? <div className="flex items-center justify-center w-full h-full">
         <Microlink  lazy={{ threshold: 0.5 }} url={websiteUrl} size="large" 
		media="logo"  />
         </div> :
          <div className="w-full flex-col items-center  gap-6 justify-center max-h-[85%] h-full">
            <div className="flex pb-4 justify-between px-10 items-center w-full">
            <img src={pdfImage} width={380} loading="lazy" alt="Pdf Example"  className="w-full max-w-[45%]"/>
            <img src={pdfImage} width={380} loading="lazy" alt="Pdf Example"  className="w-full max-w-[45%]"/>
            </div>
            <button type='button' className='bg-[#040C34] mx-auto flex items-center justify-center text-white w-[84px] h-[25px] text-[10px] font-semibold rounded-[10px]'>
            Page 1 of 2
          </button>
          </div>
         }
        <form onSubmit={handleSubmit} className="flex items-center gap-6">
          <input type="text" placeholder="Write a Question" className="w-full text-black py-4 px-4 rounded-md outline-none" />
          <button type="submit" className='max-w-[154px] h-full  rounded-md bg-primary text-white py-2 px-1 w-full text-base font-semibold'>
         Validate
       </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default FileUploadCustomized