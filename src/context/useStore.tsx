import { create } from 'zustand'

type Store = {
    isSelectUpload: string
    setIsSelectUpload: (isSelectUpload: string) => void
    showSelectUploadFile: boolean
    setShowSelectUploadFile: (showSelectUploadFile: boolean) => void
    selectedDocs?: File[];
    setSelectedDocs: (update: (prevSelectedDocs: File[]) => File[]) => void;
}

export const useStoreState = create<Store>()((set) => ({
 isSelectUpload: "",
 showSelectUploadFile: false,
 setShowSelectUploadFile: (showSelectUploadFile) => set({showSelectUploadFile}),
 setIsSelectUpload: (isSelectUpload) => set({isSelectUpload}),
 selectedDocs: [],
setSelectedDocs: (update) => set((state) => ({ selectedDocs: update(state.selectedDocs) })),
}))