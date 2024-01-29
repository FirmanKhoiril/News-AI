import { Viewer, Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useStoreState } from "@/context/useStore";
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import ReactPlayer from "react-player/youtube";
import Microlink from "@microlink/react";
import { useState } from "react";
import DeleteFile from "@/components/button/DeleteFile";
import PreviewDocs from "@/components/card/PreviewDocs";

const FileUploadPreview = () => {
    const {selectedDocs, setShowSelectUploadFile, setShowEditUploadFile, websiteUrl, isEditMode, isStandart, setShowCustomizedPreviewFileUpload} = useStoreState()
    const [showPreviewImage, setShowPreviewImage] = useState(true)
    
    const ShowEditSpecificFile = () => {
      if(isStandart === "customized") {
        setShowCustomizedPreviewFileUpload(true)
      } else {
        setShowEditUploadFile(true)
        setShowSelectUploadFile(false)
      }
     }

  return (
    <div className='w-full card  flex flex-row gap-4 items-center p-2'>
    {selectedDocs[0] ? (
     <>
      <div className=" max-w-[180px] pr-4 flex flex-col items-center justify-start gap-2 space-y-2 w-full h-full overflow-y-auto py-2">
      <PreviewDocs datas={selectedDocs[1]} />
      <PreviewDocs datas={selectedDocs[2]} />
      <PreviewDocs datas={selectedDocs[3]} />
      {selectedDocs.slice(4, 30).map((doc, index) => doc && <PreviewDocs key={doc.name + index} datas={doc} />)}
    
       {selectedDocs[2] && (
         <button type='button' className="border-black/30 dark:border-white/30 border rounded-full p-2">
         <IoIosArrowDown size={20} />
       </button>
       )}
      </div>
      <div className="w-full h-full rounded-md overflow-y-auto">
         <div className="flex flex-col pb-4 w-full">
         <div className="bg-[#040C34] relative w-full flex justify-between text-white rounded-t-[5px] py-3 px-2">
           <div className='flex items-center ml-4 gap-6'>
             <button type='button' onClick={() => setShowPreviewImage((prev) => !prev)}>
               <MdClose size={25} />
             </button>
            {selectedDocs[0]?.type === "youtubeURL" ? selectedDocs[0]?.name : selectedDocs[0]?.type === "websiteURL" ? selectedDocs[0]?.name : selectedDocs[0] &&  <p className='font-semibold text-sm'>{selectedDocs[0].name.length >= 39 ? `${selectedDocs[0].name.slice(0, 40) + "... .pdf"}` : selectedDocs[0].name }</p>}
           </div>
           <div className="flex items-center gap-5">
            {isEditMode && (
           <button type='button' onClick={ShowEditSpecificFile} className=''>
             <FiEdit size={18} />
           </button>
            )}
            <DeleteFile />
           </div>
         </div>
          {showPreviewImage && (
            <div className="w-full flex  gap-4 px-4 py-2 items-center justify-center  flex-col text-white rounded-b-[5px] bg-[#1a1a1a]">
            {selectedDocs[0]?.type === "websiteURL" ? <Microlink url={selectedDocs[0]?.name} size="large" 
            media="logo"  /> : selectedDocs[0]?.type === "youtubeURL" ? <ReactPlayer width={420} height={300}  style={{borderRadius: '5px'}} url={selectedDocs[0]?.name} controls muted /> : selectedDocs[0]?.type !== "websiteURL" && selectedDocs[0]?.type !== "youtubeURL" && (
              <div className="w-full h-full p-4">
              {selectedDocs[0].type === "application/pdf" ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[0])} />
            </Worker>
          ) : selectedDocs[0].type.startsWith("image/") ? (
            <div className="max-h-[760px] rounded-t-md overflow-hidden">
              <img className="object-cover" src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
            </div>
          ) : 
          <DocViewer pluginRenderers={DocViewerRenderers} documents={[{
            uri: window.URL.createObjectURL(selectedDocs[0]),
          }]} />}
              </div>
            )}
          </div>
          )}
         </div>
      </div>
     </>
    ) : ""}
  </div>
  )
}

export default FileUploadPreview