import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {useEffect, useState} from 'react'
import { AiFillDropboxCircle,AiOutlineCloudUpload } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaFacebook, FaInstagram, FaSave, FaShareAlt } from 'react-icons/fa'
import { GrOnedrive } from 'react-icons/gr'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoChatboxOutline, IoLogoTiktok, IoMicOutline, IoSend } from 'react-icons/io5'
import GoogleDrive from '@/assets/GoogleDrive.png'
import { useNavigate } from 'react-router-dom'
import { MdFileDownload } from 'react-icons/md'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import { MdFindReplace } from "react-icons/md";
import { useStoreState } from '@/context/useStore'

const MSWord = () => {
  const { setShowAiReplace, setIsSelectUploadAiReplace, setShowSelectUploadFileAiReplace} = useStoreState()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [points, setPoints] = useState({
      x: 0,
      y: 0
    })
    const [showShare, setShowShare] = useState(false)
    const [showSave, setShowSave] = useState(false)
    const [showDownload, setShowDownload] = useState(false)
  

    useEffect(() => {
      const handleClick = () => setShow(false);
      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
    }, []);

  return (
    <div className='border shadow overflow-x-hidden card flex flex-col  justify-between   w-full overflow-y-auto dark:border-gray-700 rounded-md'>
      <div onContextMenu={(e) => {
            e.preventDefault();
              setShow(true);
              setPoints({ x: e.pageX, y: e.pageY });
  
          }}  className="border h-full mb-4 overflow-y-auto dark:border-gray-700 rounded-md">
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
      <div className='flex justify-between items-center w-full z-20'>
        <div className='flex justify-between gap-2 relative py-1.5 px-3 w-full bg-[#040C34] dark:text-black'>
          {showDownload && (
            <div className="absolute flex flex-col bg-white min-w-[100px] gap-1 border top-[-3.5rem] left-[10px] rounded-md ">
              <button type='button' className='hover:font-semibold'>.pdf</button>
              <button type='button' className='hover:font-semibold'>.docx</button>
            </div>
          )}
          {showSave && (
            <div  className="absolute flex items-center justify-center bg-white py-3 min-w-[100px] gap-3 border top-[-3.5rem] border-black/60 left-[47px] px-2 rounded-md  ">
            <a target='_blank' href='https://drive.google.com/drive/u/0/home'>
             <img src={GoogleDrive} alt='' width={30} height={30} />
            </a>
            <a target='_blank' href='https://dropbox.com'>
              <AiFillDropboxCircle color="#4873cd" size={25} />
            </a>
            <a target='_blank' href='https://onedrive.com'>
              <GrOnedrive color="#4c74ed" size={25} />
            </a>
          </div>
          )}
          {showShare && (
            <div  className="absolute flex items-center justify-center bg-white py-3 min-w-[100px] gap-3 border top-[-3.5rem] border-black/60 left-[80px] px-2 rounded-md  ">
              <a target='_blank' href='https://facebook.com'>
                <FaFacebook color="#4c74ed" size={25} />
              </a>
                <a target='_blank' href='https://web.whatsapp.com'>
                  <IoLogoWhatsapp color="green" size={25} />
                </a>
                <a target='_blank' href='https://instagram.com'>
                  <FaInstagram color="#b5288f" size={25} />
                </a>
                <a target='_blank' href='https://tiktok.com'>
                  <IoLogoTiktok size={25} />
                </a>
            </div>
          )}
          <div className='flex gap-2 w-full'>
            <button onClick={() => {
              setShowDownload(!showDownload)
              setShowSave(false)
              setShowShare(false)
            }} className='bg-white px-1 py-1 rounded-full'>
              <MdFileDownload className='w-5 h-auto' />
            </button>
            <button onClick={() => {
              setShowSave(!showSave)
              setShowDownload(false)
              setShowShare(false)
            }} className='bg-white px-1 py-1 rounded-full'>
              <FaSave className='w-5 h-auto' />
            </button>
            <button onClick={() => {
              setShowShare(!showShare)
              setShowDownload(false)
              setShowSave(false)
            }} className='bg-white px-1 py-1 rounded-full'>
              <FaShareAlt className='w-5 h-auto' />
            </button>
          </div>
          <div>
            <button type='button' onClick={() => navigate("/emailai")} className='flex  items-center gap-2 text-sm bg-white px-1 py-1 rounded-md w-full font-bold'>
              Send <IoMdMail />
            </button>
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger>
             <div className="px-3 py-2">
             <button className='bg-white px-3 py-1.5 drop-shadow-4xl rounded-full'>
                <IoChatboxOutline className='w-6 h-auto dark:text-primary text-primary' />
              </button>
             </div>
            </PopoverTrigger>
            <PopoverContent className='border max-w-[500px] w-full bg-white rounded-2xl overflow-hidden'>
              <div className='bg-white text-black space-y-3'>
                <div className='space-y-1 py-2 px-2 bg-gray-100 rounded-2xl'>
                  <p className='text-base font-semibold'>Cluadia Dias</p>
                  <p className='text-sm flex'>Online</p>
                </div>
                <div>
                  <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                      <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-full px-4 flex flex-col items-start py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>Claudia Dias</p>
                        <span>Hello Josh! How are you today 😊</span>
                      </button>
                  </div>
                  <div className='flex py-2 px-2 gap-2 flex-row-reverse bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                    <button className='text-sm max-w-[90%] text-white bg-primary rounded-full px-4 flex flex-col items-end py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>You</p>
                        <span>Pretty good! thanks</span>
                      </button>
                  </div>
                  <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                       <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-full px-4 flex flex-col items-start py-2'>
                        <p className='font-semibold text-base px-2 gap-2'>Claudia Dias</p>
                        <span>Certainly! Is there anything specific you would like to talk about or ask?</span>
                      </button>
                  </div>
                </div>
                <div className='flex py-2 w-full gap-2'>
                  <Input placeholder='Write a Question...' className='w-full' />
                  <button>
                    <IoMicOutline className='w-6 h-auto' />
                  </button>
                  <button>
                    <IoSend className='w-6 h-auto' />
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default MSWord