import { useStoreState } from '@/context/useStore'
import UseDoneUpload from '@/lib/hooks/useDoneUpload'
import { FaPencilAlt } from 'react-icons/fa'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { LiaLinkSolid } from 'react-icons/lia'
import ImageFile from '@/assets/icon/image-files.png'
import Youtube from '@/assets/icon/yt.png'
import PasteText from '@/assets/icon/paste.png'
import PDF from '@/assets/icon/pdf.png'
import PPT from '@/assets/icon/ppt.png'
import Excel from '@/assets/icon/xls.png'
import Audio from '@/assets/icon/sound.png'

const FeedUploadGrid = () => {
    const {setIsSelectUpload, setShowSelectUploadFile, setIsEditMode, selectedDocs, pasteTextContent} = useStoreState()

    const validImageTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const colorImageIcon = validImageTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorImageIconTwo =  validImageTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorImageIconThree =  validImageTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorImageIconFour =  validImageTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    const validAudioTypes = ["audio/mpeg", "audio/mp3"];
    const colorAudioIcon = validAudioTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorAudioIconTwo =  validAudioTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorAudioIconThree =  validAudioTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorAudioIconFour =  validAudioTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    const validPPTTypes =['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
    const colorPPTIcon = validPPTTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorPPTIconTwo =  validPPTTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorPPTIconThree =  validPPTTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorPPTIconFour =  validPPTTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

  return (
    <>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("YouTube URL")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={Youtube} alt="Youtube Url" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>Youtube URL</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={`${selectedDocs[0]?.type === "youtubeURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[1]?.type === "youtubeURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[2]?.type === "youtubeURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[3]?.type === "youtubeURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("Youtube URL")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("URL")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
               <LiaLinkSolid size={35} />
                <p className='text-center font-semibold text-xs'>URL</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={`${selectedDocs[0]?.type === "websiteURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[1]?.type === "websiteURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[2]?.type === "websiteURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload  className={`${selectedDocs[3]?.type === "websiteURL" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <button type='button'  onClick={() =>  {
                 setIsSelectUpload("URL")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("Paste Text")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={PasteText} alt="Paste Text Icon" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>Paste Text</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={`${pasteTextContent !== "" ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"}`} />
                <UseDoneUpload className="dark:stroke-white/80 stroke-[#040C34]" />
                <UseDoneUpload className="dark:stroke-white/80 stroke-[#040C34]" />
                <UseDoneUpload className="dark:stroke-white/80 stroke-[#040C34]" />
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("Paste Text")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("Picture/Text")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={ImageFile} alt="Picture/Text" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>Picture/Text</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={colorImageIcon} />
                <UseDoneUpload className={colorImageIconTwo} />
                <UseDoneUpload className={colorImageIconThree} />
                <UseDoneUpload className={colorImageIconFour}/>
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("Picture/Text")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("PDF")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={PDF} alt="PDF Icon" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>PDF</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={selectedDocs[0]?.type === "application/pdf" ? "stroke-green-500" :  "dark:stroke-white/80 stroke-[#040C34]"} />
                <UseDoneUpload className={selectedDocs[1]?.type === "application/pdf" ? "stroke-green-500" :  "dark:stroke-white/80 stroke-[#040C34]"} />
                <UseDoneUpload className={selectedDocs[2]?.type === "application/pdf" ? "stroke-green-500" :  "dark:stroke-white/80 stroke-[#040C34]"} />
                <UseDoneUpload className={selectedDocs[3]?.type === "application/pdf" ? "stroke-green-500" :  "dark:stroke-white/80 stroke-[#040C34]"} />
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("PDF")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("PPT")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={PPT} alt="PPT" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>PPT</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={colorPPTIcon} />
                <UseDoneUpload className={colorPPTIconTwo} />
                <UseDoneUpload className={colorPPTIconThree} />
                <UseDoneUpload className={colorPPTIconFour}/>
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("PPT")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("Excel")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={Excel} alt="Excel Icon" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>Excel</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={selectedDocs[0]?.type === 'application/vnd.ms-excel' ? "stroke-green-500" : "stroke-black dark:stroke-white"} />
                <UseDoneUpload className={selectedDocs[1]?.type === 'application/vnd.ms-excel' ? "stroke-green-500" : "stroke-black dark:stroke-white"} />
                <UseDoneUpload className={selectedDocs[2]?.type === 'application/vnd.ms-excel' ? "stroke-green-500" : "stroke-black dark:stroke-white"} />
                <UseDoneUpload className={selectedDocs[3]?.type === 'application/vnd.ms-excel' ? "stroke-green-500" : "stroke-black dark:stroke-white"}/>
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("Excel")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
        <div className='h-full max-w-[240px] max-h-[300px] w-full'>
            <div className="h-full relative flex items-start gap-2">
                <div className='h-full w-full flex flex-col'>
            <button onClick={() =>  {
                setIsSelectUpload("Audio")
                setShowSelectUploadFile(true)
            }} type='button' className='border  dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
                <img src={Audio} alt="Audio Icon" className='w-8 h-8 object-contain' />
                <p className='text-center font-semibold text-xs'>Audio</p>
                </button>
                <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
                100%
                </div>
                </div>
                <button onClick={() => setIsEditMode(true)} type='button' className=' absolute text-black dark:text-white top-2 bg-white dark:bg-black opacity-80 hover:opacity-100 rounded-full  right-8 p-2 z-10'>
                    <FaPencilAlt className='text-xs text-2' />
                </button>
                <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
                <UseDoneUpload className={colorAudioIcon} />
                <UseDoneUpload className={colorAudioIconTwo} />
                <UseDoneUpload className={colorAudioIconThree} />
                <UseDoneUpload className={colorAudioIconFour}/>
                <button type='button'  onClick={() =>  {
                setIsSelectUpload("Audio")
                setShowSelectUploadFile(true)
            }}>
                    <IoMdAddCircleOutline size={18} color="#5C3CFb" />
                </button>
                </div>
            </div>
        </div>
      </>
  )
}

export default FeedUploadGrid