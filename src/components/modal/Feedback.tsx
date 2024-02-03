import { useStoreState } from '@/context/useStore'
import { MdOutlineClose } from 'react-icons/md'

const Feedback = () => {
    const {showFeedbackModal, setShowFeedbackModal} = useStoreState()
  return showFeedbackModal ? (
    <>
    <div onClick={() => setShowFeedbackModal(false)} className="bg-black/80 w-full h-screen fixed z-40 " />
    <div className="fixed mx-auto h-full max-h-[420px] dark:text-[#ececf1] flex flex-col gap-4 max-w-[1000px] overflow-y-auto z-50 inset-0 border dark:border-gray-800/80 top-1/4 card">
        <div className="border-b border-black/10 dark:border-white/10 pt-4 pb-8 w-full flex items-center justify-between">
            <div className="">
                <h1 className='font-semibold text-2xl'>Provide additional feedback</h1>
            </div>
            <button type='button' onClick={() => setShowFeedbackModal(false)}>
                <MdOutlineClose size={30} />
            </button>
        </div>
        <div className="flex flex-col pt-2 w-full items-start gap-2">
            <textarea rows={4} placeholder='What was the issue with the response? How could it be improved?' className='outline-none p-3 placeholder:text-black/60 placeholder:dark:text-white/60 rounded-lg dark:bg-transparent w-full border focus:border-black/50 border-black/20 dark:border-white/20 focus:dark:border-white/50 resize-none'></textarea>
            <div className="flex items-center pt-2 gap-2">
                <input type="checkbox" className=' appearance-none h-5 w-5 rounded-md border peer relative  border-black dark:border-white checked:bg-primary' />
                <label htmlFor="harmful" className='text-sm'>This is harmful / unsafe</label>
                <svg
                    className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white ml-[2px] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" className=' appearance-none h-5 peer relative  w-5 rounded-md border border-black dark:border-white checked:bg-primary' />
                <label htmlFor="true" className='text-sm'>This is'nt true</label>
                <svg
                    className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white ml-[2px] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" className=' appearance-none h-5 w-5 peer relative  rounded-md border border-black dark:border-white checked:bg-primary' />
                <label htmlFor="helpful" className='text-sm'>This is'nt helpful</label>
                <svg
                    className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white ml-[2px] outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
            </div>
            <div className="w-full items-end flex justify-end pr-2">
                <button type='button' onClick={() => setShowFeedbackModal(false)} className='px-4 py-2 border rounded-md mt-4  border-primary bg-slate-200 dark:bg-slate-200/20' >Submit Feedback</button>
            </div>
        </div>
    </div>
    </>
  ) : ""
}

export default Feedback