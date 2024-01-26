import { Button } from '@/components/ui/button'
import { useStoreState } from '@/context/useStore'
import { uploadList } from '@/lib/data/dummyData'
import UseDoneUpload from '@/lib/hooks/useDoneUpload'
import { FaPencilAlt } from 'react-icons/fa'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { LiaLinkSolid } from 'react-icons/lia'



const UploadFile = () => {
    const { setIsSelectUpload, setShowSelectUploadFile, selectedDocs, websiteUrl, youtubeUrl, isStandart, setIsStandart} = useStoreState()
    const handleStandart = () => {
        setIsStandart("standart")
      }
    
      const handleCustomized = () => {
        setIsStandart("customized")
      }

     
  
      const colorIcon = selectedDocs && selectedDocs[0] || websiteUrl || youtubeUrl ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
      const colorIconTwo =  selectedDocs && selectedDocs[1] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
      const colorIconThree =  selectedDocs && selectedDocs[2] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
      const colorIconFour =  selectedDocs && selectedDocs[3] ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
  

    function UploadGrid({ image, title }) {
      const handlePopupUploadFile = () => {
        setIsSelectUpload(title)
        setShowSelectUploadFile(true)
      }
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
  return (
    <div className=' card h-full overflow-y-auto '>
      <div className='flex justify-between flex-wrap gap-2'>
        <Button variant='outline' onClick={handleStandart}>Standard</Button>
        <Button variant='outline' onClick={handleCustomized}>Customized</Button>
      </div>
      <div className='grid my-4 grid-rows-3 gap-x-6 grid-cols-3 gap-y-6 h-full'>
        {uploadList.map((e) => (
          <div key={e.title} className='h-full max-w-[240px] max-h-[300px] w-full'>
            <UploadGrid image={e.image}  title={e.title} />
          </div>
        ))}
       {isStandart === "standart" ? (
         <button className='max-w-[214px] mt-2 max-h-[40px] border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
         Validate
       </button>
       ) :  (
        <div className='space-y-2 mt-2'>
          <button className='max-w-[214px] border-2 rounded-md border-primary bg-primary/10 py-2 px-1 w-full text-xs'>
            Generate
          </button>
          <button className='max-w-[214px] px-3 py-2 rounded-lg text-xs bg-[#5E3AFF] text-white w-full'>
            Generate & Send Report
          </button>
        </div>
       )}
      </div>
    </div>
  )
}

export default UploadFile