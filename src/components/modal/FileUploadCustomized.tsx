import { qnaOrReport } from "@/lib/data/dummyData"
import Selector from "../chat/subcomp/selector"
import { fontFormat, fontType, formatOptions, languageList, llms, popularColors, purposeOfWriting, writingStyle } from "@/lib/data/selectDatas"
import { Input } from "../ui/input"
import { Switch } from "../ui/switch"
import { MdClose } from "react-icons/md"
import { useStoreState } from "@/context/useStore"
import Microlink from "@microlink/react";
import ReactPlayer from 'react-player/youtube'
import { Viewer, Worker } from "@react-pdf-viewer/core"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"

const FileUploadCustomized = () => {
  const {pasteTextContent, setShowCustomizedPreviewFileUpload, selectedCustomizedDocs, setSelectedCustomizedDocs,  setSelectedDocs, setPasteTextContent} = useStoreState()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowCustomizedPreviewFileUpload(false)
    setPasteTextContent("")
    setSelectedDocs((prev) => [...prev, ...Array.from(selectedCustomizedDocs)])
    setSelectedCustomizedDocs((_) => [])
  }

  const totalPages = Math.ceil(selectedCustomizedDocs.length / 2);

  return (
    <div className='fixed z-30 px-4 py-6 top-16 rounded-md shadow-[0px_5px_5px_0px] shadow-black/30 bg-white dark:text-white text-black h-full max-h-[90dvh] w-[83%] mx-3 dark:bg-black flex gap-1'>
    <div className='col-span-4 border max-w-[300px] max-h-full w-full overflow-y-auto rounded-md shadow dark:border-gray-700 h-full space-y-3 p-4'>
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
      <div className="w-full flex text-white items-center justify-between px-4 bg-[#040C34] rounded-t-md h-12">
       <div className="flex items-center gap-6">
       <button type="button" onClick={() => setShowCustomizedPreviewFileUpload(false)}>
          <MdClose size={23}  />
        </button>
        <p className="font-semibold ">{pasteTextContent ? "Paste Text" : selectedCustomizedDocs[0]?.type === "youtubeURL" ? selectedCustomizedDocs[0]?.name : selectedCustomizedDocs[0]?.type === "websiteURL" ? selectedCustomizedDocs[0]?.name : "Preview"}</p>
       </div>
      </div>
      <div className="w-full pt-6 px-8 flex flex-col justify-between gap-3 pb-4 rounded-b-md h-full bg-[rgba(4,_12,_52,_0.50)]">
         {pasteTextContent ?  <textarea onChange={(e) => setPasteTextContent(e.target.value)} value={pasteTextContent} rows={20} placeholder="Paste your content here ..." className="px-4  py-3 text-sm w-full resize-none rounded-md text-black  h-[90%] outline-none"></textarea> :
          <div className="w-full flex-col items-center  gap-6 justify-center max-h-[85%] h-full">
              <div className="flex pb-4 justify-between gap-4 px-10 items-center w-full">
              {selectedCustomizedDocs[0] && (
                <div className="w-full h-full max-h-[55dvh] rounded-md overflow-y-auto">
                {selectedCustomizedDocs[0]?.type === "youtubeURL" ? <div className="w-full h-full max-w-[200px]">
         <ReactPlayer  style={{borderRadius: '5px'}} url={selectedCustomizedDocs[0]?.name} controls muted />
         </div> : selectedCustomizedDocs[0]?.type === "websiteURL" ? <div className="flex items-center justify-center w-full h-full">
         <Microlink  lazy={{ threshold: 0.5 }} url={selectedCustomizedDocs[0]?.name} size="large" 
		media="logo"  />
         </div> : selectedCustomizedDocs[0].type === "application/pdf" ? (
               <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedCustomizedDocs[0])} />
               </Worker>
            ) : selectedCustomizedDocs[0].type.startsWith("image/") ? (
              <div className="rounded-t-md w-full  overflow-hidden">
                <img className="object-cover" src={window.URL.createObjectURL(selectedCustomizedDocs[0])} alt={selectedCustomizedDocs[0].name} />
              </div>
            ) : 
             <DocViewer pluginRenderers={DocViewerRenderers} documents={[{
              uri: window.URL.createObjectURL(selectedCustomizedDocs[0]),
             }]} />}
                </div>
            )}
            {selectedCustomizedDocs[1] && (
                <div className="w-full h-full max-h-[55dvh] max-w-[50%] rounded-md overflow-y-auto">
                {selectedCustomizedDocs[1]?.type === "youtubeURL" ? <div className="w-full h-full max-w-[200px]">
         <ReactPlayer  style={{borderRadius: '5px'}} url={selectedCustomizedDocs[1]?.name} controls muted />
         </div> : selectedCustomizedDocs[1]?.type === "websiteURL" ? <div className="flex items-center justify-center w-full h-full">
         <Microlink  lazy={{ threshold: 0.5 }} url={selectedCustomizedDocs[1]?.name} size="large" 
		media="logo"  />
         </div>  : selectedCustomizedDocs[1].type === "application/pdf" ? (
               <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedCustomizedDocs[1])} />
               </Worker>
            ) : selectedCustomizedDocs[1].type.startsWith("image/") ? (
              <div className="rounded-t-md w-full  overflow-hidden">
                <img className="object-cover" src={window.URL.createObjectURL(selectedCustomizedDocs[1])} alt={selectedCustomizedDocs[1].name} />
              </div>
            ) : 
             <DocViewer pluginRenderers={DocViewerRenderers} documents={[{
              uri: window.URL.createObjectURL(selectedCustomizedDocs[1]),
             }]} />}
                </div>
            )}
            </div>
          <button type='button' className='bg-[#040C34] mx-auto flex items-center justify-center text-white w-[84px] h-[25px] text-[10px] font-semibold rounded-[10px]'>
            Page 1 of {totalPages}
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