import { useRef, useEffect, useState } from 'react'
import ChatLayout from '@/layout/ChatLayout'
import Chatbox from './subcomp/chatbox'
import SwipeChatBox from './subcomp/swipeChatBox'
import Selector from './subcomp/selector'
import { CAIA_LAVEL_ONE } from '@/lib/data/exams'
import { Button } from '../ui/button'

enum tabEnum {
  chat,
  qna,
  flashCard,
}

export default function Pro() {
  const chatAreaRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight
    }
  }

  const [chapter, setChapter] = useState<string>('')
  const [, setTopic] = useState<string>('')
  const [subChapter, setSubChapter] = useState<string>('')
  const [hasSubChapter] = useState<boolean>(true)
  const [currentTab, setCurrentTab] = useState(tabEnum.chat)

  useEffect(() => {
    handleScrollToBottom()
  }, [currentTab])

  const chapters = CAIA_LAVEL_ONE.chapters.map((data) => data.chapter)

  const subChapters = (propChapterName: string) => {
    const topic = CAIA_LAVEL_ONE.chapters.find(
      (e) => e.chapter === propChapterName
    )?.topics

    const subschap = topic?.map((e) => e.chapter) || []
    console.log(subschap)
    return subschap
  }

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

  const difficulty = ['Easy', 'Medium', 'Hard', 'Balanced']
  const typeOfQuestions = [
    'Multiple 3 choice questions',
    'Multiple 4 choice questions',
    'Open questions',
    'Case study with Multiple 3 choice questions',
    'Case study with Multiple 4 choice questions',
    'Case study with open questions',
  ]

  const calculatorModel = [
    'Hewlett Packard 12C',
    'Texas Instruments BA II Plus',
  ]

  const isChat = tabEnum.chat === currentTab
  const isQna = tabEnum.qna === currentTab
  const isFlashcard = tabEnum.flashCard === currentTab

  return (
    <ChatLayout chatType='pro'>
      <div className='px-3 py-1 border-b dark:border-gray-800 shadow-sm space-y-3'>
        <div className='grid grid-cols-3 gap-2'>
          <Button
            onClick={() => setCurrentTab(tabEnum.chat)}
            className={`${
              isChat
                ? 'bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600'
                : ''
            }`}
            variant={'secondary'}
          >
            Chat
          </Button>
          <Button
            onClick={() => setCurrentTab(tabEnum.qna)}
            className={`${
              isQna
                ? 'bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600'
                : ''
            }`}
            variant={'secondary'}
          >
            Questions/Answers
          </Button>
          <Button
            onClick={() => setCurrentTab(tabEnum.flashCard)}
            className={`${
              isFlashcard
                ? 'bg-light-extra-purple dark:bg-gray-800 hover:bg-light-purple border border-purple-500 dark:border-gray-600'
                : ''
            }`}
            variant={'secondary'}
          >
            FlashCards
          </Button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
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
          {isQna && (
            <Selector
              title='Type of Questions'
              options={typeOfQuestions}
              onValueChange={(e) => e}
            />
          )}
          {isQna && (
            <Selector
              title='Mathematics'
              options={Array(11)
                .fill('_')
                .map((_, i) => i !== 0 && i * 10 + '%')}
              onValueChange={(e) => e}
            />
          )}
          {(isFlashcard || isQna) && (
            <Selector
              title='Difficulty'
              options={difficulty}
              onValueChange={(e) => e}
            />
          )}

          {isQna && (
            <Selector
              title='Number of Questions'
              options={Array(7)
                .fill('_')
                .map((_, i) => (i + 1).toString())}
              onValueChange={(e) => e}
            />
          )}
          {isQna && (
            <Selector
              title='Calculator'
              options={calculatorModel}
              onValueChange={(e) => e}
            />
          )}
          {isFlashcard && (
            <Selector
              title='Generation of flashcards'
              options={
                Array(10)
                  .fill('_')
                  .map((e, i) => i + 1) as never
              }
              onValueChange={(e) => e}
            />
          )}
        </div>
      </div>
      <div ref={chatAreaRef} className='flex-grow overflow-auto'>
        {isChat && (
          <div className='overflow-y-auto p-4 flex flex-col justify-end gap-5'>
            <Chatbox>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              nulla aliquid facilis labore voluptatem corrupti ratione iste.
              Perspiciatis dolorum incidunt inventore, voluptas architecto
              illum, non consequatur, iste suscipit rem excepturi.
            </Chatbox>
            <Chatbox ans>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              nulla aliquid facilis labore voluptatem corrupti ratione iste.
              Perspiciatis dolorum incidunt inventore, voluptas architecto
              illum, non consequatur, iste suscipit rem excepturi.
            </Chatbox>
            <Chatbox ans>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              nulla aliquid facilis labore voluptatem corrupti ratione iste.
              Perspiciatis dolorum incidunt inventore, voluptas architecto
              illum, non consequatur, iste suscipit rem excepturi.
            </Chatbox>
            <Chatbox>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              nulla aliquid facilis labore voluptatem corrupti ratione iste.
              Perspiciatis dolorum incidunt inventore, voluptas architecto
              illum, non consequatur, iste suscipit rem excepturi.
            </Chatbox>
          </div>
        )}
        {isQna && (
          <>
            <div className='overflow-y-auto p-4 flex flex-col justify-end gap-5'>
              <div className='inline-flex gap-2 self-end'>
                <Button className='bg-green-500/60 text-black'>Genarate</Button>
                <Button variant={'destructive'} className='border-purple-400'>
                  Answer
                </Button>
              </div>
              <Chatbox qna ans>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                nulla aliquid facilis labore voluptatem corrupti ratione iste.
                Perspiciatis dolorum incidunt inventore, voluptas architecto
                illum, non consequatur, iste suscipit rem excepturi.
              </Chatbox>
            </div>
          </>
        )}
        {isFlashcard && (
          <div className='overflow-y-auto p-4 flex flex-col justify-end gap-5'>
            <div className='inline-flex gap-2 self-end'>
              <Button className='bg-green-500/60 text-black'>Genarate</Button>
            </div>
            <SwipeChatBox ans />
          </div>
        )}
      </div>
    </ChatLayout>
  )
}
