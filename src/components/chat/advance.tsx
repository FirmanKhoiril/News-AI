import { useRef, useEffect, useState } from 'react'
import ChatLayout from '@/layout/ChatLayout'
import Chatbox from './subcomp/chatbox'
import Selector from './subcomp/selector'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
export default function Advance() {
  const chatAreaRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }

  useEffect(() => {
    handleScrollToBottom()
  }, [])

  const [chapter, setChapter] = useState<string>('')
  const [, setTopic] = useState<string>('')
  const [subChapter, setSubChapter] = useState<string>('')
  const [hasSubChapter] = useState<boolean>(true)

  const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter)

  const subChapters = (propChapterName: string) => {
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics

    const subschap = topic?.map((e) => e.chapter) || []
    console.log(subschap)
    return subschap
  }

  // const topics = (chapterName: string) =>
  //   CFA_LAVEL_ONE.chapters.find((e) => e.chapter === chapterName)?.topics

  const subChaptersTopic = (
    propChapterName: string,
    propSubChapterName: string
  ) => {
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics
    const subschap =
      topic?.find((e) => e.chapter === propSubChapterName)?.topics || []
    return subschap
  }

  return (
    <ChatLayout chatType='advance'>
      <div className='px-3 py-1 border-b dark:border-gray-800 shadow-sm grid grid-cols-3 gap-5'>
        <Selector
          title='Topic'
          options={chapters}
          onValueChange={(e) => setChapter(e)}
        />
        {hasSubChapter && chapter && (
          <Selector
            title='Chapter'
            options={subChapters(chapter)}
            onValueChange={(e) => setSubChapter(e)}
          />
        )}
        {chapter && subChapter && (
          <Selector
            title='Sub-Chapter'
            options={subChaptersTopic(chapter, subChapter)}
            onValueChange={(e) => setTopic(e)}
          />
        )}
      </div>
      <div ref={chatAreaRef} className='flex-grow overflow-auto'>
        <div className='flex-grow overflow-y-auto p-4 flex flex-col justify-end gap-5'>
          <Chatbox>
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
