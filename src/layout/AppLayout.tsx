import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import TopNav from '@/components/TopNav'
import { Toaster } from '@/components/ui/toaster'
import { useAtom } from 'jotai'
import { openSideBar } from '@/lib/context'
import ModalUploadFileOrDocument from '@/components/modal/ModalUploadFileOrDocument'
import {Toaster as Toast} from 'sonner'
import UploadFileAiReplace from '@/components/modal/UploadFileAiReplace'
import EditSpecificFile from '@/components/modal/EditSpecificFile'
import Feedback from '@/components/modal/Feedback'
import ConfirmSwitchStandartMode from '@/components/modal/ConfirmSwitchStandartMode'

function AppLayout() {
  const [openSideBarValue] = useAtom(openSideBar)
  
  return (
    <main className='flex w-full'>
      <ModalUploadFileOrDocument />
      <ConfirmSwitchStandartMode />
      <Feedback />
      <EditSpecificFile />
      <UploadFileAiReplace />
      <Toast richColors theme='dark' position='top-center' />
      <section className={`${openSideBarValue ? 'w-[4.5%]' : 'w-2/12'}`}>
        <aside className='w-full sticky top-0 h-full md:max-h-[95vh]'>
          {/* Content for sidebar/Header goes here */}
          <Header />
        </aside>
      </section>
      <section className={`w-full`}>
        <TopNav />
        <section className='mt-12 dark:bg-transparent bg-[#DADAEA]/40'>
          <Outlet />
        </section>
        <Toaster />
      </section>
    </main>
  )
}

export default AppLayout
