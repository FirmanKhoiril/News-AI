import { create } from 'zustand'

type Store = {
    isSelectUpload: string
    setIsSelectUpload: (isSelectUpload: string) => void
    showSelectUploadFile: boolean
    setShowSelectUploadFile: (showSelectUploadFile: boolean) => void
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
}

export const useStoreState = create<Store>()((set) => ({
 isSelectUpload: "",
 showSelectUploadFile: false,
 pasteTextContent: "",
 setShowCustomizedPreviewFileUpload: (showCustomizedPreviewFileUpload) => set({showCustomizedPreviewFileUpload}),
 showCustomizedPreviewFileUpload: false,
 setPasteTextContent: (pasteTextContent) => set({pasteTextContent}),
 setIsStandart: (isStandart) => set({isStandart}),
 isStandart: "standart",
 setShowSelectUploadFile: (showSelectUploadFile) => set({showSelectUploadFile}),
 setIsSelectUpload: (isSelectUpload) => set({isSelectUpload}),
 selectedDocs: [],
setSelectedDocs: (update) => set((state) => ({ selectedDocs: update(state.selectedDocs) })),
youtubeUrl: "",
setYoutubeUrl: (youtubeUrl) => set({youtubeUrl}),
websiteUrl: "",
setWebsiteUrl: (url) => set({ websiteUrl: url})
}))