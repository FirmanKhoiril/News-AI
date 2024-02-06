import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import Logo from '@/assets/logo.png'
import { CgMail } from "react-icons/cg";
import { RiUserFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'
import { smallEllipse, standartEllipse, hugeEllipse, threeQuartersCircle, halfCircle, tinyEllipse, frame, borderEclipse } from "../assets";
import { MdClose } from "react-icons/md";

function Register() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen relative overflow-hidden z-20 bg-[#F5F6FA]'>
      <div className='inset-0 absolute login_background  -z-40 grid grid-cols-2 '>
        <div></div>
        <div className='relative w-full h-full'>
          <div className='absolute -right-[10%] -top-14 w-80 h-80 rounded-full bg-[#5C3CFB80]'></div>
          <div className='absolute -bottom-[10%] -right-[10%] w-80 h-80 rounded-full bg-[#5C3CFB80] flex justify-center items-center'>
            <div className='absolute w-64 h-64 rounded-full bg-[#dadaea]'></div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-full w-full'>
        <div className='px-5 max-w-6xl max-h-[85vh] h-full bg-transparent overflow-hidden drop-shadow-2xl grid grid-cols-2 w-full'>
          <div className='relative bg-[#755bf4] rounded-l-2xl w-full h-full flex justify-center items-center'>
            {/* Image */}
            <div className="relative w-full h-full">
            <div className="">
        <div className="w-[44px] h-[130px] absolute top-6 left-[200px] rounded-b-full bg-gradient-to-t from-white/50 from-[62.53%] to-black/0" />
        <div className="w-[65px] h-[128px] absolute border-2 border-white -top-2 left-[270px] rounded-b-full " />
        <div className="w-[65px] h-[179px] absolute top-8 left-[305px] rounded-b-full bg-gradient-to-t from-white/50 from-[62.53%] to-black/0" />
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-[130px] top-[80px]" />
        <img src={tinyEllipse} alt="tiny blue eclipse" className="absolute right-[80px] top-[56px]" />
        <img src={threeQuartersCircle} width={57} height={57} alt="Three Quarters circle eclipse" className="absolute right-[117px] top-[70px]" />
      </div>
      <div className="absolute -top-[66px] left-12 bg-white rounded-full w-[125px] h-[125px]" />
      <img src={standartEllipse} alt="standart blue eclipse" width={51} height={51} className="absolute bottom-[5rem] left-[70px]" />
      <div className="absolute bottom-[-2.5rem] flex flex-col gap-0.5 left-[70px]">
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
      </div>
      <MdClose size={28} color="white" className="absolute left-60 bottom-32" />
      <div>
        <img src={hugeEllipse} className=" absolute bottom-[-0.5rem] right-24" width={104} height={104} alt="Big Blue eclipse" />
        {/* <img src={borderEclipse} className=" absolute bottom-24 right-24" width={181} height={181} alt="Big Circle" /> */}
        <img src={halfCircle} width={74} height={74} className="absolute right-36 bottom-[-0.5rem]" alt="half circle" />
        <img src={smallEllipse} alt="small blue eclipse" className="absolute bottom-[2rem] right-[70px]" />
      </div>
      <div className="absolute top-24 flex flex-col gap-0.5 left-[58px]">
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
        <img src={frame} alt="Frame" width={100} height={16} />
      </div>
            </div>
            {/* Closing image */}
            <div className='login_svg absolute inset-0 z-30 w-full h-full'>
            </div>
            <div className='z-40 absolute text-white space-y-5'>
              <h1 className='text-5xl font-medium'>
                Adventure <br /> start here
              </h1>
              <h5 className='text-sm'>
                Create an account to join our community
              </h5>
            </div>
          </div>
          <div className='bg-[#F5F6FA] py-5 px-4 md:px-20 w-full flex flex-col items-center gap-y-5'>
            <div className='shadow rounded-xl w-fit bg-white border p-4'>
              <img src={Logo} className='w-16 h-auto' />
            </div>
            <h2 className='text-xl font-medium'>Join Us Today!</h2>
            <div className='w-full max-w-md space-y-4'>
              <div>
                <label className='text-sm mb-2 text-gray-600' htmlFor=''>
                  Name
                </label>
                <div className='w-full flex py-3 px-3 shadow items-center gap-3 rounded-md bg-white border-0 text-sm'>
                  <RiUserFill className='w-5 h-auto text-primary' />
                  <input
                    type='text'
                    className='outline-none w-full  bg-transparent'
                    placeholder='Enter your name'
                  />
                </div>
              </div>
              <div>
                <label className='text-sm mb-2 text-gray-600' htmlFor=''>
                  Email
                </label>
                <div className='w-full flex py-3 px-3 shadow items-center gap-3 rounded-md bg-white border-0 text-sm'>
                  <CgMail className='w-5 h-auto text-primary' />
                  <input
                    type='text'
                    className='outline-none w-full  bg-transparent'
                    placeholder='Enter your email'
                  />
                </div>
              </div>
              <div>
                <label className='text-sm mb-2 text-gray-600' htmlFor=''>
                  Password
                </label>
                <div className='w-full flex py-3 px-3 shadow items-center gap-3 rounded-md bg-white border-0 text-sm'>
                  <RiLockPasswordFill className='w-5 h-auto text-primary' />
                  <input
                    type='password'
                    className='outline-none w-full  bg-transparent'
                    placeholder='Enter your password'
                  />
                </div>
              </div>
            </div>
            <button className='btn-primary w-full max-w-md' onClick={() => navigate("/")}>Sign Up</button>
            <div className='flex gap-3'>
              <div
                role='button'
                className='px-3 py-2 rounded-md border shadow bg-gray-100'
              >
                <FcGoogle />
              </div>
              <div
                role='button'
                className='px-3 py-2 rounded-md border shadow bg-gray-100'
              >
                <FaFacebook color="#4c74e8" />
              </div>
              <div
                role='button'
                className='px-3 py-2 rounded-md border shadow bg-gray-100'
              >
                <FaApple />
              </div>
            </div>
            <div>
              <p className='text-sm'>
                Already Have an account?{' '}
                <Link to='/login' className='text-primary font-bold'>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
