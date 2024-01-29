import { useStoreState } from '@/context/useStore';
import { IoCloudUploadOutline } from 'react-icons/io5';

const EditSpecificFile = () => {
    const {setShowEditUploadFile, showEditUploadFile,  setSelectedDocs } = useStoreState()

    const handleClearSelectedUpload = () => {
        setShowEditUploadFile(false)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault()
        setShowEditUploadFile(false)
    }

    return showEditUploadFile ? (
    <>
        <div onClick={handleClearSelectedUpload} className="bg-black/80 w-full h-screen fixed z-40 " />
        <form onSubmit={handleSubmit} className="fixed mx-auto h-full max-h-[400px] flex flex-col gap-4 max-w-[350px] overflow-y-auto z-50 inset-0 border dark:border-gray-800/80 top-1/4 card">

                <h1>Edit Your File</h1>
               <div className="w-full overflow-y-auto group outline-none cursor-pointer relative border max-h-[280px] h-full text-sm px-4 py-3 rounded-md border-input bg-background">
                    <div className='absolute inset-0 group-hover:opacity-80 flex items-center  w-full h-full justify-center bg-primary opacity-50 cursor-pointer'>
                        <label
                            htmlFor='file-upload'
                            className='flex items-center w-full h-full flex-col gap-3 justify-center text-white'
                        >
                        <IoCloudUploadOutline size={38} />
                        <p> 
                        <span>Edit Your Document  File</span>     
                        </p>
                        <input
                        type='file'
                        multiple
                        id='file-upload'
                        onChange={(e) => { 
                            const newFiles = e.target.files;
                            const selectedIndex = 0
                            setSelectedDocs((prevSelectedDocs) => {
                                const updatedDocs = [...prevSelectedDocs];
                                updatedDocs[selectedIndex] = newFiles[0];
                                return updatedDocs;
                            });   
                            
                        }}
                        className='hidden'
                        />
                    </label>
                </div>
               </div>
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

export default EditSpecificFile