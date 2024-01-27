import ImageFile from '@/assets/icon/image-files.png'
import Youtube from '@/assets/icon/yt.png'
import PasteText from '@/assets/icon/paste.png'
import PDF from '@/assets/icon/pdf.png'
import PPT from '@/assets/icon/ppt.png'
import Excel from '@/assets/icon/xls.png'
import Audio from '@/assets/icon/sound.png'

export const uploadList = [
    { image: Youtube, title: 'YouTube URL', type: "url" },
    { title: 'URL', type: 'url' },
    { image: PasteText, title: 'Paste Text', type: 'text' },
    { image: ImageFile, title: 'Picture/Text', type: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'] },
    { image: PDF, title: 'PDF', type: 'application/pdf' },
    { image: PPT, title: 'PPT', type: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'] },
    { image: Excel, title: 'Excel', type: 'application/vnd.ms-excel' },
    { image: Audio, title: 'Audio', type: 'audio/mpeg' },
  ]

  export const qnaOrReport = ["Qna", "Report"]