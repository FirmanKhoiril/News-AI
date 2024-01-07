import { FiSun } from 'react-icons/fi'
import { BsMoonFill } from 'react-icons/bs'
// import Selector from './chat/subcomp/selector'
import { useAtom } from 'jotai'
import { MdOutlineMenu } from 'react-icons/md'
import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { openSideBar } from '@/lib/context'
import useDarkMode from '@/lib/useDarkMode'
import { Button } from './ui/button'

function TopNav() {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [openSideBarValue, setOpenSideBarValue] = useAtom(openSideBar)
  return (
    <div
      className={`border-b dark:border-gray-700 shadow-sm z-50 px-3 py-2 top-0 fixed ${
        !openSideBarValue ? 'w-[85.4vw]' : 'w-[95vw]'
      } bg-white dark:bg-[#0A0A0A] flex justify-between items-center`}
    >
      <div className='flex items-center gap-4 w-full'>
        <MdOutlineMenu
          className='text-2 w-6 h-auto'
          role='button'
          onClick={() => setOpenSideBarValue(!openSideBarValue)}
        />
        <div className='max-w-sm w-full flex dark:border-gray-700 dark:bg-gray-900  py-1.5 px-3 shadow items-center gap-3 rounded-md bg-primary/10 border-0 text-sm'>
          <input
            type='text'
            className='outline-none w-full dark:bg-gray-900 bg-transparent'
            placeholder='What do you want to find?'
          />
          <IoMdSearch className='w-5 h-auto text-primary' />
        </div>
      </div>
      <div className='flex gap-3 items-center w-full justify-end px-2'>
        <p className='text-base font-medium'>Hello, John</p>
        <Link to='/profile'>
          <img
            src={'https://eu.ui-avatars.com/api/?name=John+Doe&size=250'}
            alt=''
            className='w-8 h-auto rounded-full'
          />
        </Link>
        <Button
          variant='secondary'
          onClick={toggleDarkMode as never}
          className='transition-all duration-300'
          title='Toogle Dark Mode'
        >
          {!darkMode && (
            <BsMoonFill className='hover:rotate-180 transition-transform duration-300' />
          )}{' '}
          {darkMode && (
            <FiSun className='hover:rotate-180 transition-transform duration-300' />
          )}
        </Button>
      </div>
    </div>
  )
}

export default TopNav
