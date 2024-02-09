import { useStoreState } from '@/context/useStore'
import React, { useState } from 'react'
import { MdOutlineClose, MdSearch } from 'react-icons/md'
import { AiFillMessage } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const PopupChatPerson = () => {
    const {showPopupInviteOrChat, setShowPopupInviteOrChat} = useStoreState()
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowPopupInviteOrChat("")
    }

    const handleClear = () => {
        if(inputValue !== "") setInputValue("")
        setShowPopupInviteOrChat("")
    }

    const handleClearInput = () => setInputValue("")

  return showPopupInviteOrChat === "Chat" ? (
    <>
       <div onClick={handleClear} className="bg-black/80 w-full h-screen fixed z-40 " />
       <form onSubmit={handleSubmit} className="z-50 fixed mx-auto h-full max-h-[320px] flex flex-col gap-4 max-w-[600px] overflow-y-auto inset-0 border dark:border-gray-800/80 top-1/4 card"> 
            <div className="w-full flex justify-between px-4 pt-2 border-b border-black/30 dark:border-white/20 pb-6 items-center">
              <div className="flex items-center ">
              <div className="bg-gray-200 drop-shadow-lg dark:bg-white p-2 rounded-full flex items-center justify-center">
                    <AiFillMessage size={30} color='black' />
                  </div>
                  <h1 className='font-semibold text-2xl px-4 pb-2 pt-4'>Start Chating</h1>
              </div>
              <button type='button' onClick={() => setShowPopupInviteOrChat("")}>
                <IoClose size={30} />
              </button>
            </div>
            <div className="relative w-full h-full mt-4 px-4">
                <MdSearch size={20} className='absolute top-[18px] left-[35px]' color='gray'/>
                <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter the name you want to chat" className='w-full border-black/30 placeholder:text-black/70 focus:placeholder:text-black/50 transition duration-200 focus:border-black/50 dark:placeholder:text-white/60 dark:focus:placeholder:text-white/40 outline-none bg-transparent border pl-12  pr-10 py-4 rounded-full dark:border-white/30 dark:focus:border-white/50' />
               {inputValue.length !== 0 &&  <MdOutlineClose size={20} color='gray' className='absolute top-[18px] right-[34px]' onClick={handleClearInput} role='button' />}
               
            </div>
            <div className="flex items-center mt-4 px-4 gap-4 pb-4 w-full justify-end">
                    <button onClick={handleClear} className='px-7 py-3 bg-red-500 hover:bg-red-600 rounded-md text-white' type="button">Cancel</button>
                    <button type="submit" className='px-6 py-3 rounded-md bg-indigo-500 hover:bg-primary text-white'>Validate</button>
                </div>
       </form>
    </>
  ) : ""
}

export default PopupChatPerson