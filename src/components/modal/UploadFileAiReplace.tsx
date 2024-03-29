import { useStoreState } from '@/context/useStore'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { YouTubeFile } from './ModalUploadFileOrDocument'


const UploadFileAiReplace = () => {
    const {  isSelectUploadAiReplace, setShowAiReplace, setShowSelectUploadFileAiReplace,  setIsSelectUploadAiReplace,  showSelectUploadFileAiReplace, youtubeUrl,websiteUrl,setWebsiteUrl, setYoutubeUrl,  setSelectedAIUpload} = useStoreState() 

    const handleClearSelectedUpload = () => {
        setIsSelectUploadAiReplace("")
        setShowSelectUploadFileAiReplace(false)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault()

        if(youtubeUrl !== "") {
          const currentTimestamp = new Date().getTime();  

            const newFiles: YouTubeFile = {
              lastModified: currentTimestamp,
              name: youtubeUrl,
              size: youtubeUrl.length,
              type: "youtubeURL",
            };

            const convertedFile: File = {
              ...newFiles,
              webkitRelativePath: "",
              arrayBuffer: null as any,
              slice: null as any,
              stream: null as any,
              text: null as any,
            };
            setYoutubeUrl("")
            setSelectedAIUpload((prevSelectedDocs) => [...prevSelectedDocs, convertedFile]);   
      }

      if(websiteUrl !== "") {
          const currentTimestamp = new Date().getTime();

          const newFiles: YouTubeFile = {
              lastModified: currentTimestamp,
              name: websiteUrl,
              size: websiteUrl.length,
              type: "websiteURL",
            };

            const convertedFile: File = {
              ...newFiles,
              webkitRelativePath: "",
              arrayBuffer: null as any,
              slice: null as any,
              stream: null as any,
              text: null as any,
            };
            setWebsiteUrl("")
            setSelectedAIUpload((prevSelectedDocs) => [...prevSelectedDocs, convertedFile]);
            setShowAiReplace(true)
            setShowSelectUploadFileAiReplace(false)

      }

        setShowAiReplace(true)
        setShowSelectUploadFileAiReplace(false)
    }
    
  return showSelectUploadFileAiReplace ? (
    <>
    <div onClick={handleClearSelectedUpload} className="bg-black/80 w-full h-screen fixed z-40 " />
    <form onSubmit={handleSubmit} className="fixed mx-auto h-full max-h-[400px] flex flex-col gap-4 max-w-[350px] overflow-y-auto z-50 inset-0 border dark:border-gray-800/80 top-1/4 card">
        {isSelectUploadAiReplace === "YouTube URL" && (
             <>
                <label htmlFor="copyYoutubeUrl">Copy Youtube URL</label>
                <input value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="https://youtube.com" id="copyYoutubeUrl" type="url" className=" w-full overflow-y-auto outline-none border text-sm px-4 py-3 rounded-md border-input bg-background" />
             </>
        )}
        {isSelectUploadAiReplace === "URL" && (
             <>
                <label htmlFor="copyWebsiteUrl">Copy URL Website</label>
                <input placeholder="https://example.com" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} id="copyWebsiteUrl" type="url" className=" w-full overflow-y-auto outline-none border text-sm px-4 py-3 rounded-md border-input bg-background" />
             </>
        )}
        {isSelectUploadAiReplace !== "URL" && isSelectUploadAiReplace !== "YouTube URL" && isSelectUploadAiReplace !== "Paste Text"  &&  (
             <>
             <h1>Upload Your File</h1>
               <div className="w-full overflow-y-auto group outline-none cursor-pointer relative border max-h-[280px] h-full text-sm px-4 py-3 rounded-md border-input bg-background">
                    <div className='absolute inset-0 group-hover:opacity-80 flex items-center  w-full h-full justify-center bg-primary opacity-50 cursor-pointer'>
                    {/* Upload label and input */}
                        <label
                            htmlFor='file-upload'
                            className='flex items-center w-full h-full flex-col gap-3 justify-center text-white'
                        >
                        <IoCloudUploadOutline size={38} />
                        <p>
                        <span>Upload Your AI Replace {isSelectUploadAiReplace} File</span>     
                        </p>
                        <input
                        type='file'
                        accept={isSelectUploadAiReplace === "Picture/Text" ? "image/*" : isSelectUploadAiReplace === "PDF" ? "application/pdf" : isSelectUploadAiReplace === "PPT" ? "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation" : isSelectUploadAiReplace === 'Audio' ? "audio/*" : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
                        multiple
                        id='file-upload'
                        onChange={(e) => { 
                            const newFiles = e.target.files;
                             if(newFiles.length > 0) {
                            setSelectedAIUpload((prevSelectedDocs) => [...prevSelectedDocs, ...Array.from(newFiles)]);
                            }}
                          }
                        className='hidden'
                        />
                    </label>
                </div>
               </div>
             </>
        )}
        <div className="space-x-2 flex w-full items-end">
            <button type='button'  onClick={handleClearSelectedUpload} className='max-w-[170px] max-h-[40px]  border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
            Cancel
            </button>
            <button type="submit" onClick={handleSubmit} className='max-w-[170px] max-h-[40px] text-white  rounded-md bg-primary py-2 px-1 w-full text-xs'>
            Validate
            </button>
        </div>
    </form>
    </>
  ) : ""
}

export default UploadFileAiReplace