import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleDrive from '@/assets/GoogleDrive.png'
import { AiFillDropboxCircle } from 'react-icons/ai'
import { GrOnedrive } from 'react-icons/gr'
import { FaFacebook, FaInstagram, FaSave, FaShareAlt } from 'react-icons/fa'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoLogoTiktok } from 'react-icons/io5'
import { MdFileDownload } from 'react-icons/md'
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeDocx } from "react-icons/bs";

const BottomTextEditor = () => {
    const navigate = useNavigate()
    const [showShare, setShowShare] = useState(false)
    const [showSave, setShowSave] = useState(false)
    const [showDownload, setShowDownload] = useState(false)

  return (  
    <div className='flex justify-between gap-2 relative py-1.5 px-3 w-full bg-[#040C34] dark:text-black'>
          {showDownload && (
            <div className="absolute flex flex-col border border-black bg-white min-w-[100px] gap-1 top-[-6.9rem] left-[10px] rounded-md ">
              <button type='button' className='py-3 px-4 group   flex hover:font-semibold min-w-[120px] w-full items-center gap-2'>
                <FaFilePdf size={30} className=' group-hover:opacity-100 opacity-80' color='red' />
                <span>.pdf</span>
              </button>
              <button type='button' className='pb-3 pt-2 px-4 group flex hover:font-semibold min-w-[120px] w-full items-center gap-2'>
                <BsFiletypeDocx size={30} className=' group-hover:opacity-100 opacity-80' color='black' />
                <span>.docx</span>
              </button>
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
  )
}

export default BottomTextEditor