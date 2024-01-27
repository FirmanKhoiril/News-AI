import FeedUploadGrid from '@/components/FeedUploadGrid'
import { Button } from '@/components/ui/button'
import { useStoreState } from '@/context/useStore'

const UploadFile = () => {
    const { selectedDocs, websiteUrl, youtubeUrl, isStandart, setIsStandart} = useStoreState()
    const handleStandart = () => {
        setIsStandart("standart")
      }
    
      const handleCustomized = () => {
        setIsStandart("customized")
      }

  return (
    <div className=' card h-full overflow-y-auto '>
      <div className='flex justify-between flex-wrap gap-2'>
        <Button variant='outline' onClick={handleStandart}>Standard</Button>
        <Button variant='outline' onClick={handleCustomized}>Customized</Button>
      </div>
      <div className='grid my-4 grid-rows-3 gap-x-6 grid-cols-3 gap-y-6 h-full'>
        <FeedUploadGrid />
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