import { useStoreState } from '@/context/useStore'

const ConfirmSwitchStandartMode = () => {
    const {setShowConfirmSwitchMode, showConfirmSwitchMode, setSelectedDocs, setIsStandart, isStandart} = useStoreState()

    const handleConfirm = () => {
        if(isStandart === "customized") {
            setIsStandart("standart")
            setSelectedDocs((_) => [])
            setShowConfirmSwitchMode(false)
        } else {
            setIsStandart("customized")
            setSelectedDocs((_) => [])
            setShowConfirmSwitchMode(false)
        }
    }
  return showConfirmSwitchMode ? (
    <>
     <div onClick={() => setShowConfirmSwitchMode(false)} className="bg-black/80 w-full h-screen fixed z-40 " />
    <div className={`fixed mx-auto h-full ${isStandart === "customized" ? "max-h-[125px]" : "max-h-[150px]"} flex flex-col gap-4 max-w-[600px] overflow-y-auto z-50 inset-0 border dark:border-gray-800/80 top-1/4 card`}>
        <h1>{isStandart === "customized" ? "You will switch to Standard mode, Please confirm your choice :" : "You will switch to Customized mode, all the uploaded file will be reset. Please confirm your choice :"}</h1>
        <div className="flex items-end w-full justify-end  gap-2">
            <button onClick={handleConfirm} type='button' className='px-6 py-2 bg-primary hover:bg-indigo-500 rounded-md'>
                Yes
            </button>
            <button onClick={() => setShowConfirmSwitchMode(false)} type='button' className='px-6 hover:border-indigo-500 py-2 border border-primary rounded-md'>
                No
            </button>
        </div>
    </div>
    </>
  ) : ""
}

export default ConfirmSwitchStandartMode