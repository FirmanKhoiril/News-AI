import { useStoreState } from '@/context/useStore'
import  { useEffect, useRef, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { LuTrash2 } from "react-icons/lu";

const DeleteFile = () => {
    const {setSelectedDocs, setYoutubeUrl, setWebsiteUrl, youtubeUrl, websiteUrl} = useStoreState()
    const [showDeleteFile, setShowDeleteFile] = useState(false)
    const buttonRef = useRef(null)

    useEffect(() => {
      const handler = (e: any)=>{
        if(!buttonRef?.current.contains(e.target)){
          setShowDeleteFile(false);
        }      
      };
      window.addEventListener('mousedown', handler);
      return () => window.removeEventListener('mousedown', handler);
    }, []);
  

    const handleDeleteFile = () => {
       if(youtubeUrl) {
        setYoutubeUrl("")
       } else if (websiteUrl) {
        setWebsiteUrl("")
       } else {
        const selectedIndex = 0
        setSelectedDocs((prevSelectedDocs) => {
          const updatedDocs = prevSelectedDocs.filter((_, index) => index !== selectedIndex);
          return updatedDocs;
      });
       }
        setShowDeleteFile(false)
    }
  return (
    <div ref={buttonRef}>
    <button onClick={() => setShowDeleteFile((prev) => !prev)} type='button' className='p-0.5  hover:border-white border mr-4 border-white/40 rounded-full'>
      <HiOutlineDotsHorizontal size={18} />
    </button>
    {showDeleteFile && (
      <button type="button" onClick={handleDeleteFile} className="absolute flex items-center gap-2 top-10 z-20 right-4 border rounded-md hover:text-white/80 transition duration-150  bg-[#040C34] px-2 py-3">
        <LuTrash2 size={20} />
        <span>Delete Permanently</span>
      </button>
    )}
  </div>
  )
}

export default DeleteFile