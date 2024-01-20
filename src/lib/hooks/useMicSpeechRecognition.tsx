import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useMicSpeechRecognition = () => {
    const {transcript, listening, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();

    
  const handleMic = () => {
    if(listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      })
    }
   
  }
  return {transcript, resetTranscript, browserSupportsSpeechRecognition, listening, handleMic }
}

