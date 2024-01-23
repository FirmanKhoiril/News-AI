import  {  useEffect } from 'react'
import {toast} from 'sonner'
import { useMicSpeechRecognition } from '@/lib/hooks/useMicSpeechRecognition'
import {UploadFile, FileUploadPreview, ConversationBotApp, MSWord} from './layout';
import FileUploadCustomized from '@/components/modal/FileUploadCustomized';
import { useStoreState } from '@/context/useStore';

const GridLayout = () => {
  const {browserSupportsSpeechRecognition} = useMicSpeechRecognition()
  const {showCustomizedPreviewFileUpload} = useStoreState()

  console.log(showCustomizedPreviewFileUpload)
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) toast.error("Browser didnt support speech recognition")
  }, [])
  
  return (
    <main className='mt-12 grid relative grid-cols-2 gap-3 max-h-screen grid-rows-2 w-full p-2 h-full'>
      <UploadFile />
      {showCustomizedPreviewFileUpload ?  <FileUploadCustomized /> : ""}
     
      <FileUploadPreview />
      <ConversationBotApp />
      <MSWord />
    </main>
  )
}

export default GridLayout
