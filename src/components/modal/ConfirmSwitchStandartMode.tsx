import { useStoreState } from '@/context/useStore'
import confirmSVGImage from '@/assets/confirm.svg'


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
     <div className={`fixed mx-auto h-full ${isStandart === "customized" ? "py-4" : "py-6"} max-h-[250px] border border-primary dark:border-white/20 justify-between flex flex-col gap-4 max-w-[600px] overflow-y-auto z-50 inset-0 top-1/4 card`}>
    <div className="space-y-2">
      <h1 className="font-semibold text-xl pl-2 pt-2">Confirm Your Choice</h1>
      <h1 className="opacity-80 font-sans tracking-wide text-[16px] pl-2">
        {isStandart === "customized" ? (
          <span>You will switch to Standard mode, and all uploaded files will be reset. Please confirm your choice:</span>
        ) : (
          <span>You will switch to Customized mode, and all uploaded files will be reset. <br /> Please confirm your choice:</span>
        )}
      </h1>
    </div>
    <div className="flex items-end w-full justify-end gap-4 pb-2 pr-2">
      <button onClick={() => setShowConfirmSwitchMode(false)} type="button" className="px-8 py-2 bg-red-500 hover:bg-red-600 text-white transition duration-300 rounded-md">
        No
      </button>
      <button onClick={handleConfirm} type="button" className="px-7 py-2 bg-green-400 text-black hover:bg-green-500 rounded-md">
        Yes
      </button>
    </div>
    </div>

    </>
  ) : ""
}

export default ConfirmSwitchStandartMode