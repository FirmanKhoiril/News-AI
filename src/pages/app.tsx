import { CgProfile } from 'react-icons/cg'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { MdFileDownload,MdContentCopy, MdClose } from 'react-icons/md'
import { IoIosArrowDown } from "react-icons/io";
import { FaShareAlt,FaPencilAlt,FaSave, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Switch } from '@/components/ui/switch'
import { IoMicOutline,IoSend,IoChatboxOutline,IoShareSocialSharp, IoLogoTiktok} from 'react-icons/io5'
import { CiFaceSmile } from 'react-icons/ci'
import { HiOutlineDotsHorizontal, HiOutlineEmojiSad } from 'react-icons/hi'
import { Slider } from '@/components/ui/slider'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Editor } from 'react-draft-wysiwyg'
import  { useState, useEffect, useRef } from 'react'
import { LiaLinkSolid } from "react-icons/lia";
import { Input } from '@/components/ui/input'
import Selector from '@/components/chat/subcomp/selector'
import { Button } from '@/components/ui/button'
import { AiFillDropboxCircle } from "react-icons/ai";
import { IoMdAddCircleOutline ,IoMdMail, IoLogoWhatsapp} from "react-icons/io";
import {
  fontFormat,
  fontType,
  formatOptions,
  languageList,
  llms,
  purposeOfWriting,
  writingStyle,
  popularColors,
} from '@/lib/data/selectDatas'
import UseDoneUpload from '@/lib/hooks/useDoneUpload'
import { useStoreState } from '@/context/useStore'
import { qnaOrReport, uploadList } from '@/lib/data/dummyData'
import { BiMessageDots,BiTargetLock } from "react-icons/bi";
import {toast} from 'sonner'
import { LuBookOpen } from "react-icons/lu";
import { useMicSpeechRecognition } from '@/lib/hooks/useMicSpeechRecognition'
import { Link, useNavigate } from 'react-router-dom'
import { GrOnedrive } from "react-icons/gr";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import GoogleDrive from '../assets/GoogleDrive.png'
import pdfImage from '@/assets/pdf-2.png'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const GridLayout = () => {
  const navigate = useNavigate()
  const divRef = useRef<HTMLDivElement>()
  const [isStandart, setIsStandart] = useState("")
  const [toogleSendEmailWord, setToogleSendEmailWord] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [showSave, setShowSave] = useState(false)
  const [showDownload, setShowDownload] = useState(false)
  const { setIsSelectUpload, setShowSelectUploadFile, selectedDocs} = useStoreState()
  const {browserSupportsSpeechRecognition, transcript, listening, handleMic} = useMicSpeechRecognition()

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) toast.error("Browser didnt support speech recognition")
  }, [])
  

  useEffect(() => {
    divRef.current.scrollIntoView({behavior: "instant"})   
  }, [toogleSendEmailWord, isStandart === "standart"])
  
  const handleStandart = () => {
    setIsStandart("standart")
  }

  const handleCustomized = () => {
    setIsStandart("customized")
  }


  function UploadGrid({ image, title }) {
    const handlePopupUploadFile = () => {
      setIsSelectUpload(title)
      setShowSelectUploadFile(true)
    }

    const colorIcon = selectedDocs && selectedDocs[0] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorIconTwo =  selectedDocs && selectedDocs[1] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorIconThree =  selectedDocs && selectedDocs[2] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorIconFour =  selectedDocs && selectedDocs[3] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    return (
      <div className="h-full flex items-start gap-2">
        <div className='h-full   w-full flex flex-col'>
       <button onClick={handlePopupUploadFile} type='button' className='border relative dark:border-gray-600 shadow rounded-md flex gap-1 flex-col items-center justify-center w-full px-4 py-2 h-full'>
          <div className=' absolute top-1  right-1 p-1 z-10 mb-0'>
            <FaPencilAlt className='text-xs text-2' />
          </div>
          {title === "URL" ? <LiaLinkSolid size={35} /> :  <img src={image} alt={title} className='w-8 h-8 object-contain' />}
          <p className='text-center font-semibold text-xs'>{title}</p>
        </button>
        <div className='text-xs text-center bg-[#5C3CFB] py-0.5 text-white px-4 rounded-md w-full mt-2'>
          100%
        </div>
        </div>
        <div className="flex flex-col items-center gap-1  justify-between h-[100%]">
          <UseDoneUpload className={colorIcon} />
          <UseDoneUpload className={colorIconTwo} />
          <UseDoneUpload className={colorIconThree} />
          <UseDoneUpload className={colorIconFour}/>
          <button type='button' onClick={handlePopupUploadFile}>
            <IoMdAddCircleOutline size={18} color="#5C3CFb" />
          </button>
        </div>
      </div>
    )
  }

  const Component1 = () => (
    <div className=' card h-full overflow-y-auto '>
      <div className='flex justify-between flex-wrap gap-2'>
        <Button variant='outline' onClick={handleStandart}>Standard</Button>
        <Button variant='outline' onClick={handleCustomized}>Customized</Button>
      </div>
      <div className='grid my-4 grid-rows-3 grid-cols-3 gap-y-6 h-full'>
        {uploadList.map((e) => (
          <div key={e.title} className='h-full max-w-[180px] w-full'>
            <UploadGrid image={e.image}  title={e.title} />
          </div>
        ))}
       {isStandart === "standart" ? (
         <button className='max-w-[154px] mt-2 max-h-[40px] border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
         Validate
       </button>
       ) :  (
        <div className='space-y-2 mt-2'>
          <button className='max-w-[154px] border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
            Generate
          </button>
          <button className='max-w-[154px] px-3 py-2 rounded-lg text-xs bg-[#5E3AFF] text-white w-full'>
            Generate & Send Report
          </button>
        </div>
       )}
      </div>
    </div>
  )

  const Component2 = () => {
    return (
      <div className='w-full card  flex flex-row gap-4 items-center p-2'>
    <div className=" max-w-[180px] pr-4 flex flex-col items-center justify-start gap-2 space-y-2 w-full h-full overflow-y-auto py-2">
  
    <div className="w-full border h-full flex items-center flex-col border-black/10">
    {selectedDocs[1] ? <div className='max-h-[180px] h-full w-full'>
    {selectedDocs[1].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[1])} />
      </Worker>
) : selectedDocs[1].type === `image/png` ? (
  <img src={window.URL.createObjectURL(selectedDocs[1])} alt={selectedDocs[1].name} />
 ) : selectedDocs[1].type === `image/jpg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[1])} alt={selectedDocs[1].name} />
 ) : selectedDocs[1].type === `image/jpeg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[1])} alt={selectedDocs[1].name} />
 ) : selectedDocs[1].type === `image/webp` && (
  <img src={window.URL.createObjectURL(selectedDocs[1])} alt={selectedDocs[1].name} />
 ) 
    }
    </div> : 
     <img src={pdfImage} alt="PDF Example" width={200} />}
      <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-[10px] w-full text-black text-center py-2 rounded-b-[5px] shadow-[0px_4px_4px_0px] shadow-black/30 ">
        <p>{selectedDocs[1] ? `${selectedDocs[1].name.slice(0, 15)}` : "Document01.pdf"}</p>
      </div>
    </div>

    <div className="w-full border h-full flex items-center flex-col border-black/10">
    {selectedDocs[2] ? <div  className='max-h-[180px] h-full w-full'>
      {selectedDocs[2].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[2])} />
      </Worker>
) : selectedDocs[2].type === `image/png` ? (
  <img src={window.URL.createObjectURL(selectedDocs[2])} alt={selectedDocs[2].name} />
 ) : selectedDocs[2].type === `image/jpg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[2])} alt={selectedDocs[2].name} />
 ) : selectedDocs[2].type === `image/jpeg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[2])} alt={selectedDocs[2].name} />
 ) : selectedDocs[2].type === `image/webp` ? (
  <img src={window.URL.createObjectURL(selectedDocs[2])} alt={selectedDocs[2].name} />
 ) : selectedDocs[2].type === `application/vnd.ms-powerpoint` ? (
  <iframe  width="100%" height="600"  src={`https://docs.google.com/gview?url=${window.URL.createObjectURL(selectedDocs[2])}&embedded=true`}></iframe>
 ) : ""
    }
    </div>:  <img src={pdfImage} alt="PDF Example" width={200} />}
      <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-[10px] w-full text-black text-center py-2 rounded-b-[5px] shadow-[0px_4px_4px_0px] shadow-black/30 ">
      <p>{selectedDocs[2] ? `${selectedDocs[2].name.slice(0, 15)}` : "Document02.pdf"}</p>
      </div>
    </div>
      <div className="w-full border border-black/10 flex flex-col items-center">
      {selectedDocs[3] ? <div  className='max-h-[180px] h-full w-full'>
      {selectedDocs[3].type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[3])} />
      </Worker>
) : selectedDocs[3].type === `image/png` ? (
  <img src={window.URL.createObjectURL(selectedDocs[3])} alt={selectedDocs[3].name} />
 ) : selectedDocs[3].type === `image/jpg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[3])} alt={selectedDocs[3].name} />
 ) : selectedDocs[3].type === `image/jpeg` ? (
  <img src={window.URL.createObjectURL(selectedDocs[3])} alt={selectedDocs[3].name} />
 ) : selectedDocs[3].type === `image/webp` ? (
  <img src={window.URL.createObjectURL(selectedDocs[3])} alt={selectedDocs[3].name} />
 ) : selectedDocs[3].type === `application/vnd.ms-powerpoint` ? (
  <iframe  width="100%" height="200"  src={`https://docs.google.com/gview?url=${window.URL.createObjectURL(selectedDocs[3])}&embedded=true`}></iframe>
 ) : ""
    }
    </div> :  <img src={pdfImage} alt="PDF Example" width={200} />}
        <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-xs text-black text-center py-2 rounded-[5px] shadow-[0px_4px_4px_0px] w-full shadow-black/30 ">
        <p>{selectedDocs[3] ? `${selectedDocs[3].name.slice(0, 15)}` : "Document03.pdf"}</p>
        </div>
      </div>
      <button type='button' className="border-black/30 dark:border-white/30 border rounded-full p-2">
        <IoIosArrowDown size={20} />
      </button>
    </div>
    <div className="w-full h-full rounded-md overflow-y-auto">
       <div className="flex flex-col pb-4 w-full">
       <div className="bg-[#040C34] w-full flex justify-between text-white rounded-t-[5px] py-3 px-2">
         <div className='flex items-center ml-4 gap-6'>
           <button type='button'>
             <MdClose size={25} />
           </button>
          {selectedDocs[0] ?  <p className='font-semibold text-sm'>{selectedDocs[0].name.length >= 39 ? `${selectedDocs[0].name.slice(0, 40) + "... .pdf"}` : selectedDocs[0].name }</p> : <p>Preview</p>}
         </div>
         <button type='button' className='p-0.5 border mr-4 border-white rounded-full'>
           <HiOutlineDotsHorizontal size={18} />
         </button>
       </div>
       <div className="w-full flex gap-4 px-4 py-2 items-center justify-center  flex-col text-white rounded-b-[5px] bg-[#1a1a1a]">
        {selectedDocs[0] ? (
          <>
          {selectedDocs[0].type === "application/pdf" ? (
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(selectedDocs[0])} />
         </Worker>
      ) : selectedDocs[0].type === `image/png` ? (
        <img src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
       ) : selectedDocs[0].type === `image/jpg` ? (
        <img src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
       ) : selectedDocs[0].type === `image/jpeg` ? (
        <img src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
       ) : selectedDocs[0].type === `image/webp` ? (
        <img src={window.URL.createObjectURL(selectedDocs[0])} alt={selectedDocs[0].name} />
       ) : 
       <DocViewer pluginRenderers={DocViewerRenderers} documents={[{
        uri: window.URL.createObjectURL(selectedDocs[0]),
       }]} />
       
          }
          </>
        ) : (
          <img src={pdfImage} alt="Pdf Preview" width={324} height={324} />
        )}
         </div>
       </div>
    </div>
  </div>
    )
  }
  const Component3 = () => (
    <div className={`${isStandart === "standart" ? "grid  gap-3 grid-cols-12" : "flex items-center gap-2  "} card w-full  overflow-y-auto h-full`}>
      <div className='col-span-8 border w-full rounded-md shadow dark:border-gray-700 h-full'>
        <div className={`px-3 py-4 flex flex-col ${listening ? "justify-between" : " justify-end"} h-full gap-3`}>
        {transcript !== "" && (
            <div className="bg-[#DADAEA] text-black rounded-md max-w-[90%] px-3 py-2 text-xs space-y-3">
            <p>{transcript}</p>
          </div>
          )}
          <div className="flex flex-col h-full justify-end gap-4">
          <div ref={divRef} className='bg-[#DADAEA] rounded-md px-3 py-2 text-xs space-y-3 relative'>
            {toogleSendEmailWord && (
              <div className="absolute bottom-8 z-40 flex flex-col gap-2 border border-primary bg-white dark:bg-black p-1 rounded-md max-w-[180px]  right-2">
               <Link to={"/emailai"}>
                  <button type='button' className='p-2 bg-primary rounded-md text-white '>
                    Email/Text
                  </button>
               </Link>
                <button type='button'  className='p-2 bg-primary rounded-md text-white'>
                  MS Word
                </button>
              </div>
            )}
            <button type='button' className={`p-1 opacity-80 bg-[#040C34] dark:bg-[#343434] rounded-md absolute ${toogleSendEmailWord ? "-top-1" : "top-2"} left-2 hover:opacity-100`}>
              <BiTargetLock size={20} color="white" />
            </button>
            <div className='flex justify-end'>
              <div className='w-[150px] flex gap-2'>
                <HiOutlineEmojiSad className='w-6 h-auto dark:text-black' />
                <Slider defaultValue={[50]} max={100} step={1} />
                <CiFaceSmile className='w-6 h-auto dark:text-black' />
              </div>
            </div>
            <p className='font-bold dark:text-black'>I’m an AI bot!</p>
            <div className='mt-3 flex gap-2 flex-wrap'>
              <button className='text-xs black-button flex items-center'>
                <MdContentCopy size={15} />
                <span>Copy</span>
              </button> 
              <button className='text-xs black-button flex items-center'>
                <IoShareSocialSharp size={15} />
                <span>Share</span>
              </button>
              <button className='text-xs black-button flex items-center'>
                <LuBookOpen size={15} />
                <span>Word Count</span>
              </button>
              <button className='text-xs black-button flex items-center'>
                <BiMessageDots size={15} />
                <span>Feedback</span>
              </button>
            </div>
            <button type='button' onClick={() => setToogleSendEmailWord((prev) => !prev)} className='absolute bottom-0 right-0 p-2 opacity-80 hover:opacity-100'>
              <IoSend size={20} color="black"  className=" rotate-[320deg]" />
            </button>
            
          </div>
          <div className='bg-[#040C34CC] text-gray-200 rounded-md px-3 py-2 text-xs'>
            <div>What is your name?</div>
            <div className='mt-3 flex gap-2'>
              <button className='text-xs black-button'>Copy</button>
              <button className='text-xs black-button'>Edit</button>
              <button className='text-xs black-button'>Word Count</button>
            </div>
          </div>
          <div className='flex py-2 w-full gap-2'>
            <Input placeholder='Write a Question...' className='w-full' />
            <button type='button' onClick={handleMic}>
              <IoMicOutline className={`w-6 ${listening ? "text-primary" : "dark:text-white text-black"} h-auto`} />
            </button>
            <button>
              <IoSend className='w-6 h-auto text-primary' />
            </button>
          </div>
          </div>
        </div>
      </div>
      {isStandart === "standart" ? (
        <div className='col-span-4 border rounded-md shadow dark:border-gray-700 h-full space-y-3 px-2 py-2'>
          <div className="font-bold">
           <Selector
          title='QnA/Report'
          options={qnaOrReport}
          onValueChange={(e) => {}}
        />
        </div>
         <div className="flex items-center my-1   gap-4">
          <input id="tableContent" type="checkbox" className="accent-[#5E3AFF] h-5 w-5 " />
          <label htmlFor="tableContent" className='opacity-80'>Table of Content</label>
        </div>
       
       <Selector
          title='Select Language'
          options={languageList}
          
          onValueChange={() => {}}
        />
        <Selector
          title='Writing Style'
          options={writingStyle}
          onValueChange={() => {}}
        />
        <Selector
          title='Purpose of Writing'
          options={purposeOfWriting}
          onValueChange={() => {}}
        />
        <Selector
          title='Format Option'
          options={formatOptions}
          onValueChange={() => {}}
        />
        <div className='flex gap-1'>
          <p className='text-2 text-[10px]'>
            Number of word to be generated
          </p>
          <Input type='number' min='1' max='100' />
        </div>
        <Selector
          title='Font Colour'
          options={popularColors}
          onValueChange={() => {}}
        />
        <Selector
          title='Font Type'
          options={fontType}
          onValueChange={() => {}}
        />
        <Selector
          title='Font Format'
          options={fontFormat}
          onValueChange={() => {}}
        />
        <Selector title='LLM' options={llms} onValueChange={() => {}} />
        <div className='text-xs justify-between px-2 flex gap-2'>
          <p className='text-2 font-semibold'>Bold key words</p>
          <Switch />
        </div>
        <div className='text-xs justify-between px-2 flex gap-2'>
          <p className='text-2 font-semibold'>Highlight</p>
          <Switch />
        </div>
      </div>
      ) : ""}
    </div>
  )
  const Component4 = () => (
    <div className='border shadow card flex flex-col  justify-between   w-full overflow-y-auto dark:border-gray-700 rounded-md'>
      <div className="border h-full mb-4 dark:border-gray-700 rounded-md">
        <Editor  />
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
            <button type='button' onClick={() => navigate("/contact")} className='flex  items-center gap-2 text-sm bg-white px-1 py-1 rounded-md w-full font-bold'>
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
            <PopoverContent className='border bg-white rounded-2xl overflow-hidden'>
              <div className='bg-white text-black space-y-3'>
                <div className='space-y-1 py-2 px-2 bg-gray-100 rounded-2xl'>
                  <p className='text-base font-semibold'>Cluadia Dias</p>
                  <p className='text-sm flex'>Online</p>
                </div>
                <div>
                  <div className='flex py-2 px-2 bg-gray-100 rounded-2xl'>
                    <div>
                      <CgProfile className='w-8 h-auto' />
                    </div>
                    <div className='space-y-3'>
                      <p className='text-center text-sm font-semibold'>
                        Talk Suggestion
                      </p>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        Hello! How can i help you?
                      </button>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        Hello! If you need any help?
                      </button>
                      <button className='text-sm border border-primary bg-primary/10 rounded-full px-3 py-1'>
                        I need more helps
                      </button>
                    </div>
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

  return (
    <main className='mt-12 grid relative grid-cols-2 gap-3 max-h-screen grid-rows-2 w-full p-2 h-full'>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </main>
  )
}

export default GridLayout
