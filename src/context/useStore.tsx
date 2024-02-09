import { ContentState, EditorState } from 'draft-js';
import { create } from 'zustand'

type Store = {
    isSelectUploadAiReplace: string
    conversationFocusedById: string
    setConversationFocusedById: (conversationFocusedById: string) => void
    focusedConversation: boolean
    setFocusedConversation: (focusedConversation: boolean) => void
    editorState: EditorState
    setEditorState: (editorState: EditorState) => void
    text: EditorState
    setText: (text: EditorState) => void
    toogleSendEmailWord: boolean
    setToogleSendEmailWord: (toogleSendEmailWord: boolean) => void
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
    contentMSWord: string
    setContentMSWord: (contentMSWord: string) => void
    setWebsiteUrl: (websiteUrl: string) => void
    showAiReplace: boolean
    setShowAiReplace: (showAiReplace: boolean) => void
    isEditMode: boolean
    setIsEditMode: (isEditMode: boolean) => void
    showFeedbackModal: boolean
    setShowFeedbackModal: (showFeedbackModal: boolean) => void
    showConfirmSwitchMode: boolean
    setShowConfirmSwitchMode: (showConfirmSwitchMode: boolean) => void
    imageURL: string
    setImageURL: (imageURL: null | string) => void
    showPopupInviteOrChat: "Chat" | "Invite" | string
    setShowPopupInviteOrChat: (showPopupInviteOrChat: "Chat" | "Invite" | string) => void
}

export const useStoreState = create<Store>()((set) => ({
    showFeedbackModal: false,
    focusedConversation: false,
    setFocusedConversation: (focusedConversation) => set({focusedConversation}),
    conversationFocusedById: "",
    setConversationFocusedById: (conversationFocusedById) => set({conversationFocusedById}),
    showPopupInviteOrChat: "",
    editorState: EditorState.createEmpty(),
    setEditorState: (editorState) => set({editorState}),
    text: EditorState.createWithContent(ContentState.createFromText("I'm an AI bot!")),
    setText: (text: EditorState) => set({text}),
    setShowPopupInviteOrChat: (showPopupInviteOrChat) => set({showPopupInviteOrChat}),
    imageURL: 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250',
    setImageURL: (imageURL) => set({imageURL}),
    setToogleSendEmailWord: (toogleSendEmailWord) => set({toogleSendEmailWord}),
    toogleSendEmailWord: false,
    contentMSWord: "",
    setContentMSWord: (contentMSWord) => set({contentMSWord}),
    showConfirmSwitchMode: false,
    setShowConfirmSwitchMode: (showConfirmSwitchMode) => set({showConfirmSwitchMode}),
    setShowFeedbackModal: (showFeedbackModal) => set({showFeedbackModal}),
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