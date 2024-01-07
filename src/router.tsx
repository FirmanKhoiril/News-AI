import { Navigate, Route } from 'react-router-dom'
import { createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import withLazyLoading from './lib/hoc/withLoading'
//layout
import AppLayout from '@/layout/AppLayout'

//pages
const Dashboard = withLazyLoading(() => import('@/pages/dashboard'))
const Profile = withLazyLoading(() => import('@/pages/profile'))
const Setting = withLazyLoading(() => import('@/pages/setting'))
const Todos = withLazyLoading(() => import('@/pages/todos'))
const Notebook = withLazyLoading(() => import('@/pages/notebook'))
const Calender = withLazyLoading(() => import('@/pages/calender'))
const Login = withLazyLoading(() => import('@/pages/login'))
const Register = withLazyLoading(() => import('@/pages/register'))
const Libary = withLazyLoading(() => import('@/pages/libary'))
const Contact = withLazyLoading(() => import('@/pages/contact'))
const History = withLazyLoading(() => import('@/pages/history'))
const App = withLazyLoading(() => import('@/pages/app'))
const EmailAi = withLazyLoading(() => import('@/pages/emailai'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Navigate to={'/app'} />} />
        <Route path='/app' element={<App />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/notes' element={<Notebook />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/library' element={<Libary />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/history' element={<History />} />
        <Route path='/emailai' element={<EmailAi />} />
        {/* <Route path='/chat' element={<ChatBasic />} /> */}
        {/* <Route path='/chat/advance' element={<ChatAdvance />} /> */}
        {/* <Route path='/chat/pro' element={<ChatPro />} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </>
  )
)

export default router
