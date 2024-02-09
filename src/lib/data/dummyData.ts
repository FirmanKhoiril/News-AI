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

  export const editorStyle = {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '2px 5px',
    borderRadius: '0px 5px',
    height: '380px',
    width: '100%',
  };

  export const qnaOrReport = ["Qna", "Report"]
  // values
export const minuteSeconds = 60
export const hourSeconds = 3600
export const daySeconds = 86400

export const optionsWeek = {
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
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
}
export const optionsMonth = {
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
      borderRadius: 8,
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

export const exampleConversation = [
  {
    role: "user",
    content: 'What is your name?',
    id: "1"
  },
  {
    role: "bot",
    content: "I'm an AI bot!",
    id: "2"
  }
]