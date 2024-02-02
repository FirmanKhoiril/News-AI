import { TDatasDocs } from '@/components/card/PreviewDocs';
import { useStoreState } from '@/context/useStore';

export default function usePersentageAndCheckmark() {
    const {selectedDocs} = useStoreState()
    const validImageTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const colorImageIcon = validImageTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorImageIconTwo =  validImageTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorImageIconThree =  validImageTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorImageIconFour =  validImageTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    const validAudioTypes = ["audio/mpeg", "audio/mp3"];
    const colorAudioIcon = validAudioTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorAudioIconTwo =  validAudioTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorAudioIconThree =  validAudioTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorAudioIconFour =  validAudioTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    const validPPTTypes =['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
    const colorPPTIcon = validPPTTypes.includes(selectedDocs[0]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]";
    const colorPPTIconTwo =  validPPTTypes.includes(selectedDocs[1]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorPPTIconThree =  validPPTTypes.includes(selectedDocs[2]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"
    const colorPPTIconFour =  validPPTTypes.includes(selectedDocs[3]?.type) ? "stroke-green-500" : "dark:stroke-white/80 stroke-[#040C34]"

    const calculateImagePercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => validImageTypes.includes(item.type)).map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentageImage = calculateImagePercentage(selectedDocs);
    const finalPercentageImage = Math.min(persentageImage[persentageImage.length - 1] >= 100 ? 100 : (persentageImage.length === 0 ? 0 : persentageImage[persentageImage.length - 1]), 100);

    const calculatePPTPercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => validPPTTypes.includes(item.type)).map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentagePPT = calculatePPTPercentage(selectedDocs);
    const finalPercentagePPT = Math.min(persentagePPT[persentagePPT.length - 1] >= 100 ? 100 : (persentagePPT.length === 0 ? 0 : persentagePPT[persentagePPT.length - 1]), 100);
    
    const calculateAudioPercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => validPPTTypes.includes(item.type)).map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentageAudio = calculateAudioPercentage(selectedDocs);
    const finalPercentageAudio = Math.min(persentageAudio[persentageAudio.length - 1] >= 100 ? 100 : (persentageAudio.length === 0 ? 0 : persentageAudio[persentageAudio.length - 1]), 100);
    
    const calculateExcelPercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => item.type === 'application/vnd.ms-excel').map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentageExcel = calculateExcelPercentage(selectedDocs);
    const finalPercentageExcel = Math.min(persentageExcel[persentageExcel.length - 1] >= 100 ? 100 : (persentageExcel.length === 0 ? 0 : persentageExcel[persentageExcel.length - 1]), 100);
    
    const calculatePDFPercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => item.type === "application/pdf").map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentagePDF = calculatePDFPercentage(selectedDocs);
    const finalPercentagePDF = Math.min(persentagePDF[persentagePDF.length - 1] >= 100 ? 100 : (persentagePDF.length === 0 ? 0 : persentagePDF[persentagePDF.length - 1]), 100);
    
    const calculateYoutubePercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => item.type === "youtubeURL").map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentageYoutube = calculateYoutubePercentage(selectedDocs);
    const finalPercentageYoutube = Math.min(persentageYoutube[persentageYoutube.length - 1] >= 100 ? 100 : (persentageYoutube.length === 0 ? 0 : persentageYoutube[persentageYoutube.length - 1]), 100);

    const calculateWebsitePercentage = (selectedDocs: any[]) => {
        return selectedDocs?.filter((item: any) => item.type === "websiteURL").map((_: TDatasDocs, idx: number) => idx * 25 + 25) || [];
    };
    
    const persentageWebsite = calculateWebsitePercentage(selectedDocs);
    const finalPercentageWebsite = Math.min(persentageWebsite[persentageWebsite.length - 1] >= 100 ? 100 : (persentageWebsite.length === 0 ? 0 : persentageWebsite[persentageWebsite.length - 1]), 100);

    return { finalPercentageAudio, finalPercentageExcel, finalPercentageImage, finalPercentagePDF, finalPercentagePPT, finalPercentageWebsite, finalPercentageYoutube, colorAudioIcon, colorAudioIconFour, colorAudioIconThree, colorAudioIconTwo, colorImageIcon, colorImageIconTwo, colorImageIconThree, colorImageIconFour, colorPPTIcon, colorPPTIconTwo, colorPPTIconThree, colorPPTIconFour }
}
