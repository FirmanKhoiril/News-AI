import pdfImage from '@/assets/pdf-2.png'
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import { Viewer, Worker } from '@react-pdf-viewer/core'

type FileData = {
    name: string;
    lastModified: number;
    size: number;
    type: string;
    webkitRelativePath: string;
};

type TDatasDocs = {
    datas: MediaSource | Blob | FileData[] | any;
};

const PreviewDocs = ({datas}: TDatasDocs) => {
  return (
    <div className="w-full border h-full flex items-center flex-col border-black/10">
    {datas ? 
    <div className='max-h-[180px] h-full w-full'>
    {datas.type === "application/pdf" ? (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme={"dark"} fileUrl={window.URL.createObjectURL(datas)} />
        </Worker>
      ) : datas.type.startsWith("image/") ? (
        <div className="max-h-[180px] rounded-t-md overflow-hidden">
          <img className="object-cover" src={window.URL.createObjectURL(datas)} alt={datas.name} />
        </div>
      ) : (
        <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: window.URL.createObjectURL(datas) }]} />
      )}
    </div>  : 
     <img src={pdfImage} alt="PDF Example" width={200} />}
      <div className="bg-white border border-transparent dark:border-white/50 dark:bg-black dark:text-white text-[10px] w-full text-black text-center py-2 rounded-b-[5px] shadow-[0px_4px_4px_0px] shadow-black/30 ">
        <p>{datas ? `${datas.name.slice(0, 20)}` : "Document01.pdf"}</p>
      </div>
    </div>
  )
}

export default PreviewDocs