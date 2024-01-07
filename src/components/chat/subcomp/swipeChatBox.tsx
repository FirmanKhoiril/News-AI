import { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { AiOutlineStar } from 'react-icons/ai'
import Hammer from 'hammerjs'
import { PiHandSwipeRightBold, PiHandSwipeLeftBold } from 'react-icons/pi'
import gsap from 'gsap'
function enforceRange(num: number, minRange: number, maxRange: number): number {
  if (num === -1) {
    return maxRange
  } else if (num >= minRange && num <= maxRange) {
    return num
  } else if (num < minRange) {
    return minRange
  } else {
    return maxRange
  }
}

const dataS = [
  '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla aliquid facilis labore voluptatem corrupti ratione iste. Perspiciatis dolorum incidunt inventore, voluptas architecto illum, non consequatur, iste suscipit rem excepturi.',
  '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla aliquid facilis labore voluptatem corrupti ratione iste. Perspiciatis dolorum incidunt inventore, voluptas architecto illum, non consequatur, iste suscipit rem excepturi.',
]

export default function Chatbox({
  ans = false,
  qna = false,
  data = [...dataS],
}: {
  ans?: boolean
  qna?: boolean
  data?: string[]
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const hammerRef = useRef<HTMLElement | null>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])

  function onSwipeLeft() {
    setCurrentSlide((prev) => enforceRange(prev + 1, 0, data.length - 1))
  }
  function onSwipeRight() {
    setCurrentSlide((prev) => enforceRange(prev - 1, 0, data.length - 1))
  }
  useEffect(() => {
    const tl = gsap.timeline()

    const currentSlideElem = slidesRef.current[currentSlide]

    tl.to(currentSlideElem, {
      duration: 0.6,
      rotationY: -90,
      opacity: 0,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(currentSlideElem, { opacity: 1, rotationY: 90 })
        setCurrentSlide(currentSlide)
        tl.to(currentSlideElem, {
          duration: 0.6,
          rotationY: 0,
          ease: 'power2.inOut',
        })
      },
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide])
  useEffect(() => {
    if (hammerRef.current) {
      const mc = new Hammer(hammerRef.current)
      mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })

      mc.on('swipeleft', onSwipeLeft)
      mc.on('swiperight', onSwipeRight)
      mc.on('tap', (e) => {
        if (e.center.x < window.innerWidth / 2) {
          onSwipeRight()
        } else {
          onSwipeLeft()
        }
      })
      return () => {
        mc.destroy()
      }
    }
  }, [])

  const canGoRight = currentSlide < data.length
  const canGoLeft = currentSlide > 0
  return (
    <div
      className={`rounded-md px-2 py-3 w-fit text-sm max-w-xs cursor-grab ${
        ans ? 'self-start' : 'self-end'
      }
      ${
        ans ? 'bg-[#3A7FE180] text-black dark:text-gray-300' : 'bg-light-purple'
      }
      `}
      ref={hammerRef as never}
    >
      {data.map((dataItem, index) => {
        if (index !== currentSlide) {
          return null
        }
        return (
          <div
            className='flex gap-3'
            key={index}
            ref={(el) => {
              if (el) {
                slidesRef.current[index] = el
              }
            }}
          >
            <div className='flex flex-col'>
              {ans && (
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  className='w-fit h-fit p-1 rounded-sm text-green-700 hover:text-green-500'
                >
                  <AiOutlineStar />
                </Button>
              )}

              {qna && (
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  className='w-fit h-fit p-1 rounded-sm text-green-700 hover:text-green-500'
                >
                  <Plus className='w-4 h-4' />
                </Button>
              )}
            </div>
            <div className='flex-1'>
              <p>{dataItem}</p>
              <div className='flex justify-between items-center mt-3'>
                <div className='flex gap-2'>
                  {Array(data.length)
                    .fill('_')
                    .map((_, i) => {
                      const isCurrent = i === currentSlide
                      return (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isCurrent ? 'bg-primary' : 'bg-primary/40'
                          }`}
                        />
                      )
                    })}
                </div>
                <div className='flex'>
                  {canGoRight && <PiHandSwipeLeftBold className='w-5 h-5' />}
                  {canGoLeft && <PiHandSwipeRightBold className='w-5 h-5' />}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
