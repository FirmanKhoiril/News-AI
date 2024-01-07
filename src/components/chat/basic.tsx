import { useRef, useEffect } from 'react'
import ChatLayout from '@/layout/ChatLayout'
import Chatbox from './subcomp/chatbox'

export default function Basic() {
  const chatAreaRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }

  useEffect(() => {
    handleScrollToBottom()
  }, [])

  return (
    <ChatLayout chatType='basic'>
      <div ref={chatAreaRef} className='flex-grow overflow-auto'>
        <div className='flex-grow overflow-y-auto p-4 flex flex-col justify-end gap-5'>
          <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox ans>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
          <Chatbox>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla
            aliquid facilis labore voluptatem corrupti ratione iste.
            Perspiciatis dolorum incidunt inventore, voluptas architecto illum,
            non consequatur, iste suscipit rem excepturi.
          </Chatbox>
        </div>
      </div>
    </ChatLayout>
  )
}
