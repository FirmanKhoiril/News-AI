import { useStoreState } from '@/context/useStore'
import { IoIosWarning } from "react-icons/io";


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
     <div className={`fixed mx-auto h-full ${isStandart === "customized" ? "py-4" : "py-6"} max-h-[270px] border border-primary dark:border-white/20 flex flex-col gap-4 max-w-[600px] overflow-y-auto z-50 inset-0 top-1/4 card`}>
    <div className="flex items-center gap-2 w-full border-b border-black/20 dark:border-white/20 pb-4">
     <div className="w-[60px] h-[60px] my-2 p-4 flex rounded-full items-center justify-center text-black bg-gray-300 dark:bg-white">
        <IoIosWarning size={32} />
      </div>
    <h1 className="font-semibold text-2xl pl-2 pt-2">Confirm Your Choice</h1>
    </div>
    <div className="h-full flex flex-col justify-between items-start">
    <div className="space-y-2">
      
      <h1 className="opacity-80 font-sans tracking-wide text-[16px]">
        {isStandart === "customized" ? (
          <span>You will switch to Standard mode, and all uploaded files will be reset.</span>
        ) : (
          <span>You will switch to Customized mode, and all uploaded files will be reset.</span>
        )}
      </h1>
    </div>
    <div className="flex items-end w-full justify-end gap-4 pb-2 pr-2">
      <button onClick={() => setShowConfirmSwitchMode(false)} type="button" className="px-8 py-2 bg-red-500 hover:bg-red-600 text-white transition duration-300 rounded-md">
        No, cancel
      </button>
      <button onClick={handleConfirm} type="button" className="px-7 py-2 bg-indigo-500 hover:bg-primary text-white rounded-md">
        Yes, confirm
      </button>
    </div>
    </div>
    </div>

    </>
  ) : ""
}

export default ConfirmSwitchStandartMode