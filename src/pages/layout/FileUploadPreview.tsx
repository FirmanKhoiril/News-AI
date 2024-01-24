import { Viewer, Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfImage from '@/assets/pdf-2.png'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useStoreState } from "@/context/useStore";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import ReactPlayer from "react-player/youtube";
import Microlink from "@microlink/react";

const FileUploadPreview = () => {
    const {selectedDocs, youtubeUrl, websiteUrl} = useStoreState()

  return (
    <div className='w-full card  flex flex-row gap-4 items-center p-2'>
    <div className=" max-w-[180px] pr-4 flex flex-col items-center justify-start gap-2 space-y-2 w-full h-full overflow-y-auto py-2">
  
    <div className="w-full border h-full flex items-center flex-col border-black/10">
    {selectedDocs[1] ? 
    <div className='max-h-[180px] h-full w-full'>
    {selectedDocs[1].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[1])} />
        </Worker>
      ) : selectedDocs[1].type.startsWith("image/") ? (
        <div className="max-h-[180px] rounded-t-md overflow-hidden">
          <img className="object-cover" src={window.URL.createObjectURL(selectedDocs[1])} alt={selectedDocs[1].name} />
        </div>
      ) : (
        <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: window.URL.createObjectURL(selectedDocs[1]) }]} />
      )}
    </div>  : 
     <img src={pdfImage} alt="PDF Example" width={200} />}
      <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-[10px] w-full text-black text-center py-2 rounded-b-[5px] shadow-[0px_4px_4px_0px] shadow-black/30 ">
        <p>{selectedDocs[1] ? `${selectedDocs[1].name.slice(0, 20)}` : "Document01.pdf"}</p>
      </div>
    </div>

    <div className="w-full border h-full flex items-center flex-col border-black/10">
    {selectedDocs[2] ? <div  className='max-h-[180px] h-full w-full'>
    {selectedDocs[2].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[2])} />
        </Worker>
      ) : selectedDocs[2].type.startsWith("image/") ? (
        <div className="max-h-[180px] rounded-t-md overflow-hidden">
          <img className="object-cover" src={window.URL.createObjectURL(selectedDocs[2])} alt={selectedDocs[2].name} />
        </div>
      ) : (
        <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: window.URL.createObjectURL(selectedDocs[2]) }]} />
      )}
    </div>:  <img src={pdfImage} alt="PDF Example" width={200} />}
      <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-[10px] w-full text-black text-center py-2 rounded-b-[5px] shadow-[0px_4px_4px_0px] shadow-black/30 ">
      <p>{selectedDocs[2] ? `${selectedDocs[2].name.slice(0, 20)}` : "Document02.pdf"}</p>
      </div>
    </div>
      <div className="w-full border border-black/10 flex flex-col items-center">
      {selectedDocs[3] ? <div  className='max-h-[180px] h-full w-full'>
      {selectedDocs[3].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[3])} />
        </Worker>
      ) : selectedDocs[3].type.startsWith("image/") ? (
        <div className="max-h-[180px] rounded-t-md overflow-hidden">
          <img className="object-cover" src={window.URL.createObjectURL(selectedDocs[3])} alt={selectedDocs[3].name} />
        </div>
      ) : (
        <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: window.URL.createObjectURL(selectedDocs[3]) }]} />
      )}
    </div> :  <img src={pdfImage} alt="PDF Example" width={200} />}
        <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-xs text-black text-center py-2 rounded-[5px] shadow-[0px_4px_4px_0px] w-full shadow-black/30 ">
        <p>{selectedDocs[3] ? `${selectedDocs[3].name.slice(0, 20)}` : "Document03.pdf"}</p>
        </div>
      </div>
      <button type='button' className="border-black/30 dark:border-white/30 border rounded-full p-2">
        <IoIosArrowDown size={20} />
      </button>
    </div>
    <div className="w-full h-full rounded-md overflow-y-auto">
       <div className="flex flex-col pb-4 w-full">
       <div className="bg-[#040C34] w-full flex justify-between text-white rounded-t-[5px] py-3 px-2">
         <div className='flex items-center ml-4 gap-6'>
           <button type='button'>
             <MdClose size={25} />
           </button>
          {youtubeUrl ? youtubeUrl : websiteUrl ? websiteUrl : selectedDocs[0] ?  <p className='font-semibold text-sm'>{selectedDocs[0].name.length >= 39 ? `${selectedDocs[0].name.slice(0, 40) + "... .pdf"}` : selectedDocs[0].name }</p> : <p>Preview</p>}
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
       <div className="w-full flex gap-4 px-4 py-2 items-center justify-center  flex-col text-white rounded-b-[5px] bg-[#1a1a1a]">
        {websiteUrl ? <Microlink   url={websiteUrl} size="large" 
        media="logo"  /> : youtubeUrl ? <ReactPlayer width={420} height={300}  style={{borderRadius: '5px'}} url={youtubeUrl} controls muted /> : selectedDocs[0] && !youtubeUrl && !websiteUrl ? (
          <div className="w-full h-full p-4">
          {selectedDocs[0].type === "application/pdf" ? (
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[0])} />
         </Worker>
      ) : selectedDocs[0].type.startsWith("image/") ? (
        <div className="max-h-[180px] rounded-t-md overflow-hidden">
          <img className="object-cover" src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
        </div>
      ) : 
       <DocViewer pluginRenderers={DocViewerRenderers} documents={[{
        uri: window.URL.createObjectURL(selectedDocs[0]),
       }]} />}
          </div>
        ) :  (
          <img src={pdfImage} alt="Pdf Preview" width={324} height={324} />
        )}
         </div>
       </div>
    </div>
  </div>
  )
}

export default FileUploadPreview