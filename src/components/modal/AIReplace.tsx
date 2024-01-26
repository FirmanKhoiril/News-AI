import { Switch } from "../ui/switch"
import { MdClose } from "react-icons/md"
import Selector from "../chat/subcomp/selector"
import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from "@/lib/data/selectDatas"
import { Input } from "../ui/input"
import { qnaOrReport } from "@/lib/data/dummyData"
import { useStoreState } from "@/context/useStore"

const AIReplace = () => {
    const {setShowAiReplace} = useStoreState()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  return (
    <div className='fixed z-30 px-4 py-6 top-16 rounded-md shadow-[0px_5px_5px_0px] shadow-black/30 bg-white dark:text-white text-black h-full max-h-[90dvh] w-[83%] mx-3 dark:bg-black flex gap-1'>
    <div className='col-span-4 border max-w-[300px] max-h-full overflow-y-auto rounded-md shadow dark:border-gray-700 h-full space-y-3 p-4'>
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
        <p className='text-2 font-semibold'>Correlation Analysis</p>
        <Switch />
      </div>
    </div>
    <div className="w-full min-h-full px-4 flex flex-col">
      <div className="w-full flex text-white items-center justify-start px-4 bg-[#040C34] rounded-t-md h-12">
       <div className="flex items-center gap-6">
       <button type="button" onClick={() => setShowAiReplace(false)}>
          <MdClose size={23}  />
        </button>
        <p className="font-semibold ">AI Replace</p>
       </div>
      </div>
      <div className="w-full pt-6 px-8 flex flex-col gap-3 pb-4 rounded-b-md h-full bg-[rgba(4,_12,_52,_0.50)]">
        <textarea  rows={20} placeholder="Paste your content here ..." className="px-4  py-3 text-sm w-full resize-none rounded-md text-black  h-[90%] outline-none"></textarea>
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

export default AIReplace