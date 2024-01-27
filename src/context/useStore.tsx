import { create } from 'zustand'

type Store = {
    isSelectUploadAiReplace: string
    setIsSelectUploadAiReplace: (isSelectUploadAiReplace: string) => void
    isSelectUpload: string
    setIsSelectUpload: (isSelectUpload: string) => void
    showSelectUploadFile: boolean
    setShowSelectUploadFile: (showSelectUploadFile: boolean) => void
    showEditUploadFile: boolean
    setShowEditUploadFile: (showEditUploadFile: boolean) => void
    showSelectUploadFileAiReplace: boolean
    setShowSelectUploadFileAiReplace: (showSelectUploadFile: boolean) => void
    selectedDocs?: File[];
    isStandart: "customized" | "standart"
    setIsStandart: (isStandart: "customized" | "standart") => void
    setSelectedDocs: (update: (prevSelectedDocs: File[]) => File[]) => void;
    pasteTextContent: string,
    setPasteTextContent: (pasteTextContent: string) => void
    showCustomizedPreviewFileUpload: boolean,
    youtubeUrl: string,
    setYoutubeUrl: (youtubeUrl: string) => void
    setShowCustomizedPreviewFileUpload: (showCustomizedPreviewFileUpload: boolean) => void
    websiteUrl: string
    setWebsiteUrl: (websiteUrl: string) => void
    showAiReplace: boolean
    setShowAiReplace: (showAiReplace: boolean) => void
    isEditMode: boolean
    setIsEditMode: (isEditMode: boolean) => void
}

export const useStoreState = create<Store>()((set) => ({
 isSelectUpload: "",
 isEditMode: false,
 setIsEditMode: (isEditMode) => set({isEditMode}),
 isSelectUploadAiReplace: "",
 setIsSelectUploadAiReplace: (isSelectUploadAiReplace) => set({isSelectUploadAiReplace}),
 showAiReplace: false,
 setShowAiReplace: (showAiReplace) => set({showAiReplace}),
 showSelectUploadFile: false,
 setShowSelectUploadFile: (showSelectUploadFile) => set({showSelectUploadFile}),
 showEditUploadFile: false,
 setShowEditUploadFile: (showEditUploadFile) => set({showEditUploadFile}),
 showSelectUploadFileAiReplace: false,
 setShowSelectUploadFileAiReplace: (showSelectUploadFileAiReplace) => set({showSelectUploadFileAiReplace}),
 pasteTextContent: "",
 setShowCustomizedPreviewFileUpload: (showCustomizedPreviewFileUpload) => set({showCustomizedPreviewFileUpload}),
 showCustomizedPreviewFileUpload: false,
 setPasteTextContent: (pasteTextContent) => set({pasteTextContent}),
 setIsStandart: (isStandart) => set({isStandart}),
 isStandart: "standart",
 setIsSelectUpload: (isSelectUpload) => set({isSelectUpload}),
 selectedDocs: [],
setSelectedDocs: (update) => set((state) => ({ selectedDocs: update(state.selectedDocs) })),
youtubeUrl: "",
setYoutubeUrl: (youtubeUrl) => set({youtubeUrl}),
websiteUrl: "",
setWebsiteUrl: (url) => set({ websiteUrl: url})
}))