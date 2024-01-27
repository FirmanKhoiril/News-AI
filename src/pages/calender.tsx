import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CalendarIllustration from '@/assets/calendar.png'
import { CgTimelapse } from 'react-icons/cg'
import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Chart from 'react-apexcharts'
import { daySeconds, hourSeconds, minuteSeconds, optionsMonth, optionsWeek } from '@/lib/data/dummyData'

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = (time: number) => (time / daySeconds) | 0

const renderTime = (dimension: string, time: number) => {
  return (
    <div className='time-wrapper text-center font-semibold text-2'>
      <p className='time text-sm'>{time}</p>
      <p className='text-sm'>{dimension}</p>
    </div>
  )
}

export default function CalenderPage() {
  const stratTime = Date.now() / 1000 // use UNIX timestamp in seconds
  const endTime = stratTime + 243248 // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime
  const days = Math.ceil(remainingTime / daySeconds)
  const daysDuration = days * daySeconds

  const [calendarState, setCalendarState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'compare',
    },
  })

  const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 8,
  }
  return (
    <div className='py-3 max-w-screen-2xl w-full space-y-5 px-3' id='dashboard'>
      <section className='grid gap-2 grid-cols-12 mt-4'>
        <div className='card col-span-6'>
          <h2 className='font-[500] mb-2 text-gray-900 dark:text-gray-200'>
            Remaining Days
          </h2>
          <div className='flex gap-2 flex-wrap justify-around'>
            <CountdownCircleTimer
              {...timerProps}
              colors='#3BC642'
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime('days', getTimeDays(daysDuration - elapsedTime))}
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
                  {renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors='#0E71FF'
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
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
        <div className='card space-y-3 col-span-5'>
          <div className='bg-[#3A7FE133]  rounded-lg w-fit h-fit p-2 flex-grow-0 flex-shrink-0'>
            <CgTimelapse className='text-[#3A7FE1] w-10 h-auto' />
          </div>
          <div>
            <p className='text-sm font-semibold text-2'>Hours</p>
            <p className='text-2xl font-medium text-gray-900 dark:text-gray-200'>
              12 Hours
            </p>
            <p className='text-xs text-[#3BC642]'>
              You spent 12 hours using the FGW
            </p>
          </div>
        </div>
      </section>
      <section className='grid gap-2 grid-cols-12'>
        <div className='card col-span-6'>
          <Chart
            options={optionsMonth as never}
            series={optionsMonth.series}
            type='bar'
            className='w-full'
            height={260}
          />
        </div>
        <div className='card col-span-5'>
          <Chart
            options={optionsWeek as never}
            series={optionsWeek.series}
            type='area'
            className='w-full'
            height={260}
          />
        </div>
      </section>
      <section className='grid gap-2 grid-cols-12'>
        <div className='card col-span-7 flex flex-col justify-center'>
          <article className='space-y-3'>
            <h2 className='text-xl font-medium text-gray-900 dark:text-gray-200'>
              Do you want to change your exam deadline?
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <button className='btn-primary'>Change target Date</button>
              </DialogTrigger>
              <DialogContent className='max-w-[98vw] md:max-w-[50vw] h-[90vh] '>
                <DialogHeader>
                  <DialogTitle>Change target Date</DialogTitle>
                </DialogHeader>
                <DateRangePicker
                  onChange={(item) =>
                    setCalendarState({ ...calendarState, ...item })
                  }
                  months={1}
                  minDate={addDays(new Date(), -300)}
                  maxDate={addDays(new Date(), 900)}
                  direction='vertical'
                  scroll={{ enabled: true }}
                  ranges={[calendarState.selection, calendarState.compare]}
                />
                <DialogFooter>
                  <div>
                    <button className='btn-primary'>Validate</button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </article>
        </div>
        <div className='card col-span-4 flex justify-center items-center'>
          <img
            src={CalendarIllustration}
            className='w-28 h-auto'
            alt='illustration'
          />
        </div>
      </section>
    </div>
  )
}
