// useDarkMode.js
import { useEffect, useState } from 'react'

const useDarkMode = () => {
  // Check if the user has a dark mode preference in local storage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true'

  // Initialize state with the user's preference, or default to system preference
  const [darkMode, setDarkMode] = useState(
    savedDarkMode || window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  // Toggle dark mode and update local storage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
  }

  // Apply dark mode class to the document's root element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)

    return () => {
      document.documentElement.classList.toggle('dark', false)
    }
  }, [darkMode])

  return [darkMode, toggleDarkMode]
}

export default useDarkMode
