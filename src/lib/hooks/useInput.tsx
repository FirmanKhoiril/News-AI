import { useState, ChangeEvent } from 'react'
import { useToast } from '@/components/ui/use-toast'

type InputValues = { [key: string]: string }

interface UseInputChange {
  inputValues: InputValues
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  resetInputValues: () => void
  handleCustomChange: (values: InputValues) => void
  preventPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
}

const useInputChange = (): UseInputChange => {
  const [inputValues, setInputValues] = useState<InputValues>({})
  const { toast } = useToast()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleCustomChange = (e: InputValues) => {
    setInputValues((prev) => ({
      ...prev,
      ...e,
    }))
  }

  const resetInputValues = () => {
    setInputValues({})
  }

  const preventPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    toast({
      variant: 'orangeLight',
      title: 'Oops! 🙅‍♂️ Pasting not allowed here!',
      description:
        'Content not allowed for pasting. Please enter it manually or paste elsewhere.',
    })
  }

  return {
    inputValues,
    handleInputChange,
    handleCustomChange,
    resetInputValues,
    preventPaste,
  }
}

export default useInputChange
