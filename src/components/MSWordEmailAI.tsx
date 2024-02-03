import { editorStyle } from '@/lib/data/dummyData'
import { Editor } from 'react-draft-wysiwyg'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'

const MSWordEmailAI = () => {
    const [showMSWord, setShowMSWord] = useState(true)
  return (
    <div className="flex flex-col pb-4 w-full">
        <div className="bg-[#040C34] w-full flex justify-between text-white rounded-t-[5px] py-3 px-2">
          <div className='flex items-center ml-4 gap-6'>
            <button type='button' onClick={() => setShowMSWord((prev) => !prev)}>
              <MdClose size={25} />
            </button>
            <p className='font-semibold text-sm'>Preview</p>
          </div>
          <button type='button' className='p-0.5 border mr-4 border-white rounded-full'>
            <HiOutlineDotsHorizontal size={18} />
          </button>
        </div>
       {showMSWord &&  <Editor editorStyle={editorStyle} />}
      </div>
  )
}

export default MSWordEmailAI