import { useAtom } from 'jotai'
import { IoIosMoon } from 'react-icons/io'
import { Switch } from '@/components/ui/switch'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { FaEarthAfrica } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsClipboardCheck } from 'react-icons/bs'
import { LuLayoutDashboard,LuGift } from 'react-icons/lu'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaRegBookmark } from 'react-icons/fa6'
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { LuUserCircle } from 'react-icons/lu'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CiSettings } from 'react-icons/ci'
import { HiOutlineClipboard } from 'react-icons/hi2'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import Logo from '@/assets/logo.png'
import { openSideBar } from '@/lib/context'
import { RiBookMarkLine } from "react-icons/ri";
import { PiFoldersBold } from "react-icons/pi";

const menuList = [
  {
    text: 'App',
    href: '/app',
    icon: LuGift,
  },
  // {
    
  //   text: 'Dashboard',
  //   href: '/dashboard',
  //   icon: LuLayoutDashboard,
  // },
  { text: 'Profile', href: '/profile', icon: LuUserCircle },
  { text: 'History', href: '/history', icon: PiClockCounterClockwiseFill },

  // { text: 'Chat', href: '/chat', icon: HiOutlineChatBubbleBottomCenterText },
  // { text: 'Calender', href: '/calender', icon: BsCalendarEvent },
  { text: 'Library', href: '/library', icon: PiFoldersBold },
  // { text: 'Bookmarks', href: '/bookmarks', icon: FaRegBookmark },
  { text: 'To Do List', href: '/todos', icon: BsClipboardCheck },
  { text: 'Notes', href: '/notes', icon: RiBookMarkLine },

  { text: 'Tutorials', href: '/', icon: AiOutlinePlayCircle },
  { text: 'Settings', href: '/settings', icon: CiSettings },
  { text: 'Contact', href: '/contact', icon: HiOutlineUserGroup },
]

function Nav() {
  const [openSideBarValue] = useAtom(openSideBar)

  return (
    <nav className='px-3 pt-5 h-full flex-col md:flex'>
      <div className='flex flex-col items-center gap-y-1'>
        <div className='mb-4'>
          <img src={Logo} className='w-10 h-auto' alt='logo' />
        </div>
        {menuList.map((singleMenu, index) => {
          return (
            <NavLink to={singleMenu.href} key={index} className='w-full'>
              {({ isActive }) => {
                return (
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={`w-full flex justify-start mb-1 gap-3 ${
                      isActive
                        ? 'bg-menuColor dark:bg-[#5C3CFB33] dark:text-gray-200 hover:bg-menuColor hover:opacity-90 text-primary'
                        : 'text-2'
                    }`}
                  >
                    <singleMenu.icon
                      className={`text-xl w-5 grow-0 shrink-0 h-auto`}
                    />
                    {!openSideBarValue && singleMenu.text}
                  </Button>
                )
              }}
            </NavLink>
          )
        })}
        {/* 
        {!openSideBarValue && (
          <Button className='w-full space-x-4 text-2' variant={'ghost'}>
            <IoIosMoon /> <span>Dark Mode</span>{' '}
            <Switch
              id='dark-mode'
              onCheckedChange={toggleDarkMode as never}
              checked={darkMode as never}
            />
          </Button>
        )} */}
        {/* {!openSideBarValue && (
          <div className='w-full flex justify-center gap-3 text-2 mt-5'>
            <a href='https://www.instagram.com/futuregreenworld/'>
              <FaInstagram />
            </a>
            <a href='https://fgw.vercel.app/'>
              <FaEarthAfrica />
            </a>

            <a href='https://www.youtube.com/@FutureGreenWorld'>
              <FaYoutube />
            </a>

            <a href='https://www.linkedin.com/company/futuregreenworld/'>
              <FaLinkedin />
            </a>
          </div>
        )} */}
      </div>
    </nav>
  )
}

function Header() {
  return (
    <div
      className={`bg-white dark:bg-[#000000] h-[100vh] w-full border-e dark:border-gray-700 shadow-sm`}
    >
      <Nav />
    </div>
  )
}

export default Header
