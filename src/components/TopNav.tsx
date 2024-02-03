import { FiSun } from 'react-icons/fi'
import { BsMoonFill } from 'react-icons/bs'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import useDarkMode from '@/lib/useDarkMode'
import { Button } from './ui/button'
import { HiOutlineBell } from "react-icons/hi2";
import { BiMessageDots } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoChatboxEllipsesOutline, IoMicOutline, IoSend } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { Input } from './ui/input'

function TopNav() {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const menuRef = useRef(null);
  const [showInviteChat, setShowInviteChat] = useState(false)
  const [showChatMessage, setShowChatMessage] = useState(false)

  useEffect(() => {
    const handler = (e: any)=>{
      if(menuRef.current && !menuRef?.current.contains(e.target)){
        setShowInviteChat(false);
        setShowChatMessage(false)
      }      
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div
      className={`border-b dark:border-gray-700 shadow-sm z-30 px-5 py-2 top-0 fixed w-[85.8vw] bg-white dark:bg-[#0A0A0A] flex justify-between items-center`}
    >
      <div className='flex items-center gap-4 w-full'>

        <div className='max-w-sm w-full flex dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3 rounded-md bg-primary/10 border-0 text-sm'>
          <input
            type='text'
            className='outline-none w-full dark:bg-gray-900 bg-transparent'
            placeholder='What do you want to find?'
          />
          <IoMdSearch className='w-5 h-auto text-primary' />
        </div>
      </div>
      <div className='flex gap-7 items-center w-full justify-end px-2'>
        <button type='button' className='w-[32px] h-[32px] flex relative justify-center items-center rounded-full border border-transparent dark:bg-transparent bg-slate-200 dark:border-white/50 '>
          <div className=' absolute top-[9px] right-[10px] w-[4px] h-[4px] rounded-full bg-black border border-slate-200' />
          <HiOutlineBell />
        </button>
       <div className="relative" ref={menuRef}>
            <button type='button' onClick={() => {
              setShowInviteChat((prev) => !prev)
              setShowChatMessage(false)
            }} className='w-[32px] h-[32px] flex justify-center items-center rounded-full border border-transparent hover:bg-slate-300 hover:dark:bg-transparent dark:bg-transparent bg-slate-200 dark:border-white/50 '>
            <BiMessageDots />
          </button>
         {showInviteChat && (
           <div className="flex absolute bg-slate-200 dark:border-white border-black border px-2 py-3 rounded-md dark:bg-black flex-col gap-2">
           <button type='button' onClick={() => setShowChatMessage((prev) => !prev)} className='px-2 py-1.5 hover:opacity-80 flex items-center gap-2'>
             <IoChatboxEllipsesOutline size={18}/>
             Chat
           </button>

             <div className={`border max-w-[500px] fixed p-2 bottom-2 right-4 w-full bg-white rounded-2xl overflow-x-hidden ${showChatMessage ? "scale-100 opacity-100" : "scale-50 opacity-0"} transition duration-100`}>
             <div className='bg-white text-black space-y-3'>
               <div className='space-y-1 py-2 px-2 bg-gray-100 rounded-2xl'>
                 <p className='text-base font-semibold'>Cluadia Dias</p>
                 <p className='text-sm flex'>Online</p>
               </div>
               <div className='max-h-[250px] h-full overflow-y-auto'>
                 <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                   <div>
                     <CgProfile className='w-8 h-auto' />
                   </div>
                     <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-b-xl rounded-tr-xl px-4 flex flex-col items-start py-2'>
                       <p className='font-semibold text-base px-2 gap-2'>Claudia Dias</p>
                       <span>Hello Josh! How are you today 😊</span>
                     </button>
                 </div>
                 <div className='flex py-2 px-2 gap-2 flex-row-reverse bg-gray-100 rounded-2xl'>
                   <div>
                     <CgProfile className='w-8 h-auto' />
                   </div>
                   <button className='text-sm max-w-[90%] text-white bg-primary rounded-b-xl rounded-tl-xl px-4 flex flex-col items-end py-2'>
                       <p className='font-semibold text-base px-2 gap-2'>You</p>
                       <span>Pretty good! thanks</span>
                   </button>
                 </div>
                 <div className='flex py-2 px-2 gap-2 bg-gray-100 rounded-2xl'>
                   <div>
                     <CgProfile className='w-8 h-auto' />
                   </div>
                      <button className='text-sm max-w-[90%] border border-primary bg-primary/10 rounded-b-xl rounded-tr-xl px-4 flex flex-col items-start py-2'>
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
           </div>
           
           <button type='button' onClick={() => setShowChatMessage((prev) => !prev)} className='px-2 py-1.5 hover:opacity-80 flex items-center gap-2'>
             <HiOutlineUserAdd size={18}/>
             Invite
           </button>
         </div>
         )}
       </div>
       <div className="flex items-center gap-5">
        <Link to='/profile'>
          <img
            src={'https://eu.ui-avatars.com/api/?name=John+Doe&size=250'}
            alt=''
            className='w-8 h-auto rounded-full'
          />
        </Link>
        <p className='text-base font-medium'>Hello, John</p>
       </div>
        <Button
          variant='secondary'
          onClick={toggleDarkMode as never}
          className='transition-all duration-300'
          title='Toogle Dark Mode'
        >
          {!darkMode && (
            <BsMoonFill className='hover:rotate-180 transition-transform duration-300' />
          )}{' '}
          {darkMode && (
            <FiSun className='hover:rotate-180 transition-transform duration-300' />
          )}
        </Button>
      </div>
    </div>
  )
}

export default TopNav
