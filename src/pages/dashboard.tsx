import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import notebookData from '@/lib/data/notebook'
import Chart from 'react-apexcharts'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { CgTimelapse } from 'react-icons/cg'
import { SlCalender } from 'react-icons/sl'
import NotebookCard from '@/components/notebookCard'
import { Card } from '@/components/ui/card'
import CountUp from 'react-countup'
import BookmarkData from '@/lib/data/bookmark'
import NotebookData from '@/lib/data/notebook'
import TodoDatas from '@/lib/data/todos'
// import { TodoCard } from '@/components/todoCard'
// import NotebookCard from '@/components/notebookCard'
// import { BookmarkCard } from '@/components/bookmarkCard'
// import Carousel from 'react-multi-carousel'
import { FaPencil } from 'react-icons/fa6'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FaRegTrashAlt } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BiWorld, BiLogoLinkedinSquare } from 'react-icons/bi'

import 'react-multi-carousel/lib/styles.css'
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// }

// functions

const dummyBookmark = [
  { name: 'Bookmark Note 03', date: '2023/06/15', prioriy: 'High' },
  { name: 'Bookmark Note 04', date: '2023/06/15', prioriy: 'Low' },
  { name: 'Bookmark Note 012', date: '2023/06/15', prioriy: 'High' },
  { name: 'Bookmark Note 017', date: '2023/06/15', prioriy: 'Average' },
  { name: 'Bookmark Note 06', date: '2023/06/15', prioriy: 'Average' },
]
const dummyChatHistory = [
  { name: 'Chat History 01', date: '2023/06/15', prioriy: 'High' },
  { name: 'Chat History 02', date: '2023/06/15', prioriy: 'Low' },
  { name: 'Chat History 03', date: '2023/06/15', prioriy: 'High' },
  { name: 'Chat History 04', date: '2023/06/15', prioriy: 'Average' },
  { name: 'Chat History 05', date: '2023/06/15', prioriy: 'Average' },
]
const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = (time: number) => (time / daySeconds) | 0

// values
const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const optionsWeek = {
  series: [
    {
      name: 'Hour',
      data: [2, 4, 3, 3, 4, 2, 1.4],
    },
  ],
  colors: ['#16a34a'],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    row: {
      // colors: ['#fcfcfc', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.3,
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
}
const optionsMonth = {
  colors: ['#0E71FF90'],
  series: [
    {
      name: 'Month',
      data: [20, 25, 30, 35, 40, 45, 50, 50, 45, 40, 35, 30],
    },
  ],
  chart: {
    height: '100px', // Adjust the height here
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  grid: {
    row: {
      // colors: ['#fcfcfc', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      // borderRadiusApplication: 'end',
      // borderRadiusWhenStacked: 'last',
      columnWidth: '40%',
      hover: {
        color: '#FF0000',
      },
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
}

const renderTime = (dimension: string, time: number) => {
  return (
    <div className='time-wrapper text-center font-semibold'>
      <p className='time text-sm'>{time}</p>
      <p className='text-sm'>{dimension}</p>
    </div>
  )
}
export default function Dashboard() {
  const stratTime = Date.now() / 1000 // use UNIX timestamp in seconds
  const endTime = stratTime + 243248 // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime
  const days = Math.ceil(remainingTime / daySeconds)
  const daysDuration = days * daySeconds

  const timerProps = {
    isPlaying: true,
    size: 80,
    strokeWidth: 5,
  }
  // <CountUp end={12} duration={5} />
  return (
    <div className='py-3 max-w-screen-2xl w-full space-y-5 px-3' id='dashboard'>
      <section className='mt-5 grid grid-cols-1 md:grid-cols-12 gap-3'>
        <div className='col-span-5 grid grid-rows-2 gap-3'>
          <div className='card'>
            <h2 className='font-[500] mb-2'>Remaining Days</h2>
            <div className='flex gap-2 flex-wrap'>
              <CountdownCircleTimer
                {...timerProps}
                colors='#3BC642'
                duration={daysDuration}
                initialRemainingTime={remainingTime}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime(
                      'days',
                      getTimeDays(daysDuration - elapsedTime)
                    )}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors='#F00'
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime(
                      'hours',
                      getTimeHours(daySeconds - elapsedTime)
                    )}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors='#0E71FF'
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat:
                    remainingTime - totalElapsedTime > minuteSeconds,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime(
                      'minutes',
                      getTimeMinutes(hourSeconds - elapsedTime)
                    )}
                  </span>
                )}
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors='#3DA488'
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                  shouldRepeat: remainingTime - totalElapsedTime > 0,
                })}
              >
                {({ elapsedTime, color }) => (
                  <span style={{ color }}>
                    {renderTime('seconds', getTimeSeconds(elapsedTime))}
                  </span>
                )}
              </CountdownCircleTimer>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div className='card space-y-3'>
              <div className='bg-[#3A7FE133]  rounded-lg w-fit h-fit p-2 flex-grow-0 flex-shrink-0'>
                <CgTimelapse className='text-[#3A7FE1] w-10 h-auto' />
              </div>
              <div>
                <p className='text-sm font-semibold text-2'>Hours</p>
                <p className='text-2xl font-medium'>12 Hours</p>
                <p className='text-xs text-[#3BC642]'>
                  You spent 12 hours using the FGW
                </p>
              </div>
            </div>
            <div className='card space-y-3'>
              <div className='bg-[#3DA48833] rounded-lg w-fit h-fit p-2 flex-grow-0 flex-shrink-0'>
                <SlCalender className='text-[#3DA488] w-10 h-auto' />
              </div>
              <div>
                <p className='text-sm font-semibold text-2'>Days</p>
                <p className='text-2xl font-medium'>17 Hours</p>
                <p className='text-xs text-[#F00]'>
                  You have 17 days left until your exam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white col-span-7 blue py-3 card'>
          <p className='font-semibold ps-5 text-sm mb-3'>Monthly time spent</p>
          <Chart
            options={optionsMonth as never}
            series={optionsMonth.series}
            type='bar'
            className='w-full'
            height={260}
          />
        </div>
      </section>
      <section className='grid grid-cols-2 gap-2'>
        <div className='bg-white blue py-3 card'>
          <p className='font-semibold ps-5 text-sm mb-3'>Weekly Time Spent</p>
          <Chart
            options={optionsWeek as never}
            series={optionsWeek.series}
            type='area'
            className='w-full'
            height={260}
          />
        </div>
        <div className='card'>
          <h2 className='font-[500] mb-2 text-black '>Bookmarks</h2>
          <Table>
            <TableHeader>
              <TableRow className='dark:border-gray-400'>
                <TableHead>Bookmark Details</TableHead>
                <TableHead>DATE</TableHead>
                <TableHead className='text-right'>PRIORITY</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyBookmark.map((e, i) => {
                let Priority
                switch (e.prioriy.toLowerCase()) {
                  case 'high':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#FF000033] text-[#F00]'>
                        <div className='p-1 w-fit h-fit bg-[#F00]'></div>
                        High
                      </div>
                    )
                    break
                  case 'average':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#3A7FE133] text-[#3A7FE1]'>
                        <div className='p-1 w-fit h-fit bg-[#3A7FE1]'></div>
                        Average
                      </div>
                    )
                    break
                  case 'low':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#3BC64233] text-[#3BC642]'>
                        <div className='p-1 w-fit h-fit bg-[#3BC642]'></div>
                        Low
                      </div>
                    )
                    break

                  default:
                    break
                }
                return (
                  <>
                    <TableRow key={i} className='dark:border-gray-600 w-full'>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className='capitalize'>
                            <TableCell className='font-medium cursor-pointer'>
                              {e.name}
                            </TableCell>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Bookmark</DialogTitle>
                          </DialogHeader>
                          <ScrollArea className='h-96'>
                            <div className='px-2 text-2'>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Laboriosam quidem voluptatibus quisquam,
                              voluptas porro laborum molestiae commodi, a sed
                              aut, excepturi eligendi? Molestiae est, dolore
                              fuga consectetur omnis aspernatur quam! Vel, sit
                              ea ipsa harum rem, quidem sint excepturi repellat
                              possimus eveniet ratione molestiae dolorem
                              accusamus aspernatur laudantium fugit, quae et
                              eius? Laudantium id sequi fuga quas quia? Dolorem,
                              ut. Tempore et iste minus accusantium reiciendis
                              numquam voluptatibus consequuntur veritatis
                              voluptates, beatae assumenda aspernatur qui eos
                              tenetur doloremque quia ipsam natus, perferendis
                              ad. Molestias earum quis laborum iusto modi qui.
                              Odit saepe, ad accusantium nemo doloremque
                              similique veritatis quas, laudantium porro
                              provident officiis nihil temporibus itaque? Eum,
                              odio est, incidunt itaque qui vel veniam
                              temporibus repellat tempora, expedita tempore
                              deserunt!
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                      <TableCell>{e.date}</TableCell>
                      <TableCell className='text-right flex justify-end'>
                        {Priority}
                      </TableCell>
                    </TableRow>
                  </>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className='grid grid-cols-12 gap-3'>
        <div className='card col-span-5 space-y-4'>
          <h2 className='text-center text-base text-bold'>Latest Notes</h2>
          {notebookData.map((e, i) => {
            return <NotebookCard key={i} {...e} />
          })}
        </div>
        <div className='card col-span-7'>
          <h2 className='font-[500] mb-2 text-black '>History</h2>
          <Table>
            <TableHeader>
              <TableRow className='dark:border-gray-500'>
                <TableHead>CHAT TITLE</TableHead>
                <TableHead>DATE</TableHead>
                <TableHead className='text-right'>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyChatHistory.map((e, i) => {
                let Priority
                switch (e.prioriy.toLowerCase()) {
                  case 'high':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#FF000033] text-[#F00]'>
                        <div className='p-1 w-fit h-fit bg-[#F00]'></div>
                        High
                      </div>
                    )
                    break
                  case 'average':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#3A7FE133] text-[#3A7FE1]'>
                        <div className='p-1 w-fit h-fit bg-[#3A7FE1]'></div>
                        Average
                      </div>
                    )
                    break
                  case 'low':
                    Priority = (
                      <div className='px-3 py-[5px] text-xs flex items-center justify-center gap-2 w-2/3 rounded-full bg-[#3BC64233] text-[#3BC642]'>
                        <div className='p-1 w-fit h-fit bg-[#3BC642]'></div>
                        Low
                      </div>
                    )
                    break

                  default:
                    break
                }
                return (
                  <TableRow key={i} className='dark:border-gray-600'>
                    <TableCell className='font-medium'>{e.name}</TableCell>
                    <TableCell>{e.date}</TableCell>
                    <TableCell className='text-right flex justify-end gap-2'>
                      {/* <button className='px-2 py-0.5 bg-[#F5F6FA] rounded-md flex gap-2 items-center text-center border-2 border-[#006aff] text-[#006aff]'>
                        <FaPencil /> Edit
                      </button> */}
                      <button className='px-2 py-0.5 bg-[#F5F6FA] dark:bg-transparent rounded-md flex gap-2 items-center text-center border-2 border-[#006aff] text-[#006aff]'>
                        <FaRegTrashAlt />
                      </button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  )
}
