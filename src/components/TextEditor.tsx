import { useStoreState } from '@/context/useStore';
import React, { useEffect, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import { MdFindReplace } from 'react-icons/md';

const TextEditor = () => {
    const { setShowAiReplace, setIsSelectUploadAiReplace, setShowSelectUploadFileAiReplace} = useStoreState()

    const [show, setShow] = useState(false)
    const [points, setPoints] = useState({
      x: 0,
      y: 0
    })

    useEffect(() => {
        const handleClick = () => setShow(false);
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
      }, []);

      const handleRightClick = (e) => {
        e.preventDefault();
          setShow(true);
          setPoints({ x: e.pageX, y: e.pageY });
      }
      
  return (
    <div onContextMenu={handleRightClick}  className="border h-full mb-4 overflow-y-auto dark:border-gray-700 rounded-md">
    <Editor  />
    {show && (
      <div style={{top: points.y - 25, left: points.x - 250}} className={`z-20 w-full gap-2 max-w-[350px] absolute bg-white text-black p-2 flex items-center justify-between  border-[4px] border-black`}>
          <button onClick={() => {
            setShowAiReplace(true)
            setIsSelectUploadAiReplace("")
          }} type='button' className='flex items-center gap-2 pr-2'>
            <MdFindReplace size={25} />
            AI Replace
          </button>
          <div className="relative group">
            <button  type='button' className='flex border-l pl-2 border-black/20 items-center gap-2'>
              <AiOutlineCloudUpload size={25} />
              AI Replace Upload
            </button>
            <div className="flex border border-black flex-col group opacity-0 absolute group-hover:opacity-100 -top-[330px] right-0 bg-white w-full z-50 gap-2">
              {["Youtube URL", "URL", "Picture/Text", "PDF", "PPT", "Excel", "Audio"].map((item) => (
                <button type='button' onClick={() => {
                  setIsSelectUploadAiReplace(item)  
                  setShowSelectUploadFileAiReplace(true)
                }} key={item} className=' py-2 hover:bg-gray-200'>
                {item}
              </button>
              ))}
            </div>
          </div>
      </div>
    )}
  </div>
  )
}

export default TextEditor