import { RiArrowGoForwardLine } from 'react-icons/ri'
import { RiArrowGoBackLine } from 'react-icons/ri'
import PdfPreview from '@/assets/pdfPreviewContact.png'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoFlagOutline } from 'react-icons/io5'
import { FaPencil } from 'react-icons/fa6'
import { FaArrowLeft } from 'react-icons/fa6'
import { IoChatboxOutline } from 'react-icons/io5'
import { MdMenuOpen } from 'react-icons/md'
import { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

export default function Contact() {
  enum chatLabels {
    inbox = 'Inbox',
    sent = 'Sent',
    chat = 'Chat',
  }
  const chatLabelList = Object.values(chatLabels)
  const [showChatList, setShowChatList] = useState(true)
  const [currentChatList, setCurrentChatList] = useState(chatLabels.inbox)

  return (
    <main className='p-5 mt-5 h-full'>
      <div className='card space-y-5'>
        <div className='flex justify-between'>
          <div className='max-w-sm w-full flex h-full  dark:bg-gray-900 max-h-screen py-2.5 px-3 shadow dark:border-gray-700 border items-center gap-3 rounded-md bg-white text-sm'>
            <IoMdSearch className='w-5 h-auto text-gray-700' />
            <input
              type='text'
              className='outline-none w-full dark:bg-gray-900 bg-transparent'
              placeholder='What do you want to find?'
            />
          </div>
        </div>
        <div className='border shadow dark:border-gray-700 rounded-xl flex w-full'>
          <div
            className={`border-e shadow dark:border-gray-700 p-2 space-y-3 ${
              showChatList ? 'w-3/12' : 'w-auto'
            }`}
          >
            <div className='flex justify-end'>
              <button>
                {showChatList ? (
                  <MdMenuOpen
                    className='w-6 h-auto rounded-full text-2 border shadow dark:border-gray-700'
                    onClick={() => setShowChatList((prev) => !prev)}
                  />
                ) : (
                  <IoChatboxOutline
                  className='w-6 h-auto rounded-full text-2'
                  onClick={() => setShowChatList((prev) => !prev)}
                />
                )}
              </button>
            </div>
            {showChatList && (
              <>
                <div className='flex justify-center'>
                  <div className='flex items-center w-fit px-3 py-1 rounded-3xl gap-3 text-center text-sm dark:bg-black dark:text-white dark:border dark:border-gray-800 bg-[#0000001A] text-black'>
                    {chatLabelList.map((e, i) => (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded-3xl ${
                          currentChatList === e
                            ? 'bg-white dark:bg-gray-300 text-black'
                            : ''
                        }`}
                        role='button'
                        onClick={() => setCurrentChatList(e)}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='space-y-3' key={currentChatList}>
                  <ScrollArea className=' max-h-[84vh] h-full overflow-y-auto'>
                    {[...Array(10)].map((e, i) => (
                      <div
                        className='flex gap-3 pb-4 border-b shadow dark:border-gray-800 mb-3'
                        key={i}
                      >
                        <div className='w-[30px]'>
                          <img
                            src={`https://i.pravatar.cc/150?${i}`}
                            className='rounded-full'
                            width={50}
                            height={30}
                          />
                        </div>
                        <div className='space-y-1'>
                          <p className='font-medium text-sm'>Ronald Richards</p>
                          <p className='text-[10px] text-2 font-bold'>
                            Request Material Delivery
                          </p>
                          <p className='text-2 text-[10px] truncate'>
                            Dear Dimitri Dan, I Hope this message find you well.
                          </p>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </>
            )}
          </div>
          <div
            className={`col-span-9 p-2 ${
              showChatList ? 'w-full' : ''
            } space-y-6`}
          >
            <div className='flex gap-7 pl-4 text-gray-700 dark:text-gray-200 border-b shadow dark:border-gray-600 pt-2 pb-5'>
              <FaArrowLeft />
              <FaPencil />
              <IoFlagOutline />
              <FaRegTrashAlt />
            </div>
            <div className='flex justify-between gap-3'>
              <div className='flex gap-2'>
                <img
                  src='https://i.pravatar.cc/150?0'
                  className='w-10 h-auto rounded-full'
                />
                <div>
                  <p className='text-black dark:text-gray-300 font-medium flex items-center gap-2'>
                    Ronald Richards -{' '}
                    <span className='text-[12px] font-light'>
                      ronaldrichards@gmail.com
                    </span>{' '}
                  </p>
                  <p className='text-2 text-xs'>to dimithri Admin</p>
                </div>
              </div>
              <div>
                <p className='text-2 text-xs'>October 23, 2023 - 10:00 AM</p>
              </div>
            </div>
            <div className='space-y-5 justify-between  flex flex-col
            '>
              {chatLabels.chat !== currentChatList && (
                <>
                  <div className='space-y-2'>
                    <p className='text-sm font-medium'>
                      Request Materiel Delivery
                    </p>
                    <p className='text-2 text-sm'>
                      Dear Dimithri Dan, <br />
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit quod suscipit nobis aliquid possimus modi obcaecati
                      non similique, facilis alias, fuga deserunt, illo facere!
                      Earum illum quod ipsa magnam maiores! Placeat repellendus
                      aspernatur omnis, id fugit asperiores, debitis aperiam
                      repellat voluptates nam nemo natus aliquam laudantium
                      soluta voluptas illo laboriosam numquam nostrum veniam?
                      Sapiente ex, quo optio ut corporis ab? Exercitationem
                      mollitia similique quaerat quasi libero soluta ex ipsam id
                      blanditiis, doloremque, suscipit, pariatur nulla harum
                      optio omnis nisi dolorem! Est quis neque molestias placeat
                      voluptatibus sunt rem mollitia ex! Molestiae a, minima
                      temporibus neque voluptatem sequi quos eveniet explicabo
                      numquam modi doloribus perferendis vero, impedit dolores
                      odit nam obcaecati quibusdam commodi repellat dicta quod,
                      recusandae vitae asperiores nemo. Illo! Totam expedita hic
                      qui dicta tempore facere, ab quisquam sunt amet fugiat
                      quibusdam ad ipsum inventore consequuntur iste ullam
                      minima non temporibus quaerat odit rerum cum dolor minus!
                      Voluptas, incidunt! Neque, quasi nobis odio fugiat
                      consequatur illo officia quis necessitatibus tempora,
                      laborum magnam fugit omnis fuga sapiente dolor natus
                      nostrum sequi sint temporibus laboriosam dolorem incidunt
                      molestiae quidem aspernatur. Impedit?
                    </p>
                  </div>
                  <div className='border-t shadow dark:border-gray-700 space-y-5 p-2'>
                    <p className='text-sm font-semibold text-black dark:text-gray-200'>
                      Attachments
                    </p>
                    <div className='flex gap-3 rounded-xl overflow-hidden w-fit'>
                      <div className='border shadow dark:border-gray-700 w-full h-auto'>
                        <img src={PdfPreview} alt='' />
                        <p className='text-center text-xs font-semibold py-2'>
                          Doc1.pdf
                        </p>
                      </div>
                      <div className='border shadow dark:border-gray-700 w-full h-auto'>
                        <img src={PdfPreview} alt='' />
                        <p className='text-center text-xs font-semibold py-2'>
                          Doc2.pdf
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {chatLabels.chat === currentChatList && (
                  <div className='flex flex-col gap-y-5 px-5 max-h-[68vh] h-full overflow-y-auto'>
                    <div className='self-end max-w-sm w-full text-black dark:text-gray-400 text-sm rounded-2xl border shadow dark:border-gray-600 p-3'>
                      <div className='flex justify-end'>
                        <p className='text-xs text-2 mb-3'>
                          Oct 12, 2023 10:00 AM
                        </p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ut vero ad quasi accusantium corporis cumque
                      praesentium fuga omnis aliquam odio similique inventore
                      nemo, eum, nobis quas, laboriosam magni quia!
                    </div>
                    <div className='self-start max-w-sm w-full text-black dark:text-gray-400 text-sm rounded-2xl border shadow dark:border-gray-600 p-3'>
                      <div className='flex justify-end'>
                        <p className='text-xs text-2 mb-3'>
                          Oct 12, 2023 10:00 AM
                        </p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ut vero ad quasi accusantium corporis cumque
                      praesentium fuga omnis aliquam odio similique inventore
                      nemo, eum, nobis quas, laboriosam magni quia!
                    </div>
                    <div className='self-end max-w-sm w-full text-black dark:text-gray-400 text-sm rounded-2xl border shadow dark:border-gray-600 p-3'>
                      <div className='flex justify-end'>
                        <p className='text-xs text-2 mb-3'>
                          Oct 12, 2023 10:00 AM
                        </p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ut vero ad quasi accusantium corporis cumque
                      praesentium fuga omnis aliquam odio similique inventore
                      nemo, eum, nobis quas, laboriosam magni quia!
                    </div>
                    <div className='self-start max-w-sm w-full text-black dark:text-gray-400 text-sm rounded-2xl border shadow dark:border-gray-600 p-3'>
                      <div className='flex justify-end'>
                        <p className='text-xs text-2 mb-3'>
                          Oct 12, 2023 10:00 AM
                        </p>
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ut vero ad quasi accusantium corporis cumque
                      praesentium fuga omnis aliquam odio similique inventore
                      nemo, eum, nobis quas, laboriosam magni quia!
                    </div>
                  </div>
              )}
              <div className='border-t shadow dark:border-gray-700 space-y-2  px-2 py-4'>
                <div className='flex gap-2'>
                  <Button variant='outline' className='gap-2'>
                    <RiArrowGoBackLine />
                    Reply
                  </Button>
                  <Button variant='outline' className='gap-2'>
                    <RiArrowGoForwardLine />
                    Forward
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
