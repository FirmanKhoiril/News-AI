import { useStoreState } from '@/context/useStore';
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import { MdFindReplace } from 'react-icons/md';
import { editorStyle } from '@/lib/data/dummyData';
import { EditorState, ContentState  } from 'draft-js'

const TextEditor = () => {
    const { setShowAiReplace, setIsSelectUploadAiReplace, setShowSelectUploadFileAiReplace, setContentMSWord, contentMSWord} = useStoreState()
    const menuRef = useRef(null)
    const [show, setShow] = useState(false)
    const [text, setText] = useState(EditorState.createWithContent(ContentState.createFromText("I'm an AI bot!")))
    const [showDroplistSelectedUploadFile, setShowDroplistSelectedUploadFile] = useState(false)
    const [points, setPoints] = useState({
      x: 0,
      y: 0
    })


    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = function (editorState: any) {
      if(contentMSWord !== "") { 
        setText(editorState)
      } else {
        setEditorState(editorState);
      }
    };

    console.log(text.getCurrentContent().getPlainText("\u0001"), text.getCurrentContent().getPlainText("\u0001") === "", editorState.getCurrentContent().getPlainText("\u0001") )


    useEffect(() => {
        const handleClick = (e: any) => {
          if(menuRef.current && !menuRef?.current.contains(e.target)) {
            setShow(false)
            setShowDroplistSelectedUploadFile(false)
          }
        }
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
      }, []);

      const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
          setShow(true);
          setPoints({ x: e.pageX, y: e.pageY });
      } 

  

  return (
    <div onContextMenu={handleRightClick}   className="border h-full mb-4 overflow-y-auto dark:border-gray-700 rounded-md">
    <Editor  editorStyle={editorStyle}   editorState={contentMSWord !== "" ?  text : editorState}  onEditorStateChange={onEditorStateChange}   />
    {show && (
      <div ref={menuRef} style={{top: points.y - 25, left: points.x - 300}} className={`w-full gap-2 max-w-[350px] absolute z-40 bg-white text-black p-2 flex items-center justify-between  border-[4px] border-black`}>
          <button onClick={() => {
            setShowAiReplace(true)
            setIsSelectUploadAiReplace("")
            setShow(false)
          }} type='button' className='flex items-center gap-2 pr-2'>
            <MdFindReplace size={25} />
            AI Replace
          </button>
          <div className="relative">
            <button  type='button' onClick={() => {
              setShowDroplistSelectedUploadFile((prev) => !prev)
            }} className='flex border-l pl-2 border-black/20 items-center gap-2'>
              <AiOutlineCloudUpload size={25} />
              AI Replace Upload
            </button>
           {showDroplistSelectedUploadFile && (
             <div className="flex border border-black flex-col group absolute  -top-[339px] -right-[9px] bg-white w-full z-50 gap-2">
             {["YouTube URL", "URL", "Picture/Text", "PDF", "PPT", "Excel", "Audio"].map((item) => (
               <button type='button'  onClick={() => {
                 setIsSelectUploadAiReplace(item)  
                 setShowSelectUploadFileAiReplace(true)
                 setShowDroplistSelectedUploadFile(false)
               }} key={item} className=' py-2 hover:bg-gray-200'>
               {item}
             </button>
             ))}
           </div>
           )}
          </div>
      </div>
    )}
  </div>
  )
}

export default TextEditor