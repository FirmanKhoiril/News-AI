import { useStoreState } from "@/context/useStore"
import { IoCloudUploadOutline } from "react-icons/io5";

const ModalUploadFileOrDocument = () => {
    const {  isSelectUpload, setIsSelectUpload, setShowSelectUploadFile, isStandart,pasteTextContent, setShowCustomizedPreviewFileUpload, showSelectUploadFile, youtubeUrl,websiteUrl,setWebsiteUrl, setYoutubeUrl, setPasteTextContent, setSelectedDocs} = useStoreState() 

    const handleClearSelectedUpload = () => {
        setShowSelectUploadFile(false)
        setIsSelectUpload("")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault()
        if(isStandart === "customized") {
            setShowSelectUploadFile(false)
            setShowCustomizedPreviewFileUpload(true)
        }
        setShowSelectUploadFile(false)
    }
    
  return showSelectUploadFile ? (
    <>
    <div onClick={handleClearSelectedUpload} className="bg-black/80 w-full h-screen fixed z-40 " />
    <form onSubmit={handleSubmit} className="fixed mx-auto h-full max-h-[400px] flex flex-col gap-4 max-w-[350px] overflow-y-auto z-50 inset-0 border dark:border-gray-800/80 top-1/4 card">
        {isSelectUpload === "Paste Text" && (
            <>
            <label htmlFor="copyAndPasteText">Copy and Paste a text</label>
                <textarea value={pasteTextContent} onChange={(e) => setPasteTextContent(e.target.value)} id="copyAndPasteText" rows={5} className=" w-full max-h-[310px] min-h-[150px] overflow-y-auto outline-none border text-sm px-4 py-3 rounded-md border-input bg-background" ></textarea>
            </>
        )}
        {isSelectUpload === "YouTube URL" && (
             <>
                <label htmlFor="copyYoutubeUrl">Copy Youtube URL</label>
                <input value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="https://youtube.com" id="copyYoutubeUrl" type="url" className=" w-full overflow-y-auto outline-none border text-sm px-4 py-3 rounded-md border-input bg-background" />
             </>
        )}
        {isSelectUpload === "URL" && (
             <>
                <label htmlFor="copyWebsiteUrl">Copy URL Website</label>
                <input placeholder="https://example.com" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} id="copyWebsiteUrl" type="url" className=" w-full overflow-y-auto outline-none border text-sm px-4 py-3 rounded-md border-input bg-background" />
             </>
        )}
        {isSelectUpload !== "URL" && isSelectUpload !== "YouTube URL" && isSelectUpload !== "Paste Text"  &&  (
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
                        <span>Upload Your {isSelectUpload} File</span>     
                        </p>
                        <input
                        type='file'
                        multiple
                        id='file-upload'
                        onChange={(e) => { 
                            const newFiles = e.target.files;
                             if(newFiles.length > 0) {
                            setSelectedDocs((prevSelectedDocs) => [...prevSelectedDocs, ...Array.from(newFiles)]);
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
            <button  onClick={handleClearSelectedUpload} className='max-w-[170px] max-h-[40px]  border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
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



export default ModalUploadFileOrDocument