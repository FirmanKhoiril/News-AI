import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import { GoDownload } from "react-icons/go";
import { LuTrash2 } from 'react-icons/lu'
import { Margin, usePDF } from 'react-to-pdf';
import { useStoreState } from '@/context/useStore';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { toast } from 'sonner';

const MSWordEmailAI = () => {
  const {text, editorState, contentMSWord, setEditorState, setContentMSWord} = useStoreState()
    const [showMSWord, setShowMSWord] = useState(true)
    const [showOptions, setShowOptions] = useState(false)
    const [deleteMSWord, setDeleteMSWord] = useState(false)
    const buttonRef = useRef(null)

    const { toPDF, targetRef } = usePDF({
      method: "save",
      filename: "page.pdf",
      page: { margin: Margin.MEDIUM },
      canvas: {
        mimeType: "image/jpeg",
        qualityRatio: 1
      },
      overrides: {
        pdf: {
          compress: true
        },
        canvas: {
          useCORS: true,
        }
      }
    });

    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        paddingBottom: 40,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
      },
      section: {
        margin: 10,
        width: 650,
        padding: 10,
        flexGrow: 1,
      },

    });

    useEffect(() => {
      const handler = (e: any)=>{
        if(buttonRef && !buttonRef?.current.contains(e.target)){
          setShowOptions(false);
        }      
      };
      window.addEventListener('mousedown', handler);
      return () => window.removeEventListener('mousedown', handler);
    }, []);

    const handleDeleteFile = () => {
      setDeleteMSWord(true)
      setEditorState(EditorState.createEmpty())
      setContentMSWord("")
    }

    const editorContent = editorState.getCurrentContent().getPlainText()
    const textContent = text.getCurrentContent().getPlainText()

    const PDFTextViewComponent = ({children}) => {
      return (
        <Text >
        {children}
        </Text>
      )
    }

    
const RenderHTMLContent = ({ htmlContent }: { htmlContent: string }) => {
  if (!htmlContent) return null;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const textNodes = Array.from(doc.body.childNodes);

  // Render each text node
  return textNodes.map((node, index) => (
      <Text key={index}>
        {node.textContent}
      </Text>
    )
  );
};
  

  return !deleteMSWord ?  (
    <div className="flex flex-col pb-4 w-full">
        <div className="bg-[#040C34] w-full flex gap-4 justify-between text-white rounded-t-[5px] py-3 px-2">
          <div className='flex items-center ml-4 gap-6'>
            <button type='button' onClick={() => setShowMSWord((prev) => !prev)}>
              <MdClose size={25} />
            </button>
            <p className='font-semibold text-sm'>Preview</p>
          </div>
          <div ref={buttonRef} >
            <button onClick={() => setShowOptions((prev) => !prev)} type='button' className='p-0.5  hover:border-white border mr-4 border-white/40 rounded-full'>
              <HiOutlineDotsHorizontal size={18} />
            </button>
            {showOptions && (
             <div className="absolute top-[116px] gap-2 flex flex-col bg-black p-1 dark:border-white/20 rounded-md border z-20 right-[52px]">
               <button type="button" onClick={handleDeleteFile} className=" flex items-center gap-2 rounded-md hover:text-white/80 transition duration-150  bg-[#040C34] px-2 py-3">
                <LuTrash2 size={20} />
                <span>Delete File</span>
              </button>
               <button type="button" onClick={() => {
                if(contentMSWord !== "" && textContent !== "" || editorContent !== "") {
                  toPDF()
                } else {
                  toast.error("Make sure you have some content in Text Editor.")
                }
               }}  className=" flex items-center gap-2 rounded-md hover:text-white/80 transition duration-150  bg-[#040C34] px-2 py-3">
                <GoDownload size={20} />
                <span>Download File</span>
              </button>
             </div>
            )}
          </div>

        </div>
       {showMSWord && (
        <div ref={targetRef} className="text-black relative flex flex-col items- overflow-hidden w-full  h-full ">
         {contentMSWord !== "" && textContent !== "" || editorContent !== "" ? (
          <>
         <div className="absolute -z-10 flex flex-wrap gap-2 flex-col w-full h-full">
         <p className=''> {contentMSWord !== "" ? textContent : contentMSWord && textContent === "" ? editorContent : editorContent}</p>
         {/* <p className='' dangerouslySetInnerHTML={{__html: contentMSWord !== "" ? draftToHtml(convertToRaw(text.getCurrentContent())) : contentMSWord && textContent === "" ? draftToHtml(convertToRaw(editorState.getCurrentContent())) : draftToHtml(convertToRaw(editorState.getCurrentContent()))}} /> */}
         </div>
           <PDFViewer className='w-full max-h-[64dvh] min-h-[63dvh] overflow-y-auto'>
           <Document title='MS Word' author='User' subject='Document MS Word' keywords='word document'>
             <Page size="A4" style={styles.page}>
               <View style={styles.section}>
                <PDFTextViewComponent>
                {contentMSWord !== "" ? textContent : contentMSWord && textContent === "" ? editorContent : editorContent}
                </PDFTextViewComponent>
                {/* <RenderHTMLContent htmlContent={contentMSWord !== "" ? draftToHtml(convertToRaw(text.getCurrentContent())) : contentMSWord && textContent === "" ? draftToHtml(convertToRaw(editorState.getCurrentContent())) : draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */}
               </View>
             </Page>
           </Document>
         </PDFViewer>
        
          </>
         ) : ""}
        
        </div>
       )}
      </div>
  ) : ""
}

export default MSWordEmailAI